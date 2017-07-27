webpackJsonpac__name_([61],{

/***/ 1640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents Package Types
 */
var RefundReason = (function (_super) {
    __extends(RefundReason, _super);
    function RefundReason(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.description = data.description;
            _this.code = data.code;
            _this.numericCode = data.numericCode;
        }
        return _this;
    }
    RefundReason.prototype.prepareData = function () {
    };
    return RefundReason;
}(DomainObject_1.DomainObject));
exports.RefundReason = RefundReason;


/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var RefundReason_1 = __webpack_require__(1640);
var abstract_service_1 = __webpack_require__(346);
/**
 * RefundReason service
 *
 * @export
 * @class RefundReasonService
 * @extends {AbstractService}
 */
var RefundReasonService = (function (_super) {
    __extends(RefundReasonService, _super);
    /**
     * Creates an instance of RefundReasonService.
     * @param {Http} http
     * @param {AppProperties} appProps
     *
     * @memberOf RefundReasonService
     */
    function RefundReasonService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    /**
     * Returns an {@link Observable} that emits {@link Array<RefundReason>}
     * @returns {Observable<Array<RefundReason>>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/refund-reasons', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Array<RefundReason>}
     * @param {string} filter
     * @returns {Observable<Array<RefundReason>>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.getByFilter = function (filter) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("filter", filter);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/refund-reasons', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link RefundReason}
     * @param {number} uid
     * @returns {Observable<RefundReason>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.getById = function (uid) {
        return this.http.get(this.apiBaseUrl + '/refund-reason/' + uid, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link RefundReason}
     * @param {RefundReason} refundReason
     * @returns {Observable<RefundReason>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.create = function (refundReason) {
        return this.http.post(this.apiBaseUrl + '/refund-reason', refundReason, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link RefundReason}
     * @param {number} uid
     * @param {RefundReason} refundReason
     * @returns {Observable<RefundReason>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.update = function (uid, refundReason) {
        return this.http.put(this.apiBaseUrl + '/refund-reason/' + uid, refundReason, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link boolean}
     * @param {number} uid
     * @returns {Observable<boolean>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.delete = function (uid) {
        return this.http.delete(this.apiBaseUrl + '/refund-reason/' + uid, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    /**
     * Extracts a {@link RefundReason} from a json string
     * @private
     * @param {Response} res
     * @returns {RefundReason}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.extractOne = function (res) {
        return new RefundReason_1.RefundReason(res.json() || {});
    };
    /**
     * Extracts a {@link Array<RefundReason>} from a json string     *
     * @private
     * @param {Response} res
     * @returns {Array<RefundReason>}
     *
     * @memberOf RefundReasonService
     */
    RefundReasonService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (refundReason) {
                result.push(new RefundReason_1.RefundReason(refundReason));
            });
        }
        return result;
    };
    return RefundReasonService;
}(abstract_service_1.AbstractService));
RefundReasonService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], RefundReasonService);
exports.RefundReasonService = RefundReasonService;
var _a, _b;


/***/ }),

/***/ 1852:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var refund_reason_service_1 = __webpack_require__(1651);
var RefundReason_1 = __webpack_require__(1640);
var base_form_component_1 = __webpack_require__(1422);
/**
 * RefundReason create component
 *
 * @export
 * @class RefundReasonCreateComponent
 * @extends {BaseFormComponent}
 * @implements {OnInit}
 */
var RefundReasonCreateComponent = (function (_super) {
    __extends(RefundReasonCreateComponent, _super);
    /**
     * Creates an instance of RefundReasonCreateComponent.
     * @param {Router} _router
     * @param {RefundReasonService} refundReasonService
     * @param {UnitOfMeasureService} unitOfMeasure
     * @param {PartyService} partyService
     *
     * @memberOf RefundReasonCreateComponent
     */
    function RefundReasonCreateComponent(_router, refundReasonService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.refundReasonService = refundReasonService;
        _this.model = new RefundReason_1.RefundReason();
        _this.validationMessages = {
            'code': {
                'required': 'HS Code is required.'
            },
            'description': {
                'required': 'HS Code Description is required.'
            },
        };
        return _this;
    }
    /**
     * @inheritdoc
     * @memberOf RefundReasonCreateComponent
     */
    RefundReasonCreateComponent.prototype.ngOnInit = function () {
    };
    /**
     * Saves form data and returns to refundReason list
     * @memberOf RefundReasonCreateComponent
     */
    RefundReasonCreateComponent.prototype.saveChangesAndReturn = function () {
        var _this = this;
        console.dir(this.model);
        this.model.prepareData();
        this.refundReasonService.create(this.model).subscribe(function (refundReason) {
            _this.model = refundReason;
            if (_this.notificationDialog) {
                _this.notificationDialog.message = "Refund Reason saved successfully";
                _this.notificationDialog.state.subscribe(function (state) {
                    // if (state == "closed") {
                    _this._router.navigateByUrl('/maintenance/refund-reason/list');
                    // }
                });
                _this.notificationDialog.showDialog();
            }
            else {
                console.error("notificationDialog is undefined or null");
            }
        }, function (errors) {
            _this.handleErrors(errors);
        });
    };
    /**
     * Handles form submit
     * @memberOf RefundReasonCreateComponent
     */
    RefundReasonCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        this.model.prepareData();
        this.refundReasonService.create(this.model).subscribe(function (refundReason) {
            if (_this.notificationDialog) {
                _this.notificationDialog.message = "Refund Reason saved successfully";
                _this.notificationDialog.state.subscribe(function (state) {
                    if (state == "closed") {
                        //this._router.navigateByUrl('/maintenance/refund-reason/' + refundReason.uid + '/edit');
                        _this._router.navigateByUrl('/maintenance/refund-reason/list');
                    }
                });
                _this.notificationDialog.showDialog();
            }
            else {
                console.error("notificationDialog is undefined or null");
            }
        }, function (errors) {
            _this.handleErrors(errors);
        });
    };
    return RefundReasonCreateComponent;
}(base_form_component_1.BaseFormComponent));
RefundReasonCreateComponent = __decorate([
    core_1.Component({
        selector: 'create-refund-reason',
        template: __webpack_require__(2471),
        providers: [
            refund_reason_service_1.RefundReasonService,
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof refund_reason_service_1.RefundReasonService !== "undefined" && refund_reason_service_1.RefundReasonService) === "function" && _b || Object])
], RefundReasonCreateComponent);
exports.RefundReasonCreateComponent = RefundReasonCreateComponent;
var _a, _b;


/***/ }),

/***/ 1853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var router_2 = __webpack_require__(33);
var refund_reason_service_1 = __webpack_require__(1651);
var RefundReason_1 = __webpack_require__(1640);
var base_form_component_1 = __webpack_require__(1422);
/**
 * RefundReason edit component
 * @export
 * @class RefundReasonEditComponent
 * @extends {BaseFormComponent}
 * @implements {OnInit}
 * @implements {DoCheck}
 */
var RefundReasonEditComponent = (function (_super) {
    __extends(RefundReasonEditComponent, _super);
    /**
     * Creates an instance of RefundReasonEditComponent.
     * @param {Router} _router
     * @param {ActivatedRoute} activeRoute
     * @param {RefundReasonService} refundReasonService
     * @param {UnitOfMeasureService} unitOfMeasure
     * @param {PartyService} partyService
     *
     * @memberOf RefundReasonEditComponent
     */
    function RefundReasonEditComponent(_router, activeRoute, refundReasonService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.activeRoute = activeRoute;
        _this.refundReasonService = refundReasonService;
        _this.model = new RefundReason_1.RefundReason();
        _this.validationMessages = {
            'code': {
                'required': 'HS Code is required.'
            },
            'description': {
                'required': 'HS Code Description is required.'
            },
        };
        return _this;
    }
    /**
     * @inheritdoc
     * @memberOf RefundReasonEditComponent
     */
    RefundReasonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.refundReasonId = +params['id']; // (+) converts string 'id' to a number
            _this.refundReasonService.getById(_this.refundReasonId).subscribe(function (refundReason) {
                _this.model = refundReason;
                _this.loadAdditionalData();
            }, function (errors) {
                _this._router.navigateByUrl('/miscellaneous/error404');
            });
        });
    };
    /**
     * Load aditional data for component
     * @private
     * @memberOf RefundReasonEditComponent
     */
    RefundReasonEditComponent.prototype.loadAdditionalData = function () {
    };
    /**
     * Handles form submit
     * @memberOf RefundReasonEditComponent
     */
    RefundReasonEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        this.model.prepareData();
        this.refundReasonService.update(this.model.uid, this.model).subscribe(function (refundReason) {
            _this.model = refundReason;
            if (_this.notificationDialog) {
                _this.notificationDialog.message = "Refund Reason updated successfully";
                _this.notificationDialog.state.subscribe(function (state) {
                    if (state == "closed") {
                        _this._router.navigateByUrl('/maintenance/refund-reason/list');
                    }
                });
                _this.notificationDialog.showDialog();
            }
            else {
                console.error("notificationDialog is undefined or null");
            }
        }, function (errors) {
            _this.handleErrors(errors);
        });
    };
    /**
     * @inheritdoc
     * @memberOf RefundReasonEditComponent
     */
    RefundReasonEditComponent.prototype.ngDoCheck = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    return RefundReasonEditComponent;
}(base_form_component_1.BaseFormComponent));
RefundReasonEditComponent = __decorate([
    core_1.Component({
        selector: 'edit-refund-reason',
        template: __webpack_require__(2472),
        providers: [
            refund_reason_service_1.RefundReasonService,
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof refund_reason_service_1.RefundReasonService !== "undefined" && refund_reason_service_1.RefundReasonService) === "function" && _c || Object])
], RefundReasonEditComponent);
exports.RefundReasonEditComponent = RefundReasonEditComponent;
var _a, _b, _c;


/***/ }),

/***/ 1854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var di_1 = __webpack_require__(710);
var app_properties_1 = __webpack_require__(154);
var refund_reason_service_1 = __webpack_require__(1651);
var confirmation_dialog_component_1 = __webpack_require__(1405);
var notification_service_1 = __webpack_require__(85);
/**
 * RefundReason list component
 *
 * @export
 * @class RefundReasonListComponent
 * @implements {OnInit}
 */
var RefundReasonListComponent = (function () {
    /**
     * Creates an instance of RefundReasonListComponent.
     * @param {RefundReasonService} refundReasonService
     * @param {AppProperties} appProps
     *
     * @memberOf RefundReasonListComponent
     */
    function RefundReasonListComponent(refundReasonService, appProps, notificationService) {
        this.refundReasonService = refundReasonService;
        this.notificationService = notificationService;
        this.dtOptions = {};
        this.tableData = [];
        this.filterQuery = "";
        this.options = {};
        this.dateFormat = appProps.get(app_properties_1.AppProperties.DEFAULT_DATE_FORMAT_KEY);
        this.dateTimeFormat = appProps.get(app_properties_1.AppProperties.DEFAULT_DATE_TIME_FORMAT_KEY);
    }
    /**
     * @inheritdoc
     * @memberOf RefundReasonListComponent
     */
    RefundReasonListComponent.prototype.ngOnInit = function () {
        this.loadTableData();
    };
    /**
     * Removes a refund
     *
     * @param {number} index
     *
     * @memberOf RefundReasonListComponent
     */
    RefundReasonListComponent.prototype.removeRefundReason = function (index) {
        var _this = this;
        var refundReason = index;
        console.log("refund Reason:", refundReason);
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-warning txt-color-orangeDark'></i> Confirm Delete",
            content: "You are about to permanently delete/cancel refund reason " + refundReason.code + " Do you really want to do this?",
            buttons: '[No][Yes]'
        }, function (buttonPressed) {
            if (buttonPressed == "Yes") {
                _this.refundReasonService.delete(refundReason.uid).subscribe(function () {
                    _this.notificationService.smallBox({
                        title: "Deletion Successful",
                        content: "You have successfully deleted refund reason.",
                        color: "#739E73",
                        timeout: 5000,
                        icon: "fa fa-check"
                    }, function (errors) { });
                    _this.loadTableData();
                }, function (errors) {
                    _this.notificationService.smallBox({
                        title: "Error",
                        color: "#C46A69",
                        icon: "fa fa-warning",
                        content: "Action cannot be completed at the moment.",
                        timeout: 5000
                    }, function (errors) { });
                });
            }
        });
    };
    /**
     * Opens delete confirmation dialog
     * @memberOf RefundReasonListComponent
     */
    RefundReasonListComponent.prototype.openDeleteConfirmationDialog = function (item) {
        this.confirmationDialog.confirmationQuestion = "You are about to delete Package Type " + item.code + ". Are you sure you want to do this?";
        this.confirmationDialog.yesValue = item;
        console.dir(this.confirmationDialog);
        this.confirmationDialog.showDialog();
    };
    /**
     * Handles delete confirmation delete dialog response
     *
     * @param {(RefundReason | boolean)} response
     *
     * @memberOf RefundReasonListComponent
     */
    RefundReasonListComponent.prototype.onDeleteConfirm = function (response) {
        var _this = this;
        if (response != false) {
            var refundReason = response;
            this.refundReasonService.delete(refundReason.uid).subscribe(function (success) {
                _this.loadTableData();
            });
        }
    };
    /**
     * Loads table data
     *
     * @private
     *
     * @memberOf RefundReasonListComponent
     */
    RefundReasonListComponent.prototype.loadTableData = function () {
        var _this = this;
        this.sub = this.refundReasonService.getAll().subscribe(function (refundReasons) {
            _this.tableData = refundReasons;
        });
    };
    /**
     * @inheritdoc
     * @memberOf RefundReasonListComponent
     */
    RefundReasonListComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    return RefundReasonListComponent;
}());
__decorate([
    di_1.ViewChild(confirmation_dialog_component_1.ConfirmationDialogComponent),
    __metadata("design:type", typeof (_a = typeof confirmation_dialog_component_1.ConfirmationDialogComponent !== "undefined" && confirmation_dialog_component_1.ConfirmationDialogComponent) === "function" && _a || Object)
], RefundReasonListComponent.prototype, "confirmationDialog", void 0);
RefundReasonListComponent = __decorate([
    core_1.Component({
        selector: 'refund-reason-list',
        template: __webpack_require__(2473),
        providers: [
            refund_reason_service_1.RefundReasonService,
            app_properties_1.AppProperties,
            notification_service_1.NotificationService
        ]
    }),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_b = typeof refund_reason_service_1.RefundReasonService !== "undefined" && refund_reason_service_1.RefundReasonService) === "function" && _b || Object, typeof (_c = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object])
], RefundReasonListComponent);
exports.RefundReasonListComponent = RefundReasonListComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 2122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var refund_reason_routing_1 = __webpack_require__(2123);
var smartadmin_module_1 = __webpack_require__(1402);
var smartadmin_datatable_module_1 = __webpack_require__(1530);
var advantum_commons_module_1 = __webpack_require__(1401);
var smartadmin_input_module_1 = __webpack_require__(1380);
var advantum_input_module_1 = __webpack_require__(1373);
var create_refund_reason_component_1 = __webpack_require__(1852);
var edit_refund_reason_component_1 = __webpack_require__(1853);
var refund_reason_list_component_1 = __webpack_require__(1854);
var RefundReasonModule = (function () {
    function RefundReasonModule() {
    }
    return RefundReasonModule;
}());
RefundReasonModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            smartadmin_module_1.SmartadminModule,
            advantum_commons_module_1.AdvantumCommonsModule,
            refund_reason_routing_1.routing,
            smartadmin_input_module_1.SmartadminInputModule,
            advantum_input_module_1.AdvantumInputModule,
        ],
        declarations: [
            create_refund_reason_component_1.RefundReasonCreateComponent,
            edit_refund_reason_component_1.RefundReasonEditComponent,
            refund_reason_list_component_1.RefundReasonListComponent,
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], RefundReasonModule);
exports.RefundReasonModule = RefundReasonModule;


/***/ }),

/***/ 2123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var create_refund_reason_component_1 = __webpack_require__(1852);
var edit_refund_reason_component_1 = __webpack_require__(1853);
var refund_reason_list_component_1 = __webpack_require__(1854);
exports.routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: refund_reason_list_component_1.RefundReasonListComponent, data: { pageTitle: 'Search Refund Reasons' } },
    { path: ':id/edit', component: edit_refund_reason_component_1.RefundReasonEditComponent, data: { pageTitle: 'Edit RefundReason' } },
    { path: 'create', component: create_refund_reason_component_1.RefundReasonCreateComponent, data: { pageTitle: 'Create RefundReason' } },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ }),

/***/ 2471:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['RefundReason', model?.code]\" icon=\"desktop\"\n            class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\"></sa-big-breadcrumbs>\n    </div>\n    \n    <sa-widget>\n        <header>\n            <h2>Create Refund Reason</h2>\n        </header>\n        \n        <div>\n            <div class=\"widget-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <form #mainForm=\"ngForm\" novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\n                            <div>\n                                <h4>Basic Details</h4>\n                                <p>Required fields are denoted by <span class=\"text-danger required-field-marker\">*</span></p>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\" [ngClass]=\"{\n                                             'has-success': code.valid && formSubmitted,\n                                             'has-error': !code.valid && formSubmitted\n                                             }\">\n                                             <label class=\"control-label\">Refund Reason Code<span class=\"text-danger required-field-marker\">*</span></label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-addon\"><i class=\"fa  fa-map fa-fw\"></i></span>\n                                                <input class=\"form-control\" type=\"text\"\n                                                        name=\"code\" #code=\"ngModel\"\n                                                        required [(ngModel)]=\"model.code\"\n                                                        placeholder=\"Enter  Refund Reason\">\n                                            </div>\n                                            <div *ngIf=\"formErrors.code\" class=\"alert alert-danger\">\n                                                {{ formErrors.code }}\n                                            </div>\n                                        </div>\n                                    </div>                                   \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\" [ngClass]=\"{\n                                             'has-success': description.valid && formSubmitted,\n                                             'has-error': !description.valid && formSubmitted\n                                             }\">\n                                             <label class=\"control-label\">Refund Reason Description </label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-addon\"><i class=\"fa  fa-map fa-fw\"></i></span>\n                                                <input class=\"form-control\" type=\"text\"\n                                                        name=\"description\" #description=\"ngModel\"\n                                                        [(ngModel)]=\"model.description\"\n                                                        placeholder=\"Enter Refund Reason Description\">\n                                            </div>\n                                            <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">\n                                                {{ formErrors.description }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-actions\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-left\">\n                                        <a routerLink=\"/maintenance/refund-reason/list\" \n                                           class=\"btn btn-lg btn-default\">Return</a>\n                                    </div>\n                                    <div class=\"col-xs-6 text-right\">\n                                        <button type=\"submit\" class=\"btn btn-lg btn-primary\" \n                                                [disabled]=\"!mainForm.form.valid\">Save</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </sa-widget>\n    <notification-dialog></notification-dialog>\n</div>"

/***/ }),

/***/ 2472:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['RefundReason', model?.code]\" icon=\"desktop\"\n            class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\"></sa-big-breadcrumbs>\n\n        <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n            <a routerLink=\"/maintenance/refund-reason/create\" class=\"btn btn-success btn-lg pull-right header-btn hidden-mobile\"><i class=\"fa fa-circle-arrow-up fa-lg\"></i> Create RefundReason</a>\n        </div>\n    </div>\n    \n    <sa-widget>\n        <header>\n            <h2>Edit RefundReason</h2>\n        </header>\n        \n        <div>\n            <div class=\"widget-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <form #mainForm=\"ngForm\" novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\n                            <div>\n                                <h4>Basic Details</h4>\n                                <p>Required fields are denoted by <span class=\"text-danger required-field-marker\">*</span></p>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\" [ngClass]=\"{\n                                             'has-success': code.valid && formSubmitted,\n                                             'has-error': !code.valid && formSubmitted\n                                             }\">\n                                             <label class=\"control-label\">Refund Reason Code<span class=\"text-danger required-field-marker\">*</span></label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-addon\"><i class=\"fa  fa-map fa-fw\"></i></span>\n                                                <input class=\"form-control\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled\n                                                        name=\"code\" #code=\"ngModel\"\n                                                        required [(ngModel)]=\"model.code\"\n                                                        placeholder=\"Enter Refund Reason Code\">\n                                            </div>\n                                            <div *ngIf=\"formErrors.code\" class=\"alert alert-danger\">\n                                                {{ formErrors.code }}\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    \n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\" [ngClass]=\"{\n                                             'has-success': description.valid && formSubmitted,\n                                             'has-error': !description.valid && formSubmitted\n                                             }\">\n                                             <label class=\"control-label\">Refund Reason Description </label>\n                                            <div class=\"input-group\">\n                                                <span class=\"input-group-addon\"><i class=\"fa  fa-map fa-fw\"></i></span>\n                                                <input class=\"form-control\" type=\"text\"\n                                                        name=\"description\" #description=\"ngModel\"\n                                                        required [(ngModel)]=\"model.description\"\n                                                        placeholder=\"Enter Refund Reason Description\">\n                                            </div>\n                                            <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">\n                                                {{ formErrors.description }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-actions\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 text-left\">\n                                        <a routerLink=\"/maintenance/refund-reason/list\" \n                                           class=\"btn btn-lg btn-default\">Return</a>\n                                    </div>\n                                    <div class=\"col-xs-6 text-right\">\n                                        <button type=\"submit\" class=\"btn btn-lg btn-primary\" \n                                                [disabled]=\"!mainForm.form.valid\">Save</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </sa-widget>\n    <notification-dialog></notification-dialog>\n</div>"

/***/ }),

/***/ 2473:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n            <h1 class=\"page-title txt-color-blueDark\">\n\n                <!-- PAGE HEADER -->\n                <i class=\"fa-fw fa fa-search\"></i>\n                Search Refund Reasons\n            </h1>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n            <a routerLink=\"/maintenance/refund-reason/create\" class=\"btn btn-success btn-lg pull-right header-btn hidden-mobile\"><i class=\"fa fa-circle-arrow-up fa-lg\"></i> Create Refund Reason</a>\n        </div>\n    </div>\n\n    <!-- widget grid -->\n    <section id=\"widget-grid\" class=\"\">\n\n        <div class=\"row\">\n\n            <section id=\"widget-grid-2\" class=\"col-xs-12\">\n\n                <!-- row -->\n                <div class=\"row\">\n\n                    <!-- NEW WIDGET START -->\n                    <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n                        <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                            <header>\n                                <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n                                <h2>Search Results </h2>\n                            </header>\n                            <div>\n                                <div class=\"widget-body no-padding\">\n                                    <table class=\"table table-bordered table-striped\" [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                                        <thead>\n                                            <tr>\n                                                <th colspan=\"10\">\n                                                    Filter by Description:\n                                                    <input class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search Refund Reasons by code or description\" />\n                                                </th>\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <mfDefaultSorter by=\"code\">Code</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"description\">Description</mfDefaultSorter>\n                                                </th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let item of mf.data\">\n                                                <td>{{ item.code }}</td>\n                                                <td>{{ item.description }}</td>\n                                                <td>\n                                                    <a [routerLink]=\"['/maintenance/refund-reason', item.uid, 'edit']\" class=\"btn btn-primary\">\n                                                        <i class=\"fa fa-edit\"></i>\n                                                    </a>\n                                                    <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeRefundReason(item)\"><i class=\"fa  fa-trash-o\"></i></button>\n                                                    <!--<button class=\"btn btn-danger\" type=\"button\" (click)=\"openDeleteConfirmationDialog(item)\"><i class=\"fa  fa-trash-o\"></i></button>\n                                                    <confirmation-dialog\n                                                        (onResponse)=\"onDeleteConfirm($event)\"\n                                                        title=\"Delete RefundReason\"\n                                                        message=\"You are about to delete Refund Reason  {{ item.description}} ({{item.code}}). Are you sure you want to do this?\"\n                                                        [yesValue]=\"item\">\n                                                    </confirmation-dialog>-->\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr>\n                                                <td colspan=\"10\">\n                                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                                </td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </sa-widget>\n                    </article>\n\n                </div>\n\n                <!-- end row -->\n\n            </section>\n\n        </div>\n\n    </section>\n\n</div>\n<!-- END MAIN CONTENT -->\n"

/***/ })

});
//# sourceMappingURL=61.map