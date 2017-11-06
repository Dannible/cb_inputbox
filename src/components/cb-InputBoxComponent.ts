import { Component, Input } from '@angular/core';
import { NavParams} from 'ionic-angular';

@Component({
  selector: 'cb-InputBoxComponent',
  template: 'cb-InputBoxComponent.html'
})
export class cbInputBoxComponent {
  @Input() labelText:string;
  constructor(public params: NavParams) {
    this.setTitle();
  }

  setTitle(){
    if(this.labelText ==  undefined)
        this.labelText = "";
    else
        this.labelText = this.params.get("labelText");
  }
}
