import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { cbInputBoxComponent } from './components/cb-InputBoxComponent';
import { cbInputBoxProvider } from './providers/cb-InputBoxProvider';

@NgModule({
  declarations: [
    // declare all components that your module uses
    cbInputBoxComponent
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    cbInputBoxComponent
  ]
})
export class cbInputBox {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: cbInputBox,
      providers: [ cbInputBoxProvider ]
    };
  }
}

