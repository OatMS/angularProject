System.register(['angular2/core', './head.component.ts', './left.component.ts', './container.component.ts', './foot.component.ts'], function(exports_1, context_1) {
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
    var core_1, head_component_ts_1, left_component_ts_1, container_component_ts_1, foot_component_ts_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (head_component_ts_1_1) {
                head_component_ts_1 = head_component_ts_1_1;
            },
            function (left_component_ts_1_1) {
                left_component_ts_1 = left_component_ts_1_1;
            },
            function (container_component_ts_1_1) {
                container_component_ts_1 = container_component_ts_1_1;
            },
            function (foot_component_ts_1_1) {
                foot_component_ts_1 = foot_component_ts_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  \t<div class=\"app\" >\n  \t  myApp Component\n  \t  <div style=\"padding:10px;\" >\n    \t  <my-head></my-head>\n    \t  <my-left></my-left>\n    \t  <my-container></my-container>\n    \t  <my-foot></my-foot>\n  \t  </div>\n  \t</div>",
                        directives: [head_component_ts_1.Head, left_component_ts_1.Left, container_component_ts_1.Container, foot_component_ts_1.Foot]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.component.js.map