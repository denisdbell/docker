webpackJsonpac__name_([60],{

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ActivityCategory = (function (_super) {
    __extends(ActivityCategory, _super);
    function ActivityCategory(data) {
        var _this = _super.call(this) || this;
        if (data) {
            _this.uid = data.uid;
            _this.name = data.name;
            _this.description = data.description;
            _this.status = data.status;
        }
        return _this;
    }
    ActivityCategory.prototype.prepareData = function () {
    };
    return ActivityCategory;
}(DomainObject_1.DomainObject));
exports.ActivityCategory = ActivityCategory;


/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Activity = (function (_super) {
    __extends(Activity, _super);
    function Activity(data) {
        var _this = _super.call(this) || this;
        if (data) {
            _this.uid = data.uid;
            _this.name = data.name;
            _this.description = data.description;
            _this.status = data.status;
        }
        return _this;
    }
    Activity.prototype.prepareData = function () {
    };
    return Activity;
}(DomainObject_1.DomainObject));
exports.Activity = Activity;


/***/ }),

/***/ 1590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Activity_1 = __webpack_require__(1565);
var ActivityCategory_1 = __webpack_require__(1559);
var ActivityCategoryAssignment = (function (_super) {
    __extends(ActivityCategoryAssignment, _super);
    function ActivityCategoryAssignment(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.uid = data.uid;
            _this.vesselTypes = data.vesselTypes;
            if (_this.vesselTypes && _this.vesselTypes.length) {
                if (_this.vesselTypes.length == 1) {
                    _this.vesselTypesString = _this.vesselTypes[0].description;
                }
                else if (_this.vesselTypes.length > 1) {
                    _this.vesselTypesString = 'Multiple';
                }
            }
            _this.vesselTypesIds = [];
            if (data.vesselTypes) {
                for (var _i = 0, _a = data.vesselTypes; _i < _a.length; _i++) {
                    var v = _a[_i];
                    _this.vesselTypesIds.push(v.uid);
                }
            }
            _this.activity = new Activity_1.Activity(data.activity);
            _this.activityCategory = new ActivityCategory_1.ActivityCategory(data.activityCategory);
            _this.weight = data.weight;
            _this.occurrences = data.occurrences;
            _this.ranged = data.ranged;
            _this.mandatory = data.mandatory;
            _this.billable = data.billable;
            _this.statementOfFact = data.statementOfFact;
            _this.status = data.status;
        }
        return _this;
    }
    ActivityCategoryAssignment.prototype.prepareData = function () {
        if (this.vesselTypesIds) {
            this.vesselTypes = this.vesselTypesIds;
        }
    };
    return ActivityCategoryAssignment;
}(DomainObject_1.DomainObject));
exports.ActivityCategoryAssignment = ActivityCategoryAssignment;


/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var abstract_service_1 = __webpack_require__(346);
var http_1 = __webpack_require__(83);
var app_properties_1 = __webpack_require__(154);
var rxjs_1 = __webpack_require__(84);
var ActivityCategoryService = (function (_super) {
    __extends(ActivityCategoryService, _super);
    function ActivityCategoryService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    ActivityCategoryService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/activity-categories', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.getAllActive = function () {
        return this.http.get(this.apiBaseUrl + '/activity-categories?active=1', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.getAllActiveActivityCategory = function () {
        return this.http.get(this.apiBaseUrl + '/activity-categories', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.createActivityCategory = function (activityCategory) {
        return this.http.post(this.apiBaseUrl + '/activity-categories', activityCategory, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.deleteActivityCategory = function (uidActivityCategory) {
        return this.http.delete(this.apiBaseUrl + '/activity-categories/' + uidActivityCategory, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.handleError = function (error) {
        if (error.status == 409) {
            return rxjs_1.Observable.throw({ error: "The Activity Category has already been associated with Activities", status: error.status });
        }
        else {
            return _super.prototype.handleError.call(this, error);
        }
    };
    ActivityCategoryService.prototype.updateActivityCategory = function (activityCategory) {
        return this.http.put(this.apiBaseUrl + '/activity-categories/' + activityCategory.uid, activityCategory, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.toggleActivityCategoryStatus = function (activitiesUid) {
        return this.http.post(this.apiBaseUrl + '/activity-categories/activity-category-status/toggle', activitiesUid, this.getStandardRequestOptions())
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.getActivityCategoryById = function (activityCategoryUidL) {
        return this.http.get(this.apiBaseUrl + '/activity-categories/' + activityCategoryUidL, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityCategoryService.prototype.extractOne = function (res) {
        return (res.json() || {});
    };
    ActivityCategoryService.prototype.extractMany = function (res) {
        return (res.json() || {});
    };
    return ActivityCategoryService;
}(abstract_service_1.AbstractService));
ActivityCategoryService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], ActivityCategoryService);
exports.ActivityCategoryService = ActivityCategoryService;
var _a, _b;


/***/ }),

/***/ 1648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var abstract_service_1 = __webpack_require__(346);
var http_1 = __webpack_require__(83);
var app_properties_1 = __webpack_require__(154);
var rxjs_1 = __webpack_require__(84);
var ActivityCategoryAssignment_1 = __webpack_require__(1590);
var Activity_1 = __webpack_require__(1565);
var ActivityCategory_1 = __webpack_require__(1559);
var VesselType_1 = __webpack_require__(1425);
var ActivityCategoryAssignmentService = (function (_super) {
    __extends(ActivityCategoryAssignmentService, _super);
    function ActivityCategoryAssignmentService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    ActivityCategoryAssignmentService.prototype.listActivitiesNotAssignedToCategory = function (uidCategory) {
        return this.http.get(this.apiBaseUrl + '/activities?activityCategory=' + uidCategory, this.getStandardRequestOptions())
            .map(this.extractManyActivity)
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.listCategoriesNotAssignedToActivity = function (uidActivity) {
        return this.http.get(this.apiBaseUrl + '/activities-categories?' + uidActivity, this.getStandardRequestOptions())
            .map(this.extractManyActivityCategory)
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.getAllActivityCategoryAssignmentsByCategory = function (uidCategory) {
        return this.http.get(this.apiBaseUrl + '/activity-categories/' + uidCategory + '/assignments', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.createActivityCategoryAssignment = function (activityCategoryAssignment, uidActivityCategory) {
        return this.http.post(this.apiBaseUrl + '/activity-categories/' + uidActivityCategory + '/assignments', activityCategoryAssignment, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.updateActivityCategoryAssignment = function (activityCategoryAssignment, uidActivityCategory) {
        return this.http.put(this.apiBaseUrl + '/activity-categories/' + uidActivityCategory + '/assignments/' + activityCategoryAssignment.uid, activityCategoryAssignment, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.deleteActivityCategoryAssignment = function (uidActivityCategoryAssignment, uidActivityCategory) {
        return this.http.delete(this.apiBaseUrl + '/activity-categories/' + uidActivityCategory + '/assignments/' + uidActivityCategoryAssignment, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.toggleActivityCategoryAssignmentsStatus = function (uidActivityCategoryAssignments, uidActivityCategory) {
        return this.http.post(this.apiBaseUrl + '/activity-categories/' + uidActivityCategory + '/assignments/activity-category-assignment-status/toggle', uidActivityCategoryAssignments, this.getStandardRequestOptions())
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.getVesselTypes = function () {
        return this.http.get(this.apiBaseUrl + '/vessel-types/', this.getStandardRequestOptions())
            .map(this.extractManyVesselType)
            .catch(this.handleError);
    };
    ActivityCategoryAssignmentService.prototype.handleError = function (error) {
        if (error.status == 409) {
            return rxjs_1.Observable.throw({ error: "The Activity has already been added to the Activity Log", status: error.status });
        }
        else {
            return _super.prototype.handleError.call(this, error);
        }
    };
    ActivityCategoryAssignmentService.prototype.extractOne = function (res) {
        return new ActivityCategoryAssignment_1.ActivityCategoryAssignment(res.json() || {});
    };
    ActivityCategoryAssignmentService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (activityCategoryAssignment) {
                result.push(new ActivityCategoryAssignment_1.ActivityCategoryAssignment(activityCategoryAssignment));
            });
        }
        return result;
    };
    ActivityCategoryAssignmentService.prototype.extractManyVesselType = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (vesselType) {
                result.push(new VesselType_1.VesselType(vesselType));
            });
        }
        return result;
    };
    ActivityCategoryAssignmentService.prototype.extractManyActivity = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (activity) {
                result.push(new Activity_1.Activity(activity));
            });
        }
        return result;
    };
    ActivityCategoryAssignmentService.prototype.extractManyActivityCategory = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (activityCategory) {
                result.push(new ActivityCategory_1.ActivityCategory(activityCategory));
            });
        }
        return result;
    };
    return ActivityCategoryAssignmentService;
}(abstract_service_1.AbstractService));
ActivityCategoryAssignmentService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], ActivityCategoryAssignmentService);
exports.ActivityCategoryAssignmentService = ActivityCategoryAssignmentService;
var _a, _b;


/***/ }),

/***/ 1801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activity_categoy_service_1 = __webpack_require__(1594);
var core_1 = __webpack_require__(0);
var ActivityCategory_1 = __webpack_require__(1559);
var app_properties_1 = __webpack_require__(154);
var notification_service_1 = __webpack_require__(85);
var router_1 = __webpack_require__(33);
var ActivityCategoryListComponent = (function () {
    function ActivityCategoryListComponent(activityCategoryService, router, appProps, notificationService) {
        this.activityCategoryService = activityCategoryService;
        this.router = router;
        this.notificationService = notificationService;
        this.filterQuery = "";
        this.tableData = [];
        this.selectedActivityCategoriesUid = new Array();
        this.activityCategory = new ActivityCategory_1.ActivityCategory();
        this.allSelected = false;
        this.isNewActivityCategory = false;
        this.isUpdateActivityCategory = false;
        this.dateTimeFormat = appProps.get(app_properties_1.AppProperties.DEFAULT_DATE_TIME_FORMAT_KEY);
    }
    ActivityCategoryListComponent.prototype.ngOnInit = function () {
        this.fetchActivityCategories();
    };
    ActivityCategoryListComponent.prototype.toggleCategoriesSelection = function (event) {
        var checkbox = event.target;
        this.allSelected = checkbox.checked;
        this.selectedActivityCategoriesUid = new Array();
        for (var _i = 0, _a = this.tableData; _i < _a.length; _i++) {
            var a = _a[_i];
            a.selected = this.allSelected;
            if (this.allSelected)
                this.selectedActivityCategoriesUid.push(a.uid);
        }
    };
    ActivityCategoryListComponent.prototype.assignActivities = function () {
        this.router.navigateByUrl('/maintenance/activity/activity-to-activity-category');
    };
    ActivityCategoryListComponent.prototype.createNewActivityCategory = function () {
        this.cancelEdit();
        this.isNewActivityCategory = true;
        this.activityCategory = new ActivityCategory_1.ActivityCategory();
        this.activityCategory.status = "Active";
    };
    ActivityCategoryListComponent.prototype.submitActivityCategory = function () {
        var _this = this;
        if (this.isNewActivityCategory) {
            this.sub = this.activityCategoryService.createActivityCategory(this.activityCategory).subscribe(function (activityCategory) {
                _this.fetchActivityCategories();
                _this.notificationService.smallBox({
                    title: "Record Added",
                    content: "The Activity Category was successfully added.",
                    color: "#739E73",
                    timeout: 5000,
                    icon: "fa fa-check"
                });
                _this.cancelEdit();
            }, function (errors) {
                console.log(errors);
            });
        }
        if (this.isUpdateActivityCategory) {
            this.sub = this.activityCategoryService.updateActivityCategory(this.activityCategory).subscribe(function (activityCategory) {
                _this.fetchActivityCategories();
                _this.notificationService.smallBox({
                    title: "Record Updated",
                    content: "The Activity Category was successfully updated.",
                    color: "#739E73",
                    timeout: 5000,
                    icon: "fa fa-check"
                });
                _this.cancelEdit();
            }, function (errors) {
                console.log(errors);
            });
        }
    };
    ActivityCategoryListComponent.prototype.cancelEdit = function () {
        this.isUpdateActivityCategory = false;
        this.isNewActivityCategory = false;
        this.activityCategory = new ActivityCategory_1.ActivityCategory();
    };
    ActivityCategoryListComponent.prototype.updateActivityCategory = function (activityCategory) {
        this.cancelEdit();
        this.isUpdateActivityCategory = true;
        this.activityCategory = activityCategory;
    };
    ActivityCategoryListComponent.prototype.deleteActivityCategory = function (uidActivityCategory) {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-warning txt-color-orangeDark'></i>Confirm Deletion",
            content: "Do you wish to Delete this record",
            buttons: "[Cancel][OK]"
        }, function (button) {
            if (button == "OK") {
                _this.sub = _this.activityCategoryService.deleteActivityCategory(uidActivityCategory).subscribe(function () {
                    _this.notificationService.smallBox({
                        title: "Deletion Successful",
                        content: "The Activity Category was successfully deleted.",
                        color: "#739E73",
                        timeout: 5000,
                        icon: "fa fa-check"
                    });
                    _this.fetchActivityCategories();
                }, function (errors) {
                    console.log(errors);
                    if (errors.status === 409) {
                        _this.notificationService.smallBox({
                            title: "Record cannot be Deleted",
                            content: errors.error,
                            color: "#C46A69",
                            timeout: 5000,
                            icon: "fa fa-warning"
                        });
                    }
                });
            }
        });
    };
    ActivityCategoryListComponent.prototype.activeDeactiveActivities = function () {
        var _this = this;
        this.activityCategoryService.toggleActivityCategoryStatus(this.selectedActivityCategoriesUid).subscribe(function () {
            _this.fetchActivityCategories();
        }, function (errors) {
            console.log(errors);
        });
    };
    ActivityCategoryListComponent.prototype.fetchActivityCategories = function () {
        var _this = this;
        this.sub = this.activityCategoryService.getAll().subscribe(function (activities) {
            _this.tableData = activities;
        });
        this.selectedActivityCategoriesUid = new Array();
        this.isNewActivityCategory = false;
        this.isUpdateActivityCategory = false;
        this.allSelected = false;
    };
    ActivityCategoryListComponent.prototype.updateSelection = function (activityCategoryUid, selected) {
        if (selected) {
            this.selectedActivityCategoriesUid.push(activityCategoryUid);
        }
        else {
            var auxUidList = [];
            for (var _i = 0, _a = this.selectedActivityCategoriesUid; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n != activityCategoryUid) {
                    auxUidList.push(n);
                }
            }
            this.selectedActivityCategoriesUid = auxUidList;
        }
        this.allSelected = this.tableData.length == this.selectedActivityCategoriesUid.length;
    };
    return ActivityCategoryListComponent;
}());
ActivityCategoryListComponent = __decorate([
    core_1.Component({
        selector: 'activity-category-list',
        template: __webpack_require__(2432),
        providers: [activity_categoy_service_1.ActivityCategoryService],
    }),
    __param(2, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof activity_categoy_service_1.ActivityCategoryService !== "undefined" && activity_categoy_service_1.ActivityCategoryService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _c || Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _d || Object])
], ActivityCategoryListComponent);
exports.ActivityCategoryListComponent = ActivityCategoryListComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 1802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var activity_category_assignment_service_1 = __webpack_require__(1648);
var Activity_1 = __webpack_require__(1565);
var ActivityCategory_1 = __webpack_require__(1559);
var activity_categoy_service_1 = __webpack_require__(1594);
var activity_service_1 = __webpack_require__(1897);
var ActivityCategoryAssignment_1 = __webpack_require__(1590);
var notification_service_1 = __webpack_require__(85);
var VesselType_1 = __webpack_require__(1425);
var ActivityToActivityCategoryComponent = (function () {
    function ActivityToActivityCategoryComponent(router, activeRoute, activityCategoryAssignmentService, activityCategoryService, activityService, notificationService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.activityCategoryAssignmentService = activityCategoryAssignmentService;
        this.activityCategoryService = activityCategoryService;
        this.activityService = activityService;
        this.notificationService = notificationService;
        this.filterQuery = "";
        this.tableData = [];
        this.isNew = false;
        this.selectedActivityCategoryAssignmentsUid = new Array();
        this.listVesselTypes = [];
        this.allSelected = false;
    }
    ActivityToActivityCategoryComponent.prototype.ngOnInit = function () {
        this.activityCategoryAssignment = new ActivityCategoryAssignment_1.ActivityCategoryAssignment();
        this.activityCategoryAssignment.activity = new Activity_1.Activity();
        this.activityCategoryAssignment.activityCategory = new ActivityCategory_1.ActivityCategory();
        this.activityCategoryAssignment.vesselTypesIds = [];
        this.chargeListActivityCategory();
        this.assignListVesselTypes();
    };
    ActivityToActivityCategoryComponent.prototype.toggleCategoriesSelection = function (event) {
        var checkbox = event.target;
        this.allSelected = checkbox.checked;
        this.selectedActivityCategoryAssignmentsUid = new Array();
        for (var _i = 0, _a = this.tableData; _i < _a.length; _i++) {
            var a = _a[_i];
            a.selected = this.allSelected;
            if (this.allSelected)
                this.selectedActivityCategoryAssignmentsUid.push(a.uid);
        }
    };
    ActivityToActivityCategoryComponent.prototype.chargeListActivityCategory = function () {
        var _this = this;
        this.sub = this.activityCategoryService.getAll().subscribe(function (activityCategory) {
            _this.listActivityCategory = activityCategory;
        });
        // if(this.fromCategory){
        //     this.sub = this.activityCategoryService.getAll().subscribe((activityCategory) =>{
        //         this.listActivityCategory = activityCategory;
        //     });
        // }else if(this.fromActivity){
        //     this.sub = this.activityCategoryAssignmentService.listCategoriesNotAssignedToActivity(this.uidActivity).subscribe((activityCategory)=>{
        //         this.listActivityCategory = activityCategory;
        //     });
        // }
    };
    ActivityToActivityCategoryComponent.prototype.cancelEdit = function () {
        this.isNew = false;
        this.isUpdate = false;
        this.activityCategoryAssignment = new ActivityCategoryAssignment_1.ActivityCategoryAssignment();
    };
    ActivityToActivityCategoryComponent.prototype.changeToUpdate = function (activityCategoryAssignment) {
        this.activityCategoryAssignment = activityCategoryAssignment;
        this.isNew = false;
        this.isUpdate = true;
    };
    ActivityToActivityCategoryComponent.prototype.changeActivity = function (uidActivity) {
        var _this = this;
        this.activityService.getActivityById(uidActivity).subscribe(function (activity) {
            _this.activityCategoryAssignment.activity = activity;
        }, function (errors) {
            console.log(errors);
        });
    };
    ActivityToActivityCategoryComponent.prototype.newActivity = function () {
        var _this = this;
        this.activityCategoryAssignment = new ActivityCategoryAssignment_1.ActivityCategoryAssignment();
        this.activityCategoryAssignment.status = "Active";
        this.activityCategoryAssignment.occurrences = 1;
        this.activityCategoryAssignment.weight = 20;
        this.activityCategoryAssignment.billable = false;
        this.activityCategoryAssignment.mandatory = false;
        this.activityCategoryAssignment.statementOfFact = false;
        this.activityCategoryAssignment.ranged = false;
        this.activityCategoryAssignment.activityCategory = new ActivityCategory_1.ActivityCategory();
        this.activityCategoryAssignment.activity = new Activity_1.Activity();
        this.activityCategoryAssignment.vesselTypesIds = [];
        this.activityCategoryService.getActivityCategoryById(this.uidActivityCategory).subscribe(function (activiCategory) {
            _this.activityCategoryAssignment.activityCategory = activiCategory;
        }, function (errors) {
            console.log(errors);
        });
        this.activityCategoryAssignmentService.listActivitiesNotAssignedToCategory(this.uidActivityCategory).subscribe(function (activityCategoryAssignments) {
            _this.listActivityUnassigned = activityCategoryAssignments;
        });
        this.isNew = true;
        this.isUpdate = false;
    };
    ActivityToActivityCategoryComponent.prototype.activeDeactiveActivityCategoryAssignments = function () {
        var _this = this;
        this.activityCategoryAssignmentService.toggleActivityCategoryAssignmentsStatus(this.selectedActivityCategoryAssignmentsUid, this.uidActivityCategory).subscribe(function () {
            _this.fetchActivityCategoryAssignments();
            _this.notificationService.smallBox({
                title: "Update Successful",
                content: "The Activity Category Assignment selection was successfully updated.",
                color: "#739E73",
                timeout: 5000,
                icon: "fa fa-check"
            });
        }, function (errors) {
            console.log(errors);
        });
    };
    ActivityToActivityCategoryComponent.prototype.chargeListActivityUnassigned = function (uidActivityCategory) {
        var _this = this;
        this.uidActivityCategory = uidActivityCategory;
        this.sub = this.activityCategoryAssignmentService.listActivitiesNotAssignedToCategory(this.uidActivityCategory).subscribe(function (activityCategoryAssignments) {
            _this.listActivityUnassigned = activityCategoryAssignments;
        });
        this.fetchActivityCategoryAssignments();
        this.activityCategoryService.getActivityCategoryById(uidActivityCategory).subscribe(function (activityCategory) {
            _this.activityCategoryAssignment.activityCategory = activityCategory;
        }, function (errors) {
            console.log(errors);
        });
    };
    ActivityToActivityCategoryComponent.prototype.fetchActivityCategoryAssignments = function () {
        var _this = this;
        this.sub = this.activityCategoryAssignmentService.getAllActivityCategoryAssignmentsByCategory(this.uidActivityCategory).subscribe(function (activityCategoryAssignments) {
            _this.tableData = activityCategoryAssignments;
            _this.selectedActivityCategoryAssignmentsUid = [];
            _this.isNew = false;
            _this.isUpdate = false;
            _this.allSelected = false;
        });
    };
    ActivityToActivityCategoryComponent.prototype.updateSelection = function (activityCategoryAssignmentUid, selected) {
        if (selected) {
            this.selectedActivityCategoryAssignmentsUid.push(activityCategoryAssignmentUid);
        }
        else {
            var auxUidList = [];
            for (var _i = 0, _a = this.selectedActivityCategoryAssignmentsUid; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n != activityCategoryAssignmentUid) {
                    auxUidList.push(n);
                }
            }
            this.selectedActivityCategoryAssignmentsUid = auxUidList;
        }
        this.allSelected = this.tableData.length == this.selectedActivityCategoryAssignmentsUid.length;
    };
    ActivityToActivityCategoryComponent.prototype.deleteActivityCategoryAssignment = function (uidActivityCategoryAssignment) {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-warning txt-color-orangeDark'></i>Confirm Deletion",
            content: "Do you wish to Delete this record",
            buttons: "[Cancel][OK]"
        }, function (button) {
            if (button == "OK") {
                _this.sub = _this.activityCategoryAssignmentService.deleteActivityCategoryAssignment(uidActivityCategoryAssignment, _this.uidActivityCategory).subscribe(function () {
                    _this.notificationService.smallBox({
                        title: "Deletion Successful",
                        content: "The Activity-Category was successfully deleted.",
                        color: "#739E73",
                        timeout: 5000,
                        icon: "fa fa-check"
                    });
                    _this.fetchActivityCategoryAssignments();
                }, function (errors) {
                    console.log(errors);
                    if (errors.status === 409) {
                        _this.notificationService.smallBox({
                            title: "Record cannot be Deleted",
                            content: errors.error,
                            color: "#C46A69",
                            timeout: 5000,
                            icon: "fa fa-warning"
                        });
                    }
                });
            }
        });
    };
    ActivityToActivityCategoryComponent.prototype.submitActivityCategoryAssignment = function () {
        var _this = this;
        if (this.isNew) {
            this.activityCategoryAssignment.prepareData();
            this.sub = this.activityCategoryAssignmentService.createActivityCategoryAssignment(this.activityCategoryAssignment, this.uidActivityCategory).subscribe(function () {
                _this.fetchActivityCategoryAssignments();
                _this.notificationService.smallBox({
                    title: "Record Added",
                    content: "New Activity successfully assigned to Category.",
                    color: "#739E73",
                    timeout: 5000,
                    icon: "fa fa-check"
                });
            }, function (errors) {
                console.log(errors);
            });
            this.isNew = false;
        }
        if (this.isUpdate) {
            this.activityCategoryAssignment.prepareData();
            this.sub = this.activityCategoryAssignmentService.updateActivityCategoryAssignment(this.activityCategoryAssignment, this.uidActivityCategory).subscribe(function () {
                _this.fetchActivityCategoryAssignments();
                _this.notificationService.smallBox({
                    title: "Record Updated",
                    content: "Activity-Category assignment successfully updated",
                    color: "#739E73",
                    timeout: 5000,
                    icon: "fa fa-check"
                });
            }, function (errors) {
                console.log(errors);
            });
            this.isUpdate = false;
        }
    };
    ActivityToActivityCategoryComponent.prototype.assignListVesselTypes = function () {
        var _this = this;
        this.listVesselTypes = [];
        this.sub = this.activityCategoryAssignmentService.getVesselTypes().subscribe(function (vesselTypes) {
            for (var _i = 0, vesselTypes_1 = vesselTypes; _i < vesselTypes_1.length; _i++) {
                var vt = vesselTypes_1[_i];
                _this.listVesselTypes.push(new VesselType_1.VesselType(vt));
            }
        });
    };
    ActivityToActivityCategoryComponent.prototype.cancel = function () {
        var returnUrl = this.activeRoute.snapshot.queryParams['origin'];
        if (returnUrl == 'activities') {
            this.router.navigate(['maintenance', 'activity', 'activity-list']);
        }
        else {
            this.router.navigate(['maintenance', 'activity', 'activity-category-list']);
        }
    };
    return ActivityToActivityCategoryComponent;
}());
ActivityToActivityCategoryComponent = __decorate([
    core_1.Component({
        selector: 'activity-to-activity-category',
        template: __webpack_require__(2433),
        providers: [activity_category_assignment_service_1.ActivityCategoryAssignmentService,
            activity_categoy_service_1.ActivityCategoryService,
            activity_service_1.ActivityService,
            notification_service_1.NotificationService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof activity_category_assignment_service_1.ActivityCategoryAssignmentService !== "undefined" && activity_category_assignment_service_1.ActivityCategoryAssignmentService) === "function" && _c || Object, typeof (_d = typeof activity_categoy_service_1.ActivityCategoryService !== "undefined" && activity_categoy_service_1.ActivityCategoryService) === "function" && _d || Object, typeof (_e = typeof activity_service_1.ActivityService !== "undefined" && activity_service_1.ActivityService) === "function" && _e || Object, typeof (_f = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _f || Object])
], ActivityToActivityCategoryComponent);
exports.ActivityToActivityCategoryComponent = ActivityToActivityCategoryComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var activity_service_1 = __webpack_require__(1897);
var Activity_1 = __webpack_require__(1565);
var app_properties_1 = __webpack_require__(154);
var notification_service_1 = __webpack_require__(85);
var router_1 = __webpack_require__(33);
var base_form_component_1 = __webpack_require__(1422);
var ActivityListComponent = (function (_super) {
    __extends(ActivityListComponent, _super);
    function ActivityListComponent(activityService, router, activeRoute, appProps, notificationService) {
        var _this = _super.call(this) || this;
        _this.activityService = activityService;
        _this.router = router;
        _this.activeRoute = activeRoute;
        _this.notificationService = notificationService;
        _this.filterQuery = "";
        _this.tableData = [];
        _this.selectedActivitiesUid = new Array();
        _this.activity = new Activity_1.Activity();
        _this.allSelected = false;
        _this.isNewActivity = false;
        _this.isUpdateActivity = false;
        _this.dateTimeFormat = appProps.get(app_properties_1.AppProperties.DEFAULT_DATE_TIME_FORMAT_KEY);
        return _this;
    }
    ActivityListComponent.prototype.ngOnInit = function () {
        this.fetchActivities();
    };
    ActivityListComponent.prototype.toggleActivitiesSelection = function (event) {
        var checkbox = event.target;
        this.allSelected = checkbox.checked;
        this.selectedActivitiesUid = new Array();
        for (var _i = 0, _a = this.tableData; _i < _a.length; _i++) {
            var a = _a[_i];
            a.selected = this.allSelected;
            if (this.allSelected)
                this.selectedActivitiesUid.push(a.uid);
        }
    };
    ActivityListComponent.prototype.createNewActivity = function () {
        this.cancelEdit();
        this.isNewActivity = true;
        this.activity.status = "Active";
    };
    ActivityListComponent.prototype.submitActivity = function () {
        var _this = this;
        if (this.isNewActivity) {
            this.sub = this.activityService.createActivity(this.activity).subscribe(function (activity) {
                _this.fetchActivities();
                _this.notificationService.smallBox({
                    title: "Record Added",
                    content: "The Activity was successfully added.",
                    color: "#739E73",
                    timeout: 5000,
                    icon: "fa fa-check"
                });
                _this.cancelEdit();
            }, function (errors) {
                _this.handleErrors(errors);
                console.log(errors);
            });
        }
        if (this.isUpdateActivity) {
            this.sub = this.activityService.updateActivity(this.activity).subscribe(function (activity) {
                _this.fetchActivities();
                _this.notificationService.smallBox({
                    title: "Record Updated",
                    content: "The Activity was successfully updated.",
                    color: "#739E73",
                    timeout: 5000,
                    icon: "fa fa-check"
                });
                _this.cancelEdit();
            }, function (errors) {
                _this.handleErrors(errors);
                console.log(errors);
            });
        }
    };
    ActivityListComponent.prototype.handleErrors = function (errors) {
        _super.prototype.handleErrors.call(this, errors);
        if (this.formErrors.description) {
            this.formErrors.activityDescription = this.formErrors.description;
        }
    };
    ActivityListComponent.prototype.cancelEdit = function () {
        this.isUpdateActivity = false;
        this.isNewActivity = false;
        this.activity = new Activity_1.Activity();
        this.formErrors = {};
    };
    ActivityListComponent.prototype.updateActivity = function (activity) {
        this.cancelEdit();
        this.isUpdateActivity = true;
        this.activity = activity;
    };
    ActivityListComponent.prototype.deleteActivity = function (uidActivity) {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-warning txt-color-orangeDark'></i>Confirm Deletion",
            content: "Do you wish to Delete this record",
            buttons: "[Cancel][OK]"
        }, function (button) {
            if (button == "OK") {
                _this.sub = _this.activityService.deleteActivity(uidActivity).subscribe(function () {
                    _this.notificationService.smallBox({
                        title: "Deletion Successful",
                        content: "The Activity was successfully deleted.",
                        color: "#739E73",
                        timeout: 5000,
                        icon: "fa fa-check"
                    });
                    _this.fetchActivities();
                }, function (errors) {
                    console.log(errors);
                    if (errors.status === 409) {
                        _this.notificationService.smallBox({
                            title: "Record cannot be Deleted",
                            content: errors.error,
                            color: "#C46A69",
                            timeout: 5000,
                            icon: "fa fa-warning"
                        });
                    }
                });
            }
        });
    };
    ActivityListComponent.prototype.activeDeactiveActivities = function () {
        var _this = this;
        this.activityService.toggleActivityStatus(this.selectedActivitiesUid).subscribe(function () {
            _this.notificationService.smallBox({
                title: "Update Successful",
                content: "The Activity selection was successfully updated.",
                color: "#739E73",
                timeout: 5000,
                icon: "fa fa-check"
            });
            _this.fetchActivities();
        }, function (errors) {
            console.log(errors);
        });
    };
    ActivityListComponent.prototype.assignToCategory = function () {
        // let uidActivity : number = this.selectedActivitiesUid[0];
        this.router.navigate(['maintenance', 'activity', 'activity-to-activity-category'], { queryParams: { origin: 'activities' } });
    };
    ActivityListComponent.prototype.fetchActivities = function () {
        var _this = this;
        this.sub = this.activityService.getAll().subscribe(function (activities) {
            _this.tableData = activities;
        });
        this.selectedActivitiesUid = new Array();
        this.isNewActivity = false;
        this.isUpdateActivity = false;
        this.allSelected = false;
    };
    ActivityListComponent.prototype.updateSelection = function (activityUid, selected) {
        if (selected) {
            this.selectedActivitiesUid.push(activityUid);
        }
        else {
            var auxUidList = [];
            for (var _i = 0, _a = this.selectedActivitiesUid; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n != activityUid) {
                    auxUidList.push(n);
                }
            }
            this.selectedActivitiesUid = auxUidList;
        }
        this.allSelected = this.tableData.length == this.selectedActivitiesUid.length;
    };
    return ActivityListComponent;
}(base_form_component_1.BaseFormComponent));
ActivityListComponent = __decorate([
    core_1.Component({
        selector: 'activity-list',
        template: __webpack_require__(2434),
        providers: [activity_service_1.ActivityService],
    }),
    __param(3, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof activity_service_1.ActivityService !== "undefined" && activity_service_1.ActivityService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _d || Object, typeof (_e = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _e || Object])
], ActivityListComponent);
exports.ActivityListComponent = ActivityListComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 1897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var abstract_service_1 = __webpack_require__(346);
var http_1 = __webpack_require__(83);
var app_properties_1 = __webpack_require__(154);
var rxjs_1 = __webpack_require__(84);
var ActivityService = (function (_super) {
    __extends(ActivityService, _super);
    function ActivityService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    ActivityService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/activities', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ActivityService.prototype.extractOne = function (res) {
        return (res.json() || {});
    };
    ActivityService.prototype.extractMany = function (res) {
        return (res.json() || {});
    };
    ActivityService.prototype.createActivity = function (activity) {
        return this.http.post(this.apiBaseUrl + '/activities', activity, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityService.prototype.deleteActivity = function (uidActivity) {
        return this.http.delete(this.apiBaseUrl + '/activities/' + uidActivity, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    ActivityService.prototype.handleError = function (error) {
        if (error.status == 409) {
            return rxjs_1.Observable.throw({ error: "The Activity has already been associated with Categories", status: error.status });
        }
        else {
            return _super.prototype.handleError.call(this, error);
        }
    };
    ActivityService.prototype.getActivityById = function (activityUid) {
        return this.http.get(this.apiBaseUrl + '/activities/' + activityUid, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityService.prototype.updateActivity = function (activity) {
        return this.http.put(this.apiBaseUrl + '/activities/' + activity.uid, activity, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ActivityService.prototype.toggleActivityStatus = function (activitiesUid) {
        return this.http.post(this.apiBaseUrl + '/activities/activity-status/toggle', activitiesUid, this.getStandardRequestOptions())
            .catch(this.handleError);
    };
    return ActivityService;
}(abstract_service_1.AbstractService));
ActivityService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], ActivityService);
exports.ActivityService = ActivityService;
var _a, _b;


/***/ }),

/***/ 2107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var activity_list_component_1 = __webpack_require__(1803);
var activity_routing_1 = __webpack_require__(2108);
var smartadmin_module_1 = __webpack_require__(1402);
var smartadmin_datatable_module_1 = __webpack_require__(1530);
var smartadmin_input_module_1 = __webpack_require__(1380);
var advantum_input_module_1 = __webpack_require__(1373);
var advantum_commons_module_1 = __webpack_require__(1401);
var activity_category_list_component_1 = __webpack_require__(1801);
var activity_to_activity_category_component_1 = __webpack_require__(1802);
var ActivityModule = (function () {
    function ActivityModule() {
    }
    return ActivityModule;
}());
ActivityModule = __decorate([
    core_1.NgModule({
        declarations: [
            activity_list_component_1.ActivityListComponent,
            activity_category_list_component_1.ActivityCategoryListComponent,
            activity_to_activity_category_component_1.ActivityToActivityCategoryComponent,
        ],
        imports: [
            activity_routing_1.routing,
            smartadmin_module_1.SmartadminModule,
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            smartadmin_input_module_1.SmartadminInputModule,
            advantum_input_module_1.AdvantumInputModule,
            advantum_commons_module_1.AdvantumCommonsModule,
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], ActivityModule);
exports.ActivityModule = ActivityModule;


/***/ }),

/***/ 2108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var activity_list_component_1 = __webpack_require__(1803);
var activity_category_list_component_1 = __webpack_require__(1801);
var activity_to_activity_category_component_1 = __webpack_require__(1802);
exports.routes = [
    { path: 'activity-list', component: activity_list_component_1.ActivityListComponent, data: { pageTitle: 'Activity' } },
    { path: 'activity-category-list', component: activity_category_list_component_1.ActivityCategoryListComponent, data: { pageTitle: 'Activity Category' } },
    { path: 'activity-to-activity-category', component: activity_to_activity_category_component_1.ActivityToActivityCategoryComponent, data: { pageTitle: 'Activity-Category Assignment' } },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ }),

/***/ 2432:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n            <h1 class=\"page-title txt-color-blueDark\">\n\n                <!-- PAGE HEADER -->\n                <sa-big-breadcrumbs [items]=\"['Activity Category']\" icon=\"users\"\n                                    class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\"></sa-big-breadcrumbs>\n            </h1>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n            <!-- Button trigger modal -->\n            <a href=\"javascript:void(0);\" (click)=\"createNewActivityCategory()\" class=\"btn btn-success btn-lg pull-right header-btn hidden-mobile\">{{ 'Create New Category' }}</a>\n        </div>\n    </div>\n    <section id=\"widget-grid\" class=\"\">\n        <div class=\"row\">\n            <section id=\"widget-grid-2\" class=\"col-xs-12\">\n                <div class=\"row\">\n                    <article class=\"col-xs-12\">\n                        <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                            <header>\n                                <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n                                <h2>Search Results </h2>\n                            </header>\n                            <div>\n                                <div class=\"widget-body no-padding\">\n                                    <table class=\"table table-bordered table-striped\"\n                                           [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                                           [mfRowsOnPage]=\"5\">\n                                        <thead>\n                                            <tr>\n                                                <th colspan=\"10\">\n                                                    Filter by activity name:\n                                                    <input class=\"form-control\" [(ngModel)]=\"filterQuery\"\n                                                           placeholder=\"Search activity name\"/>\n                                                </th>\n                                            </tr>\n                                            <tr>\n                                                <th class=\"text-center\">\n                                                    <label>\n                                                        <input [(ngModel)]=\"allSelected\" name=\"selectAll\" type=\"checkbox\" class=\"checkbox\" (click)=\"toggleCategoriesSelection($event)\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"name\">Category Name</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"description\">Category Description</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n                                                </th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of mf.data; let rowIndex = index\" [ngClass]=\"{'bg-color-white': rowIndex % 2 == 1}\">\n                                                <td class=\"text-center\">\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input *ngIf=\"activityCategory!=obj\" [(ngModel)]=\"obj.selected\" name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" (click)=\"updateSelection(obj.uid,$event.target.checked)\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <span *ngIf=\"activityCategory!=obj\">\n                                                        {{ obj.name }}\n                                                    </span>\n                                                    <input *ngIf=\"activityCategory==obj\" class=\"form-control\" type=\"text\"\n                                                                  name=\"activityName\" id=\"activityName\"\n                                                                  [(ngModel)]=\"activityCategory.name\" required>\n                                                </td>\n                                                <td>\n                                                    <span *ngIf=\"activityCategory!=obj\">\n                                                        {{ obj.description }}\n                                                    </span>\n                                                    <input *ngIf=\"activityCategory==obj\" class=\"form-control\" type=\"text\"\n                                                           name=\"description\" id=\"description\"\n                                                           [(ngModel)]=\"activityCategory.description\" required>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <span *ngIf=\"activityCategory!=obj\" [ngSwitch]=\"obj.status\">\n                                                            <span *ngSwitchCase=\"'Active'\"\n                                                                  class=\"font-sm label label-success\">Active</span>\n                                                            <span *ngSwitchCase=\"'Inactive'\"\n                                                                  class=\"font-sm label label-warning\">Inactive</span>\n                                                        </span>\n                                                        <select *ngIf=\"activityCategory==obj\" name=\"userStatus\"\n                                                                [(ngModel)]=\"activityCategory.status\"\n                                                                class=\"form-control\">\n                                                            <option value=\"\" disabled=\"\">- Select -</option>\n                                                            <option value=\"Active\" selected>Active</option>\n                                                            <option value=\"Inactive\">Inactive</option>\n                                                        </select>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <a *ngIf=\"activityCategory!=obj\" class=\"btn btn-primary\" (click)=\"updateActivityCategory(obj)\"><i class=\"fa fa-edit\"></i></a>\n                                                    <a *ngIf=\"activityCategory!=obj\" class=\"btn btn-danger\" (click)=\"deleteActivityCategory(obj.uid)\"><i class=\"fa  fa-trash-o\"></i></a>\n                                                    <button *ngIf=\"activityCategory==obj\" type=\"button\"\n                                                            class=\"btn btn-primary\" (click)=\"submitActivityCategory()\" [disabled]=\"!activityCategory.name || !activityCategory.description || !activityCategory.status\">Save\n                                                    </button>\n                                                    <button *ngIf=\"activityCategory==obj\" type=\"button\"\n                                                            class=\"btn\" (click)=\"cancelEdit()\">Cancel\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr *ngIf=\"isNewActivityCategory\">\n                                                <td class=\"text-center\">\n                                                </td>\n                                                <td>\n                                                    <input class=\"form-control\" type=\"text\"\n                                                           name=\"activityName\" id=\"activityName\"\n                                                           [(ngModel)]=\"activityCategory.name\" required>\n                                                </td>\n                                                <td>\n                                                    <input class=\"form-control\" type=\"text\"\n                                                           name=\"description\" id=\"description\"\n                                                           [(ngModel)]=\"activityCategory.description\" required>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <select name=\"userStatus\"\n                                                                [(ngModel)]=\"activityCategory.status\"\n                                                                class=\"form-control\">\n                                                            <option value=\"\" disabled=\"\">- Select -</option>\n                                                            <option value=\"Active\" selected>Active</option>\n                                                            <option value=\"Inactive\">Inactive</option>\n                                                        </select>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <button type=\"button\"\n                                                            class=\"btn btn-primary\" (click)=\"submitActivityCategory()\" [disabled]=\"!activityCategory.name || !activityCategory.description || !activityCategory.status\">Save\n                                                    </button>\n                                                    <button type=\"button\"\n                                                            class=\"btn\" (click)=\"cancelEdit()\">Cancel\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr>\n                                                <td colspan=\"10\">\n                                                    <mfBootstrapPaginator\n                                                            [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                                </td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                    <div class=\"form-actions\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12 text-left\">\n                                                        <button type=\"button\"\n                                                                class=\"btn btn-default btn-lg\" (click)=\"activeDeactiveActivities()\" [disabled]=\"selectedActivityCategoriesUid.length == 0\">Activate/Deactivate\n                                                        </button>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-6\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-xs-12 text-right\">\n                                                        <button type=\"button\"\n                                                                class=\"btn btn-default btn-lg\" (click)=\"assignActivities()\">Assign Activities\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </sa-widget>\n                    </article>\n                </div>\n            </section>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ 2433:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n            <h1 class=\"page-title txt-color-blueDark\">\n\n                <!-- PAGE HEADER -->\n                <sa-big-breadcrumbs [items]=\"['Activity-Category Assignment']\" icon=\"users\"\n                                    class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\"></sa-big-breadcrumbs>\n            </h1>\n        </div>\n    </div>\n\n    <section id=\"widget-grid\" class=\"\">\n        <div class=\"row\">\n            <section id=\"widget-grid-2\" class=\"col-xs-12\">\n                <div class=\"row\">\n                    <article class=\"col-xs-12\">\n                        <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                            <header>\n                                <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n                                <h2>Search Results </h2>\n                            </header>\n                            <div>\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"form-group\" >\n                                            <label class=\"control-label\"> Category <span class=\"text-danger required-field-marker\">*</span></label>\n                                            <div class=\"input\">\n                                                <select name=\"categoryList\"\n                                                        class=\"form-control\" [(ngModel)]=\"uidActivityCategory\"\n                                                        (onSelection)=\"chargeListActivityUnassigned($event)\"\n                                                        [advComboBox]=\"{ placeholder: 'Select a Category' }\">\n                                                    <option value=\"\" disabled=\"\">- Select -</option>\n                                                    <option *ngFor=\"let option of listActivityCategory\" [ngValue]=\"option.uid\">{{option.name}}</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"widget-body no-padding\">\n                                    <table class=\"table table-bordered table-striped\"\n                                           [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n\n                                           [mfRowsOnPage]=\"5\">\n                                        <thead>\n                                            <tr>\n                                                <th colspan=\"11\">\n                                                    Filter by activity name:\n                                                    <input class=\"form-control\" [(ngModel)]=\"filterQuery\"\n                                                           placeholder=\"Search activity name\"/>\n                                                </th>\n                                            </tr>\n                                            <tr>\n                                                <th class=\"text-center\">\n                                                    <label>\n                                                        <input [(ngModel)]=\"allSelected\" name=\"selectAll\" type=\"checkbox\" class=\"checkbox\" (click)=\"toggleCategoriesSelection($event)\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"name\">Activity Name</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"vesselTypesString\">Vessel Type</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"weight\">Weight</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"occurrences\">Occurences</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"ranged\">Ranged</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"mandatory\">Mandatory</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"billable\">Billable</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"statementOfFact\">SOF</mfDefaultSorter>\n                                                </th>\n                                                <th>\n                                                    <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n                                                </th>\n                                                <th></th>\n                                             </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of mf.data; let rowIndex = index\" [ngClass]=\"{'bg-color-white': rowIndex % 2 == 1}\">\n                                                <td class=\"text-center\">\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input *ngIf=\"activityCategoryAssignment != obj\" [(ngModel)]=\"obj.selected\" name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" (click)=\"updateSelection(obj.uid,$event.target.checked)\" />\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>{{obj.activity.name}}</td>\n                                                <td>\n                                                    <span *ngIf=\"activityCategoryAssignment != obj\">\n                                                        <span *ngIf=\"obj.vesselTypes.length == 1\">\n                                                            {{obj.vesselTypes[0].description}}\n                                                        </span>\n                                                        <span *ngIf=\"obj.vesselTypes.length > 1\">\n                                                            Multiple\n                                                        </span>\n                                                    </span>\n                                                    <select *ngIf=\"activityCategoryAssignment == obj\" required name=\"vesselType\" multiple=\"multiple\" id=\"multiselect\" class=\"form-control custom-scroll col-sm-12\"\n                                                            title=\"Click to Select a Vessel Type\"\n                                                            [(ngModel)]=\"activityCategoryAssignment.vesselTypesIds\">\n                                                        <option *ngFor=\"let vesselType of listVesselTypes\" [ngValue]=\"vesselType.uid\" >{{vesselType.description}}</option>\n                                                    </select>\n                                                </td>\n\n                                                <td>\n                                                    <span *ngIf=\"activityCategoryAssignment != obj\">{{obj.weight}}</span>\n                                                    <input *ngIf=\"activityCategoryAssignment == obj\" class=\"form-control\" type=\"number\" min=\"1\" max=\"20\"\n                                                           name=\"weight\" required [(ngModel)]=\"activityCategoryAssignment.weight\">\n                                                </td><td>\n                                                    <span *ngIf=\"activityCategoryAssignment != obj\">{{obj.occurrences}}</span>\n                                                    <input *ngIf=\"activityCategoryAssignment == obj\" class=\"form-control\" type=\"number\" min=\"0\"\n                                                           name=\"occurences\" required [(ngModel)]=\"activityCategoryAssignment.occurrences\">\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" [disabled]=\"activityCategoryAssignment != obj\" type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"obj.ranged\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" [disabled]=\"activityCategoryAssignment != obj\"  type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"obj.mandatory\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" [disabled]=\"activityCategoryAssignment != obj\"  type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"obj.billable\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" [disabled]=\"activityCategoryAssignment != obj\"  type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"obj.statementOfFact\"/>\n                                                        <span></span>\n                                                    </label></td>\n                                                <td>\n                                                    <div>\n                                                        <span *ngIf=\"activityCategoryAssignment != obj\" [ngSwitch]=\"obj.status\">\n                                                            <span *ngSwitchCase=\"'Active'\"\n                                                                  class=\"font-sm label label-success\">Active</span>\n                                                            <span *ngSwitchCase=\"'Inactive'\"\n                                                                  class=\"font-sm label label-warning\">Inactive</span>\n                                                        </span>\n                                                        <select *ngIf=\"activityCategoryAssignment == obj\"  name=\"userStatus\"\n                                                                class=\"form-control\" [(ngModel)]=\"obj.status\">\n                                                            <option value=\"\" disabled=\"\">- Select -</option>\n                                                            <option value=\"Active\" selected>Active</option>\n                                                            <option value=\"Inactive\">Inactive</option>\n                                                        </select>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <a *ngIf=\"activityCategoryAssignment != obj\" class=\"btn btn-primary\" (click)=\"changeToUpdate(obj)\"><i class=\"fa fa-edit\"></i></a>\n                                                    <a *ngIf=\"activityCategoryAssignment != obj\" class=\"btn btn-danger\" (click)=\"deleteActivityCategoryAssignment(obj.uid)\"><i class=\"fa  fa-trash-o\"></i></a>\n                                                    <button *ngIf=\"activityCategoryAssignment == obj\" type=\"button\"\n                                                            class=\"btn btn-primary\" (click)=\"submitActivityCategoryAssignment()\" >Save\n                                                    </button>\n                                                    <button *ngIf=\"activityCategoryAssignment == obj\" type=\"button\"\n                                                            class=\"btn\" (click)=\"cancelEdit()\">Cancel\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr *ngIf=\"isNew\">\n                                                <td class=\"text-center\"></td>\n                                                <td>\n                                                    <select name=\"activityList\" [advComboBox]=\"{ placeholder: 'Select an Activity' }\"\n                                                            class=\"form-control\" [(ngModel)]=\"activityCategoryAssignment.activity.uid\"\n                                                            (onSelection)=\"changeActivity($event)\"\n                                                            required>\n                                                        <option value=\"\" disabled=\"\">- Select -</option>\n                                                        <option *ngFor=\"let activity of listActivityUnassigned\" [ngValue]=\"activity.uid\">{{activity.name}}</option>\n                                                    </select>\n                                                </td>\n                                                <td>\n                                                    <select required name=\"vesselType\" multiple=\"multiple\" id=\"multiselect\" class=\"form-control custom-scroll col-sm-12\"\n                                                            title=\"Click to Select a Vessel Type\"\n                                                            [(ngModel)]=\"activityCategoryAssignment.vesselTypesIds\">\n                                                        <option *ngFor=\"let vesselType of listVesselTypes\" [ngValue]=\"vesselType.uid\" >{{vesselType.description}}</option>\n                                                    </select>\n                                                </td>\n                                                <td>\n                                                    <input class=\"form-control\" type=\"number\" min=\"1\" max=\"20\"\n                                                           name=\"weight\" required [(ngModel)]=\"activityCategoryAssignment.weight\">\n                                                </td><td>\n                                                    <input class=\"form-control\" type=\"number\" min=\"0\"\n                                                           name=\"occurrences\" required [(ngModel)]=\"activityCategoryAssignment.occurrences\">\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"activityCategoryAssignment.ranged\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"activityCategoryAssignment.mandatory\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"activityCategoryAssignment.billable\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <label style=\"margin-bottom: 0;\">\n                                                        <input name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"activityCategoryAssignment.statementOfFact\"/>\n                                                        <span></span>\n                                                    </label>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <select name=\"userStatus\"\n                                                                class=\"form-control\" [(ngModel)]=\"activityCategoryAssignment.status\">\n                                                            <option value=\"\" disabled=\"\">- Select -</option>\n                                                            <option value=\"Active\" selected>Active</option>\n                                                            <option value=\"Inactive\">Inactive</option>\n                                                        </select>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <button type=\"button\"\n                                                            class=\"btn btn-primary\" (click)=\"submitActivityCategoryAssignment()\" >Save\n                                                    </button>\n                                                    <button type=\"button\"\n                                                            class=\"btn\" (click)=\"cancelEdit()\">Cancel\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                        <tr>\n                                            <td colspan=\"11\">\n                                                <mfBootstrapPaginator\n                                                        [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                            </td>\n                                        </tr>\n                                        </tfoot>\n                                    </table>\n                                    <div class=\"form-actions\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-xs-12 text-left\">\n                                                        <button type=\"button\"\n                                                                class=\"btn btn-default btn-lg\"  (click)=\"newActivity()\" [disabled]=\"!uidActivityCategory\">Assign New Activity\n                                                        </button>\n                                                        <button type=\"button\"\n                                                                class=\"btn btn-default btn-lg\" (click)=\"activeDeactiveActivityCategoryAssignments()\" [disabled]=\"!selectedActivityCategoryAssignmentsUid.length > 0\">Activate/Deactivate\n                                                        </button>\n                                                        <button type=\"button\" (click)=\"cancel()\"\n                                                                class=\"btn btn-default btn-lg\">Cancel\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </sa-widget>\n                    </article>\n                </div>\n            </section>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ 2434:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n            <h1 class=\"page-title txt-color-blueDark\">\n\n                <!-- PAGE HEADER -->\n                <sa-big-breadcrumbs [items]=\"['Activity']\" icon=\"users\"\n                                    class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\"></sa-big-breadcrumbs>\n            </h1>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n            <!-- Button trigger modal -->\n            <a href=\"javascript:void(0);\" (click)=\"createNewActivity()\" class=\"btn btn-success btn-lg pull-right header-btn hidden-mobile\">{{ 'Create New Activity' }}</a>\n        </div>\n    </div>\n\n\n    <section id=\"widget-grid\" class=\"\">\n        <div class=\"row\">\n            <section id=\"widget-grid-2\" class=\"col-xs-12\">\n                <div class=\"row\">\n                    <article class=\"col-xs-12\">\n                        <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                            <header>\n                                <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n                                <h2>Search Results </h2>\n                            </header>\n                            <div>\n                                <div class=\"widget-body no-padding\">\n                                    <form #mainForm=\"ngForm\" novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\n                                        <table class=\"table table-bordered table-striped\"\n                                               [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                                               [mfRowsOnPage]=\"5\">\n                                            <thead>\n                                                <tr>\n                                                    <th colspan=\"10\">\n                                                        Filter by activity name:\n                                                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\" name=\"filterQuery\"\n                                                               placeholder=\"Search activity name\"/>\n                                                    </th>\n                                                </tr>\n                                                <tr>\n                                                    <th class=\"text-center\">\n                                                        <label>\n                                                            <input [(ngModel)]=\"allSelected\" name=\"selectAll\" type=\"checkbox\" class=\"checkbox\" (click)=\"toggleActivitiesSelection($event)\"/>\n                                                            <span></span>\n                                                        </label>\n                                                    </th>\n                                                    <th>\n                                                        <mfDefaultSorter by=\"name\">Activity Name</mfDefaultSorter>\n                                                    </th>\n                                                    <th>\n                                                        <mfDefaultSorter by=\"description\">Activity Description</mfDefaultSorter>\n                                                    </th>\n                                                    <th>\n                                                        <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n                                                    </th>\n                                                    <th></th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let obj of mf.data; let rowIndex = index\" [ngClass]=\"{'bg-color-white': rowIndex % 2 == 1}\">\n                                                    <td class=\"text-center\">\n                                                        <label style=\"margin-bottom: 0;\">\n                                                            <input *ngIf=\"activity != obj\" [(ngModel)]=\"obj.selected\" name=\"checkbox\" type=\"checkbox\" class=\"checkbox\" (click)=\"updateSelection(obj.uid,$event.target.checked)\"/>\n                                                            <span></span>\n                                                        </label>\n                                                    </td>\n                                                    <td>\n                                                        <span>{{ obj.name }}</span>\n                                                        <div *ngIf=\"activity == obj && formErrors.name\" class=\"alert alert-danger\">\n                                                            {{ formErrors.name }}\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <span *ngIf=\"activity != obj\">{{ obj.description }}</span>\n                                                        <input *ngIf=\"activity == obj\" class=\"form-control\" type=\"text\"\n                                                               name=\"description\" id=\"description\"\n                                                               [(ngModel)]=\"activity.description\" required>\n                                                        <div *ngIf=\"activity == obj && formErrors.activityDescription\" class=\"alert alert-danger\">\n                                                            {{ formErrors.activityDescription }}\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div>\n                                                            <span *ngIf=\"activity != obj\" [ngSwitch]=\"obj.status\">\n                                                                <span *ngSwitchCase=\"'Active'\"\n                                                                      class=\"font-sm label label-success\">Active</span>\n                                                                <span *ngSwitchCase=\"'Inactive'\"\n                                                                      class=\"font-sm label label-warning\">Inactive</span>\n                                                            </span>\n                                                            <select *ngIf=\"activity == obj\" name=\"userStatus\"\n                                                                    [(ngModel)]=\"activity.status\"\n                                                                    class=\"form-control\">\n                                                                <option value=\"\" disabled=\"\">- Select -</option>\n                                                                <option value=\"Active\" selected>Active</option>\n                                                                <option value=\"Inactive\">Inactive</option>\n                                                            </select>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <a *ngIf=\"activity != obj\" class=\"btn btn-primary\" (click)=\"updateActivity(obj)\"><i class=\"fa fa-edit\"></i></a>\n                                                        <a *ngIf=\"activity != obj\" class=\"btn btn-danger\" (click)=\"deleteActivity(obj.uid)\"><i class=\"fa  fa-trash-o\"></i></a>\n                                                        <button *ngIf=\"activity == obj\" type=\"button\"\n                                                                class=\"btn btn-primary\" (click)=\"submitActivity()\" [disabled]=\"!activity.name || !activity.description || !activity.status\">Save\n                                                        </button>\n                                                        <button *ngIf=\"activity == obj\" type=\"button\"\n                                                                class=\"btn\" (click)=\"cancelEdit()\">Cancel\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr *ngIf=\"isNewActivity\">\n                                                    <td class=\"text-center\">\n                                                    </td>\n                                                    <td>\n                                                        <input class=\"form-control\" type=\"text\"\n                                                               name=\"name\" id=\"activityName\"\n                                                               [(ngModel)]=\"activity.name\" required>\n                                                        <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">\n                                                            {{ formErrors.name }}\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <input class=\"form-control\" type=\"text\"\n                                                               name=\"description\" id=\"description1\"\n                                                               [(ngModel)]=\"activity.description\" required>\n                                                        <div *ngIf=\"formErrors.activityDescription\" class=\"alert alert-danger\">\n                                                            {{ formErrors.activityDescription }}\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div>\n                                                            <select name=\"userStatus\"\n                                                                    [(ngModel)]=\"activity.status\"\n                                                                    class=\"form-control\">\n                                                                <option value=\"\" disabled=\"\">- Select -</option>\n                                                                <option value=\"Active\" selected>Active</option>\n                                                                <option value=\"Inactive\">Inactive</option>\n                                                            </select>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <button type=\"button\"\n                                                                class=\"btn btn-primary\" (click)=\"submitActivity()\" [disabled]=\"!activity.name || !activity.description || !activity.status\">Save\n                                                        </button>\n                                                        <button type=\"button\"\n                                                                class=\"btn\" (click)=\"cancelEdit()\">Cancel\n                                                        </button>\n                                                    </td>\n                                                </tr>\n\n                                            </tbody>\n\n                                            <tfoot>\n                                            <tr>\n                                                <td colspan=\"10\">\n                                                    <mfBootstrapPaginator\n                                                            [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                                                </td>\n                                            </tr>\n                                            </tfoot>\n                                        </table>\n                                        <div class=\"form-actions\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-6\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-xs-12 text-left\">\n                                                            <button type=\"button\"\n                                                                        class=\"btn btn-default btn-lg\" (click)=\"activeDeactiveActivities()\" [disabled]=\"selectedActivitiesUid.length == 0\">Activate/Deactivate\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-sm-6\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-xs-12 text-right\">\n                                                            <button type=\"button\"\n                                                                    class=\"btn btn-lg btn-default\" (click)=\"assignToCategory()\">Assign to Category\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </sa-widget>\n                    </article>\n                </div>\n            </section>\n        </div>\n    </section>\n</div>\n"

/***/ })

});
//# sourceMappingURL=60.map