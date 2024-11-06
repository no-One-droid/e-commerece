import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnehaRoutingModule } from './sneha-routing.module';
import { SnehaComponent } from './sneha.component';
import { HealingconctComponent } from './healingconct/healingconct.component';
import { StarterComponent } from './starter/starter.component';
import { FaceserumComponent } from './faceserum/faceserum.component';
import { NourishelixerComponent } from './nourishelixer/nourishelixer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SnehaComponent,
    HealingconctComponent,
    StarterComponent,
    FaceserumComponent,
    NourishelixerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SnehaRoutingModule
  ]
})
export class SnehaModule { }
