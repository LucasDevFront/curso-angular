import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'cursos',
   loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
  canActivate: [AuthGuard],
  canActivateChild: [CursosGuard]},
  { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
  canActivate: [AuthGuard],
  canActivateChild: [AlunosGuard],
},
  // { path:"cursos", component:CursosComponent},
  // { path:"curso/:id", component:CursoDetalheComponent},
  { path:"login", component: LoginComponent},
  // { path:"naoEncontrado", component: CursoNaoEncontradoComponent},
  { path:"", component: HomeComponent,
  canActivate: [AuthGuard]},

{ path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
