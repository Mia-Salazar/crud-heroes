import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './pages/wizard/wizard.component'
import { ListComponent } from './pages/list/list.component'

const routes: Routes = [
  {path: 'wizard/:id', component: WizardComponent},
  {path: 'list', component: ListComponent},
  {path: 'routePath', component: ListComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
