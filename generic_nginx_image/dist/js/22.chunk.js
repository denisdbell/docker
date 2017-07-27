webpackJsonpac__name_([22],{

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var auth_routing_1 = __webpack_require__(1969);
var auth_component_1 = __webpack_require__(1968);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            auth_routing_1.routing,
        ],
        declarations: [auth_component_1.AuthComponent]
    }),
    __metadata("design:paramtypes", [])
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ 1968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'app-auth',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);
exports.AuthComponent = AuthComponent;


/***/ }),

/***/ 1969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
exports.routes = [
    {
        path: 'login',
        loadChildren: function () { return __webpack_require__.e/* import() */(35).then(__webpack_require__.bind(null, 1965)).then(function (m) { return m.LoginModule; }); }
    },
    {
        path: 'register',
        loadChildren: function () { return __webpack_require__.e/* import() */(33).then(__webpack_require__.bind(null, 1967)).then(function (m) { return m.RegisterModule; }); }
    },
    {
        path: 'forgot-password',
        loadChildren: function () { return __webpack_require__.e/* import() */(78).then(__webpack_require__.bind(null, 1961)).then(function (m) { return m.ForgotModule; }); }
    },
    {
        path: 'locked',
        loadChildren: function () { return __webpack_require__.e/* import() */(66).then(__webpack_require__.bind(null, 1963)).then(function (m) { return m.LockedModule; }); }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ })

});
//# sourceMappingURL=22.map