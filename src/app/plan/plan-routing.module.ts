import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPlanComponent } from './select-plan/select-plan.component';


const routes: Routes = [{
  path: 'plan',
  component: SelectPlanComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
