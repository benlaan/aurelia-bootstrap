System.register(['aurelia-framework'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var BsColumn;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            BsColumn = (function () {
                function BsColumn() {
                }
                Object.defineProperty(BsColumn.prototype, "xsWidth", {
                    get: function () {
                        return this.xs || 12;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BsColumn.prototype, "smWidth", {
                    get: function () {
                        return this.sm || this.xsWidth;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BsColumn.prototype, "mdWidth", {
                    get: function () {
                        return this.md || this.smWidth;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BsColumn.prototype, "lgWidth", {
                    get: function () {
                        return this.lg || this.mdWidth;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsColumn.prototype, "xs", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsColumn.prototype, "sm", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsColumn.prototype, "md", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsColumn.prototype, "lg", void 0);
                return BsColumn;
            }());
            exports_1("BsColumn", BsColumn);
        }
    }
});

//# sourceMappingURL=bs-column.js.map
