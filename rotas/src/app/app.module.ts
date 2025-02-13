import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
// import { AlunosModule } from './alunos/alunos.module';
// import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    // AlunoFormComponent,
    // AlunosComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    // CursosModule,
    AppRoutingModule,
    FormsModule
    // AlunosModule
  ],
  providers: [
    CursosService, 
    AuthService,
    FormsModule,
    AuthGuard,
    CursosGuard,
    AlunosGuard,
    AlunosDeactivateGuard

  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
