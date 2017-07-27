webpackJsonpac__name_([69],{

/***/ 1723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var HighchartTablesComponent = (function () {
    function HighchartTablesComponent() {
    }
    HighchartTablesComponent.prototype.ngOnInit = function () {
    };
    return HighchartTablesComponent;
}());
HighchartTablesComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-highchart-tables',
        template: __webpack_require__(2353),
    }),
    __metadata("design:paramtypes", [])
], HighchartTablesComponent);
exports.HighchartTablesComponent = HighchartTablesComponent;


/***/ }),

/***/ 2037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var highchart_tables_routing_1 = __webpack_require__(2038);
var highchart_tables_component_1 = __webpack_require__(1723);
var smartadmin_module_1 = __webpack_require__(1402);
var highcharts_module_1 = __webpack_require__(2181);
var HighchartTablesModule = (function () {
    function HighchartTablesModule() {
    }
    return HighchartTablesModule;
}());
HighchartTablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            highchart_tables_routing_1.highchartTablesRouting,
            smartadmin_module_1.SmartadminModule,
            highcharts_module_1.HighchartsModule
        ],
        declarations: [highchart_tables_component_1.HighchartTablesComponent]
    }),
    __metadata("design:paramtypes", [])
], HighchartTablesModule);
exports.HighchartTablesModule = HighchartTablesModule;


/***/ }),

/***/ 2038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var highchart_tables_component_1 = __webpack_require__(1723);
exports.highchartTablesRoutes = [{
        path: '',
        component: highchart_tables_component_1.HighchartTablesComponent
    }];
exports.highchartTablesRouting = router_1.RouterModule.forChild(exports.highchartTablesRoutes);


/***/ }),

/***/ 2180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var HighchartTable = (function () {
    function HighchartTable(el) {
        this.el = el;
    }
    HighchartTable.prototype.ngOnInit = function () {
        var _this = this;
        // to improve latency for big components smartadmin app we are loading some dependencies async
        __webpack_require__.e/* import() */(90).then(__webpack_require__.bind(null, 2528)).then(function () {
            return __webpack_require__.e/* import() */(81).then(__webpack_require__.bind(null, 2531));
        }).then(function () {
            $(_this.el.nativeElement).highchartTable();
        });
    };
    return HighchartTable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HighchartTable.prototype, "saHighchartTable", void 0);
HighchartTable = __decorate([
    core_1.Directive({
        selector: '[saHighchartTable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], HighchartTable);
exports.HighchartTable = HighchartTable;
var _a;


/***/ }),

/***/ 2181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var highchart_table_directive_1 = __webpack_require__(2180);
var HighchartsModule = (function () {
    function HighchartsModule() {
    }
    return HighchartsModule;
}());
HighchartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [highchart_table_directive_1.HighchartTable],
        exports: [highchart_table_directive_1.HighchartTable]
    }),
    __metadata("design:paramtypes", [])
], HighchartsModule);
exports.HighchartsModule = HighchartsModule;


/***/ }),

/***/ 2353:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\"  >\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Highchart Tables']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-12\">\n\n        <div class=\"alert alert-info\">\n\n          <h3 class=\"no-margin\">jQuery HighchartTable</h3>\n          <h5>Convert your HTML data tables into fancy Highcharts graphs without any coding!</h5>\n          <ul>\n            <li>The HighchartTable plugin takes data and attributes from a table and parses them to simply create an Hightcharts chart</li>\n            <li>Control the graph dynamically and easily without any javascript</li>\n            <li>Builds automatically during page load, all you need to do is load the plugin</li>\n            <li>See the full documentation <a href=\"http://highcharttable.org/#documentation\" target=\"_blank\"><strong>here <i class=\"fa fa-link\"></i> </strong> </a></li>\n          </ul>\n\n\n\n        </div>\n\n        <div class=\"col-sm-12 well\">\n          <div class=\"col-sm-6\">\n            <table class=\"highchart table table-hover table-bordered\" [saHighchartTable] data-graph-container=\".. .. .highchart-container2\" data-graph-type=\"column\">\n              <caption>Column example</caption>\n              <thead>\n              <tr>\n                <th>Month</th>\n                <th class=\"\">Sales</th>\n                <th class=\"\">Benefits</th>\n                <th class=\"\">Expenses</th>\n                <th class=\"\">Prediction</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>January</td>\n                <td class=\"\">8000</td>\n                <td class=\"\">2000</td>\n                <td class=\"\">1000</td>\n                <td class=\"\">9000</td>\n              </tr>\n              <tr>\n                <td>February</td>\n                <td class=\"\">12000</td>\n                <td class=\"\">3000</td>\n                <td class=\"\">1300</td>\n                <td class=\"\">10000</td>\n              </tr>\n              <tr>\n                <td>March</td>\n                <td class=\"\">18000</td>\n                <td class=\"\">4000</td>\n                <td class=\"\">1240</td>\n                <td class=\"\">11000</td>\n              </tr>\n              <tr>\n                <td>April</td>\n                <td class=\"\">2000</td>\n                <td class=\"\">-1000</td>\n                <td class=\"\">-150</td>\n                <td class=\"\">13000</td>\n              </tr>\n              <tr>\n                <td>May</td>\n                <td class=\"\">500</td>\n                <td class=\"\">-2500</td>\n                <td class=\"\">1000</td>\n                <td class=\"\">14000</td>\n              </tr>\n              <tr>\n                <td>June</td>\n                <td class=\"\">600</td>\n                <td class=\"\">-500</td>\n                <td class=\"\">-500</td>\n                <td class=\"\">15000</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"highchart-container2\"></div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12 well\">\n          <div class=\"col-sm-6\">\n            <table class=\"highchart table table-hover table-bordered\" [saHighchartTable] data-graph-container=\".. .. .highchart-container\" data-graph-type=\"line\">\n              <caption>Line example</caption>\n              <thead>\n              <tr>\n                <th>Month</th>\n                <th>Sales</th>\n                <th>Benefits</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>January</td>\n                <td>8000</td>\n                <td>2000</td>\n              </tr>\n              <tr>\n                <td>February</td>\n                <td>12000</td>\n                <td>3000</td>\n              </tr>\n              <tr>\n                <td>March</td>\n                <td>18000</td>\n                <td>4000</td>\n              </tr>\n              <tr>\n                <td>April</td>\n                <td>2000</td>\n                <td>-1000</td>\n              </tr>\n              <tr>\n                <td>May</td>\n                <td>500</td>\n                <td>-2500</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"highchart-container\"></div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12 well\">\n          <div class=\"col-sm-6\">\n            <table class=\"highchart table table-hover table-bordered\" [saHighchartTable] data-graph-container=\".. .. .highchart-container3\" data-graph-type=\"column\">\n              <caption>Column + area example</caption>\n              <thead>\n              <tr>\n                <th>Month</th>\n                <th>Sales</th>\n                <th data-graph-type=\"area\">Benefits</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>January</td>\n                <td>8000</td>\n                <td>2000</td>\n              </tr>\n              <tr>\n                <td>February</td>\n                <td>12000</td>\n                <td>3000</td>\n              </tr>\n              <tr>\n                <td>March</td>\n                <td>18000</td>\n                <td>4000</td>\n              </tr>\n              <tr>\n                <td>April</td>\n                <td>2000</td>\n                <td>-1000</td>\n              </tr>\n              <tr>\n                <td>May</td>\n                <td>500</td>\n                <td>-2500</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div class=\"highchart-container3\"></div>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- end row -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n\n</div>\n"

/***/ })

});
//# sourceMappingURL=69.map