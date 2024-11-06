import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { StoryComponent } from './story/story.component';
import { PackingComponent } from './packing/packing.component';
import { PlanetComponent } from './planet/planet.component';


@NgModule({
  declarations: [
    AboutComponent,
    StoryComponent,
    PackingComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
