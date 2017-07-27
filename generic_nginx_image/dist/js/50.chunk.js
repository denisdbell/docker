webpackJsonpac__name_([50],{

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var add_event_component_1 = __webpack_require__(1627);
var calendar_widget_component_1 = __webpack_require__(1628);
var draggable_event_directive_1 = __webpack_require__(1630);
var events_service_1 = __webpack_require__(1556);
var external_events_component_1 = __webpack_require__(1631);
var calendar_component_1 = __webpack_require__(1582);
var smartadmin_module_1 = __webpack_require__(1402);
var calendar_routing_1 = __webpack_require__(1629);
var ng2_bootstrap_1 = __webpack_require__(118);
var CalendarModule = (function () {
    function CalendarModule() {
    }
    return CalendarModule;
}());
CalendarModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_module_1.SmartadminModule,
            calendar_routing_1.routing,
            ng2_bootstrap_1.DropdownModule,
        ],
        declarations: [
            add_event_component_1.AddEventComponent,
            calendar_widget_component_1.CalendarWidgetComponent,
            draggable_event_directive_1.DraggableEvent,
            external_events_component_1.ExternalEventsComponent,
            calendar_component_1.CalendarComponent,
        ],
        exports: [
            add_event_component_1.AddEventComponent,
            calendar_widget_component_1.CalendarWidgetComponent,
            draggable_event_directive_1.DraggableEvent,
            external_events_component_1.ExternalEventsComponent,
            calendar_component_1.CalendarComponent,
        ],
        providers: [events_service_1.EventsService]
    }),
    __metadata("design:paramtypes", [])
], CalendarModule);
exports.CalendarModule = CalendarModule;


/***/ }),

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

/***/ 1556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var EVENTS_MOCK_1 = __webpack_require__(1632);
var EXTERNAL_EVENTS_MOCK_1 = __webpack_require__(1633);
var Rx_1 = __webpack_require__(84);
var EventsService = (function () {
    function EventsService() {
        this.store = {
            events: EVENTS_MOCK_1.default,
            externalEvents: EXTERNAL_EVENTS_MOCK_1.externalEvents,
            removeAfterDrop: false,
        };
        this.subject = new Rx_1.Subject();
    }
    EventsService.prototype.subscribe = function (next, error, complete) {
        return this.subject.subscribe(next, error, complete);
    };
    EventsService.prototype.addEvent = function (event) {
        var dropId = event.id;
        event.id = this.generateId();
        this.store.events.push(event);
        if (this.store.removeAfterDrop) {
            this.store.externalEvents.splice(this.store.externalEvents.findIndex(function (it) { return it.id == dropId; }), 1);
        }
        this.subject.next(this.store);
    };
    EventsService.prototype.addExternalEvent = function (event) {
        this.store.externalEvents.push(event);
        this.subject.next(this.store);
    };
    EventsService.prototype.setRemoveAfterDrop = function (value) {
        this.store.removeAfterDrop = value;
        this.subject.next(this.store);
    };
    EventsService.prototype.generateId = function () {
        return Math.random().toString(36).slice(2);
    };
    return EventsService;
}());
EventsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EventsService);
exports.EventsService = EventsService;


/***/ }),

/***/ 1582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        selector: 'sa-calendar',
        template: __webpack_require__(1674),
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;


/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.colors = {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"
};
exports.barChartDemoOptions = {
    colors: [exports.colors.chartSecond, exports.colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
exports.sinChartDemoOptions = {
    series: {
        lines: {
            show: true
        },
        points: {
            show: true
        }
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        //content : "Value <b>$x</b> Value <span>$y</span>",
        defaultTheme: false
    },
    colors: [exports.colors.chartSecond, exports.colors.chartFourth],
    yaxis: {
        min: -1.1,
        max: 1.1
    },
    xaxis: {
        min: 0,
        max: 15
    }
};
exports.horizontalChartDemoOptions = {
    colors: [exports.colors.chartSecond, exports.colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
exports.salesChartDemoOptions = {
    xaxis: {
        mode: "time",
        tickLength: 5
    },
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        //points: { show: true },
        shadowSize: 0
    },
    selection: {
        mode: "x"
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "Your sales for <b>%x</b> was <span>$%y</span>",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [exports.colors.chartSecond]
};
exports.fillChartDemoOptions = {
    xaxis: {
        tickDecimals: 0
    },
    yaxis: {
        tickFormatter: function (v) {
            return v + " cm";
        }
    }
};
exports.pieChartDemoOptions = {
    series: {
        pie: {
            show: true,
            innerRadius: 0.5,
            radius: 1,
            label: {
                show: false,
                radius: 2 / 3,
                formatter: function (label, series) {
                    return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                },
                threshold: 0.1
            }
        }
    },
    legend: {
        show: true,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#000",
        container: null,
        position: "ne",
        margin: [5, 10],
        backgroundColor: "#efefef",
        backgroundOpacity: 1 // set to 0 to avoid background
    },
    grid: {
        hoverable: true,
        clickable: true
    }
};
exports.siteStatsDemoOptions = {
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        points: {
            show: true
        },
        shadowSize: 0
    },
    yaxes: [{
            min: 20,
            tickLength: 5
        }],
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: exports.colors.chartBorderColor,
        borderWidth: 0,
        borderColor: exports.colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "%s for <b>%x:00 hrs</b> was %y",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [exports.colors.charMain, exports.colors.chartSecond],
    xaxis: {
        mode: "time",
        tickLength: 10,
        ticks: 15,
        tickDecimals: 2
    },
    yaxis: {
        ticks: 15,
        tickDecimals: 0
    }
};
exports.autoUpdatingChartDemoOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: [exports.colors.chartFourth],
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.4
                    }, {
                        opacity: 0
                    }]
            },
            steps: false
        }
    }
};
exports.FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};


/***/ }),

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var events_service_1 = __webpack_require__(1556);
var CalendarEvent = (function () {
    function CalendarEvent(id, title, description, className, icon) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.className = className;
        this.icon = icon;
    }
    return CalendarEvent;
}());
var AddEventComponent = (function () {
    function AddEventComponent(eventsService) {
        this.eventsService = eventsService;
        this.icons = [
            'fa-info',
            'fa-warning',
            'fa-check',
            'fa-user',
            'fa-lock',
            'fa-clock-o'
        ];
        this.colorClassNames = [
            {
                bg: 'bg-color-darken',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blue',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-orange',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-greenLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blueLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-red',
                txt: 'txt-color-white'
            }
        ];
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.activeIcon = this.icons[0];
        this.activeColorClass = this.colorClassNames[0];
    };
    AddEventComponent.prototype.setIcon = function (icon) {
        this.activeIcon = icon;
    };
    AddEventComponent.prototype.setColorClass = function (colorClassName) {
        this.activeColorClass = colorClassName;
    };
    AddEventComponent.prototype.addExternalEvent = function () {
        if (!this.description || !this.title) {
            return;
        }
        var event = new CalendarEvent(this.eventsService.generateId(), this.title, this.description, this.activeColorClass.bg + ' ' + this.activeColorClass.txt, this.activeIcon);
        this.eventsService.addExternalEvent(event);
        this.description = '';
        this.title = '';
    };
    return AddEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddEventComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddEventComponent.prototype, "description", void 0);
AddEventComponent = __decorate([
    core_1.Component({
        selector: 'sa-add-event',
        template: __webpack_require__(1672),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" && _a || Object])
], AddEventComponent);
exports.AddEventComponent = AddEventComponent;
var _a;


/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var events_service_1 = __webpack_require__(1556);
var CalendarWidgetComponent = (function () {
    function CalendarWidgetComponent(el, eventsService) {
        var _this = this;
        this.el = el;
        this.eventsService = eventsService;
        this.period = 'Showing';
        __webpack_require__.e/* import() */(82).then(__webpack_require__.bind(null, 1940)).then(function () {
            _this.render();
        });
    }
    CalendarWidgetComponent.prototype.render = function () {
        var _this = this;
        this.$calendarRef = $('#calendar', this.el.nativeElement);
        this.calendar = this.$calendarRef.fullCalendar({
            lang: 'en',
            editable: true,
            draggable: true,
            selectable: false,
            selectHelper: true,
            unselectAuto: false,
            disableResizing: false,
            droppable: true,
            header: {
                left: 'title',
                center: 'prev, next, today',
                right: 'month, agendaWeek, agendaDay' //month, agendaDay,
            },
            drop: function (date, event, ui) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = ui.helper.data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);
                // assign it the date that was reported
                copiedEventObject.start = date;
                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                _this.$calendarRef.fullCalendar('renderEvent', copiedEventObject, true);
                _this.eventsService.addEvent(copiedEventObject);
            },
            select: function (start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    _this.calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    }, true // make the event "stick"
                    );
                }
                _this.calendar.fullCalendar('unselect');
            },
            events: function (start, end, timezone, callback) {
                callback(_this.eventsService.store.events);
            },
            eventRender: function (event, element, icon) {
                if (event.description != "") {
                    element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                }
                if (event.icon != "") {
                    element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                }
            }
        });
        $('.fc-header-right, .fc-header-center', this.$calendarRef).hide();
        $('.fc-left', this.$calendarRef).addClass('fc-header-title');
    };
    CalendarWidgetComponent.prototype.ngOnDestroy = function () {
        this.calendar.fullCalendar('destroy');
    };
    CalendarWidgetComponent.prototype.changeView = function (period) {
        this.calendar.fullCalendar('changeView', period);
        this.period = period;
    };
    CalendarWidgetComponent.prototype.next = function () {
        $('.fc-next-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.prev = function () {
        $('.fc-prev-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.today = function () {
        $('.fc-today-button', this.el.nativeElement).click();
    };
    return CalendarWidgetComponent;
}());
CalendarWidgetComponent = __decorate([
    core_1.Component({
        selector: 'calendar-widget',
        template: __webpack_require__(1673),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" && _b || Object])
], CalendarWidgetComponent);
exports.CalendarWidgetComponent = CalendarWidgetComponent;
var _a, _b;


/***/ }),

/***/ 1629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
var calendar_component_1 = __webpack_require__(1582);
exports.routes = [
    {
        path: '',
        component: calendar_component_1.CalendarComponent,
        data: { pageTitle: 'Calendar' }
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ }),

/***/ 1630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DraggableEvent = (function () {
    function DraggableEvent(el) {
        this.el = el;
    }
    DraggableEvent.prototype.ngOnInit = function () {
        this.type = this.event.className;
        $(this.el.nativeElement)
            .data('eventObject', this.event)
            .draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0 //  original position after the drag
        });
    };
    return DraggableEvent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DraggableEvent.prototype, "event", void 0);
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object)
], DraggableEvent.prototype, "type", void 0);
DraggableEvent = __decorate([
    core_1.Directive({
        selector: '[saDraggableEvent]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DraggableEvent);
exports.DraggableEvent = DraggableEvent;
var _a;


/***/ }),

/***/ 1631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var events_service_1 = __webpack_require__(1556);
var ExternalEventsComponent = (function () {
    function ExternalEventsComponent(eventsService) {
        this.eventsService = eventsService;
        this.removeAfterDrop = false;
    }
    ExternalEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = this.eventsService.store.externalEvents;
        this.removeAfterDrop = this.eventsService.store.removeAfterDrop;
        this.sub = this.eventsService.subscribe(function (store) {
            _this.events = store.externalEvents;
        });
    };
    ExternalEventsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExternalEventsComponent.prototype.toggleRemoveAfterDrop = function () {
        this.eventsService.setRemoveAfterDrop(this.removeAfterDrop);
    };
    return ExternalEventsComponent;
}());
ExternalEventsComponent = __decorate([
    core_1.Component({
        selector: 'sa-external-events',
        template: __webpack_require__(1675),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" && _a || Object])
], ExternalEventsComponent);
exports.ExternalEventsComponent = ExternalEventsComponent;
var _a;


/***/ }),

/***/ 1632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var moment = __webpack_require__(2);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{
        "id": "544c4183be624ef013bb009a",
        "title": "All Day Event",
        "start": moment().subtract(15, 'day').startOf('day').add(21, 'hours'),
        "description": "long description",
        "icon": "fa-check",
        "className": ["event", "bg-color-greenLight"]
    }, {
        "id": "544c4183be624ef013bb009b",
        "title": "Long Event",
        "start": moment().subtract(12, 'day').startOf('day'),
        "end": moment().subtract(11, 'day').startOf('day'),
        "icon": "fa-lock",
        "className": ["event", "bg-color-red"]
    }, {
        "id": "544c4183be624ef013bb009c",
        "title": "Repeating Event",
        "start": moment().subtract(7, 'day').startOf('day').add(13, 'hours'),
        "allDay": false,
        "icon": "fa-clock-o",
        "className": ["event", "bg-color-blue"]
    }, {
        "id": "544c4183be624ef013bb009d",
        "title": "Repeating Event",
        "start": moment().add(14, 'day').startOf('day').add(14, 'hours'),
        "allDay": false,
        "icon": "fa-clock-o",
        "className": ["event", "bg-color-blue"]
    }, {
        "id": "544c4183be624ef013bb009e",
        "title": "Meeting",
        "start": moment().add(1, 'day').startOf('day').add(8, 'hours').add(30, 'minutes'),
        "allDay": false,
        "className": ["event", "bg-color-darken"]
    }, {
        "id": "544c4183be624ef013bb009f",
        "title": "Lunch",
        "start": moment().add(3, 'day').startOf('day').add(10, 'hours'),
        "end": moment().add(3, 'day').startOf('day').add(12, 'hours'),
        "allDay": false,
        "className": ["event", "bg-color-darken"]
    }, {
        "id": "544c4183be624ef013bb00a0",
        "title": "Birthday Party",
        "start": moment().add(5, 'day').startOf('day').add(17, 'hours'),
        "end": moment().add(5, 'day').startOf('day').add(20, 'hours').add(30, 'minutes'),
        "allDay": false,
        "className": ["event", "bg-color-darken"]
    }, {
        "id": "544c4183be624ef013bb00a1",
        "title": "Smartadmin Open Day",
        "start": moment().add(7, 'day').startOf('day').add(22, 'hours'),
        "end": moment().add(8, 'day').startOf('day').add(22, 'hours'),
        "className": ["event", "bg-color-darken"]
    }];


/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.externalEvents = [
    {
        id: 'ee1',
        title: "Office Meeting",
        description: "Currently busy",
        className: "bg-color-darken txt-color-white",
        icon: "fa-time"
    },
    {
        id: 'ee2',
        title: "Lunch Break",
        description: "No Description",
        className: "bg-color-blue txt-color-white",
        icon: "fa-pie"
    },
    {
        id: 'ee3',
        title: "URGENT",
        description: "urgent tasks",
        className: "bg-color-red txt-color-white",
        icon: "fa-alert"
    }
];


/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var FlotChartComponent = (function () {
    function FlotChartComponent(el) {
        this.el = el;
        this.graphClass = '';
        this.width = '100%';
        this.height = '250px';
        this.vendorLoaded = false;
    }
    FlotChartComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(100).then(__webpack_require__.bind(null, 1928)).then(function () {
            _this.vendorLoaded = true;
            _this.render(_this.data);
        });
    };
    FlotChartComponent.prototype.render = function (data) {
        if (data) {
            $.plot(this.el.nativeElement.children[0], data, this.options);
        }
    };
    FlotChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.vendorLoaded && changes.data.currentValue) {
            this.render(changes.data.currentValue);
        }
    };
    return FlotChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "graphClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "height", void 0);
FlotChartComponent = __decorate([
    core_1.Component({
        selector: 'sa-flot-chart',
        template: "\n    <div class=\"sa-flot-chart\" [ngStyle]=\"{width: width, height: height}\">&nbsp;</div>\n  ",
        styles: ["\n  .sa-flot-chart{\n    overflow: hidden;\n  }\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], FlotChartComponent);
exports.FlotChartComponent = FlotChartComponent;
var _a;


/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var flot_chart_component_1 = __webpack_require__(1668);
var FlotChartModule = (function () {
    function FlotChartModule() {
    }
    return FlotChartModule;
}());
FlotChartModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [flot_chart_component_1.FlotChartComponent],
        exports: [flot_chart_component_1.FlotChartComponent],
    }),
    __metadata("design:paramtypes", [])
], FlotChartModule);
exports.FlotChartModule = FlotChartModule;


/***/ }),

/***/ 1672:
/***/ (function(module, exports) {

module.exports = "<form id=\"add-event-form\">\n  <fieldset>\n    <div class=\"form-group\">\n      <label>Select Event Icon</label>\n      <div class=\"btn-group btn-group-sm btn-group-justified\">\n\n        <label *ngFor=\"let icon of icons\"\n               class=\"btn btn-default\"\n               [saToggleActive]=\"icon == activeIcon\"\n               (click)=\"setIcon(icon)\">\n          <i class=\"fa text-muted {{icon}}\"></i>\n\n        </label>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Event Title</label>\n      <input [(ngModel)]=\"title\" class=\"form-control\" id=\"title\"\n             name=\"title\" maxLength=\"40\" type=\"text\"\n             placeholder=\"Event Title\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Event Description</label>\n        <textarea [(ngModel)]=\"description\" name=\"description\"\n                  class=\"form-control\"\n                  placeholder=\"Please be brief\" rows=\"3\" max-length=\"40\"\n                  id=\"description\"></textarea>\n      <p class=\"note\">Maxlength is set to 40 characters</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Select Event Color</label>\n      <div class=\"btn-group btn-group-sm btn-group-justified btn-select-tick\">\n\n        <label *ngFor=\"let colorClassName of colorClassNames\"\n               [saToggleActive]=\"colorClassName == activeColorClass\"\n               class=\"btn {{colorClassName.bg}}\" (click)=\"setColorClass(colorClassName)\">\n\n          <i class=\"fa fa-check {{colorClassName.txt}}\"></i>\n        </label>\n      </div>\n    </div>\n\n  </fieldset>\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"button\" id=\"add-event\"\n                (click)=\"addExternalEvent()\">\n          Add Event\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ 1673:
/***/ (function(module, exports) {

module.exports = "<sa-widget color=\"blueDark\">\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-calendar\"></i> </span>\n\n    <h2> My Events </h2>\n\n    <div class=\"widget-toolbar\">\n\n      <div class=\"btn-group\" dropdown>\n        <button id=\"single-button\" type=\"button\" class=\"btn btn-xs btn-default\" dropdownToggle>\n          {{period}} <span class=\"caret\"></span>\n        </button>\n        <ul dropdownMenu role=\"menu\" aria-labelledby=\"single-button\">\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeView('month')\">Month</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeView('agendaWeek')\">Agenda</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeView('agendaDay')\">Today</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body no-padding\">\n\n      <div class=\"widget-body-toolbar\">\n\n        <div id=\"calendar-buttons\">\n\n          <div class=\"btn-group\">\n            <a (click)=\"prev()\" class=\"btn btn-default btn-xs\"><i\n              class=\"fa fa-chevron-left\"></i></a>\n            <a (click)=\"next()\" class=\"btn btn-default btn-xs\"><i\n              class=\"fa fa-chevron-right\"></i></a>\n          </div>\n        </div>\n\n      </div>\n\n\n      <div id=\"calendar\"></div>\n\n    </div>\n\n  </div>\n\n</sa-widget>\n"

/***/ }),

/***/ 1674:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Calendar', 'Add Events']\" icon=\"calendar\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <sa-widgets-grid>\n    <div class=\"row\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-3\">\n\n        <sa-widget color=\"blueDark\"  [editbutton]=\"false\" [colorbutton]=\"false\" [togglebutton]=\"false\"\n                   [fullscreenbutton]=\"false\" [deletebutton]=\"false\">\n          <header>\n            <h2> Add Events </h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body\">\n\n              <sa-add-event></sa-add-event>\n            </div>\n          </div>\n        </sa-widget>\n\n        <div class=\"well well-sm\" id=\"event-container\">\n\n\n          <sa-external-events></sa-external-events>\n\n\n        </div>\n      </article>\n\n\n      <article class=\"col-sm-12 col-md-12 col-lg-9\">\n\n        <calendar-widget></calendar-widget>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1675:
/***/ (function(module, exports) {

module.exports = "<form>\n  <legend>\n    Draggable Events\n  </legend>\n  <ul id=\"external-events\" class=\"list-unstyled\">\n\n    <li saDraggableEvent [event]=\"event\" *ngFor=\"let event of events\">\n                                <span [class]=\"event.class\"\n                                      description=\"event.description\"\n                                      icon=\"event.icon\">\n                                    {{event.title}}</span>\n    </li>\n\n  </ul>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"drop-remove\" class=\"checkbox style-0\"\n            [(ngModel)]=\"removeAfterDrop\" name=\"drop-remove\"\n             (ngModelChange)=\"toggleRemoveAfterDrop()\"/>\n      <span>remove after drop</span>\n    </label>\n  </div>\n</form>\n"

/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ 1702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var fade_in_top_decorator_1 = __webpack_require__(1416);
var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    fade_in_top_decorator_1.FadeInTop(),
    core_1.Component({
        selector: 'sa-analytics',
        template: __webpack_require__(2304),
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);
exports.AnalyticsComponent = AnalyticsComponent;


/***/ }),

/***/ 1703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Rx_1 = __webpack_require__(84);
var todo_1 = __webpack_require__(1704);
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new todo_1.Todo('Release', 'Critical'),
            new todo_1.Todo('Misc', 'Important'),
            new todo_1.Todo('E-commerce', 'Important'),
        ];
        this.states = [
            { name: "Critical", title: "Critical Tasks", icon: "warning" },
            { name: "Important", title: "Important Tasks", icon: "exclamation" },
            { name: "Completed", title: "Completed Tasks", icon: "check" }
        ];
        this.subject = new Rx_1.Subject();
    }
    TodoService.prototype.createTodo = function (todo) {
        todo.createdAt = new Date();
        if (todo.state = 'Completed') {
            todo.completedAt = new Date();
        }
        this.todos.push(todo);
        this.subject.next(this.todos);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        if (todo.completedAt) {
            todo.state = 'Important';
            todo.completedAt = null;
        }
        else {
            todo.state = 'Completed';
            todo.completedAt = new Date();
        }
        this.subject.next(this.todos);
    };
    TodoService.prototype.updateTodo = function (id, state) {
        this.todos.find(function (it) { return it.id == id; }).state = state.name;
        this.subject.next(this.todos);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.subject.next(this.todos);
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TodoService);
exports.TodoService = TodoService;


/***/ }),

/***/ 1704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Todo = (function () {
    function Todo(title, state) {
        this.id = '' + Todo._id++;
        this.title = title;
        this.state = state;
        this.createdAt = new Date();
    }
    return Todo;
}());
exports.Todo = Todo;
Todo._id = 0;


/***/ }),

/***/ 1970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(33);
var analytics_component_1 = __webpack_require__(1702);
var routes = [{
        path: '',
        component: analytics_component_1.AnalyticsComponent,
        data: { pageTitle: 'Analytics' }
    }];
var AnalyticsRoutingModule = (function () {
    function AnalyticsRoutingModule() {
    }
    return AnalyticsRoutingModule;
}());
AnalyticsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AnalyticsRoutingModule);
exports.AnalyticsRoutingModule = AnalyticsRoutingModule;


/***/ }),

/***/ 1971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var smartadmin_module_1 = __webpack_require__(1402);
var analytics_routing_module_1 = __webpack_require__(1970);
var analytics_component_1 = __webpack_require__(1702);
var social_network_component_1 = __webpack_require__(1976);
var live_feeds_component_1 = __webpack_require__(1973);
var live_stats_component_1 = __webpack_require__(1974);
var revenue_component_1 = __webpack_require__(1975);
var bird_eye_component_1 = __webpack_require__(1972);
var calendar_module_1 = __webpack_require__(1330);
var todo_widget_component_1 = __webpack_require__(1978);
var todo_list_component_1 = __webpack_require__(1977);
var flot_chart_module_1 = __webpack_require__(1669);
var d3_module_1 = __webpack_require__(2177);
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_module_1.SmartadminModule,
            analytics_routing_module_1.AnalyticsRoutingModule,
            calendar_module_1.CalendarModule,
            flot_chart_module_1.FlotChartModule,
            d3_module_1.D3Module,
        ],
        declarations: [
            analytics_component_1.AnalyticsComponent,
            live_feeds_component_1.LiveFeedsComponent,
            live_stats_component_1.LiveStatsComponent,
            revenue_component_1.RevenueComponent,
            social_network_component_1.SocialNetworkComponent,
            bird_eye_component_1.BirdEyeComponent,
            todo_widget_component_1.TodoWidgetComponent,
            todo_list_component_1.TodoListComponent
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;


/***/ }),

/***/ 1972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var BirdEyeComponent = (function () {
    function BirdEyeComponent() {
        this.data = {
            "Afghanistan": 16.63, "Albania": 11.58, "Algeria": 158.97, "Angola": 85.81, "Antigua and Barbuda": 1.1, "Argentina": 351.02, "Armenia": 8.83, "Australia": 1219.72, "Austria": 366.26, "Azerbaijan": 52.17, "Bahamas": 7.54, "Bahrain": 21.73, "Bangladesh": 105.4, "Barbados": 3.96, "Belarus": 52.89, "Belgium": 461.33, "Belize": 1.43, "Benin": 6.49, "Bhutan": 1.4, "Bolivia": 19.18, "Bosnia and Herzegovina": 16.2, "Botswana": 12.5, "Brazil": 2023.53, "Brunei": 11.96, "Bulgaria": 44.84, "Burkina Faso": 8.67, "Burundi": 1.47, "Cambodia": 11.36, "Cameroon": 21.88, "Canada": 1563.66, "Cape Verde": 1.57, "Central African Republic": 2.11, "Chad": 7.59, "Chile": 199.18, "China": 5745.13, "Colombia": 283.11, "Comoros": 0.56, "Costa Rica": 35.02, "Croatia": 59.92, "Cyprus": 22.75, "Czech Republic": 195.23, "Democratic Republic of the Congo": 12.6, "Denmark": 304.56, "Djibouti": 1.14, "Dominica": 0.38, "Dominican Republic": 50.87, "East Timor": 0.62, "Ecuador": 61.49, "Egypt": 216.83, "El Salvador": 21.8, "Equatorial Guinea": 14.55, "Eritrea": 2.25, "Estonia": 19.22, "Ethiopia": 30.94, "Fiji": 3.15, "Finland": 231.98, "France": 2555.44, "Gabon": 12.56, "Gambia": 1.04, "Georgia": 11.23, "Germany": 3305.9, "Ghana": 18.06, "Greece": 305.01, "Grenada": 0.65, "Guatemala": 40.77, "Guinea": 4.34, "Guinea-Bissau": 0.83, "Guyana": 2.2, "Haiti": 6.5, "Honduras": 15.34, "Hong Kong": 226.49, "Hungary": 132.28, "Iceland": 12.77, "India": 1430.02, "Indonesia": 695.06, "Iran": 337.9, "Iraq": 84.14, "Ireland": 204.14, "Israel": 201.25, "Italy": 2036.69, "Ivory Coast": 22.38, "Jamaica": 13.74, "Japan": 5390.9, "Jordan": 27.13, "Kazakhstan": 129.76, "Kenya": 32.42, "Kiribati": 0.15, "Kuwait": 117.32, "Kyrgyzstan": 4.44, "Laos": 6.34, "Latvia": 23.39, "Lebanon": 39.15, "Lesotho": 1.8, "Liberia": 0.98, "Libya": 77.91, "Lithuania": 35.73, "Luxembourg": 52.43, "Macedonia": 9.58, "Madagascar": 8.33, "Malawi": 5.04, "Malaysia": 218.95, "Maldives": 1.43, "Mali": 9.08, "Malta": 7.8, "Mauritania": 3.49, "Mauritius": 9.43, "Mexico": 1004.04, "Moldova": 5.36, "Mongolia": 5.81, "Montenegro": 3.88, "Morocco": 91.7, "Mozambique": 10.21, "Myanmar": 35.65, "Namibia": 11.45, "Nepal": 15.11, "Netherlands": 770.31, "New Zealand": 138, "Nicaragua": 6.38, "Niger": 5.6, "Nigeria": 206.66, "Norway": 413.51, "Oman": 53.78, "Pakistan": 174.79, "Panama": 27.2, "Papua New Guinea": 8.81, "Paraguay": 17.17, "Peru": 153.55, "Philippines": 189.06, "Poland": 438.88, "Portugal": 223.7, "Qatar": 126.52, "Republic of the Congo": 11.88, "Romania": 158.39, "Russian Federation": 3476.91, "Rwanda": 5.69, "Saint Kitts and Nevis": 0.56, "Saint Lucia": 1, "Saint Vincent and the Grenadines": 0.58, "Samoa": 0.55, "Sao Tome and Principe": 0.19, "Saudi Arabia": 434.44, "Senegal": 12.66, "Serbia": 38.92, "Seychelles": 0.92, "Sierra Leone": 1.9, "Singapore": 217.38, "Slovakia": 86.26, "Slovenia": 46.44, "Solomon Islands": 0.67, "South Africa": 354.41, "South Korea": 986.26, "Spain": 1374.78, "Sri Lanka": 48.24, "Sudan": 65.93, "Suriname": 3.3, "Swaziland": 3.17, "Sweden": 444.59, "Switzerland": 522.44, "Syria": 59.63, "Taiwan": 426.98, "Tajikistan": 5.58, "Tanzania": 22.43, "Thailand": 312.61, "Togo": 3.07, "Tonga": 0.3, "Trinidad and Tobago": 21.2, "Tunisia": 43.86, "Turkey": 729.05, "Turkmenistan": 0, "Uganda": 17.12, "Ukraine": 136.56, "United Arab Emirates": 239.65, "United Kingdom": 2258.57, "United States": 6624.18, "Uruguay": 40.71, "Uzbekistan": 37.72, "Vanuatu": 0.72, "Venezuela": 285.21, "Vietnam": 101.99, "Yemen": 30.02, "Zambia": 15.69, "Zimbabwe": 5.57, "Bolivia, Plurinational State of": 121.34, "Somalia": 0.47, "Tanzania, United Republic of": 0.78, "South Sudan": 0.98, "Congo, the Democratic Republic of the": 1.45
        };
    }
    BirdEyeComponent.prototype.ngOnInit = function () {
    };
    return BirdEyeComponent;
}());
BirdEyeComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'bird-eye-widget',
        template: __webpack_require__(2305),
    }),
    __metadata("design:paramtypes", [])
], BirdEyeComponent);
exports.BirdEyeComponent = BirdEyeComponent;


/***/ }),

/***/ 1973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var LiveFeedsComponent = (function () {
    function LiveFeedsComponent() {
    }
    LiveFeedsComponent.prototype.ngOnInit = function () {
    };
    return LiveFeedsComponent;
}());
LiveFeedsComponent = __decorate([
    core_1.Component({
        selector: 'live-feeds-widget',
        template: __webpack_require__(2306),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], LiveFeedsComponent);
exports.LiveFeedsComponent = LiveFeedsComponent;


/***/ }),

/***/ 1974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var flot_examples_1 = __webpack_require__(1613);
var LiveStatsComponent = (function () {
    function LiveStatsComponent(zone) {
        this.zone = zone;
        this.liveSwitch = false;
        this.liveStatsChartOptions = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: ['rgb(87, 136, 156)'],
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            },
                            {
                                opacity: 0
                            }
                        ]
                    },
                    steps: false
                }
            }
        };
    }
    LiveStatsComponent.prototype.ngOnInit = function () {
        this.updateStats();
    };
    LiveStatsComponent.prototype.updateStats = function () {
        this.liveStats = [flot_examples_1.FakeDataSource.getRandomData()];
    };
    LiveStatsComponent.prototype.toggleSwitch = function () {
        var _this = this;
        if (this.liveSwitch) {
            this.interval = setInterval(function () {
                _this.updateStats();
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
    };
    LiveStatsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    return LiveStatsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LiveStatsComponent.prototype, "liveSwitch", void 0);
LiveStatsComponent = __decorate([
    core_1.Component({
        selector: 'live-stats-feed',
        template: __webpack_require__(2307),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object])
], LiveStatsComponent);
exports.LiveStatsComponent = LiveStatsComponent;
var _a;


/***/ }),

/***/ 1975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var RevenueComponent = (function () {
    function RevenueComponent() {
        this.state = {
            targetsShow: true,
            actualsShow: true,
            signupsShow: true
        };
        this.revenueChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: {
                tickFormatter: function (val, axis) {
                    return "$" + val;
                },
                max: 1200
            }
        };
    }
    RevenueComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    RevenueComponent.prototype.updateData = function () {
        var data = [];
        if (this.state.targetsShow)
            data.push(this.getTargetsData());
        if (this.state.actualsShow)
            data.push(this.getActualsData());
        if (this.state.signupsShow)
            data.push(this.getSignupsData());
        this.revenueData = data;
    };
    RevenueComponent.prototype.getTargetsData = function () {
        return {
            label: "Target Profit",
            data: [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
            bars: {
                show: true,
                align: "center",
                barWidth: 30 * 30 * 60 * 1000 * 80
            }
        };
    };
    RevenueComponent.prototype.getActualsData = function () {
        return {
            label: "Actual Profit",
            data: [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
            color: '#3276B1',
            lines: {
                show: true,
                lineWidth: 3
            },
            points: {
                show: true
            }
        };
    };
    RevenueComponent.prototype.getSignupsData = function () {
        return {
            label: "Actual Signups",
            data: [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]],
            color: '#71843F',
            lines: {
                show: true,
                lineWidth: 1
            },
            points: {
                show: true
            }
        };
    };
    return RevenueComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RevenueComponent.prototype, "state", void 0);
RevenueComponent = __decorate([
    core_1.Component({
        selector: 'revenue-feed',
        template: __webpack_require__(2308),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], RevenueComponent);
exports.RevenueComponent = RevenueComponent;


/***/ }),

/***/ 1976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var SocialNetworkComponent = (function () {
    function SocialNetworkComponent() {
        this.statsData = [
            {
                label: "Twitter",
                data: [
                    [1, 27],
                    [2, 34],
                    [3, 51],
                    [4, 48],
                    [5, 55],
                    [6, 65],
                    [7, 61],
                    [8, 70],
                    [9, 65],
                    [10, 75],
                    [11, 57],
                    [12, 59],
                    [13, 62]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            },
            {
                label: "Facebook",
                data: [
                    [1, 25],
                    [2, 31],
                    [3, 45],
                    [4, 37],
                    [5, 38],
                    [6, 40],
                    [7, 47],
                    [8, 55],
                    [9, 43],
                    [10, 50],
                    [11, 47],
                    [12, 39],
                    [13, 47]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }
        ];
        this.statsChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            colors: ["#568A89", "#3276B1"],
            tooltip: true,
            tooltipOpts: {
                //content : "Value <b>$x</b> Value <span>$y</span>",
                defaultTheme: false
            },
            xaxis: {
                ticks: [
                    [1, "JAN"],
                    [2, "FEB"],
                    [3, "MAR"],
                    [4, "APR"],
                    [5, "MAY"],
                    [6, "JUN"],
                    [7, "JUL"],
                    [8, "AUG"],
                    [9, "SEP"],
                    [10, "OCT"],
                    [11, "NOV"],
                    [12, "DEC"],
                    [13, "JAN+1"]
                ]
            },
            yaxes: {}
        };
    }
    SocialNetworkComponent.prototype.ngOnInit = function () {
    };
    return SocialNetworkComponent;
}());
SocialNetworkComponent = __decorate([
    core_1.Component({
        selector: 'social-network-feed',
        template: __webpack_require__(2309),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], SocialNetworkComponent);
exports.SocialNetworkComponent = SocialNetworkComponent;


/***/ }),

/***/ 1977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var todo_service_1 = __webpack_require__(1703);
var TodoListComponent = (function () {
    function TodoListComponent(el, todoService) {
        this.el = el;
        this.todoService = todoService;
        this.items = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.subject.subscribe(function (todos) {
            _this.setItems(todos);
        });
        this.setItems(this.todoService.todos);
    };
    TodoListComponent.prototype.setItems = function (todos) {
        var _this = this;
        this.items = todos.filter(function (it) { return it.state == _this.state.name; });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodoListComponent.prototype.deleteTodo = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    return TodoListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "state", void 0);
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        template: __webpack_require__(2310),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof todo_service_1.TodoService !== "undefined" && todo_service_1.TodoService) === "function" && _b || Object])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
var _a, _b;


/***/ }),

/***/ 1978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var todo_service_1 = __webpack_require__(1703);
var todo_1 = __webpack_require__(1704);
var TodoWidgetComponent = (function () {
    function TodoWidgetComponent(todoService) {
        this.todoService = todoService;
        this.states = this.todoService.states;
    }
    TodoWidgetComponent.prototype.ngOnInit = function () {
    };
    TodoWidgetComponent.prototype.createTodo = function () {
        this.todoService.createTodo(this.newTodo);
        this.newTodo = null;
    };
    TodoWidgetComponent.prototype.toggleAdd = function () {
        if (this.newTodo) {
            this.newTodo = null;
        }
        else {
            this.newTodo = new todo_1.Todo();
            this.newTodo.state = 'Important';
        }
    };
    return TodoWidgetComponent;
}());
TodoWidgetComponent = __decorate([
    core_1.Component({
        selector: 'todo-widget',
        template: __webpack_require__(2311),
        styles: [""],
        providers: [todo_service_1.TodoService],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof todo_service_1.TodoService !== "undefined" && todo_service_1.TodoService) === "function" && _a || Object])
], TodoWidgetComponent);
exports.TodoWidgetComponent = TodoWidgetComponent;
var _a;


/***/ }),

/***/ 2176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var layout_service_1 = __webpack_require__(53);
var smartadmin_config_1 = __webpack_require__(98);
//noinspection TypeScriptUnresolvedFunction
var $script = __webpack_require__(1689);
var D3MapComponent = (function () {
    function D3MapComponent(el, layoutService) {
        var _this = this;
        this.el = el;
        this.layoutService = layoutService;
        this.data = [];
        this.initialized = false;
        this.layoutSub = this.layoutService.subscribe(function () {
            _this.initialized && _this.throttle();
        });
    }
    D3MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $script(['https://d3js.org/d3.v4.min.js',
            'https://d3js.org/topojson.v1.min.js'], function () {
            _this.d3Init();
        });
    };
    D3MapComponent.prototype.d3Init = function () {
        var _this = this;
        d3.select(window).on("resize", this.throttle.bind(this));
        this.zoom = d3.zoom()
            .scaleExtent([1, 20])
            .on("zoom", this.move.bind(this));
        this.container = d3.select(this.getContainer());
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        //offsets for tooltips
        this.offsetL = this.container.offsetLeft + 20;
        this.offsetT = this.container.offsetTop + 10;
        //var graticule = d3.geo.graticule();
        this.graticule = d3.geoGraticule();
        this.tooltip = this.container.append("div").attr("class", "tooltip hidden");
        this.setup(this.width, this.height);
        d3.json(smartadmin_config_1.config.API_URL + '/graphs/d3/world-topo-min.json', function (err, world) {
            world.objects.countries.geometries = world.objects.countries.geometries.map(function (it) {
                it.properties.value = _this.data[it.properties.name];
                return it;
            });
            _this.countries = topojson.feature(world, world.objects.countries).features;
            var maxVal = Object.keys(_this.data).reduce(function (current, next) {
                return current >= _this.data[next] ? current : _this.data[next];
            }, 0);
            _this.color = d3.scaleLinear().domain([0, maxVal])
                .range([0, 100])
                .range([d3.color('rgba(0, 113, 164, 0.6)'), d3.color('rgba(0, 113, 164, 1)')])
                .nice(100);
            _this.draw();
            _this.initialized = true;
        });
    };
    D3MapComponent.prototype.setup = function (width, height) {
        //projection = d3.geo.mercator()
        this.projection = d3.geoMercator()
            .translate([(width / 2), (height / 2)])
            .scale(width / 2 / Math.PI);
        //path = d3.geo.path().projection(projection);
        this.path = d3.geoPath().projection(this.projection);
        this.svg = this.container.append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(this.zoom)
            .on("click", this.click.bind(this));
        this.g = this.svg.append("g");
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.9);
        this.zoom.translateBy(this.svg.transition().duration(750), 0, 20);
    };
    D3MapComponent.prototype.handleMouseOver = function (country) {
        var mouse = d3.mouse(this.svg.node()).map(function (d) {
            return parseInt(d);
        });
        this.tooltip.classed("hidden", false)
            .attr("style", "left:" + (mouse[0] + this.offsetL) + "px;top:" + (mouse[1] + this.offsetT) + "px")
            .html(country.properties.name);
    };
    D3MapComponent.prototype.handleMouseOut = function () {
        this.tooltip.classed("hidden", true);
    };
    D3MapComponent.prototype.isVisible = function () {
        var container = this.getContainer();
        return (container.clientHeight > 0 &&
            container.clientWidth > 0);
    };
    D3MapComponent.prototype.isInViewport = function () {
        var container = this.getContainer();
        var rect = container.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    D3MapComponent.prototype.draw = function () {
        var _this = this;
        if (!this.isVisible())
            return;
        // this.svg.append("path")
        //   .datum(this.graticule)
        //   .attr("class", "graticule")
        //   .attr("d", this.path);
        // this.g.append("path")
        //   .datum({ type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]] })
        //   .attr("class", "equator")
        //   .attr("d", this.path);
        var country = this.g.selectAll(".country").data(this.countries);
        country.enter().insert("path")
            .attr("class", "country")
            .attr("d", this.path)
            .attr("id", function (d, i) {
            return d.id;
        })
            .attr("title", function (d, i) {
            return d.properties.name;
        })
            .style("stroke", d3.color('white'))
            .style("fill", function (d, i) {
            return !d.properties.value ? d3.color('rgba(0, 113, 164, 0.0)') : _this.color(d.properties.value);
        })
            .style("stroke-width", '0.5')
            .on("mouseover", this.handleMouseOver.bind(this))
            .on("mouseout", this.handleMouseOut.bind(this));
        //tooltips
        /*
         d3.select("#container svg path")
         .on("mousemove", function(d,i) {
         console.log(d);
         var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
    
         tooltip.classed("hidden", false)
         .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
         .html(d.properties.name);
    
         })
         .on("mouseout",  function(d,i) {
         tooltip.classed("hidden", true);
         }); */
    };
    D3MapComponent.prototype.redraw = function () {
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        d3.select('svg').remove();
        this.setup(this.width, this.height);
        this.draw();
    };
    D3MapComponent.prototype.move = function () {
        //const t = d3.event.translate;
        var t = [d3.event.transform.x, d3.event.transform.y];
        //const s = d3.event.scale; 
        var s = d3.event.transform.k;
        var zscale = s;
        var h = this.height / 4;
        t[0] = Math.min((this.width / this.height) * (s - 1), Math.max(this.width * (1 - s), t[0]));
        t[1] = Math.min(h * (s - 1) + h * s, Math.max(this.height * (1 - s) - h * s, t[1]));
        //zoom.translateBy(t);
        this.g.attr("transform", "translate(" + t + ")scale(" + s + ")");
        //adjust the country hover stroke width based on zoom level
        // d3.selectAll(".country").style("stroke-width", 1.5 / s);
    };
    D3MapComponent.prototype.zoomIn = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 1.3);
    };
    D3MapComponent.prototype.zoomOut = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.7);
    };
    D3MapComponent.prototype.throttle = function () {
        var _this = this;
        window.clearTimeout(this.throttleTimer);
        this.throttleTimer = window.setTimeout(function () {
            _this.redraw();
        }, 200);
    };
    //geo translation on mouse click in map
    D3MapComponent.prototype.click = function () {
        var latlon = this.projection.invert(d3.mouse(this.svg.node()));
        console.log(latlon);
    };
    //function to add points and text to the map (used in plotting capitals)
    D3MapComponent.prototype.addpoint = function (lon, lat, text) {
        var gpoint = this.g.append("g").attr("class", "gpoint");
        var x = this.projection([lon, lat])[0];
        var y = this.projection([lon, lat])[1];
        gpoint.append("svg:circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("class", "point")
            .attr("r", 1.5);
        //conditional in case a point has no associated text
        if (text.length > 0) {
            gpoint.append("text")
                .attr("x", x + 2)
                .attr("y", y + 2)
                .attr("class", "text")
                .text(text);
        }
    };
    D3MapComponent.prototype.getContainer = function () {
        if (!this.cachedContainer) {
            this.cachedContainer = this.el.nativeElement.querySelector('.d3-map');
        }
        return this.cachedContainer;
    };
    return D3MapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], D3MapComponent.prototype, "data", void 0);
D3MapComponent = __decorate([
    core_1.Component({
        selector: 'd3-map',
        template: "\n  <div class=\"d3-zoomin\" (click)=\"zoomIn()\"><i class=\"fa fa-plus\"></i></div>\n  <div class=\"d3-zoomout\" (click)=\"zoomOut()\"><i class=\"fa fa-minus\"></i></div>\n  <div ngNonBindable class=\"d3-map\"></div>",
        styles: [__webpack_require__(2541)],
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof layout_service_1.LayoutService !== "undefined" && layout_service_1.LayoutService) === "function" && _b || Object])
], D3MapComponent);
exports.D3MapComponent = D3MapComponent;
var _a, _b;


/***/ }),

/***/ 2177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var d3_map_component_1 = __webpack_require__(2176);
var D3Module = (function () {
    function D3Module() {
    }
    return D3Module;
}());
D3Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [d3_map_component_1.D3MapComponent],
        exports: [d3_map_component_1.D3MapComponent],
    }),
    __metadata("design:paramtypes", [])
], D3Module);
exports.D3Module = D3Module;


/***/ }),

/***/ 2244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1544)();
// imports


// module
exports.push([module.i, ".d3-map .country:hover{\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n.d3-map .text{\n  font-size:10px;\n  text-transform:capitalize;\n}\nd3-map {\n  position: relative;\n  display: block;\n  padding:10px;\n  overflow:hidden;\n}\n\n.d3-map{\n  height:300px;\n}\n.d3-map .hidden { \n  display: none; \n}\n.d3-map div.tooltip {\n  color: #222; \n  background: #fff; \n  padding: .5em; \n  text-shadow: #f5f5f5 0 1px 0;\n  border-radius: 2px; \n  box-shadow: 0px 0px 2px 0px #a6a6a6; \n  opacity: 0.9; \n  right: 0;\n  position: absolute;\n}\n.d3-map .graticule {\n  fill: none;\n  stroke: #bbb;\n  stroke-width: .5px;\n  stroke-opacity: .5;\n}\n.d3-map .equator {\n  stroke: #ccc;\n  stroke-width: 1px;\n}\n\n.d3-zoomin{\n  top: 10px;\n}\n\n.d3-zoomout{\n  top: 34px;\n}\n\n.d3-zoomin, .d3-zoomout{\n  position: absolute;\n  background: #292929;\n  padding: 4px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n  line-height: 10px;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 2px;\n  box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\n  background-color: #fff;\n  border: 1px solid #bfbfbf;\n}", ""]);

// exports


/***/ }),

/***/ 2304:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Dashboard', 'My Dashboard']\" icon=\"home\"\n    class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\" ></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n\n  </div>\n\n  <sa-widgets-grid>\n\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n        <live-feeds-widget></live-feeds-widget>\n\n      </article>\n    </div>\n\n\n    <div class=\"row\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <bird-eye-widget></bird-eye-widget>\n\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>"

/***/ }),

/***/ 2305:
/***/ (function(module, exports) {

module.exports = "<sa-widget [colorbutton]=\"false\" [editbutton]=\"false\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-map-marker\"></i> </span>\n\n    <h2>Birds Eye</h2>\n\n    <div class=\"widget-toolbar hidden-mobile\">\n      <on-off-switch ><i class=\"fa fa-location-arrow\"></i> Realtime</on-off-switch>\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body no-padding\">\n      <d3-map [data]=\"data\"></d3-map>\n\n      <div id=\"heat-fill\">\n        <span class=\"fill-a\">0</span>\n\n        <span class=\"fill-b\">5,000</span>\n      </div>\n        <table saSparklineContainer class=\"table table-striped table-hover table-condensed\">\n          <thead>\n          <tr>\n            <th>Country</th>\n            <th>Visits</th>\n            <th class=\"text-align-center\">User Activity</th>\n            <th class=\"text-align-center\">Online</th>\n            <th class=\"text-align-center\">Demographic</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td><a (click)=\"(null)\">USA</a></td>\n            <td>4,977</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                2700, 3631, 2471, 1300, 1877, 2500, 2577, 2700, 3631, 2471,\n                2000, 2100, 3000\n              </div>\n            </td>\n            <td class=\"text-align-center\">143</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                17,83\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\"\n                data-dropdown>\n                <button class=\"btn btn-xs btn-default dropdown-toggle\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Australia</a></td>\n            <td>4,873</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                1000, 1100, 3030, 1300, -1877, -2500, -2577, -2700, 3631, 2471,\n                4700, 1631, 2471\n              </div>\n            </td>\n            <td class=\"text-align-center\">247</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                22,88\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">India</a></td>\n            <td>3,671</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                3631, 1471, 2400, 3631, 471, 1300, 1177, 2500, 2577, 3000, 4100,\n                3000, 7700\n              </div>\n            </td>\n            <td class=\"text-align-center\">373</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                10,90\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Brazil</a></td>\n            <td>2,476</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                2700, 1877, 2500, 2577, 2000, 3631, 2471, -2700, -3631, 2471,\n                1300, 2100, 3000,\n              </div>\n            </td>\n            <td class=\"text-align-center\">741</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                34,66\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Turkey</a></td>\n            <td>1,476</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, -2471, -2700, -3631,\n                -2471, 2700, 3631\n              </div>\n            </td>\n            <td class=\"text-align-center\">123</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                75,25\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Canada</a></td>\n            <td>146</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-orange text-align-center\"\n                   data-sparkline-height=\"22px\"\n                   data-sparkline-width=\"90px\" data-sparkline-barwidth=\"2\">\n                5, 34, 10, 1, 4, 6, -9, -1, 0, 0, 5, 6, 7\n              </div>\n            </td>\n            <td class=\"text-align-center\">23</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                50,50\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n          <tfoot>\n          <tr>\n            <td colspan=\"5\">\n              <ul class=\"pagination pagination-xs no-margin\">\n                <li class=\"prev disabled\">\n                  <a (click)=\"(null)\">Previous</a>\n                </li>\n                <li class=\"active\">\n                  <a (click)=\"(null)\">1</a>\n                </li>\n                <li>\n                  <a (click)=\"(null)\">2</a>\n                </li>\n                <li>\n                  <a (click)=\"(null)\">3</a>\n                </li>\n                <li class=\"next\">\n                  <a (click)=\"(null)\">Next</a>\n                </li>\n              </ul>\n            </td>\n          </tr>\n          </tfoot>\n        </table>\n\n\n    </div>\n\n  </div>\n</sa-widget>\n"

/***/ }),

/***/ 2306:
/***/ (function(module, exports) {

module.exports = "<sa-widget\n  [togglebutton]=\"false\"\n  [editbutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [colorbutton]=\"false\"\n  [deletebutton]=\"false\" saSparklineContainer saEasyPieChartContainer>\n\n  <header>\n                    <span class=\"widget-icon\">\n                        <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\n\n    <h2>Transactions per Second</h2>\n\n    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n      <li class=\"active\">\n        <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">Live Stats</span></a>\n      </li>\n     <!--   \n      <li>\n        <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">Social Network</span></a>\n      </li>\n      -->\n\n      <li>\n        <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">Revenue</span></a>\n      </li>\n    </ul>\n\n  </header>\n\n  <div class=\"no-padding\">\n\n    <div class=\"widget-body\">\n\n      <div id=\"myTabContent\" class=\"tab-content\">\n\n        <live-stats-feed class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\"></live-stats-feed>\n        \n        <!--\n        <social-network-feed class=\"tab-pane fade\" id=\"s2\" ></social-network-feed>\n         -->\n        <revenue-feed class=\"tab-pane fade\" id=\"s3\" ></revenue-feed>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</sa-widget>"

/***/ }),

/***/ 2307:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row no-space\">\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n      <on-off-switch class=\"demo-liveupdate-1\" title=\"Live switch\" [(model)]=\"liveSwitch\"\n                     (modelChange)=\"toggleSwitch()\"></on-off-switch>\n\n      <sa-flot-chart class=\"chart-large txt-color-blue\" [data]=\"liveStats\"\n                     [options]=\"liveStatsChartOptions\"></sa-flot-chart>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\n\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Approved Bill Of Ladings <span\n          class=\"pull-right\">130/200</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blueDark\"\n                 style=\"width: 65%\"></div>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> % Of Cargo Processed <span\n          class=\"pull-right\"> 88% </span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blue\"\n                 style=\"width:34%\"></div>\n          </div>\n        </div>\n\n\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Revenue Generated Today <span\n          class=\"pull-right\">$13,423,322.32</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blue\"\n                 style=\"width: 77%\"></div>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Most Popular Line <span\n          class=\"pull-right\">Hamburg Süd</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-greenLight\" style=\"width:84%\"></div>\n          </div>\n        </div>\n\n        <span class=\"show-stat-buttons\">\n          <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n             <a (click)=\"(null)\" class=\"btn btn-default btn-block hidden-xs\">Process Bill Of Ladings</a>\n          </span>\n          <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n              <a (click)=\"(null)\" class=\"btn btn-default btn-block hidden-xs\">Create Vessel Call</a>\n          </span>\n        </span>\n      </div>\n    </div>\n\n\n  </div>\n<!--\n  <div class=\"show-stat-microcharts\">\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\n      <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">35</span>\n      </div>\n      <span class=\"easy-pie-title\"> Server Load <i\n        class=\"fa fa-caret-up icon-color-bad\"></i> </span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n        <span class=\"label bg-color-greenLight\"><i\n          class=\"fa fa-caret-up\"></i> 97%</span>\n        </li>\n        <li>\n        <span class=\"label bg-color-blueLight\"><i\n          class=\"fa fa-caret-down\"></i> 44%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\" data-sparkline-height=\"33px\"\n           data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">78.9 </span>\n      </div>\n      <span class=\"easy-pie-title\"> Disk Space <i\n        class=\"fa fa-caret-down icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n            <span class=\"label bg-color-blueDark\"><i\n              class=\"fa fa-caret-up\"></i> 76%</span>\n        </li>\n        <li>\n          <span class=\"label bg-color-blue\"><i\n            class=\"fa fa-caret-down\"></i> 3%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\"\n           data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">23 </span>\n      </div>\n      <span class=\"easy-pie-title\"> Transfered <i\n        class=\"fa fa-caret-up icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n          <span class=\"label bg-color-darken\">10GB</span>\n        </li>\n        <li>\n        <span class=\"label bg-color-blueDark\"><i\n          class=\"fa fa-caret-up\"></i> 10%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\" data-sparkline-height=\"33px\"\n           data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\"\n           data-pie-size=\"50\">\n        <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\n      </div>\n      <span class=\"easy-pie-title\"> Temperature <i\n        class=\"fa fa-caret-down icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n          <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\n        </li>\n        <li>\n          <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\"\n           data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\n      </div>\n    </div>\n  </div>\n  -->\n</div>"

/***/ }),

/***/ 2308:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\n\n    <div class=\"inline-group\">\n\n      <label for=\"gra-0\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-0\" [(ngModel)]=\"state.targetsShow\" (ngModelChange)=\"updateData()\" />\n        <i></i> Hamburg Sud </label>\n      <label for=\"gra-1\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-1\" [(ngModel)]=\"state.actualsShow\" (ngModelChange)=\"updateData()\"/>\n        <i></i> ZIM </label>\n      <label for=\"gra-2\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-2\" [(ngModel)]=\"state.signupsShow\" (ngModelChange)=\"updateData()\"/>\n        <i></i> CMA CGM </label>\n    </div>\n\n    <div class=\"btn-group hidden-phone pull-right\">\n      <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n        class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n      <ul class=\"dropdown-menu pull-right\">\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-file-text-alt\"></i>> Export to PDF</a>\n        </li>\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-question-sign\"></i> Help</a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"padding-10\">\n    <sa-flot-chart class=\"chart-large has-legend-unique\"\n                   [data]=\"revenueData\" [options]=\"revenueChartOptions\"></sa-flot-chart>\n  </div>\n</div>"

/***/ }),

/***/ 2309:
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"widget-body-toolbar bg-color-white\">\n\n    <form class=\"form-inline\" role=\"form\">\n\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"s123\">Show From</label>\n        <input type=\"email\" class=\"form-control input-sm\" id=\"s123\"\n               placeholder=\"Show From\"/>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control input-sm\" id=\"s124\"\n               placeholder=\"To\"/>\n      </div>\n\n      <div class=\"btn-group hidden-phone pull-right\">\n        <a class=\"btn dropdown-toggle btn-xs btn-default\"\n           data-toggle=\"dropdown\"><i\n          class=\"fa fa-cog\" ></i> More <span class=\"caret\"> </span> </a><ul class=\"dropdown-menu pull-right\">\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-file-text-alt\" ></i> Export to PDF</a>\n        </li>\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-question-sign\" ></i> Help</a>\n        </li>\n      </ul>\n      </div>\n\n    </form>\n\n  </div>\n  <div class=\"padding-10\">\n    <sa-flot-chart class=\"chart-large has-legend-unique\" [data]=\"statsData\" [options]=\"statsChartOptions\" ></sa-flot-chart>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 2310:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"todo-group-title\"><i class=\"fa fa-{{state.icon}}\"></i> {{state.title}} {{items.length}}</h5>\n  <ul class=\"todo\" >\n    <li *ngFor=\"let todo of items; let i = index\"\n        [class.complete]=\"todo.completedAt\"\n       >\n    \t<span class=\"handle\"> <label class=\"checkbox\">\n            <input type=\"checkbox\" (click)=\"toggleTodo(todo)\" [checked]=\"todo.completedAt\"\n                   name=\"checkbox-inline\">\n            <i></i> </label> </span>\n\n      <p>\n        <strong>Ticket #{{i + 1}}</strong> - {{todo.title}}\n        <span class=\"text-muted\" *ngIf=\"todo.description\">{{todo.description}}</span>\n        <span class=\"date\">{{todo.createdAt | moment : 'HH:mm YYYY-MM-DD'}} - <a (click)=\"deleteTodo(todo)\" class=\"text-muted\"><i\n          class=\"fa fa-trash\"></i></a></span>\n\n      </p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 2311:
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" color=\"blue\">\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-white\"></i> </span>\n\n    <h2> ToDo's </h2>\n\n    <div class=\"widget-toolbar\">\n      <button class=\"btn btn-xs btn-default\"\n              [class.active]=\"newTodo\" (click)=\"toggleAdd()\"><i\n        *ngIf=\"!newTodo\" class=\"fa fa-plus\"></i><i\n        *ngIf=\"newTodo\" class=\"fa fa-times\"></i> Add</button>\n\n    </div>\n  </header>\n  <!-- widget div-->\n  <div>\n    <div class=\"widget-body no-padding smart-form\">\n      <!-- content goes here -->\n      <div *ngIf=\"newTodo\">\n        <h5 class=\"todo-group-title\"><i class=\"fa fa-plus-circle\"></i> New Todo</h5>\n\n        <form #newTodoForm=\"ngForm\" class=\"smart-form\">\n          <fieldset>\n            <section>\n              <label class=\"input\">\n                <input type=\"text\" required class=\"input-lg\" [(ngModel)]=\"newTodo.title\" name=\"title\"\n                       placeholder=\"What needs to be done?\">\n              </label>\n            </section>\n            <section>\n              <div class=\"col-xs-6\">\n                <label class=\"select\">\n                  <select class=\"input-sm\" name=\"state\" [(ngModel)]=\"newTodo.state\" >\n                    <option *ngFor=\"let state of states\" [value]=\"state.name\">{{state.name}}</option>\n                  </select> <i></i> </label>\n              </div>\n            </section>\n          </fieldset>\n          <footer>\n            <button [disabled]=\"!newTodoForm.form.valid\" type=\"button\" class=\"btn btn-primary\"\n                    (click)=\"createTodo()\">\n              Add\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleAdd()\">\n              Cancel\n            </button>\n          </footer>\n        </form>\n      </div>\n\n      <todo-list *ngFor=\"let state of states\" [state]=\"state\"></todo-list>\n\n      <!-- end content -->\n    </div>\n\n  </div>\n  <!-- end widget div -->\n</sa-widget>\n"

/***/ }),

/***/ 2541:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(2244);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=50.map