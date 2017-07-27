webpackJsonpac__name_([75],{

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

/***/ 1692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var PostViewComponent = (function () {
    function PostViewComponent() {
    }
    PostViewComponent.prototype.ngOnInit = function () {
    };
    return PostViewComponent;
}());
PostViewComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-post-view',
        template: __webpack_require__(2294),
    }),
    __metadata("design:paramtypes", [])
], PostViewComponent);
exports.PostViewComponent = PostViewComponent;


/***/ }),

/***/ 1945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var post_view_component_1 = __webpack_require__(1692);
var routes = [{
        path: '',
        component: post_view_component_1.PostViewComponent
    }];
var PostViewRoutingModule = (function () {
    function PostViewRoutingModule() {
    }
    return PostViewRoutingModule;
}());
PostViewRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], PostViewRoutingModule);
exports.PostViewRoutingModule = PostViewRoutingModule;


/***/ }),

/***/ 1946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var post_view_routing_module_1 = __webpack_require__(1945);
var post_view_component_1 = __webpack_require__(1692);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var PostViewModule = (function () {
    function PostViewModule() {
    }
    return PostViewModule;
}());
PostViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            post_view_routing_module_1.PostViewRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [post_view_component_1.PostViewComponent]
    }),
    __metadata("design:paramtypes", [])
], PostViewModule);
exports.PostViewModule = PostViewModule;


/***/ }),

/***/ 2294:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" data-sparkline-container=\"\" data-easy-pie-chart-container=\"\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Other Pages', 'Forum Layout']\" icon=\"picture-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well\">\n        <table class=\"table table-striped table-forum\">\n          <thead>\n          <tr>\n            <th colspan=\"2\"><a [routerLink]=\"['../general-view']\"> Projects </a> &gt; <a [routerLink]=\"['app-views/forum-topic-demo']\">Business\n              Requirement Docs </a> &gt; Nam quam nunc blandit vel\n            </th>\n          </tr>\n          </thead>\n          <tbody>\n          <!-- Post -->\n          <tr>\n            <td class=\"text-center\"><a [routerLink]=\"['/profile']\"><img alt=\"\" src=\"assets/img/flags/us.png\"> &#xA0;\n              <strong>John Doe</strong></a></td>\n            <td>on <em>Jan 1, 2014 - 12:00am</em></td>\n          </tr>\n          <tr>\n            <td class=\"text-center\" style=\"width: 12%;\">\n              <div class=\"push-bit\">\n                <a [routerLink]=\"['/profile']\"> <img src=\"assets/img/avatars/sunny.png\" width=\"50\" alt=\"avatar\" class=\"online\"> </a>\n              </div>\n              <small>473 Posts</small>\n            </td>\n            <td>\n              <p>\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean\n                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend\n                ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus\n                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n              </p><h5>Forecast Pie</h5><span class=\"sparkline display-inline margin-bottom-10\" data-sparkline-type=\"pie\" data-sparkline-offset=\"90\" data-sparkline-piesize=\"150px\"> 33,20,10 </span>\n\n              <p>\n                Fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet\n                a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer\n                tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend\n                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam\n                lorem ante, dapibus in, viv.\n              </p><em>- John Doe\n              <br>\n              CEO, SmartAdmin</em></td>\n          </tr>\n          <!-- end Post -->\n          <!-- Post -->\n          <tr>\n            <td class=\"text-center\"><a [routerLink]=\"['/profile']\"><img alt=\"\" src=\"assets/img/flags/es.png\"> &#xA0;\n              <strong>Sadi Orlaf</strong></a></td>\n            <td>on <em>Jan 1, 2014 - 12:00am</em></td>\n          </tr>\n          <tr>\n            <td class=\"text-center\" style=\"width: 12%;\">\n              <div class=\"push-bit\">\n                <a [routerLink]=\"['/profile']\"> <img src=\"assets/img/avatars/5.png\" width=\"50\" alt=\"avatar\" class=\"offline\"> </a>\n              </div>\n              <small>473 Posts</small>\n            </td>\n            <td>\n              <p>\n                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,\n                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis\n                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean\n                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend\n                ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus\n                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n              </p><em>- Sadi Orlaf\n              <br>\n              Executive, SmartAdmin</em>\n\n              <div class=\"forum-attachment\">\n                2 attachment(s) &#x2014; <a href=\"\"> Download all attachments</a>\n                <ul class=\"list-inline margin-top-10\">\n                  <li class=\"well well-sm padding-5\">\n                    <strong>rocketlaunch.jpg</strong>\n                    <br>\n                    400 kb\n                    <br>\n                    <a href=\"\"> Download</a> | <a href=\"\"> View</a>\n                  </li>\n                  <li class=\"well well-sm padding-5\">\n                    <strong>budget.xsl</strong>\n                    <br>\n                    400 kb\n                    <br>\n                    <a href=\"\"> Download</a> | <a href=\"\"> Share</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <!-- end Post -->\n          <!-- Post -->\n          <tr>\n            <td class=\"text-center\"><a [routerLink]=\"['/profile']\"><img alt=\"\" src=\"assets/img/flags/us.png\"> &#xA0;\n              <strong>Me</strong></a></td>\n            <td><em>Today</em></td>\n          </tr>\n          <tr>\n            <td class=\"text-center\" style=\"width: 12%;\">\n              <div class=\"push-bit\">\n                <a [routerLink]=\"['/profile']\"> <img src=\"assets/img/avatars/sunny.png\" width=\"50\" alt=\"avatar\" class=\"online\"> </a>\n              </div>\n              <small>473 Posts</small>\n            </td>\n            <td>\n              <div id=\"forumPost\" data-smart-summernote-editor=\"\" data-height=\"180\"></div>\n              <button class=\"btn btn-primary margin-top-10\">\n                Post\n              </button>\n              <button class=\"btn btn-success margin-top-10\">\n                Save for later\n              </button>\n            </td>\n          </tr>\n          <!-- end Post -->\n          </tbody>\n        </table>\n        <div class=\"text-center\">\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"disabled\">\n              <a href=\"\">Prev</a>\n            </li>\n            <li class=\"active\">\n              <a href=\"\">1</a>\n            </li>\n            <li>\n              <a href=\"\">2</a>\n            </li>\n            <li>\n              <a href=\"\">3</a>\n            </li>\n            <li>\n              <a href=\"\">...</a>\n            </li>\n            <li>\n              <a href=\"\">99</a>\n            </li>\n            <li>\n              <a href=\"\">Next</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=75.map