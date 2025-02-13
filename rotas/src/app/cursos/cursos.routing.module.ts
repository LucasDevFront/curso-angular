import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  { path:"", component:CursosComponent},
  { path:"naoEncontrado", component: CursoNaoEncontradoComponent},
  { path:":id", component:CursoDetalheComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class cursoRoutingModule {}
