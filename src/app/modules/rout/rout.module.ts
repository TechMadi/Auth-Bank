import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutRoutingModule } from './rout-routing.module';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    MainComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RoutRoutingModule
  ]
})
export class RoutModule { }
