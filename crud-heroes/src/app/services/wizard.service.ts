import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { WizardModel } from '../models/wizard.models'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  public url= "https://cruz-wizard-2.firebaseio.com"

  constructor(private http:HttpClient) { }

  postWizard(wizard:WizardModel){
    return this.http.post(`${this.url}/wizard.json`, wizard).pipe(
      map( (res:any) =>{
        wizard.id = res.name
        return wizard
      })
    )
  }

  updateWizard(wizard:WizardModel){
    //We erase the id in the update, because the ID is already there, as the parent of the object, and it will create another one
    const wizardWithoutId = {
      ...wizard
    }
    delete wizardWithoutId.id
    return this.http.put(`${this.url}/wizard/${wizard.id}.json`, wizardWithoutId)
  }

  getWizardList(){
    return this.http.get(`${this.url}/wizard.json`).pipe(
      map( this.createArray)
    )
  }

  private createArray(list: object){
    const wizards: WizardModel[] = [] 

    if (list == null) {
      return []
    }

    Object.keys(list).forEach(key => {
      const wizard:WizardModel = list[key]
      wizard.id = key
      wizards.push(wizard)
    })

    return wizards
  }

  getWizard(id:string) {
    return this.http.get(`${this.url}/wizard/${id}.json`)
  }

  eraseWizard(id:string) {
    return this.http.delete(`${this.url}/wizard/${id}.json`)
  }
}
