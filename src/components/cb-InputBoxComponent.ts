import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-InputBoxComponent',
  template: `<div>
              <ion-label color="dark" stacked>{{labelText}}</ion-label>
              <ion-input type="text" placeholder="{{placeholderText}}"></ion-input>
            </div>`
})
export class cbInputBoxComponent {
  @Input() labelText:string;
  @Input() placeholderText:string;
  constructor() {
  }
}
