webpackJsonpac__name_([24],{

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var miscellaneous_routing_1 = __webpack_require__(2060);
var MiscellaneousModule = (function () {
    function MiscellaneousModule() {
    }
    return MiscellaneousModule;
}());
MiscellaneousModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            miscellaneous_routing_1.routing,
        ],
        declarations: []
    }),
    __metadata("design:paramtypes", [])
], MiscellaneousModule);
exports.MiscellaneousModule = MiscellaneousModule;


/***/ }),

/***/ 2060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
exports.routes = [
    {
        path: '',
        redirectTo: 'blank'
    },
    {
        path: 'blank',
        loadChildren: function () { return __webpack_require__.e/* import() */(59).then(__webpack_require__.bind(null, 2045)).then(function (m) { return m.BlankModule; }); }
    },
    {
        path: 'ckeditor',
        loadChildren: function () { return __webpack_require__.e/* import() */(52).then(__webpack_require__.bind(null, 2047)).then(function (m) { return m.CkeditorModule; }); }
    },
    {
        path: 'email-template',
        loadChildren: function () { return __webpack_require__.e/* import() */(58).then(__webpack_require__.bind(null, 2049)).then(function (m) { return m.EmailTemplateModule; }); }
    },
    {
        path: 'error404',
        loadChildren: function () { return __webpack_require__.e/* import() */(57).then(__webpack_require__.bind(null, 2051)).then(function (m) { return m.Error404Module; }); }
    },
    {
        path: 'error500',
        loadChildren: function () { return __webpack_require__.e/* import() */(56).then(__webpack_require__.bind(null, 2053)).then(function (m) { return m.Error500Module; }); }
    },
    {
        path: 'invoice',
        loadChildren: function () { return __webpack_require__.e/* import() */(55).then(__webpack_require__.bind(null, 2055)).then(function (m) { return m.InvoiceModule; }); }
    },
    {
        path: 'pricing-tables',
        loadChildren: function () { return __webpack_require__.e/* import() */(54).then(__webpack_require__.bind(null, 2057)).then(function (m) { return m.PricingTablesModule; }); }
    },
    {
        path: 'search',
        loadChildren: function () { return __webpack_require__.e/* import() */(53).then(__webpack_require__.bind(null, 2059)).then(function (m) { return m.SearchModule; }); }
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ })

});
//# sourceMappingURL=24.map