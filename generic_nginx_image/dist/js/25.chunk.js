webpackJsonpac__name_([25],{

/***/ 1335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_showcase_routing_1 = __webpack_require__(2030);
var FormsShowcaseModule = (function () {
    function FormsShowcaseModule() {
    }
    return FormsShowcaseModule;
}());
FormsShowcaseModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            forms_showcase_routing_1.routing,
        ],
        providers: [],
        entryComponents: []
    }),
    __metadata("design:paramtypes", [])
], FormsShowcaseModule);
exports.FormsShowcaseModule = FormsShowcaseModule;


/***/ }),

/***/ 2030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
exports.routes = [
    { path: 'editors',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(38).then((function (require) { resolve(__webpack_require__(1984)['BootstrapEditorsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Bootstrap Editors' }
    },
    { path: 'bootstrap-elements',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(49).then((function (require) { resolve(__webpack_require__(1986)['BootstrapElementsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Bootstrap Elements' }
    },
    {
        path: 'bootstrap-validation',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(32).then((function (require) { resolve(__webpack_require__(1989)['BootstrapValidationModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Bootstrap Validation' }
    },
    {
        path: 'dropzone',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(44).then((function (require) { resolve(__webpack_require__(1997)['DropzoneShowcaseModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Dropzone' }
    },
    {
        path: 'elements',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(48).then((function (require) { resolve(__webpack_require__(1999)['FormElementsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Elements' }
    },
    {
        path: 'layouts',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(31).then((function (require) { resolve(__webpack_require__(2005)['FormLayoutsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Layouts' }
    },
    {
        path: 'plugins',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(39).then((function (require) { resolve(__webpack_require__(2012)['FormPluginsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Plugins' }
    },
    {
        path: 'validation',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(47).then((function (require) { resolve(__webpack_require__(2015)['FormValidationModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Validation' }
    },
    {
        path: 'image-cropping',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(30).then((function (require) { resolve(__webpack_require__(2020)['ImageEditorModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Image Cropping' }
    },
    {
        path: 'wizards',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(37).then((function (require) { resolve(__webpack_require__(2028)['WizardsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: { pageTitle: 'Wizards' }
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ })

});
//# sourceMappingURL=25.map