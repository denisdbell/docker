webpackJsonpac__name_([74],{

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

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var TopicViewComponent = (function () {
    function TopicViewComponent() {
    }
    TopicViewComponent.prototype.ngOnInit = function () {
    };
    return TopicViewComponent;
}());
TopicViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-topic-view',
        template: __webpack_require__(2295),
    }),
    __metadata("design:paramtypes", [])
], TopicViewComponent);
exports.TopicViewComponent = TopicViewComponent;


/***/ }),

/***/ 1947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var topic_view_component_1 = __webpack_require__(1693);
var routes = [{
        path: '',
        component: topic_view_component_1.TopicViewComponent
    }];
var TopicViewRoutingModule = (function () {
    function TopicViewRoutingModule() {
    }
    return TopicViewRoutingModule;
}());
TopicViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], TopicViewRoutingModule);
exports.TopicViewRoutingModule = TopicViewRoutingModule;


/***/ }),

/***/ 1948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var topic_view_routing_module_1 = __webpack_require__(1947);
var topic_view_component_1 = __webpack_require__(1693);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var TopicViewModule = (function () {
    function TopicViewModule() {
    }
    return TopicViewModule;
}());
TopicViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            topic_view_routing_module_1.TopicViewRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [topic_view_component_1.TopicViewComponent]
    }),
    __metadata("design:paramtypes", [])
], TopicViewModule);
exports.TopicViewModule = TopicViewModule;


/***/ }),

/***/ 2295:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Forum Layout']\" icon=\"picture-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well\">\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\"><a [routerLink]=\"['../general-view']\"> Projects </a> &gt; Business Requirement Docs</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Topics</th>\n            <th class=\"text-center hidden-xs hidden-sm\" style=\"width: 100px;\">Posts</th>\n            <th class=\"hidden-xs hidden-sm\" style=\"width: 200px;\">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- TR -->\n          <tr class=\"warning\">\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"glyphicon glyphicon-pushpin fa-2x text-danger\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../post-view']\">\n                Welcome message\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr class=\"warning\">\n            <td class=\"text-center\" style=\"width: 40px;\"><i class=\"glyphicon glyphicon-pushpin fa-2x text-danger\"></i></td>\n            <td>\n              <h4><a [routerLink]=\"['../post-view']\">\n                Latest Updates\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Nam quam nunc blandit vel\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Maecenas nec odio et ante tincidun\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Donec sodales sagittis magna\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Sed consequat, leo eget bibendum sodales\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr>\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                Consectetuer adipiscing elit\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr class=\"locked\">\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                This is a locked topic!\n              </a>\n                <small><a [routerLink]=\"['/profile']\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          <!-- TR -->\n          <tr class=\"closed\">\n            <td colspan=\"2\">\n              <h4><a [routerLink]=\"['../post-view']\">\n                This is a closed topic!\n              </a>\n                <small><a href=\"\">John Doe</a> on <em>January 1, 2014</em></small>\n              </h4>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">431</a>\n            </td>\n            <td class=\"text-center hidden-xs hidden-sm\">\n              <a href=\"\">1342</a>\n            </td>\n            <td class=\"hidden-xs hidden-sm\">by\n              <a href=\"\">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          <!-- end TR -->\n          </tbody>\n        </table>\n        <div class=\"text-center\">\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"disabled\"><a href=\"\">Prev</a></li>\n            <li class=\"active\"><a href=\"\">1</a></li>\n            <li><a href=\"\">2</a></li>\n            <li><a href=\"\">3</a></li>\n            <li><a href=\"\">...</a></li>\n            <li><a href=\"\">99</a></li>\n            <li><a href=\"\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=74.map