import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestPracticesHomeComponent } from './best-practices-home/components/best-practices-home.components';



const bestPracticesRoutes: Routes = [
  {path: '', component: BestPracticesHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(bestPracticesRoutes)],
  exports: [RouterModule]
})
export class BestPracticesRoutingModule { }
