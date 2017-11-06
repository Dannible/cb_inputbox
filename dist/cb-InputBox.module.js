import { NgModule } from '@angular/core';
import { cbInputBoxComponent } from './components/cb-InputBoxComponent';
import { cbInputBoxProvider } from './providers/cb-InputBoxProvider';
var cbInputBox = /** @class */ (function () {
    function cbInputBox() {
    }
    cbInputBox.forRoot = function () {
        return {
            ngModule: cbInputBox,
            providers: [cbInputBoxProvider]
        };
    };
    cbInputBox.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // declare all components that your module uses
                        cbInputBoxComponent
                    ],
                    exports: [
                        // export the component(s) that you want others to be able to use
                        cbInputBoxComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    cbInputBox.ctorParameters = function () { return []; };
    return cbInputBox;
}());
export { cbInputBox };
//# sourceMappingURL=cb-InputBox.module.js.map