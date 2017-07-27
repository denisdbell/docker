webpackJsonpac__name_([62],{

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

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var datatable_component_1 = __webpack_require__(1545);
// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');
var SmartadminDatatableModule = (function () {
    function SmartadminDatatableModule() {
    }
    return SmartadminDatatableModule;
}());
SmartadminDatatableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [datatable_component_1.DatatableComponent],
        exports: [datatable_component_1.DatatableComponent],
    }),
    __metadata("design:paramtypes", [])
], SmartadminDatatableModule);
exports.SmartadminDatatableModule = SmartadminDatatableModule;


/***/ }),

/***/ 1544:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DatatableComponent = (function () {
    function DatatableComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    DatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([
            __webpack_require__.e/* import() */(79).then(__webpack_require__.bind(null, 1551)),
        ]).then(function () {
            _this.render();
        });
    };
    DatatableComponent.prototype.render = function () {
        var element = $(this.el.nativeElement.children[0]);
        var options = this.options || {};
        var toolbar = '';
        if (options.buttons)
            toolbar += 'B';
        if (this.paginationLength)
            toolbar += 'l';
        if (this.columnsHide)
            toolbar += 'C';
        if (typeof options.ajax === 'string') {
            var url = options.ajax;
            options.ajax = {
                url: url,
            };
        }
        options = $.extend(options, {
            "dom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
                "t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            oLanguage: {
                "sSearch": "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
                "sLengthMenu": "_MENU_"
            },
            "autoWidth": false,
            retrieve: true,
            responsive: true,
            initComplete: function (settings, json) {
                element.parent().find('.input-sm').removeClass("input-sm").addClass('input-md');
            }
        });
        var _dataTable = element.DataTable(options);
        if (this.filter) {
            // Apply the filter
            element.on('keyup change', 'thead th input[type=text]', function () {
                _dataTable
                    .column($(this).parent().index() + ':visible')
                    .search(this.value)
                    .draw();
            });
        }
        if (!toolbar) {
            element.parent().find(".dt-toolbar").append('<div class="text-right"><img src="assets/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
        }
        if (this.detailsFormat) {
            var format_1 = this.detailsFormat;
            element.on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = _dataTable.row(tr);
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child(format_1(row.data())).show();
                    tr.addClass('shown');
                }
            });
        }
    };
    return DatatableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "filter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "detailsFormat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DatatableComponent.prototype, "paginationLength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DatatableComponent.prototype, "columnsHide", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DatatableComponent.prototype, "tableClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DatatableComponent.prototype, "width", void 0);
DatatableComponent = __decorate([
    core_1.Component({
        selector: 'sa-datatable',
        template: "\n      <table class=\"dataTable {{tableClass}}\" width=\"{{width}}\">\n        <ng-content></ng-content>\n      </table>\n",
        styles: [
            __webpack_require__(1547)
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DatatableComponent);
exports.DatatableComponent = DatatableComponent;
var _a;


/***/ }),

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1544)();
// imports


// module
exports.push([module.i, "/*\n * This combined file was created by the DataTables downloader builder:\n *   https://datatables.net/download\n *\n * To rebuild or modify this file with the latest versions of the included\n * software please visit:\n *   https://datatables.net/download/#bs/pdfmake-0.1.18/dt-1.10.12/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2\n *\n * Included libraries:\n *   pdfmake 0.1.18, DataTables 1.10.12, Buttons 1.2.2, Column visibility 1.2.2, Flash export 1.2.2, HTML5 export 1.2.2, Print view 1.2.2, ColReorder 1.3.2\n */\n\ntable.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:8px;right:8px;display:block;font-family:'Glyphicons Halflings';opacity:0.5}table.dataTable thead .sorting:after{opacity:0.2;content:\"\\E150\"}table.dataTable thead .sorting_asc:after{content:\"\\E155\"}table.dataTable thead .sorting_desc:after{content:\"\\E156\"}table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{color:#eee}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-condensed>thead>tr>th{padding-right:20px}table.dataTable.table-condensed .sorting:after,table.dataTable.table-condensed .sorting_asc:after,table.dataTable.table-condensed .sorting_desc:after{top:6px;right:6px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}\n\n\ndiv.dt-button-info{position:fixed;top:50%;left:50%;width:400px;margin-top:-100px;margin-left:-200px;background-color:white;border:2px solid #111;box-shadow:3px 3px 8px rgba(0,0,0,0.3);border-radius:3px;text-align:center;z-index:21}div.dt-button-info h2{padding:0.5em;margin:0;font-weight:normal;border-bottom:1px solid #ddd;background-color:#f3f3f3}div.dt-button-info>div{padding:1em}ul.dt-button-collection.dropdown-menu{display:block;z-index:2002;-webkit-column-gap:8px;-moz-column-gap:8px;-ms-column-gap:8px;-o-column-gap:8px;column-gap:8px}ul.dt-button-collection.dropdown-menu.fixed{position:fixed;top:50%;left:50%;margin-left:-75px;border-radius:0}ul.dt-button-collection.dropdown-menu.fixed.two-column{margin-left:-150px}ul.dt-button-collection.dropdown-menu.fixed.three-column{margin-left:-225px}ul.dt-button-collection.dropdown-menu.fixed.four-column{margin-left:-300px}ul.dt-button-collection.dropdown-menu>*{-webkit-column-break-inside:avoid;break-inside:avoid}ul.dt-button-collection.dropdown-menu.two-column{width:300px;padding-bottom:1px;-webkit-column-count:2;-moz-column-count:2;-ms-column-count:2;-o-column-count:2;column-count:2}ul.dt-button-collection.dropdown-menu.three-column{width:450px;padding-bottom:1px;-webkit-column-count:3;-moz-column-count:3;-ms-column-count:3;-o-column-count:3;column-count:3}ul.dt-button-collection.dropdown-menu.four-column{width:600px;padding-bottom:1px;-webkit-column-count:4;-moz-column-count:4;-ms-column-count:4;-o-column-count:4;column-count:4}div.dt-button-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2001}@media screen and (max-width: 767px){div.dt-buttons{float:none;width:100%;text-align:center;margin-bottom:0.5em}div.dt-buttons a.btn{float:none}}\n\n\ntable.DTCR_clonedTable.dataTable{position:absolute !important;background-color:rgba(255,255,255,0.7);z-index:202}div.DTCR_pointer{width:1px;background-color:#337ab7;z-index:201}\n\n\n", ""]);

// exports


/***/ }),

/***/ 1547:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1546);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 1696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var ProjectsListComponent = (function () {
    function ProjectsListComponent() {
        this.options = {
            "ajax": 'assets/api/project-list.json',
            "iDisplayLength": 15,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "name" },
                { "data": "est" },
                { "data": "contacts" },
                { "data": "status" },
                { "data": "target-actual" },
                { "data": "starts" },
                { "data": "ends" },
                { "data": "tracker" }
            ],
            "order": [[1, 'asc']]
        };
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
    };
    ProjectsListComponent.prototype.detailsFormat = function (d) {
        return "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n            <tbody><tr>\n                <td style=\"width:100px\">Project Title:</td>\n                <td>" + d.name + "</td>\n            </tr>\n            <tr>\n                <td>Deadline:</td>\n                <td>" + d.ends + "</td>\n            </tr>\n            <tr>\n                <td>Extra info:</td>\n                <td>And any further details here (images etc)...</td>\n            </tr>\n            <tr>\n                <td>Comments:</td>\n                <td>" + d.comments + "</td>\n            </tr>\n            <tr>\n                <td>Action:</td>\n                <td>" + d.action + "</td>\n            </tr></tbody>\n        </table>";
    };
    return ProjectsListComponent;
}());
ProjectsListComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'app-projects',
        template: __webpack_require__(2298),
    }),
    __metadata("design:paramtypes", [])
], ProjectsListComponent);
exports.ProjectsListComponent = ProjectsListComponent;


/***/ }),

/***/ 1955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var projects_list_component_1 = __webpack_require__(1696);
var routes = [{
        path: '',
        component: projects_list_component_1.ProjectsListComponent
    }];
var ProjectsListRoutingModule = (function () {
    function ProjectsListRoutingModule() {
    }
    return ProjectsListRoutingModule;
}());
ProjectsListRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ProjectsListRoutingModule);
exports.ProjectsListRoutingModule = ProjectsListRoutingModule;


/***/ }),

/***/ 1956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var projects_list_routing_module_1 = __webpack_require__(1955);
var projects_list_component_1 = __webpack_require__(1696);
var smartadmin_datatable_module_1 = __webpack_require__(1530);
var layout_module_1 = __webpack_require__(711);
var stats_module_1 = __webpack_require__(1404);
var smartadmin_widgets_module_1 = __webpack_require__(713);
var ProjectsListModule = (function () {
    function ProjectsListModule() {
    }
    return ProjectsListModule;
}());
ProjectsListModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            projects_list_routing_module_1.ProjectsListRoutingModule,
            layout_module_1.SmartadminLayoutModule,
            stats_module_1.StatsModule,
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
        ],
        declarations: [projects_list_component_1.ProjectsListComponent]
    }),
    __metadata("design:paramtypes", [])
], ProjectsListModule);
exports.ProjectsListModule = ProjectsListModule;


/***/ }),

/***/ 2298:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Projects', 'Overview']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"alert alert-info\">\n          <strong>NOTE:</strong> All the data is loaded from a seperate JSON file\n        </div>\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n\n              <sa-datatable [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Projects</th>\n                  <th><i\n                    class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    EST\n                  </th>\n                  <th>Contacts</th>\n                  <th>Status</th>\n                  <th><i class=\"fa fa-circle txt-color-darken font-xs\"></i> Target/\n                    <i class=\"fa fa-circle text-danger font-xs\"></i> Actual\n                  </th>\n                  <th><i\n                    class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    Starts\n                  </th>\n                  <th><i\n                    class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                    Ends\n                  </th>\n                  <th>Tracker</th>\n                </tr>\n                </thead>\n\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=62.map