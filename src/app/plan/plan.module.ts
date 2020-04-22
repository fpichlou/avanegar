import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlanRoutingModule } from './plan-routing.module';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PlanItemComponent } from './plan-item/plan-item.component';


@NgModule({
  declarations: [SelectPlanComponent, PlanItemComponent],
  imports: [
    CommonModule,
    PlanRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanModule { }
