import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { LoginComponent } from './login/login.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    SobreComponent,
    AjudaComponent,
    LoginComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
