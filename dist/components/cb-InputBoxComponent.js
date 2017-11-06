import { Component, Input } from '@angular/core';
var cbInputBoxComponent = /** @class */ (function () {
    function cbInputBoxComponent() {
    }
    cbInputBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cb-InputBoxComponent',
                    template: "<div>\n              <ion-label color=\"dark\" stacked>{{labelText}}</ion-label>\n              <ion-input type=\"text\" placeholder=\"{{placeholderText}}\"></ion-input>\n            </div>"
                },] },
    ];
    /** @nocollapse */
    cbInputBoxComponent.ctorParameters = function () { return []; };
    cbInputBoxComponent.propDecorators = {
        'labelText': [{ type: Input },],
        'placeholderText': [{ type: Input },],
    };
    return cbInputBoxComponent;
}());
export { cbInputBoxComponent };
//# sourceMappingURL=cb-InputBoxComponent.js.map