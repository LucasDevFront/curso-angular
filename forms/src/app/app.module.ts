import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormumComponent } from './formum/formum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormdoisModule } from './formdois/formdois/formdois.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    FormumComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormdoisModule,
    SharedModule,
    FormsModule

  ],
  providers: [
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
