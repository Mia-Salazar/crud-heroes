import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './pages/wizard/wizard.component'
import { ListComponent } from './pages/list/list.component'

const routes: Routes = [
  {path: 'list/:id', component: WizardComponent},
  {path: 'list', component: ListComponent},
  {path: 'routePath', component: ListComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
