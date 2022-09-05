import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';
import { RoutGuard } from './rout.guard';



@NgModule({
  imports: [RouterModule.forChild(AppRoutes)],
  exports: [RouterModule]
})
export class RoutRoutingModule { }
