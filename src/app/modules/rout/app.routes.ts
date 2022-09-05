import { Routes } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { MainComponent } from "./main/main.component";
import { RoutGuard } from "./rout.guard";

export const AppRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'main'
  },
  {
    path: "main",
    pathMatch: "prefix",
    component: MainComponent
  },
  {
    path: "main/:id",
    component: ChildComponent,
    canActivate: [RoutGuard]
  },
  {
    path: '***',
    component: ChildComponent
  }
]