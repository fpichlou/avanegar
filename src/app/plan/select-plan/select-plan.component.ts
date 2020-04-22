import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit, OnDestroy {

  totalPrice: number;
  subScription;
  planParameters = [
    {
      name: 'maxSynCall',
      title: 'حداکثر تماس همزمان',
      min: 100,
      max: 1000,
      step: 100,
      class: 'bg-blue-gradient',
      unit: 'تماس',
      price: {
        baseUnit: 100,
        value: 1000000
      }
    },
    {
      name: 'maxCallTime',
      title: 'میزان مکالمه',
      min: 1000,
      max: 100000,
      unit: 'دقیقه',
      step: 1000,
      class: 'bg-peach-gradient',
      price: {
        baseUnit: 1,
        value: 24
      }
    },
    {
      name: 'keepCallData',
      title: 'نگهداری فایل مکالمه تماس',
      min: 1,
      max: 60,
      unit: 'روز',
      step: 1,
      class: 'bg-purple-gradient',
      price: {
        baseUnit: 1,
        value: 1000
      }
    },
    {
      name: 'dataStorage',
      title: 'حجم ذخیره سازی اطلاعات',
      min: 1,
      max: 100,
      unit: 'گیگ',
      class: 'bg-aqua-gradient',
      step: 1,
      price: {
        baseUnit: 1,
        value: 1000
      }
    }
  ];

  planTypes = [
    {
      title: 'یک ماهه',
      value: 1
    },
    {
      title: 'شش ماهه',
      value: 6
    },
    {
      title: 'یک ساله',
      value: 12,
      discount: 2
    },
  ];

  planForm: FormGroup = this.fb.group({
    maxSynCall: [100, [
      Validators.required,
      Validators.min(this.parameterProp('maxSynCall', 'min')),
      Validators.min(this.parameterProp('maxSynCall', 'max'))
    ]],
    maxCallTime: [1000, [
      Validators.required,
      Validators.min(this.parameterProp('maxCallTime', 'min')),
      Validators.min(this.parameterProp('maxCallTime', 'max'))
    ]],
    keepCallData: [1, [
      Validators.required,
      Validators.min(this.parameterProp('keepCallData', 'min')),
      Validators.min(this.parameterProp('keepCallData', 'max'))
    ]],
    dataStorage: [1, [
      Validators.required,
      Validators.min(this.parameterProp('dataStorage', 'min')),
      Validators.min(this.parameterProp('dataStorage', 'max'))
    ]],
    planType: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.totalPrice = this.calculateTotal();
    this.subScription = this.planForm.valueChanges.subscribe(value => {
      this.totalPrice = this.calculateTotal();
    });
  }

  parameterProp(name: string, propName: string): any {
    return this.planParameters
      .filter(param => param.name === name)
      .map(param => param[propName]);
  }

  parameterPrice(name: string): any {
    const paramObj = this.planParameters
      .filter(param => param.name === name)[0];
    return ((paramObj.price.value * (this.planForm.get(name).value)) / paramObj.price.baseUnit);
  }

  calculateTotal() {
    console.log(this.planParameters.reduce((pre, cur) => pre += this.parameterPrice(cur.name), 0));
    return this.planParameters.reduce((pre, cur) => pre += this.parameterPrice(cur.name), 0);
  }

  ngOnDestroy() {
    this.subScription.unsubscribe();
  }

}
