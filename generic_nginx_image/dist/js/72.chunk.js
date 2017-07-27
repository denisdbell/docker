webpackJsonpac__name_([72],{

/***/ 1416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by griga on 12/26/16.
 */

function FadeInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
exports.FadeInTop = FadeInTop;


/***/ }),

/***/ 1697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-timeline',
        template: __webpack_require__(2299),
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);
exports.TimelineComponent = TimelineComponent;


/***/ }),

/***/ 1957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var timeline_component_1 = __webpack_require__(1697);
var routes = [{
        path: '',
        component: timeline_component_1.TimelineComponent
    }];
var TimelineRoutingModule = (function () {
    function TimelineRoutingModule() {
    }
    return TimelineRoutingModule;
}());
TimelineRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], TimelineRoutingModule);
exports.TimelineRoutingModule = TimelineRoutingModule;


/***/ }),

/***/ 1958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var timeline_routing_module_1 = __webpack_require__(1957);
var timeline_component_1 = __webpack_require__(1697);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var TimelineModule = (function () {
    function TimelineModule() {
    }
    return TimelineModule;
}());
TimelineModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            timeline_routing_module_1.TimelineRoutingModule
        ],
        declarations: [timeline_component_1.TimelineComponent]
    }),
    __metadata("design:paramtypes", [])
], TimelineModule);
exports.TimelineModule = TimelineModule;


/***/ }),

/***/ 2299:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" data-sparkline-container=\"\" data-easy-pie-chart-container=\"\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Timeline']\" icon=\"clock-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"well well-sm\">\n        <!-- Timeline Content -->\n        <div class=\"smart-timeline\">\n          <ul class=\"smart-timeline-list\">\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <img src=\"assets/img/avatars/andrea.jpg\" width=\"32\" height=\"32\" alt=\"user\">\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>just now</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <a (click)=\"(null)\"><strong>Trip to Adalaskar</strong></a>\n                </p>\n                <p>\n                  Check out my tour to Adalaskar\n                </p>\n                <p>\n                  <a (click)=\"(null)\" class=\"btn btn-xs btn-primary\"><i class=\"fa fa-file\"></i> Read the post</a>\n                </p>\n                <img src=\"assets/img/superbox/superbox-thumb-4.jpg\" alt=\"img\" width=\"150\">\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <i class=\"fa fa-file-text\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>1 min ago</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <strong>Meeting invite for &quot;GENERAL GNU&quot; [<a (click)=\"(null)\"><i>Go to my calendar</i></a>]</strong>\n                </p>\n                <div class=\"well well-sm display-inline\">\n                  <p>Will you be able to attend the meeting - <strong> 10:00 am</strong> tomorrow?</p>\n                  <button class=\"btn btn-xs btn-default\">Confirm Attendance</button>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon bg-color-greenDark\">\n                <i class=\"fa fa-bar-chart-o\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>5 hrs ago</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <strong class=\"txt-color-greenDark\">24hrs User Feed</strong>\n                </p>\n                <div class=\"sparkline\" data-sparkline-type=\"compositeline\" data-sparkline-spotradius-top=\"5\" data-sparkline-color-top=\"#3a6965\" data-sparkline-line-width-top=\"3\" data-sparkline-color-bottom=\"#2b5c59\" data-sparkline-spot-color=\"#2b5c59\" data-sparkline-minspot-color-top=\"#97bfbf\" data-sparkline-maxspot-color-top=\"#c2cccc\" data-sparkline-highlightline-color-top=\"#cce8e4\" data-sparkline-highlightspot-color-top=\"#9dbdb9\" data-sparkline-width=\"170px\" data-sparkline-height=\"40px\" data-sparkline-line-val=\"[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]\" data-sparkline-bar-val=\"[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]\"></div>\n                <br>\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <i class=\"fa fa-user\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>yesterday</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <a (click)=\"(null)\"><strong>Update user information</strong></a>\n                </p>\n                <p>\n                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.\n                </p>\n                Tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit\n                <ul class=\"list-inline\">\n                  <li>\n                    <img src=\"assets/img/superbox/superbox-thumb-6.jpg\" alt=\"img\" width=\"50\">\n                  </li>\n                  <li>\n                    <img src=\"assets/img/superbox/superbox-thumb-5.jpg\" alt=\"img\" width=\"50\">\n                  </li>\n                  <li>\n                    <img src=\"assets/img/superbox/superbox-thumb-7.jpg\" alt=\"img\" width=\"50\">\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li>\n              <div class=\"smart-timeline-icon\">\n                <i class=\"fa fa-pencil\"></i>\n              </div>\n              <div class=\"smart-timeline-time\">\n                <small>12 Mar, 2013</small>\n              </div>\n              <div class=\"smart-timeline-content\">\n                <p>\n                  <a (click)=\"(null)\"><strong>Nabi Resource Report</strong></a>\n                </p>\n                <p>\n                  Ean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.\n                </p>\n                <a (click)=\"(null)\" class=\"btn btn-xs btn-default\">Read more</a>\n              </div>\n            </li>\n            <li class=\"text-center\">\n              <a (click)=\"(null)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-arrow-down text-muted\"></i> LOAD MORE</a>\n            </li>\n          </ul>\n        </div>\n        <!-- END Timeline Content -->\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=72.map