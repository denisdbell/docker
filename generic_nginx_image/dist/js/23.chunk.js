webpackJsonpac__name_([23],{

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ui_elements_routing_1 = __webpack_require__(2083);
var UiElementsModule = (function () {
    function UiElementsModule() {
    }
    return UiElementsModule;
}());
UiElementsModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            ui_elements_routing_1.routing,
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], UiElementsModule);
exports.UiElementsModule = UiElementsModule;


/***/ }),

/***/ 2083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
exports.routes = [
    {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
    },
    { path: 'buttons', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(46).then((function (require) { resolve(__webpack_require__(2067)['ButtonsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Buttons' } },
    { path: 'grid', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(41).then((function (require) { resolve(__webpack_require__(2071)['GridModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Grid' } },
    { path: 'typography', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(40).then((function (require) { resolve(__webpack_require__(2081)['TypographyModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Typography' } },
    { path: 'tree-views', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(42).then((function (require) { resolve(__webpack_require__(2079)['TreeViewsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Tree Views' } },
    { path: 'nestable-lists', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(43).then((function (require) { resolve(__webpack_require__(2077)['NestableListsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Nestable Lists' } },
    { path: 'jquery-ui', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(34).then((function (require) { resolve(__webpack_require__(2075)['JqueryUiShowcaseModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Jquery Ui' } },
    { path: 'general', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(45).then((function (require) { resolve(__webpack_require__(2069)['GeneralElementsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'General Elements' } },
    { path: 'icons', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(36).then((function (require) { resolve(__webpack_require__(2073)['IconsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }, data: { pageTitle: 'Icons' } },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ })

});
//# sourceMappingURL=23.map