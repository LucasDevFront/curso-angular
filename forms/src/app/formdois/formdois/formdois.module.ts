import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormdoisComponent } from '../formdois.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormdoisComponent,
  ],
  
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class FormdoisModule { }
