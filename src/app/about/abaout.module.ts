import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbaoutRoutingModule } from './abaout-routing.module';
import { AbaoutComponent } from './abaout.component';


@NgModule({
  declarations: [AbaoutComponent],
  imports: [
    CommonModule,
    AbaoutRoutingModule
  ]
})
export class AbaoutModule { }
