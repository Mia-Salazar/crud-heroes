import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../services/wizard.service'
import { WizardModel } from '../../models/wizard.models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  wizardList:WizardModel[] = []
  loading = false
  erased = false

  constructor(private wizardService:WizardService ) {
    this.getList()
   }

  ngOnInit(): void {
  }

  getList(){
    this.loading = true
    this.wizardService.getWizardList()
      .subscribe((res:any) => {
        this.wizardList = res
        console.log(res)
        this.loading = false

      })
  }

  eraseWizard(wizard, i:number) {
    this.wizardList.splice(i, 1)
    this.wizardService.eraseWizard(wizard.id).subscribe()
  }
}
