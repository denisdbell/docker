webpackJsonpac__name_([68],{

/***/ 1724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var json_api_service_1 = __webpack_require__(157);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var MorrisChartsComponent = (function () {
    function MorrisChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    MorrisChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/morris.json').subscribe(function (data) { return _this.morrisDemoData = data; });
    };
    MorrisChartsComponent.prototype.barColorsDemo = function (row, series, type) {
        if (type === 'bar') {
            var red = Math.ceil(150 * row.y / 8);
            return 'rgb(' + red + ',0,0)';
        }
        else {
            return '#000';
        }
    };
    MorrisChartsComponent.prototype.percentageFormat = function (x) {
        return x + "%";
    };
    MorrisChartsComponent.prototype.dateFormat = function (d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    };
    return MorrisChartsComponent;
}());
MorrisChartsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-morris-charts',
        template: __webpack_require__(2354),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof json_api_service_1.JsonApiService !== "undefined" && json_api_service_1.JsonApiService) === "function" && _a || Object])
], MorrisChartsComponent);
exports.MorrisChartsComponent = MorrisChartsComponent;
var _a;


/***/ }),

/***/ 2039:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var morris_charts_routing_1 = __webpack_require__(2040);
var morris_charts_component_1 = __webpack_require__(1724);
var smartadmin_module_1 = __webpack_require__(1402);
var morris_graph_module_1 = __webpack_require__(2183);
var MorrisChartsModule = (function () {
    function MorrisChartsModule() {
    }
    return MorrisChartsModule;
}());
MorrisChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            morris_charts_routing_1.morrisChartsRouting,
            smartadmin_module_1.SmartadminModule,
            morris_graph_module_1.MorrisGraphModule
        ],
        declarations: [morris_charts_component_1.MorrisChartsComponent]
    }),
    __metadata("design:paramtypes", [])
], MorrisChartsModule);
exports.MorrisChartsModule = MorrisChartsModule;


/***/ }),

/***/ 2040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var morris_charts_component_1 = __webpack_require__(1724);
exports.morrisChartsRoutes = [{
        path: '',
        component: morris_charts_component_1.MorrisChartsComponent
    }];
exports.morrisChartsRouting = router_1.RouterModule.forChild(exports.morrisChartsRoutes);


/***/ }),

/***/ 2182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var MorrisGraphComponent = (function () {
    function MorrisGraphComponent(el) {
        this.el = el;
    }
    MorrisGraphComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(86).then(__webpack_require__.bind(null, 2530)).then(function () {
            return __webpack_require__.e/* import() */(98).then(__webpack_require__.bind(null, 2260));
        }).then(function () {
            options.element = _this.el.nativeElement.children[0];
            options.data = _this.data;
            switch (_this.type) {
                case 'area':
                    Morris.Area(options);
                    break;
                case 'bar':
                    Morris.Bar(options);
                    break;
                case 'line':
                    Morris.Line(options);
                    break;
                case 'donut':
                    Morris.Donut(options);
                    break;
            }
        });
        var options = this.options || {};
    };
    return MorrisGraphComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MorrisGraphComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MorrisGraphComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MorrisGraphComponent.prototype, "type", void 0);
MorrisGraphComponent = __decorate([
    core_1.Component({
        selector: 'sa-morris-graph',
        template: "\n     <div class=\"chart no-padding\" ></div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], MorrisGraphComponent);
exports.MorrisGraphComponent = MorrisGraphComponent;
var _a;


/***/ }),

/***/ 2183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var morris_graph_component_1 = __webpack_require__(2182);
var MorrisGraphModule = (function () {
    function MorrisGraphModule() {
    }
    return MorrisGraphModule;
}());
MorrisGraphModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [morris_graph_component_1.MorrisGraphComponent],
        exports: [morris_graph_component_1.MorrisGraphComponent],
    }),
    __metadata("design:paramtypes", [])
], MorrisGraphModule);
exports.MorrisGraphModule = MorrisGraphModule;


/***/ }),

/***/ 2354:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Morris Charts']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <sa-widgets-grid>\n    <div class=\"row\" *ngIf=\"morrisDemoData\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Sales Graphs</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData.sales\"\n                               type=\"area\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['iphone', 'ipad', 'itouch'],\n                              labels: ['iPhone', 'iPad', 'iPod Touch'],\n                              pointSize: [2],\n                              hideHover: 'auto'\n                           }\"\n              ></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Area Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['area-demo']\"\n                               type=\"area\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: ['y', 'z'],\n                              labels: ['Y', 'Z']\n\n              }\"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['bar-demo']\"\n                               type=\"bar\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: 'y',\n                              labels: 'Y',\n                              barColors: barColorsDemo\n\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Normal Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-morris-graph [data]=\"morrisDemoData['normal-bar-demo']\"\n                               type=\"bar\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: ['y', 'z', 'a'],\n                              labels: ['Y', 'Z', 'A']\n\n              }\"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Stacked Bar Graph</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-morris-graph [data]=\"morrisDemoData['stacked-bar-demo']\"\n                               type=\"bar\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: ['y', 'z', 'a'],\n                              labels: ['Y', 'Z', 'A'],\n                              staked: true\n\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Year Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-year-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned'],\n                              labels: ['Licensed', 'SORN']\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Donut Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['donut-demo']\"\n                               type=\"donut\"\n                               [options]=\"{\n                              formater: percentageFormat\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Time Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-morris-graph [data]=\"morrisDemoData['line-time-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned'],\n                              labels: ['Licensed', 'SORN'],\n                              events: ['2011-04', '2011-08']\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Line Graph A</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-graph-a-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['a'],\n                              labels: ['Series A'],\n                              units: '%'\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Line Graph B</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-graph-b-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned', 'other'],\n                              labels: ['Licensed', 'SORN', 'Other'],\n                              xLabels: 'day',\n                              xLabelFormat: dateFormat\n              }\"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>No Grid Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['no-grid-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned'],\n                              labels: ['Licensed', 'SORN'],\n                              grid: false\n              }\"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-12\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Line Graph C</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-graph-c-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'elapsed',\n                              ykeys: ['value'],\n                              labels: ['value'],\n                              parseTime: false\n              }\"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ })

});
//# sourceMappingURL=68.map