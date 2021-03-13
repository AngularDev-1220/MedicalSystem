import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapTableComponent } from './components/bootstrap-table/bootstrap-table.component';
import { BootstrapFormComponent } from './components/bootstrap-form/bootstrap-form.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'jumbotron', component: JumbotronComponent},
  {path: 'bootstrap-form', component: BootstrapFormComponent},
  {path: 'bootstrap-table', component: BootstrapTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
