import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriveniRoutingModule } from './triveni-routing.module';
import { PerfecttrioComponent } from './perfecttrio/perfecttrio.component';
import { FacecreamComponent } from './facecream/facecream.component';
import { BalncetonerComponent } from './balncetoner/balncetoner.component';
import { BrightfacecleanserComponent } from './brightfacecleanser/brightfacecleanser.component';
import { TriveniComponent } from './triveni.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PerfecttrioComponent,
    FacecreamComponent,
    BalncetonerComponent,
    BrightfacecleanserComponent,
    TriveniComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TriveniRoutingModule
  ]
})
export class TriveniModule { }
