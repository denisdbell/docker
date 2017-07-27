webpackJsonpac__name_([65],{

/***/ 1719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var json_api_service_1 = __webpack_require__(157);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var ChartJsShowcaseComponent = (function () {
    function ChartJsShowcaseComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    ChartJsShowcaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/chartjs.json').subscribe(function (data) {
            _this.chartjsData = data;
        });
    };
    ChartJsShowcaseComponent.prototype.ngOnDestroy = function () { };
    return ChartJsShowcaseComponent;
}());
ChartJsShowcaseComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-chart-js-showcase',
        template: __webpack_require__(2349),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof json_api_service_1.JsonApiService !== "undefined" && json_api_service_1.JsonApiService) === "function" && _a || Object])
], ChartJsShowcaseComponent);
exports.ChartJsShowcaseComponent = ChartJsShowcaseComponent;
var _a;


/***/ }),

/***/ 2031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var chart_js_showcase_routing_1 = __webpack_require__(2032);
var chart_js_showcase_component_1 = __webpack_require__(1719);
var smartadmin_module_1 = __webpack_require__(1402);
var chart_js_module_1 = __webpack_require__(2174);
var ChartJsShowcaseModule = (function () {
    function ChartJsShowcaseModule() {
    }
    return ChartJsShowcaseModule;
}());
ChartJsShowcaseModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            chart_js_showcase_routing_1.chartJsShowcaseRouting,
            smartadmin_module_1.SmartadminModule,
            chart_js_module_1.ChartJsModule,
        ],
        declarations: [chart_js_showcase_component_1.ChartJsShowcaseComponent]
    }),
    __metadata("design:paramtypes", [])
], ChartJsShowcaseModule);
exports.ChartJsShowcaseModule = ChartJsShowcaseModule;


/***/ }),

/***/ 2032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var chart_js_showcase_component_1 = __webpack_require__(1719);
exports.chartJsShowcaseRoutes = [
    {
        path: '',
        component: chart_js_showcase_component_1.ChartJsShowcaseComponent
    }
];
exports.chartJsShowcaseRouting = router_1.RouterModule.forChild(exports.chartJsShowcaseRoutes);


/***/ }),

/***/ 2173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var chart_js_presets_1 = __webpack_require__(2175);
var ChartJsComponent = (function () {
    function ChartJsComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    ChartJsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(51).then(__webpack_require__.bind(null, 2197)).then(function (chartJs) {
            _this.render();
        });
    };
    ChartJsComponent.prototype.render = function () {
        var ctx = this.getCtx();
        var data = this.data;
        var chart = new Chart(ctx, { type: this.type, data: data, options: chart_js_presets_1.presets[this.type] || {} });
        chart.update();
    };
    ChartJsComponent.prototype.getCtx = function () {
        return this.el.nativeElement.querySelector('canvas').getContext('2d');
    };
    return ChartJsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartJsComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartJsComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartJsComponent.prototype, "width", void 0);
ChartJsComponent = __decorate([
    core_1.Component({
        selector: 'sa-chart-js',
        template: "\n    <div>\n      <canvas></canvas>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], ChartJsComponent);
exports.ChartJsComponent = ChartJsComponent;
var _a;


/***/ }),

/***/ 2174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var chart_js_component_1 = __webpack_require__(2173);
var ChartJsModule = (function () {
    function ChartJsModule() {
    }
    return ChartJsModule;
}());
ChartJsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [chart_js_component_1.ChartJsComponent],
        exports: [chart_js_component_1.ChartJsComponent],
    }),
    __metadata("design:paramtypes", [])
], ChartJsModule);
exports.ChartJsModule = ChartJsModule;


/***/ }),

/***/ 2175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.presets = {
    line: {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether the line is curved between points
        bezierCurve: true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,
        //Boolean - Whether to show a dot for each point
        pointDot: true,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    radar: {
        //Boolean - Whether to show lines for each scale point
        scaleShowLine: true,
        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut: true,
        //Boolean - Whether to show labels on the scale
        scaleShowLabels: false,
        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: true,
        //String - Colour of the angle line
        angleLineColor: "rgba(0,0,0,.1)",
        //Number - Pixel width of the angle line
        angleLineWidth: 1,
        //String - Point label font declaration
        pointLabelFontFamily: "'Arial'",
        //String - Point label font weight
        pointLabelFontStyle: "normal",
        //Number - Point label font size in pixels
        pointLabelFontSize: 10,
        //String - Point label font colour
        pointLabelFontColor: "#666",
        //Boolean - Whether to show a dot for each point
        pointDot: true,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 3,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    polarArea: {
        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop: true,
        //String - The colour of the label backdrop
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: true,
        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY: 2,
        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX: 2,
        //Boolean - Show line for each value in the scale
        scaleShowLine: true,
        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke: true,
        //String - The colour of the stroke on each segement.
        segmentStrokeColor: "#fff",
        //Number - The width of the stroke value in pixels
        segmentStrokeWidth: 2,
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect.
        animationEasing: "easeOutBounce",
        //Boolean - Whether to animate the rotation of the chart
        animateRotate: true,
        //Boolean - Whether to animate scaling the chart from the centre
        animateScale: false,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    },
    bar: {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 1,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    doughnut: {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 2,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50,
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    },
    pie: {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 2,
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - types of animation
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }
};


/***/ }),

/***/ 2349:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\"  >\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Chart.js']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <div class=\"row\"  *ngIf=\"chartjsData\">\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Line Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"line\" [data]=\"chartjsData['line-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </sa-widget>\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Radar Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"radar\" [data]=\"chartjsData['radar-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </sa-widget>\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Polar Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"polarArea\" [data]=\"chartjsData['polar-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Bar Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"bar\" [data]=\"chartjsData['bar-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </sa-widget>\n\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Doughnut Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"doughnut\" [data]=\"chartjsData['doughnut-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </sa-widget>\n\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Pie Chart</h2>\n          </header>\n          <div>\n            <div class=\"widget-body\">\n              <sa-chart-js type=\"pie\" [data]=\"chartjsData['pie-chart']\"></sa-chart-js>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ })

});
//# sourceMappingURL=65.map