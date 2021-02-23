import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './ajuda/ajuda.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ajuda', component: AjudaComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'sobre', component: SobreComponent},
  {path:'login', component: LoginComponent},
  {path: 'parceiros', component: ParceirosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
