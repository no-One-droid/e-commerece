import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyurvedaRoutingModule } from './ayurveda-routing.module';
import { AyurvedaComponent } from './ayurveda.component';
import { AyurvedahomeComponent } from './ayurvedahome/ayurvedahome.component';
import { DoshasComponent } from './doshas/doshas.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [
    AyurvedaComponent,
    AyurvedahomeComponent,
    DoshasComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    AyurvedaRoutingModule
  ]
})
export class AyurvedaModule { }
