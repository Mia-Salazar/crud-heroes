import { Component, OnInit } from '@angular/core';
import { WizardModel } from '../../models/wizard.models';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  wizard:WizardModel = new WizardModel();

  constructor() { }

  ngOnInit(): void {
  }

  changeWizard(form:NgForm) {
    console.log(form)
    console.log(this.wizard)

    if(form.invalid) {
      alert('Form not valid')
    }

  }

}
