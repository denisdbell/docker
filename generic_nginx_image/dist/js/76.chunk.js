webpackJsonpac__name_([76],{

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

/***/ 1691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var GeneralViewComponent = (function () {
    function GeneralViewComponent() {
    }
    GeneralViewComponent.prototype.ngOnInit = function () {
    };
    return GeneralViewComponent;
}());
GeneralViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-general-view',
        template: __webpack_require__(2293),
    }),
    __metadata("design:paramtypes", [])
], GeneralViewComponent);
exports.GeneralViewComponent = GeneralViewComponent;


/***/ }),

/***/ 1943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var general_view_component_1 = __webpack_require__(1691);
var routes = [{
        path: '',
        component: general_view_component_1.GeneralViewComponent
    }];
var GeneralViewRoutingModule = (function () {
    function GeneralViewRoutingModule() {
    }
    return GeneralViewRoutingModule;
}());
GeneralViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], GeneralViewRoutingModule);
exports.GeneralViewRoutingModule = GeneralViewRoutingModule;


/***/ }),

/***/ 1944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var general_view_routing_module_1 = __webpack_require__(1943);
var general_view_component_1 = __webpack_require__(1691);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var GeneralViewModule = (function () {
    function GeneralViewModule() {
    }
    return GeneralViewModule;
}());
GeneralViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            general_view_routing_module_1.GeneralViewRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [general_view_component_1.GeneralViewComponent]
    }),
    __metadata("design:paramtypes", [])
], GeneralViewModule);
exports.GeneralViewModule = GeneralViewModule;


/***/ }),

/***/ 2293:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Forum Layout']\" icon=\"picture-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well\">\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\">Introduction</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-globe fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Hello, welcome to SmartAdmin Forum!\n              </a>\n                <small>You can introduce yourself here</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-microphone fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                News &amp; Announcements\n              </a>\n                <small>Latest news and reports</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-pencil fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Forum Rules\n              </a>\n                <small>Please read carefully our forum rules before you post</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\">Projects</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-table fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Business Requirement Docs\n              </a>\n                <small>Latest BRD docs</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-bar-chart-o fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Project Discussions\n              </a>\n                <small>Post all project related topics here</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-user fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Clients\n              </a>\n                <small>Client forum posts</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-dollar fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Budget Meetings\n              </a>\n                <small>Project budget discussions</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\">Support</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-book fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                How to...\n              </a>\n                <small>Maecenas nec odio et</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-question-circle fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                Questions and FAQs\n              </a>\n                <small>Luctus pulvinar hendrerit id lorem</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"fa fa-user-md fa-2x text-muted\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../topic-view']\">\n                User Guideline\n              </a>\n                <small>Cras dapibus vivamus elementum semper nisi</small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <!-- a blank row to get started -->\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=76.map