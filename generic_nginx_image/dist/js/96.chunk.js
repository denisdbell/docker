webpackJsonpac__name_([96],{

/***/ 1949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var routes = [
    {
        path: 'general-view',
        loadChildren: function () { return __webpack_require__.e/* import() */(76).then(__webpack_require__.bind(null, 1944)).then(function (m) { return m.GeneralViewModule; }); }
    },
    {
        path: 'post-view',
        loadChildren: function () { return __webpack_require__.e/* import() */(75).then(__webpack_require__.bind(null, 1946)).then(function (m) { return m.PostViewModule; }); }
    },
    {
        path: 'topic-view',
        loadChildren: function () { return __webpack_require__.e/* import() */(74).then(__webpack_require__.bind(null, 1948)).then(function (m) { return m.TopicViewModule; }); }
    },
];
var ForumRoutingModule = (function () {
    function ForumRoutingModule() {
    }
    return ForumRoutingModule;
}());
ForumRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ForumRoutingModule);
exports.ForumRoutingModule = ForumRoutingModule;


/***/ }),

/***/ 1950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var forum_routing_module_1 = __webpack_require__(1949);
var ForumModule = (function () {
    function ForumModule() {
    }
    return ForumModule;
}());
ForumModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forum_routing_module_1.ForumRoutingModule
        ],
    }),
    __metadata("design:paramtypes", [])
], ForumModule);
exports.ForumModule = ForumModule;


/***/ })

});
//# sourceMappingURL=96.map