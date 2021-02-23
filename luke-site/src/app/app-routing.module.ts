import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BioComponent } from './bio/bio.component';
import { DiscografiaComponent } from './discografia/discografia.component';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"Bio", component:BioComponent},
  { path:"Discografia", component: DiscografiaComponent},
  { path:"Loja", component: LojaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
