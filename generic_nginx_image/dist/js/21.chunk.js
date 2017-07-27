webpackJsonpac__name_([21],{

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var smartadmin_intel_routing_1 = __webpack_require__(2064);
var app_layouts_component_1 = __webpack_require__(1742);
var prebuilt_skins_component_1 = __webpack_require__(1743);
var SmartadminIntelModule = (function () {
    function SmartadminIntelModule() {
    }
    return SmartadminIntelModule;
}());
SmartadminIntelModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_layouts_component_1.AppLayoutsComponent,
            prebuilt_skins_component_1.PrebuiltSkinsComponent
        ],
        imports: [
            smartadmin_intel_routing_1.routing
        ],
        entryComponents: [app_layouts_component_1.AppLayoutsComponent, prebuilt_skins_component_1.PrebuiltSkinsComponent],
    }),
    __metadata("design:paramtypes", [])
], SmartadminIntelModule);
exports.SmartadminIntelModule = SmartadminIntelModule;


/***/ }),

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

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var AppLayoutsComponent = (function () {
    function AppLayoutsComponent() {
    }
    AppLayoutsComponent.prototype.ngOnInit = function () {
    };
    return AppLayoutsComponent;
}());
AppLayoutsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-app-layouts',
        template: __webpack_require__(2370),
    }),
    __metadata("design:paramtypes", [])
], AppLayoutsComponent);
exports.AppLayoutsComponent = AppLayoutsComponent;


/***/ }),

/***/ 1743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var PrebuiltSkinsComponent = (function () {
    function PrebuiltSkinsComponent() {
    }
    PrebuiltSkinsComponent.prototype.ngOnInit = function () {
    };
    return PrebuiltSkinsComponent;
}());
PrebuiltSkinsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-prebuilt-skins',
        template: __webpack_require__(2371),
    }),
    __metadata("design:paramtypes", [])
], PrebuiltSkinsComponent);
exports.PrebuiltSkinsComponent = PrebuiltSkinsComponent;


/***/ }),

/***/ 2064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var app_layouts_component_1 = __webpack_require__(1742);
var prebuilt_skins_component_1 = __webpack_require__(1743);
exports.routes = [
    { path: '', redirectTo: 'app-layouts', pathMatch: 'full' },
    { path: 'app-layouts', component: app_layouts_component_1.AppLayoutsComponent },
    { path: 'prebuilt-skins', component: prebuilt_skins_component_1.PrebuiltSkinsComponent }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ }),

/***/ 2370:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <!-- Bread crumb is created dynamically -->\n  <!-- row -->\n  <div class=\"row\">\n\n    <!-- col -->\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h1 class=\"page-title txt-color-blueDark text-center well\">\n\n        <!-- PAGE HEADER -->\n        SmartAdmin Layout Options<br>\n        <small class=\"text-success\">Morph SmartAdmin to your need! The layout of SmartAdmin is extreamly flexible</small>\n      </h1>\n\n    </div>\n    <!-- end col -->\n\n  </div>\n  <!-- end row -->\n\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n\n  <!-- widget grid -->\n  <section id=\"widget-grid\" class=\"\">\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Layout type \"<strong>Navigation Minified</strong>\" <br>\n            <small>\n              Add the following class(s) to body tag\n              <code>.minified</code>\n            </small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class=\"label label-default\">.fixed-navigation</span>\n          <span class=\"label label-default\">.container</span>\n          <span class=\"label label-default\">.fixed-page-footer</span>\n          <span class=\"label label-default\">.fixed-header</span>\n          <span class=\"label label-default\">.fixed-ribbon</span>\n          <span class=\"label label-default\">.smart-rtl</span>\n          <br>\n          <br>\n\n          <img src=\"assets/img/demo/layout-skins/layout-collapse.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Layout type \"<strong>Hidden Navigation</strong>\" <br>\n            <small>Add the following class(s) to body tag <code>.hidden-menu</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class=\"label label-default\">.fixed-navigation</span>\n          <span class=\"label label-default\">.container</span>\n          <span class=\"label label-default\">.fixed-page-footer</span>\n          <span class=\"label label-default\">.fixed-header</span>\n          <span class=\"label label-default\">.fixed-ribbon</span>\n          <span class=\"label label-default\">.smart-rtl</span>\n          <br>\n          <br>\n          <img src=\"assets/img/demo/layout-skins/layout-hidden.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Layout type \"<strong>Menu on Top with center content</strong>\" <br>\n            <small>Add the following class(s) to body tag <code>.top-navigation .container</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class=\"label label-default\">.fixed-navigation</span>\n          <span class=\"label label-default\">.fixed-page-footer</span>\n          <span class=\"label label-default\">.fixed-header</span>\n          <span class=\"label label-default\">.fixed-ribbon</span>\n          <span class=\"label label-default\">.smart-rtl</span>\n          <br>\n          <br>\n          <img src=\"assets/img/demo/layout-skins/layout-menutop.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Layout type \"<strong>Center content with minified nav</strong>\" <br>\n            <small>Add the following class(s) to body tag <code>.minified .container</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class=\"label label-default\">.top-navigation</span>\n          <span class=\"label label-default\">.fixed-navigation</span>\n          <span class=\"label label-default\">.fixed-page-footer</span>\n          <span class=\"label label-default\">.fixed-header</span>\n          <span class=\"label label-default\">.fixed-ribbon</span>\n          <span class=\"label label-default\">.smart-rtl</span>\n          <br>\n          <br>\n          <img src=\"assets/img/demo/layout-skins/layout-collapse-minified.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Layout type \"<strong>RTL Layout</strong>\" <br>\n            <small>Add the following class(s) to body tag <code>.smart-rtl</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class=\"label label-default\">.container</span>\n          <span class=\"label label-default\">.hidden-menu</span>\n          <span class=\"label label-default\">.fixed-page-footer</span>\n          <span class=\"label label-default\">.fixed-header</span>\n          <span class=\"label label-default\">.fixed-ribbon</span>\n          <span class=\"label label-default\">.minified</span>\n          <br>\n          <br>\n          <img src=\"assets/img/demo/layout-skins/layout-rtl.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Layout type \"<strong>RTL with Menu on Top</strong>\" <br>\n            <small>Add the following class(s) to body tag <code>.smart-rtl .top-navigation</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class=\"label label-default\">.fixed-navigation</span>\n          <span class=\"label label-default\">.container</span>\n          <span class=\"label label-default\">.fixed-page-footer</span>\n          <span class=\"label label-default\">.fixed-header</span>\n          <span class=\"label label-default\">.fixed-ribbon</span>\n          <br>\n          <br>\n          <img src=\"assets/img/demo/layout-skins/layout-rtl-menutop.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n\n    </div>\n    <!-- end row -->\n\n  </section>\n  <!-- end widget grid -->\n\n\n</div>\n"

/***/ }),

/***/ 2371:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <!-- row -->\n  <div class=\"row\">\n\n    <!-- col -->\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h1 class=\"page-title txt-color-blueDark text-center well\">\n\n        <!-- PAGE HEADER -->\n        SmartAdmin Pre-built Skins<br>\n        <small class=\"text-primary\">Don't like the default look of SmartAdmin? Not a problem! SmartAdmin comes with 6 prebuilt skins to choose from.</small>\n      </h1>\n\n    </div>\n    <!-- end col -->\n\n  </div>\n  <!-- end row -->\n\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n\n  <!-- widget grid -->\n  <section id=\"widget-grid\" class=\"\">\n\n    <!-- row -->\n\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Skin name \"<strong>Glass</strong>\" <br>\n            <small>Add the following class to body tag <code>.smart-style-5</code></small>\n          </h5>\n          <img src=\"assets/img/demo/layout-skins/skin-glass.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Skin name \"<strong>Google</strong>\" <br>\n            <small>Add the following class to body tag <code>.smart-style-3</code></small>\n          </h5>\n          <img src=\"assets/img/demo/layout-skins/skin-google.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Skin name \"<strong>PixelSmash</strong>\" <br>\n            <small>Add the following class to body tag <code>.smart-style-4</code></small>\n          </h5>\n          <img src=\"assets/img/demo/layout-skins/skin-pixel.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Skin name \"<strong>Dark Elegance</strong>\" <br>\n            <small>Add the following class to body tag <code>.smart-style-1</code></small>\n          </h5>\n          <img src=\"assets/img/demo/layout-skins/skin-dark.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <!-- a blank row to get started -->\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Skin name \"<strong>Default</strong>\" <br>\n            <small>Add the following class to body tag <code>.smart-style-0</code></small>\n          </h5>\n          <img src=\"assets/img/demo/layout-skins/skin-default.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- your contents here -->\n        <div class=\"well text-center\">\n          <h5>\n            Skin name \"<strong>Ultra Light</strong>\" <br>\n            <small>Add the following class to body tag <code>.smart-style-2</code></small>\n          </h5>\n          <img src=\"assets/img/demo/layout-skins/skin-ultralight.png\" class=\"img-responsive center-block\" style=\"box-shadow: 0px 0px 3px 0px #919191;\">\n        </div>\n      </div>\n\n    </div>\n    <!-- end row -->\n\n  </section>\n  <!-- end widget grid -->\n\n\n</div>\n"

/***/ })

});
//# sourceMappingURL=21.map