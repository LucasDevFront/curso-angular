import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormdoisComponent } from './formdois/formdois.component';
import { FormumComponent } from './formum/formum.component';

const routes: Routes = [
  { path:"formulario", component: FormumComponent},
  { path:"formulariodois", component: FormdoisComponent},
  { path:'', pathMatch: 'full', redirectTo: 'formulariodois'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
