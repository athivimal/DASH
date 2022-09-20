import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
// Pages

const appRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
