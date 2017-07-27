webpackJsonpac__name_([78],{

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var auth_service_1 = __webpack_require__(738);
var SecretQuestion_1 = __webpack_require__(712);
var notification_service_1 = __webpack_require__(85);
var ForgotComponent = (function () {
    function ForgotComponent(router, authService, notificationService) {
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.formErrors = {};
        this.validUser = false;
        this.userSecretQuestion = new SecretQuestion_1.SecretQuestion;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.checkUser = function () {
        var _this = this;
        this.authService.getUserSecretQuestion(this.userEmail)
            .subscribe(function (secretQuestion) {
            _this.formErrors = {};
            _this.userSecretQuestion = secretQuestion;
            _this.validUser = true;
        }, function (errors) {
            _this.validUser = false;
            _this.formErrors = {};
            if (errors.status == 404) {
                _this.formErrors['userEmail'] = 'Email Address does not exist.';
            }
            console.log(errors);
        });
    };
    ForgotComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard/analytics']);
    };
    ForgotComponent.prototype.submit = function (event) {
        var _this = this;
        event.preventDefault();
        this.authService.requestResetPassword(this.userEmail, this.userSecretQuestionAnswer)
            .subscribe(function () {
            _this.notificationService.smallBox({
                title: "Email has been sent",
                content: "Follow the instructions in the email to reset your password.",
                color: "#739E73",
                timeout: 7000,
                icon: "fa fa-check"
            });
            _this.router.navigate(['/dashboard/analytics']);
        }, function (errors) {
            _this.formErrors = {};
            if (errors.status == 401) {
                _this.formErrors['answer'] = 'Answer does not match.';
            }
        });
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    core_1.Component({
        selector: 'app-forgot',
        template: __webpack_require__(2300),
        styles: [],
        providers: [auth_service_1.AuthService, notification_service_1.NotificationService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _c || Object])
], ForgotComponent);
exports.ForgotComponent = ForgotComponent;
var _a, _b, _c;


/***/ }),

/***/ 1960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var forgot_component_1 = __webpack_require__(1698);
var routes = [{
        path: '',
        component: forgot_component_1.ForgotComponent
    }];
var ForgotRoutingModule = (function () {
    function ForgotRoutingModule() {
    }
    return ForgotRoutingModule;
}());
ForgotRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ForgotRoutingModule);
exports.ForgotRoutingModule = ForgotRoutingModule;


/***/ }),

/***/ 1961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var forgot_routing_module_1 = __webpack_require__(1960);
var forgot_component_1 = __webpack_require__(1698);
var forms_1 = __webpack_require__(23);
var ForgotModule = (function () {
    function ForgotModule() {
    }
    return ForgotModule;
}());
ForgotModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forgot_routing_module_1.ForgotRoutingModule
        ],
        declarations: [forgot_component_1.ForgotComponent]
    }),
    __metadata("design:paramtypes", [])
], ForgotModule);
exports.ForgotModule = ForgotModule;


/***/ }),

/***/ 2300:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <div id=\"logo-group\">\n    <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\"> <span class=\"hidden-mobile hiddex-xs\">Need an account?</span> <a routerLink=\"/auth/register\" class=\"btn btn-danger\">Create account</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form #forgotPasswordForm=\"ngForm\" id=\"login-form\" class=\"smart-form client-form\">\n            <header>\n              Forgot Password\n            </header>\n\n            <fieldset>\n\n              <section>\n                <label class=\"label\">Enter your email address</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-envelope\"></i>\n                  <input type=\"email\" name=\"email\" #email=\"ngModel\" [disabled]=\"validUser\" [(ngModel)]=\"userEmail\" required>\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-envelope txt-color-teal\"></i> Please enter email address for password reset</b></label>\n                <div *ngIf=\"formErrors['userEmail']\" class=\"alert alert-danger\">\n                  {{ formErrors['userEmail'] }}\n                </div>\n              </section>\n              <section *ngIf=\"validUser\">\n                <p>Answer Secret Question <span class=\"text-danger required-field-marker\">*</span></p>\n                <label class=\"label\">{{ userSecretQuestion.question }}</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\" name=\"answer\" [(ngModel)]=\"userSecretQuestionAnswer\" required/>\n                </label>\n                <div *ngIf=\"formErrors['answer']\" class=\"alert alert-danger\">\n                  {{ formErrors['answer'] }}\n                </div>\n                <div class=\"note\">\n                  <a routerLink=\"/auth/login\">I remembered my password!</a>\n                </div>\n              </section>\n\n            </fieldset>\n            <footer>\n              <button (click)=\"cancel()\" class=\"btn\">Cancel</button>\n              <button *ngIf=\"!validUser\" (click)=\"checkUser()\" class=\"btn btn-primary\">Next</button>\n              <button *ngIf=\"validUser\" (click)=\"submit($event)\" class=\"btn btn-primary\" [disabled]=\"!userSecretQuestionAnswer\">\n                <i class=\"fa fa-refresh\"></i> Reset Password\n              </button>\n            </footer>\n          </form>\n\n        </div>\n       </div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ })

});
//# sourceMappingURL=78.map