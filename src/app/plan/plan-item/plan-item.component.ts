import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.scss']
})
export class PlanItemComponent implements OnInit {

  @Input() params: any[];
  @Input() active: boolean;
  @Input() type: any;
  @Input() data: any;
  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
  }

}
