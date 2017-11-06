import { Component, Input } from '@angular/core';
var cbInputBoxComponent = /** @class */ (function () {
    function cbInputBoxComponent() {
    }
    cbInputBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cb-InputBoxComponent',
                    template: "<div>\n              <span class=\"label label-md label-md-dark stacked\">{{labelText}}</span>\n              <input type=\"text\" class=\"input input-md\" placeholder=\"{{placeholderText}}\" />\n            </div>"
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