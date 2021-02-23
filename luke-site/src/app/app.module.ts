import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { DiscografiaComponent } from './discografia/discografia.component';
import { LojaComponent } from './loja/loja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    DiscografiaComponent,
    LojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
