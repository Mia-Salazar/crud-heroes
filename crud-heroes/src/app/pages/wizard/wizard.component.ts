import { Component, OnInit } from '@angular/core';
import { WizardModel } from '../../models/wizard.models';
import { NgForm } from '@angular/forms';
import { WizardService } from '../../services/wizard.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  wizard:WizardModel = new WizardModel();
  loading:boolean = false
  status:string = ''

  constructor(private wizardService:WizardService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')

    if (id !=  'new') {
      this.wizardService.getWizard(id).subscribe(
        (resp:any) => {
          this.wizard = resp
          this.wizard.id = id
        }
      )
    }
  }

  changeWizard(form:NgForm) {
    this.loading = true
    console.log(form)
    console.log(this.wizard)

    if(form.invalid) {
      alert('Form not valid')
    }
    if (this.wizard.id) {
      this.loading = false
      this.status = "Wizard updated correctly"
      this.wizardService.updateWizard(this.wizard).subscribe(
        r => {console.log(r)
        })
      
    } else  {
      this.loading = false
      this.status = "Wizard created"
      this.wizardService.postWizard(this.wizard).subscribe(
        r => {console.log(r)
        })
    }
  }
}
