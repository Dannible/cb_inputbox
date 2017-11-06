import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-InputBoxComponent',
  template: `<div>
              <span class="label label-md label-md-dark stacked">{{labelText}}</span>
              <input type="text" class="input input-md" placeholder="{{placeholderText}}" />
            </div>`
})
export class cbInputBoxComponent {
  @Input() labelText:string;
  @Input() placeholderText:string;
  constructor() {
  }
}
