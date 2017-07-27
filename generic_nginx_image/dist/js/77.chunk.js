webpackJsonpac__name_([77],{

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

/***/ 1690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-blog',
        template: __webpack_require__(2292),
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);
exports.BlogComponent = BlogComponent;


/***/ }),

/***/ 1941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var blog_component_1 = __webpack_require__(1690);
var routes = [{
        path: '',
        component: blog_component_1.BlogComponent
    }];
var BlogRoutingModule = (function () {
    function BlogRoutingModule() {
    }
    return BlogRoutingModule;
}());
BlogRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], BlogRoutingModule);
exports.BlogRoutingModule = BlogRoutingModule;


/***/ }),

/***/ 1942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var blog_routing_module_1 = __webpack_require__(1941);
var blog_component_1 = __webpack_require__(1690);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            blog_routing_module_1.BlogRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [blog_component_1.BlogComponent]
    }),
    __metadata("design:paramtypes", [])
], BlogModule);
exports.BlogModule = BlogModule;


/***/ }),

/***/ 2292:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['App Views', 'Blog']\" icon=\"paragraph\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-9\">\n      <div class=\"well padding-10\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-15.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Why Should You Make A Separate Mobile Website for your Business? </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">Andrea McGibbon</a></i></small></h3>\n            <p>\n              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n              <br><br>Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n            <a class=\"btn btn-warning\" (click)=\"(null)\"> Edit </a>\n            <a class=\"btn btn-success\" (click)=\"(null)\"> Publish </a>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-19.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Mums favorite shopping malls in USA </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">Andrea McGibbon</a></i></small></h3>\n            <p>\n              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n              <br><br>Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-24.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Best (and Basic) Practices of Mobile Web Design </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">Andrea McGibbon</a></i></small></h3>\n            <p>\n              With the plethora of smartphones, mobile phones, and tablets available on the market today, research suggests that mobile devices will soon overtake PCs and laptops in a year. More and more,different platforms are made available for all types of consumers to access the web, even including TVs and gaming consoles.\n              <br><br>\n              And all this in rapid-fire turnover&#x2014;new models and technologies quickly coming and going like fashion trends. So much so that any website that is not mobile friendly cannot claim to be user-friendly anymore. Increasingly, web developers and designers utilize fluid layouts allowing users to browse across different platforms.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"assets/img/superbox/superbox-full-7.jpg\" class=\"img-responsive\" alt=\"assets/img\">\n            <ul class=\"list-inline padding-10\">\n              <li>\n                <i class=\"fa fa-calendar\"></i>\n                <a (click)=\"(null)\"> March 12, 2015 </a>\n              </li>\n              <li>\n                <i class=\"fa fa-comments\"></i>\n                <a (click)=\"(null)\"> 38 Comments </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-8 padding-left-0\">\n            <h3 class=\"margin-top-0\"><a (click)=\"(null)\"> Responsive Design: Best Practices for Designing a Website </a><br><small class=\"font-xs\"><i>Published by <a (click)=\"(null)\">Andrea McGibbon</a></i></small></h3>\n            <p>\n              The term Responsive design means developing a website in a way that adapts all the computer screen resolutions. Particularly this concept allows a 4 column layout that is 1292px wide, on 1025px wide screen that is divided into 2 columns automatically. It is adaptable for android phones and tablet screens. This designing method is known as &#x201C;responsive web design&#x201D;\n              <br><br>\n              Responsive designing is a different concept from traditional web designing, so the question arises how you should build a good responsive website. Here is a general practices that can help you to build a responsive website design.\n              <br><br>\n            </p>\n            <a class=\"btn btn-primary\" (click)=\"(null)\"> Read more </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-search\"></i> Blog Search...</h5>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\">\n                                        <i class=\"fa fa-search\"></i>\n                                    </button> </span>\n        </div>\n        <!-- /input-group -->\n      </div>\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-tags\"></i> Popular Tags:</h5>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Windows 8</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">C#</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Windows Forms</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">WPF</span></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-6\">\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Bootstrap</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Joomla!</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">CMS</span></a>\n              </li>\n              <li>\n                <a href=\"\"><span class=\"badge badge-info\">Java</span></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-thumbs-o-up\"></i> Follow Us!</h5>\n        <ul class=\"no-padding no-margin\">\n          <p class=\"no-margin\">\n            <a title=\"Facebook\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-facebook fa-stack-1x\"></i></span></a>\n            <a title=\"Twitter\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x\"></i></span></a>\n            <a title=\"Google+\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-google-plus fa-stack-1x\"></i></span></a>\n            <a title=\"Linkedin\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x\"></i></span></a>\n            <a title=\"GitHub\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-github fa-stack-1x\"></i></span></a>\n            <a title=\"Bitbucket\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-bitbucket fa-stack-1x\"></i></span></a>\n          </p>\n        </ul>\n      </div>\n      <!-- /well -->\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-fire\"></i> Popular Posts:</h5>\n        <ul class=\"no-padding list-unstyled\">\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-0\">WPF vs. Windows Forms-Which is better?</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-top-5 display-block\">How to create responsive website with Bootstrap?</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">The best Joomla! templates 2014</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">ASP .NET cms list</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">C# Hello, World! program</a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"margin-top-5\">Java random generator</a>\n          </li>\n        </ul>\n      </div>\n      <!-- /well -->\n      <!-- /well -->\n      <div class=\"well padding-10\">\n        <h5 class=\"margin-top-0\"><i class=\"fa fa-video-camera\"></i> Featured Videos:</h5>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <ul class=\"list-group no-margin\">\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">15</span> Photograph </a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">30</span> Life style </a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">9</span> Food </a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"\"> <span class=\"badge pull-right\">4</span> Travel world </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"margin-top-10\">\n              <iframe allowfullscreen frameborder=\"0\" height=\"210\"\n                      mozallowfullscreen=\"\"\n                      src=\"https://player.vimeo.com/video/87025094\"\n                      webkitallowfullscreen=\"\"\n                      width=\"100%\"></iframe>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /well -->\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=77.map