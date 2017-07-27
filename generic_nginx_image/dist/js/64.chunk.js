webpackJsonpac__name_([64],{

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.colors = {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"
};
exports.barChartDemoOptions = {
    colors: [exports.colors.chartSecond, exports.colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
exports.sinChartDemoOptions = {
    series: {
        lines: {
            show: true
        },
        points: {
            show: true
        }
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        //content : "Value <b>$x</b> Value <span>$y</span>",
        defaultTheme: false
    },
    colors: [exports.colors.chartSecond, exports.colors.chartFourth],
    yaxis: {
        min: -1.1,
        max: 1.1
    },
    xaxis: {
        min: 0,
        max: 15
    }
};
exports.horizontalChartDemoOptions = {
    colors: [exports.colors.chartSecond, exports.colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
exports.salesChartDemoOptions = {
    xaxis: {
        mode: "time",
        tickLength: 5
    },
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        //points: { show: true },
        shadowSize: 0
    },
    selection: {
        mode: "x"
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "Your sales for <b>%x</b> was <span>$%y</span>",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [exports.colors.chartSecond]
};
exports.fillChartDemoOptions = {
    xaxis: {
        tickDecimals: 0
    },
    yaxis: {
        tickFormatter: function (v) {
            return v + " cm";
        }
    }
};
exports.pieChartDemoOptions = {
    series: {
        pie: {
            show: true,
            innerRadius: 0.5,
            radius: 1,
            label: {
                show: false,
                radius: 2 / 3,
                formatter: function (label, series) {
                    return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                },
                threshold: 0.1
            }
        }
    },
    legend: {
        show: true,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#000",
        container: null,
        position: "ne",
        margin: [5, 10],
        backgroundColor: "#efefef",
        backgroundOpacity: 1 // set to 0 to avoid background
    },
    grid: {
        hoverable: true,
        clickable: true
    }
};
exports.siteStatsDemoOptions = {
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        points: {
            show: true
        },
        shadowSize: 0
    },
    yaxes: [{
            min: 20,
            tickLength: 5
        }],
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "%s for <b>%x:00 hrs</b> was %y",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [exports.colors.charMain, exports.colors.chartSecond],
    xaxis: {
        mode: "time",
        tickLength: 10,
        ticks: 15,
        tickDecimals: 2
    },
    yaxis: {
        ticks: 15,
        tickDecimals: 0
    }
};
exports.autoUpdatingChartDemoOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: [exports.colors.chartFourth],
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.4
                    }, {
                        opacity: 0
                    }]
            },
            steps: false
        }
    }
};
exports.FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};


/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var FlotChartComponent = (function () {
    function FlotChartComponent(el) {
        this.el = el;
        this.graphClass = '';
        this.width = '100%';
        this.height = '250px';
        this.vendorLoaded = false;
    }
    FlotChartComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(100).then(__webpack_require__.bind(null, 1928)).then(function () {
            _this.vendorLoaded = true;
            _this.render(_this.data);
        });
    };
    FlotChartComponent.prototype.render = function (data) {
        if (data) {
            $.plot(this.el.nativeElement.children[0], data, this.options);
        }
    };
    FlotChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.vendorLoaded && changes.data.currentValue) {
            this.render(changes.data.currentValue);
        }
    };
    return FlotChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "graphClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "height", void 0);
FlotChartComponent = __decorate([
    core_1.Component({
        selector: 'sa-flot-chart',
        template: "\n    <div class=\"sa-flot-chart\" [ngStyle]=\"{width: width, height: height}\">&nbsp;</div>\n  ",
        styles: ["\n  .sa-flot-chart{\n    overflow: hidden;\n  }\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], FlotChartComponent);
exports.FlotChartComponent = FlotChartComponent;
var _a;


/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var flot_chart_component_1 = __webpack_require__(1668);
var FlotChartModule = (function () {
    function FlotChartModule() {
    }
    return FlotChartModule;
}());
FlotChartModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [flot_chart_component_1.FlotChartComponent],
        exports: [flot_chart_component_1.FlotChartComponent],
    }),
    __metadata("design:paramtypes", [])
], FlotChartModule);
exports.FlotChartModule = FlotChartModule;


/***/ }),

/***/ 1722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var examples = __webpack_require__(1613);
var json_api_service_1 = __webpack_require__(157);
var flot_examples_1 = __webpack_require__(1613);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var FlotChartsComponent = (function () {
    function FlotChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    FlotChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/flot.json').subscribe(function (data) { return _this.flotData = data; });
        this.flotExamples = examples;
        this.interval = setInterval(function () {
            _this.updateStats();
        }, 1000);
        this.updateStats();
    };
    FlotChartsComponent.prototype.updateStats = function () {
        this.updatingData = [flot_examples_1.FakeDataSource.getRandomData()];
    };
    FlotChartsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    return FlotChartsComponent;
}());
FlotChartsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-flot-charts',
        template: __webpack_require__(2352),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof json_api_service_1.JsonApiService !== "undefined" && json_api_service_1.JsonApiService) === "function" && _a || Object])
], FlotChartsComponent);
exports.FlotChartsComponent = FlotChartsComponent;
var _a;


/***/ }),

/***/ 2035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var flot_charts_routing_1 = __webpack_require__(2036);
var flot_charts_component_1 = __webpack_require__(1722);
var smartadmin_module_1 = __webpack_require__(1402);
var flot_chart_module_1 = __webpack_require__(1669);
var FlotChartsModule = (function () {
    function FlotChartsModule() {
    }
    return FlotChartsModule;
}());
FlotChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            flot_charts_routing_1.flotChartsRouting,
            smartadmin_module_1.SmartadminModule,
            flot_chart_module_1.FlotChartModule
        ],
        declarations: [flot_charts_component_1.FlotChartsComponent]
    }),
    __metadata("design:paramtypes", [])
], FlotChartsModule);
exports.FlotChartsModule = FlotChartsModule;


/***/ }),

/***/ 2036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var flot_charts_component_1 = __webpack_require__(1722);
exports.flotChartsRoutes = [
    {
        path: '',
        component: flot_charts_component_1.FlotChartsComponent
    },
];
exports.flotChartsRouting = router_1.RouterModule.forChild(exports.flotChartsRoutes);


/***/ }),

/***/ 2352:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Flot Chart']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\" *ngIf=\"flotData\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Bar Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.barChartData\"\n                         [options]=\"flotExamples.barChartDemoOptions\" ></sa-flot-chart>\n\n            </div>\n          </div>\n        </sa-widget>\n\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Sin Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.sinChartData\"\n                         [options]=\"flotExamples.sinChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Auto Updating Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"updatingData\"\n                         [options]=\"flotExamples.autoUpdatingChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Horizontal Bar Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.horizontalBarChartData\"\n                         [options]=\"flotExamples.horizontalChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-8 col-md-7 col-lg-7\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Plot Percentiles</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.fillChartData\"\n                         [options]=\"flotExamples.fillChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-4 col-md-5 col-lg-5\">\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Pie Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.pieChartData\"\n                         [options]=\"flotExamples.pieChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n      <article class=\"col-xs-12\">\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Site Stats Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.siteStatsData\"\n                         [options]=\"flotExamples.siteStatsDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n\n\n      </article>\n\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n\n</div>\n<!-- END MAIN CONTENT -->\n"

/***/ })

});
//# sourceMappingURL=64.map