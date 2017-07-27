webpackJsonpac__name_([67],{

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

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var GalleryDemoComponent = (function () {
    function GalleryDemoComponent() {
        this.pictures = [
            {
                src: "assets/img/superbox/superbox-thumb-1.jpg",
                img: "assets/img/superbox/superbox-full-1.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-2.jpg",
                img: "assets/img/superbox/superbox-full-2.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-3.jpg",
                img: "assets/img/superbox/superbox-full-3.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-4.jpg",
                img: "assets/img/superbox/superbox-full-4.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-5.jpg",
                img: "assets/img/superbox/superbox-full-5.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Study Time",
            },
            {
                src: "assets/img/superbox/superbox-thumb-6.jpg",
                img: "assets/img/superbox/superbox-full-6.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-7.jpg",
                img: "assets/img/superbox/superbox-full-7.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "New Styla",
            },
            {
                src: "assets/img/superbox/superbox-thumb-8.jpg",
                img: "assets/img/superbox/superbox-full-8.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Cristpta",
            },
            {
                src: "assets/img/superbox/superbox-thumb-9.jpg",
                img: "assets/img/superbox/superbox-full-9.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-10.jpg",
                img: "assets/img/superbox/superbox-full-10.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-11.jpg",
                img: "assets/img/superbox/superbox-full-11.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Elegance",
            },
            {
                src: "assets/img/superbox/superbox-thumb-12.jpg",
                img: "assets/img/superbox/superbox-full-12.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "China Town",
            },
            {
                src: "assets/img/superbox/superbox-thumb-13.jpg",
                img: "assets/img/superbox/superbox-full-13.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Sky Diving",
            },
            {
                src: "assets/img/superbox/superbox-thumb-14.jpg",
                img: "assets/img/superbox/superbox-full-14.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-15.jpg",
                img: "assets/img/superbox/superbox-full-15.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-16.jpg",
                img: "assets/img/superbox/superbox-full-16.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-17.jpg",
                img: "assets/img/superbox/superbox-full-17.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Snowpine",
            },
            {
                src: "assets/img/superbox/superbox-thumb-18.jpg",
                img: "assets/img/superbox/superbox-full-18.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-19.jpg",
                img: "assets/img/superbox/superbox-full-19.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme",
            },
            {
                src: "assets/img/superbox/superbox-thumb-20.jpg",
                img: "assets/img/superbox/superbox-full-20.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Dragon Fly",
            },
            {
                src: "assets/img/superbox/superbox-thumb-21.jpg",
                img: "assets/img/superbox/superbox-full-21.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Kinds Road",
            },
            {
                src: "assets/img/superbox/superbox-thumb-22.jpg",
                img: "assets/img/superbox/superbox-full-22.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Tokyo",
            },
            {
                src: "assets/img/superbox/superbox-thumb-23.jpg",
                img: "assets/img/superbox/superbox-full-23.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Rome",
            },
            {
                src: "assets/img/superbox/superbox-thumb-24.jpg",
                img: "assets/img/superbox/superbox-full-24.jpg",
                alt: "My first photoshop layer mask on a high end PSD template theme", title: "Traning",
            }
        ];
    }
    GalleryDemoComponent.prototype.ngOnInit = function () {
    };
    GalleryDemoComponent.prototype.onDelete = function (picture) {
        console.log('GalleryDemoComponent onDelete', picture);
    };
    GalleryDemoComponent.prototype.onEdit = function (picture) {
        console.log('GalleryDemoComponent onEdit', picture);
    };
    return GalleryDemoComponent;
}());
GalleryDemoComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-gallery-demo',
        template: __webpack_require__(2296),
    }),
    __metadata("design:paramtypes", [])
], GalleryDemoComponent);
exports.GalleryDemoComponent = GalleryDemoComponent;


/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var gallery_demo_component_1 = __webpack_require__(1694);
var routes = [{
        path: '',
        component: gallery_demo_component_1.GalleryDemoComponent
    }];
var GalleryDemoRoutingModule = (function () {
    function GalleryDemoRoutingModule() {
    }
    return GalleryDemoRoutingModule;
}());
GalleryDemoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], GalleryDemoRoutingModule);
exports.GalleryDemoRoutingModule = GalleryDemoRoutingModule;


/***/ }),

/***/ 1952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var gallery_demo_routing_module_1 = __webpack_require__(1951);
var gallery_demo_component_1 = __webpack_require__(1694);
var gallery_module_1 = __webpack_require__(2185);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var GalleryDemoModule = (function () {
    function GalleryDemoModule() {
    }
    return GalleryDemoModule;
}());
GalleryDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            gallery_demo_routing_module_1.GalleryDemoRoutingModule,
            gallery_module_1.SmartadminGalleryModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
        ],
        declarations: [gallery_demo_component_1.GalleryDemoComponent]
    }),
    __metadata("design:paramtypes", [])
], GalleryDemoModule);
exports.GalleryDemoModule = GalleryDemoModule;


/***/ }),

/***/ 2184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.deleteRequest = new core_1.EventEmitter();
        this.editRequest = new core_1.EventEmitter();
    }
    GalleryComponent.prototype.activate = function (picture) {
        this.pictures.filter(function (it) { return it.active && it != picture; }).map(this.deactivate);
        if (picture.active) {
            this.deactivate(picture);
            this.current = null;
        }
        else {
            picture.active = true;
            picture.state = this.current ? 'stay' : 'in';
            this.current = picture;
        }
    };
    GalleryComponent.prototype.deactivate = function (picture) {
        picture.active = false;
        picture.state = 'out';
    };
    GalleryComponent.prototype.deletePicture = function (picture) {
        this.deleteRequest.emit(picture);
    };
    GalleryComponent.prototype.editPicture = function (picture) {
        this.editRequest.emit(picture);
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.pictures.forEach(function (it) {
            it.active = false;
            it.state = 'out';
        });
    };
    return GalleryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GalleryComponent.prototype, "pictures", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GalleryComponent.prototype, "deleteRequest", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GalleryComponent.prototype, "editRequest", void 0);
GalleryComponent = __decorate([
    core_1.Component({
        selector: 'sa-gallery',
        styles: ["\n    .superbox-show.active{\n  display: block !important;\n    }\n\n"],
        template: "\n    <div class=\"superbox\">\n      <div  >      \n          <template ngFor let-item=\"$implicit\" [ngForOf]=\"pictures\"><!--\n          --><div  \n             [@slideToggle]=\"item.state\"\n           class=\"superbox-list\" (click)=\"activate(item)\">\n              <img [src]=\"item.src\" [alt]=\"item.alt\" [title]=\"item.title\" class=\"superbox-img\"/>\n             </div><!--\n          --><div class=\"superbox-show\" [class.active]=\"item.active\" [@viewportToggle]=\"item.state\">\n              <img src=\"{{item.img}}\" *ngIf=\"item.active\" [@fadeToggle]=\"item.state\" class=\"superbox-current-img\">\n              <div id=\"imgInfoBox\" class=\"superbox-imageinfo inline-block\">\n                <h1>{{item.title}}</h1><span>\n                <p><em>{{item.img}}</em></p>\n                <p class=\"superbox-img-description\">{{item.alt}}</p>\n                <p>\n                  <a (click)=\"editPicture(item)\" class=\"btn btn-primary btn-sm\">Edit Image</a> \n                  <a (click)=\"deletePicture(item)\" class=\"btn btn-danger btn-sm\">Delete</a>\n                  </p></span> \n              </div>\n             \n              <div class=\"superbox-close txt-color-white\" (click)=\"deactivate(item)\"><i class=\"fa fa-times fa-lg\"></i></div>\n            </div\n            ></template>\n        <div class=\"superbox-float\" ></div>\n      </div>\n    </div>\n  ",
        animations: [
            core_1.trigger('slideToggle', [
                core_1.state('out', core_1.style({
                    backgroundColor: '#eee',
                })),
                core_1.state('in', core_1.style({
                    backgroundColor: '#cfd8dc',
                })),
                core_1.transition('out => in', core_1.animate('100ms ease-in')),
                core_1.transition('in => out', core_1.animate('100ms ease-out'))
            ]),
            core_1.trigger('viewportToggle', [
                core_1.state('out', core_1.style({
                    height: 0,
                })),
                core_1.state('in', core_1.style({
                    height: '*',
                })),
                core_1.state('stay', core_1.style({
                    height: '*',
                })),
                core_1.transition('out => in', [
                    core_1.style({
                        display: 'block'
                    }),
                    core_1.animate('250ms ease-out')
                ]),
                core_1.transition('in => stay', [
                    core_1.animate('0ms ease-out')
                ]),
                core_1.transition('* => out', core_1.animate('250ms ease-in '))
            ]),
            core_1.trigger('fadeToggle', [
                core_1.state('out', core_1.style({
                    opacity: 0,
                })),
                core_1.state('in', core_1.style({
                    opacity: 1,
                })),
                core_1.state('stay', core_1.style({
                    opacity: 1,
                })),
                core_1.transition('out <=> *', [
                    core_1.animate('250ms 250ms ease-out')
                ]),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;


/***/ }),

/***/ 2185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var gallery_component_1 = __webpack_require__(2184);
var SmartadminGalleryModule = (function () {
    function SmartadminGalleryModule() {
    }
    return SmartadminGalleryModule;
}());
SmartadminGalleryModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [gallery_component_1.GalleryComponent],
        exports: [gallery_component_1.GalleryComponent],
    }),
    __metadata("design:paramtypes", [])
], SmartadminGalleryModule);
exports.SmartadminGalleryModule = SmartadminGalleryModule;


/***/ }),

/***/ 2296:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row hidden-mobile\">\n    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n      <h1 class=\"page-title txt-color-blueDark\">\n        <i class=\"fa-fw fa fa-picture-o\"></i>\n        Gallery <span>&gt;\n\t\t\tSmart Responsive gallery </span></h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-right\">\n      <div class=\"page-title\">\n        <a (click)=\"(null)\" class=\"btn btn-default\">Upload</a>\n        <a (click)=\"(null)\" class=\"btn btn-default\">Load Library</a>\n      </div>\n    </div>\n  </div>\n  <!-- row -->\n  <div class=\"row\">\n    <!-- SuperBox -->\n      <sa-gallery class=\"col-sm-12\" [pictures]=\"pictures\" (deleteReques)=\"onDelete(picture)\" (editReques)=\"onEdit(picture)\"></sa-gallery>\n    <!-- /SuperBox -->\n  </div>\n  <!-- end row -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=67.map