webpackJsonpac__name_([16],{

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var reporting_routing_1 = __webpack_require__(2139);
var smartadmin_module_1 = __webpack_require__(1402);
var advantum_commons_module_1 = __webpack_require__(1401);
var report_list_component_1 = __webpack_require__(1891);
var ReportingModule = (function () {
    function ReportingModule() {
    }
    return ReportingModule;
}());
ReportingModule = __decorate([
    core_1.NgModule({
        imports: [
            smartadmin_module_1.SmartadminModule,
            advantum_commons_module_1.AdvantumCommonsModule,
            reporting_routing_1.routing
        ],
        declarations: [
            report_list_component_1.ReportListComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], ReportingModule);
exports.ReportingModule = ReportingModule;


/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Currency = (function (_super) {
    __extends(Currency, _super);
    function Currency(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
            _this.isoCode = data.isoCode;
            _this.isoSymbol = data.isoSymbol;
        }
        return _this;
    }
    Currency.prototype.prepareData = function () { };
    return Currency;
}(DomainObject_1.DomainObject));
exports.Currency = Currency;


/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Address_1 = __webpack_require__(1376);
var PartyContact_1 = __webpack_require__(1465);
var Party = (function (_super) {
    __extends(Party, _super);
    function Party(data) {
        var _this = _super.call(this, data) || this;
        _this.contacts = [];
        if (data) {
            _this.partyId = data.partyId;
            _this.partyTypeCode = data.partyTypeCode;
            _this.name = data.name;
            _this.billingAddress = new Address_1.Address(data.billingAddress);
            _this.mailingAddress = new Address_1.Address(data.mailingAddress);
            _this.freeText = data.freeText;
            if (data.contacts && data.contacts.length) {
                data.contacts.forEach(function (contact) {
                    _this.contacts.push(new PartyContact_1.PartyContact(contact));
                });
            }
        }
        return _this;
    }
    Party.prototype.prepareData = function () { };
    return Party;
}(DomainObject_1.DomainObject));
exports.Party = Party;
Party.PARTY_TYPES = [
    { key: "Carrier", value: "Carrier" },
    { key: "ShippingLine", value: "Shipping Line" },
    { key: "Consignee", value: "Consignee" },
    { key: "Shipper", value: "Shipper" },
    { key: "Agent", value: "Agent" },
    { key: "FreightForwarder", value: "Freight Forwarder" },
    { key: "Notify", value: "Notify" },
    { key: "MessageSender", value: "Message Sender" },
    { key: "Other", value: "Other" },
];


/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents an invoice payment
 */
var PaymentMethod = (function (_super) {
    __extends(PaymentMethod, _super);
    function PaymentMethod(data) {
        return _super.call(this, data) || this;
    }
    PaymentMethod.prototype.prepareData = function () {
    };
    PaymentMethod.getPaymentMethodTypeName = function (paymentMethodType) {
        var name = null;
        PaymentMethod.PAYMENT_METHOD_TYPES.forEach(function (entry) {
            if (entry["value"] == paymentMethodType) {
                name = entry["name"];
            }
        });
        return name;
    };
    return PaymentMethod;
}(DomainObject_1.DomainObject));
exports.PaymentMethod = PaymentMethod;
PaymentMethod.PAYMENT_METHOD_TYPES = [
    { value: 'Cash', name: 'Cash' },
    { value: 'Card', name: 'Card' },
    { value: 'Cheque', name: 'Cheque' },
    { value: 'Wire_Transfer', name: 'Wire Transfer' },
    { value: 'Account_Withdrawal', name: 'Account Withdrawal' }
];


/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var InputBase = (function () {
    function InputBase(renderer) {
        this.renderer = renderer;
        this.isNumeric = false;
        this.isRegexTestable = false;
    }
    InputBase.prototype.setContext = function (_context) {
        this.context = _context;
    };
    InputBase.prototype.getPlaceholder = function () {
        return (this.context.isEmpty) ? this.context.empty : this.context.value;
    };
    InputBase.prototype.focus = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.inputElement, 'focus', []); });
    };
    return InputBase;
}());
exports.InputBase = InputBase;


/***/ }),

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Party_1 = __webpack_require__(1357);
var Currency_1 = __webpack_require__(1356);
var User_1 = __webpack_require__(1369);
var InvoiceLineItem_1 = __webpack_require__(1383);
var Payment_1 = __webpack_require__(1361);
var PaymentReceipt_1 = __webpack_require__(1387);
var InvoiceCancellation_1 = __webpack_require__(1439);
var Organization_1 = __webpack_require__(1424);
var time_utils_1 = __webpack_require__(1374);
var Invoice = (function (_super) {
    __extends(Invoice, _super);
    function Invoice(data) {
        var _this = _super.call(this, data) || this;
        _this.invoiceLineItems = [];
        _this.payments = [];
        _this.paymentReceipts = [];
        if (data) {
            _this.invoiceNumber = data.invoiceNumber;
            _this.invoiceStatus = data.invoiceStatus;
            _this.proFormaIndicator = data.proFormaIndicator;
            _this.comments = data.comments;
            _this.invoiceDateTime = data.invoiceDateTime;
            _this.invoiceTotal = data.invoiceTotal;
            if (data.currency != null) {
                _this.currency = new Currency_1.Currency(data.currency);
                _this.currencyId = _this.currency.uid;
            }
            if (data.billToParty != null) {
                _this.billToParty = new Party_1.Party(data.billToParty);
                _this.billToPartyId = _this.billToParty.uid;
            }
            if (data.createdBy != null) {
                _this.createdBy = new User_1.User(data.createdBy);
            }
            if (data.invoiceCancellation) {
                _this.invoiceCancellation = new InvoiceCancellation_1.InvoiceCancellation(data.invoiceCancellation);
            }
            if (data.invoiceType != null) {
                _this.invoiceType = data.invoiceType;
            }
            if (data.invoicePaymentTerms) {
                _this.invoicePaymentTerms = data.invoicePaymentTerms;
            }
            if (data.invoiceLineItems != null && data.invoiceLineItems.length > 0) {
                data.invoiceLineItems.forEach(function (lineItem) {
                    _this.invoiceLineItems.push(new InvoiceLineItem_1.InvoiceLineItem(lineItem));
                });
            }
            if (data.payments && data.payments.length > 0) {
                data.payments.forEach(function (payment) {
                    _this.payments.push(new Payment_1.Payment(payment));
                });
            }
            if (data.paymentReceipts && data.paymentReceipts.length > 0) {
                data.paymentReceipts.forEach(function (payment) {
                    _this.paymentReceipts.push(new PaymentReceipt_1.PaymentReceipt(payment));
                });
            }
            if (data.organization) {
                _this.organization = new Organization_1.Organization(data.organization);
            }
        }
        return _this;
    }
    Invoice.prototype.splitDateTimes = function () {
        var parts;
        if (this.invoiceDateTime) {
            parts = this.splitDateTime(this.invoiceDateTime);
            this.invoiceDate = parts[0];
            this.invoiceTime = parts[1];
        }
    };
    Invoice.prototype.prepareData = function () {
        if (this.invoiceDate && this.invoiceTime) {
            this.invoiceDateTime = this.invoiceDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.invoiceTime);
        }
        if (this.currencyId) {
            this.currency = this.currencyId;
        }
        else if (this.currency && this.currency.uid) {
            this.currency = this.currency.uid;
        }
        if (this.billToPartyId != null) {
            this.billToParty = this.billToPartyId;
        }
        else if (this.billToParty != null && this.billToParty.uid) {
            this.billToParty = this.billToParty.uid;
        }
        if (this.organizationId != null) {
            this.organization = this.organizationId;
        }
        else if (this.organization != null && this.organization.uid) {
            this.organization = this.organization.uid;
        }
        if (this.invoiceLineItems != null && this.invoiceLineItems.length > 0) {
            this.invoiceLineItems.forEach(function (lineItem) {
                lineItem.prepareData();
            });
        }
        if (this.payments && this.payments.length > 0) {
            this.payments.forEach(function (payment) {
                payment.prepareData();
            });
        }
        if (this.paymentReceipts && this.paymentReceipts.length > 0) {
            this.paymentReceipts.forEach(function (payment) {
                payment.prepareData();
            });
        }
    };
    return Invoice;
}(DomainObject_1.DomainObject));
exports.Invoice = Invoice;
Invoice.INVOICE_PAYMENT_TERMS = [
    { value: "Payment_In_Advance", name: "Payment in Advance" },
    { value: "Net_7", name: "Payment seven days after invoice date" },
    { value: "Net_10", name: "Payment ten days after invoice date" },
    { value: "Net_30", name: "Payment thirty days after invoice date" },
    { value: "Net_60", name: "Payment sixty days after invoice date" },
    { value: "Net_90", name: "Payment ninty days after invoice date" },
    { value: "End_of_Month", name: "End of Month" },
    { value: "Cash_On_Delivery", name: "Cash on Delivery" },
    { value: "Cash_In_Advance", name: "Cash in Advance" },
    { value: "Cash_With_Order", name: "Cash with order" },
    { value: "Other", name: "Other" },
];
Invoice.INVOICE_TYPES = [
    { value: "Shipment", name: "Shipment" },
    { value: "General", name: "General" }
];
Invoice.INVOICE_STATUS = [
    { value: "New", name: "New" },
    { value: "Draft", name: "Draft" },
    { value: "Paid_In_Full", name: "Paid In Full" },
    { value: "Partially_Paid", name: "Partially Paid" },
    { value: "Cancelled", name: "Cancelled" },
];


/***/ }),

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var PaymentCancellation_1 = __webpack_require__(1442);
var PaymentLineItem_1 = __webpack_require__(1456);
var InvoiceLineItemPayment_1 = __webpack_require__(1440);
var PaymentReceipt_1 = __webpack_require__(1387);
var Invoice_1 = __webpack_require__(1360);
var User_1 = __webpack_require__(1369);
var Party_1 = __webpack_require__(1357);
var Currency_1 = __webpack_require__(1356);
var CurrencyExchangeRate_1 = __webpack_require__(1364);
var PaymentMethod_1 = __webpack_require__(1358);
/**
 * Represents an invoice payment
 */
var Payment = (function (_super) {
    __extends(Payment, _super);
    function Payment(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentStatus = "Uncollected";
        _this.paymentLineItems = new Array();
        _this.invoiceLineItemPayments = new Array();
        if (data) {
            _this.paymentStatus = data.paymentStatus;
            _this.paymentType = data.paymentType;
            if (data.paidBy) {
                _this.paidBy = new Party_1.Party(data.paidBy);
                _this.paidById = _this.paidBy.uid;
            }
            _this.receivedBy = data.receivedBy instanceof User_1.User ? data.receivedBy : new User_1.User(data.receivedBy);
            // @todo Ensure that we check to see if we already have a domain object before creating a new one!
            if (data.invoice) {
                _this.invoice = data.invoice instanceof Invoice_1.Invoice ? data.invoice : new Invoice_1.Invoice(data.invoice);
            }
            _this.paymentTotal = data.paymentTotal;
            _this.paymentDate = data.paymentDate;
            if (data.paymentCancellation) {
                _this.paymentCancellation =
                    new PaymentCancellation_1.PaymentCancellation(data.paymentCancellation);
            }
            if (data.paymentReceipt) {
                _this.paymentReceipt =
                    new PaymentReceipt_1.PaymentReceipt(data.paymentReceipt);
            }
            if (data.invoiceLineItemPayments) {
                data.invoiceLineItemPayments.forEach(function (item) {
                    _this.invoiceLineItemPayments
                        .push(new InvoiceLineItemPayment_1.InvoiceLineItemPayment(item));
                });
            }
            if (data.paymentLineItems) {
                data.paymentLineItems.forEach(function (item) {
                    _this.paymentLineItems
                        .push(new PaymentLineItem_1.PaymentLineItem(item));
                });
            }
            if (data.chargePaymentAllocations) {
                data.chargePaymentAllocations.forEach(function (item) {
                    _this.invoiceLineItemPayments
                        .push(new InvoiceLineItemPayment_1.InvoiceLineItemPayment(item));
                });
            }
            if (data.currency != null) {
                _this.currency = new Currency_1.Currency(data.currency);
                _this.currencyId = _this.currency.uid;
            }
            if (data.currencyExchangeRate) {
                _this.currencyExchangeRate = new CurrencyExchangeRate_1.CurrencyExchangeRate(data.currencyExchangeRate);
            }
        }
        return _this;
    }
    Payment.prototype.prepareData = function () {
        if (this.invoice instanceof Invoice_1.Invoice) {
            this.invoice = this.invoice.uid;
        }
        else {
            this.invoice = null;
        }
        if (this.paidBy instanceof Party_1.Party) {
            this.paidBy = this.paidBy.uid;
        }
        else {
            this.paidBy = this.paidById;
        }
        if (this.currency instanceof Currency_1.Currency) {
            this.currency = this.currency.uid;
        }
        else {
            this.currency = this.currencyId;
        }
        if (this.currencyExchangeRate instanceof CurrencyExchangeRate_1.CurrencyExchangeRate) {
            this.currencyExchangeRate = this.currencyExchangeRate.uid;
        }
        else {
            this.currencyExchangeRate = this.currencyExchangeRateId;
        }
        if (this.paymentLineItems) {
            this.paymentLineItems.forEach(function (item) {
                if (item.paymentMethod instanceof PaymentMethod_1.PaymentMethod) {
                    item.paymentMethod.prepareData();
                }
            });
        }
        this.receivedBy = null;
    };
    return Payment;
}(DomainObject_1.DomainObject));
exports.Payment = Payment;


/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeItemRate_1 = __webpack_require__(1427);
var ChargeItem = (function (_super) {
    __extends(ChargeItem, _super);
    function ChargeItem(data) {
        var _this = _super.call(this, data) || this;
        _this.activeIndicator = false;
        _this.depositItemIndicator = false;
        _this.systemItemIndicator = false;
        _this.rates = new Array();
        _this.activeChargeItemRate = null;
        if (data) {
            _this.code = data.code;
            _this.description = data.description;
            _this.debitAccount = data.debitAccount;
            _this.creditAccount = data.creditAccount;
            _this.billingGroup = data.billingGroup;
            _this.chargeItemReference = data.chargeItemReference;
            _this.depositItemIndicator = data.depositItemIndicator;
            _this.depositItem = data.depositItem;
            _this.activeIndicator = data.activeIndicator;
            _this.systemItemIndicator = data.systemItemIndicator;
            if (data.depositChargeItem != null) {
                _this.depositChargeItem = new ChargeItem(data.depositChargeItem);
                _this.depositChargeItemId = _this.depositChargeItem.uid;
            }
            if (data.depositChargeItem != null) {
                _this.externalChargeItem = new ChargeItem(data.externalChargeItem);
                _this.externalChargeItemId = _this.externalChargeItem.uid;
            }
            if (data.rates) {
                data.rates.forEach(function (chargeItemRate) {
                    _this.rates.push(new ChargeItemRate_1.ChargeItemRate(chargeItemRate));
                });
            }
        }
        return _this;
    }
    /**
     * Returns the active charge item rate
     * @returns {@link ChargeItemRate}
     */
    ChargeItem.prototype.getActiveRate = function () {
        if (this.activeChargeItemRate) {
            return this.activeChargeItemRate;
        }
        else {
            if (this.rates == null || this.rates.length == 0) {
                return null;
            }
            if (this.rates.length == 1) {
                this.activeChargeItemRate = this.rates[0];
            }
            var rates = this.rates
                .sort(function (a, b) {
                if (a.startDate > b.startDate) {
                    return -1;
                }
                if (a.startDate < b.startDate) {
                    return 1;
                }
                return 0;
            });
            this.activeChargeItemRate = rates[0];
            return this.activeChargeItemRate;
        }
    };
    ChargeItem.prototype.prepareData = function () {
        if (this.depositChargeItemId && !this.depositItemIndicator) {
            this.depositChargeItem = this.depositChargeItemId;
        }
        else {
            this.depositChargeItem = null;
        }
        if (this.externalChargeItemId) {
            this.externalChargeItem = this.externalChargeItemId;
        }
        else {
            this.externalChargeItem = null;
        }
    };
    return ChargeItem;
}(DomainObject_1.DomainObject));
exports.ChargeItem = ChargeItem;


/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var _ = __webpack_require__(1400);
var Rx_1 = __webpack_require__(84);
var DataTable = (function () {
    function DataTable(differs) {
        this.differs = differs;
        this.inputData = [];
        this.sortBy = "";
        this.sortOrder = "asc";
        this.sortByChange = new core_1.EventEmitter();
        this.sortOrderChange = new core_1.EventEmitter();
        this.rowsOnPage = 1000;
        this.activePage = 1;
        this.mustRecalculateData = false;
        this.onSortChange = new Rx_1.ReplaySubject(1);
        this.onPageChange = new core_1.EventEmitter();
        this.diff = differs.find([]).create(null);
    }
    DataTable.prototype.getSort = function () {
        return { sortBy: this.sortBy, sortOrder: this.sortOrder };
    };
    DataTable.prototype.setSort = function (sortBy, sortOrder) {
        if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = _.includes(["asc", "desc"], sortOrder) ? sortOrder : "asc";
            this.mustRecalculateData = true;
            this.onSortChange.next({ sortBy: sortBy, sortOrder: sortOrder });
            this.sortByChange.emit(this.sortBy);
            this.sortOrderChange.emit(this.sortOrder);
        }
    };
    DataTable.prototype.getPage = function () {
        return { activePage: this.activePage, rowsOnPage: this.rowsOnPage, dataLength: this.inputData.length };
    };
    DataTable.prototype.setPage = function (activePage, rowsOnPage) {
        if (this.rowsOnPage !== rowsOnPage || this.activePage !== activePage) {
            this.activePage = this.activePage !== activePage ? activePage : this.calculateNewActivePage(this.rowsOnPage, rowsOnPage);
            this.rowsOnPage = rowsOnPage;
            this.mustRecalculateData = true;
            this.onPageChange.emit({
                activePage: this.activePage,
                rowsOnPage: this.rowsOnPage,
                dataLength: this.inputData ? this.inputData.length : 0
            });
        }
    };
    DataTable.prototype.calculateNewActivePage = function (previousRowsOnPage, currentRowsOnPage) {
        var firstRowOnPage = (this.activePage - 1) * previousRowsOnPage + 1;
        var newActivePage = Math.ceil(firstRowOnPage / currentRowsOnPage);
        return newActivePage;
    };
    DataTable.prototype.recalculatePage = function () {
        var lastPage = Math.ceil(this.inputData.length / this.rowsOnPage);
        this.activePage = lastPage < this.activePage ? lastPage : this.activePage;
        this.activePage = this.activePage || 1;
        this.onPageChange.emit({
            activePage: this.activePage,
            rowsOnPage: this.rowsOnPage,
            dataLength: this.inputData.length
        });
    };
    DataTable.prototype.ngOnChanges = function (changes) {
        if (changes["rowsOnPage"]) {
            this.rowsOnPage = changes["rowsOnPage"].previousValue;
            this.setPage(this.activePage, changes["rowsOnPage"].currentValue);
            this.mustRecalculateData = true;
        }
        if (changes["sortBy"] || changes["sortOrder"]) {
            if (!_.includes(["asc", "desc"], this.sortOrder)) {
                console.warn("angular2-datatable: value for input mfSortOrder must be one of ['asc', 'desc'], but is:", this.sortOrder);
                this.sortOrder = "asc";
            }
            if (this.sortBy) {
                this.onSortChange.next({ sortBy: this.sortBy, sortOrder: this.sortOrder });
            }
            this.mustRecalculateData = true;
        }
        if (changes["inputData"]) {
            this.inputData = changes["inputData"].currentValue || [];
            this.recalculatePage();
            this.mustRecalculateData = true;
        }
    };
    DataTable.prototype.ngDoCheck = function () {
        var changes = this.diff.diff(this.inputData);
        if (changes) {
            this.recalculatePage();
            this.mustRecalculateData = true;
        }
        if (this.mustRecalculateData) {
            this.fillData();
            this.mustRecalculateData = false;
        }
    };
    DataTable.prototype.fillData = function () {
        this.activePage = this.activePage;
        this.rowsOnPage = this.rowsOnPage;
        var offset = (this.activePage - 1) * this.rowsOnPage;
        var data = this.inputData;
        var sortBy = this.sortBy;
        if (typeof sortBy === 'string' || sortBy instanceof String) {
            data = _.orderBy(data, this.caseInsensitiveIteratee(sortBy), [this.sortOrder]);
        }
        else {
            data = _.orderBy(data, sortBy, [this.sortOrder]);
        }
        data = _.slice(data, offset, offset + this.rowsOnPage);
        this.data = data;
    };
    DataTable.prototype.caseInsensitiveIteratee = function (sortBy) {
        return function (row) {
            var value = row;
            for (var _i = 0, _a = sortBy.split('.'); _i < _a.length; _i++) {
                var sortByProperty = _a[_i];
                if (value) {
                    value = value[sortByProperty];
                }
            }
            if (value && typeof value === 'string' || value instanceof String) {
                return value.toLowerCase();
            }
            return value;
        };
    };
    return DataTable;
}());
__decorate([
    core_1.Input("mfData"),
    __metadata("design:type", Array)
], DataTable.prototype, "inputData", void 0);
__decorate([
    core_1.Input("mfSortBy"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortBy", void 0);
__decorate([
    core_1.Input("mfSortOrder"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortOrder", void 0);
__decorate([
    core_1.Output("mfSortByChange"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortByChange", void 0);
__decorate([
    core_1.Output("mfSortOrderChange"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortOrderChange", void 0);
__decorate([
    core_1.Input("mfRowsOnPage"),
    __metadata("design:type", Object)
], DataTable.prototype, "rowsOnPage", void 0);
__decorate([
    core_1.Input("mfActivePage"),
    __metadata("design:type", Object)
], DataTable.prototype, "activePage", void 0);
DataTable = __decorate([
    core_1.Directive({
        selector: 'table[mfData]',
        exportAs: 'mfDataTable'
    }),
    __metadata("design:paramtypes", [core_1.IterableDiffers])
], DataTable);
exports.DataTable = DataTable;
//# sourceMappingURL=DataTable.js.map

/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Currency_1 = __webpack_require__(1356);
var DomainObject_1 = __webpack_require__(345);
var time_utils_1 = __webpack_require__(1374);
var CurrencyExchangeRate = (function (_super) {
    __extends(CurrencyExchangeRate, _super);
    function CurrencyExchangeRate(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.currency = new Currency_1.Currency(data.currency);
            _this.sellingRate = data.sellingRate;
            _this.buyingRate = data.buyingRate;
            _this.startDateTime = data.startDateTime;
            _this.endDateTime = data.endDateTime;
            _this.splitDateTimes();
        }
        return _this;
    }
    CurrencyExchangeRate.prototype.splitDateTimes = function () {
        var parts;
        if (this.startDateTime) {
            parts = this.splitDateTime(this.startDateTime);
            this.startDate = parts[0];
            this.startTime = parts[1];
        }
        if (this.endDateTime) {
            parts = this.splitDateTime(this.endDateTime);
            this.endDate = parts[0];
            this.endTime = parts[1];
        }
    };
    CurrencyExchangeRate.prototype.prepareData = function () {
        if (this.startDate) {
            this.startDateTime = this.startDate + 'T' + (this.startTime ? time_utils_1.TimeUtils.to24Hour(this.startTime) : '00:00:00');
        }
        if (this.endDate) {
            this.endDateTime = this.endDate + 'T' + (this.endTime ? time_utils_1.TimeUtils.to24Hour(this.endTime) : '59:99:99');
        }
    };
    return CurrencyExchangeRate;
}(DomainObject_1.DomainObject));
exports.CurrencyExchangeRate = CurrencyExchangeRate;


/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(0);
var core_3 = __webpack_require__(0);
var base_dialog_component_1 = __webpack_require__(1367);
/**
 * Provides base class for look-up dialogs
 */
var BaseLookupDialogComponent = (function (_super) {
    __extends(BaseLookupDialogComponent, _super);
    function BaseLookupDialogComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this.formSubmitted = false;
        _this.filterQuery = "";
        _this.isFiltering = false;
        _this.filterQueue = [];
        _this.selectedItems = [];
        _this.tableData = [];
        _this.multiple = true;
        _this.onSelection = new core_1.EventEmitter();
        return _this;
    }
    /**
     * Triggered when a record is selected
     *
     * @param event Event details
     * @param selectedItem The selected domain object
     */
    BaseLookupDialogComponent.prototype.onChange = function (event, selectedItem) {
        var checkbox = event.target;
        var currentIndex = this.selectedItems.findIndex(function (item) {
            return item.uid == selectedItem.uid;
        });
        if (this.multiple) {
            if ((currentIndex == undefined || currentIndex < 0) && checkbox.checked) {
                this.selectedItems.push(selectedItem);
            }
            else if (currentIndex >= 0 && !checkbox.checked) {
                this.selectedItems.splice(currentIndex, 1);
            }
        }
        else {
            this.selectedItems = [selectedItem];
        }
    };
    /**
     * Trigger when a user double-clicks a row
     *
     * @param event Event details
     */
    BaseLookupDialogComponent.prototype.onDblClickRow = function (event, item) {
        this.onSelection.emit([item]);
        this.hideDialog();
    };
    /**
     * Event handler for search box
     *
     * @param event Event details
     */
    BaseLookupDialogComponent.prototype.onFilterChange = function (filter) {
        if (this.isFiltering) {
            this.filterQueue.push(filter);
        }
        else {
            this.doFilter(filter);
        }
    };
    BaseLookupDialogComponent.prototype.onSubmit = function () {
        this.formSubmitted = true;
        this.onSelection.emit(this.selectedItems);
        this.tableData = []; // Reset the datatable
        this.hideDialog();
    };
    return BaseLookupDialogComponent;
}(base_dialog_component_1.BaseDialogComponent));
exports.BaseLookupDialogComponent = BaseLookupDialogComponent;
__decorate([
    core_3.Input("multiple"),
    __metadata("design:type", Boolean)
], BaseLookupDialogComponent.prototype, "multiple", void 0);
__decorate([
    core_2.Output("onSelection"),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], BaseLookupDialogComponent.prototype, "onSelection", void 0);
var _a;


/***/ }),

/***/ 1366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var UnitOfMeasure_1 = __webpack_require__(1445);
var Measurement = (function (_super) {
    __extends(Measurement, _super);
    function Measurement(data) {
        var _this = _super.call(this, data) || this;
        _this.measurementValue = 0;
        if (data) {
            _this.measurementValue = data.measurementValue;
            if (data.unitOfMeasure) {
                _this.unitOfMeasure = new UnitOfMeasure_1.UnitOfMeasure(data.unitOfMeasure);
                _this.unitOfMeasureId = _this.unitOfMeasure.uid;
            }
        }
        return _this;
    }
    Measurement.prototype.prepareData = function () {
        if (this.unitOfMeasureId) {
            this.unitOfMeasure = this.unitOfMeasureId;
        }
    };
    return Measurement;
}(DomainObject_1.DomainObject));
exports.Measurement = Measurement;


/***/ }),

/***/ 1367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_bootstrap_1 = __webpack_require__(118);
var di_1 = __webpack_require__(710);
/**
 * Provides a base class for dialogs
 */
var BaseDialogComponent = (function () {
    function BaseDialogComponent() {
        this._state = new core_1.EventEmitter();
    }
    Object.defineProperty(BaseDialogComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens dialog and emits this component
     */
    BaseDialogComponent.prototype.showDialog = function () {
        this.modalDialog.show();
        this._state.emit("opened");
    };
    /**
     * Closes dialog and emits this component
     */
    BaseDialogComponent.prototype.hideDialog = function () {
        this.modalDialog.hide();
        this._state.emit("closed");
    };
    return BaseDialogComponent;
}());
exports.BaseDialogComponent = BaseDialogComponent;
__decorate([
    di_1.ViewChild('modalDialog'),
    __metadata("design:type", typeof (_a = typeof ng2_bootstrap_1.ModalDirective !== "undefined" && ng2_bootstrap_1.ModalDirective) === "function" && _a || Object)
], BaseDialogComponent.prototype, "modalDialog", void 0);
var _a;


/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Port_1 = __webpack_require__(1371);
var Party_1 = __webpack_require__(1357);
var CargoItem_1 = __webpack_require__(1419);
var VesselCall_1 = __webpack_require__(1379);
var Currency_1 = __webpack_require__(1356);
var CargoTypeAware_1 = __webpack_require__(1392);
var CommodityType_1 = __webpack_require__(1382);
var ChargeProfileGroup_1 = __webpack_require__(1431);
var ShipmentSpecificCharge_1 = __webpack_require__(1443);
var Shipment = (function (_super) {
    __extends(Shipment, _super);
    function Shipment(data) {
        var _this = _super.call(this, data) || this;
        /**
         * Statuses: Initial, Validated, Approved, Released, Held
         */
        _this.shipmentStatus = 'Initial';
        _this.cargoItems = new Array();
        _this.shipmentSpecificCharges = new Array();
        _this.houseShipments = new Array();
        if (data) {
            _this.shipmentStatus = data.shipmentStatus;
            _this.transitType = data.transitType;
            _this.documentType = data.documentType;
            _this.consolidationType = data.consolidationType;
            _this.shipmentNumber = data.shipmentNumber;
            _this.item = data.item;
            if (data.masterShipment) {
                _this.masterShipment = new Shipment(data.masterShipment);
                _this.masterShipmentId = _this.masterShipment.uid;
            }
            if (data.vesselCall) {
                _this.vesselCall = new VesselCall_1.VesselCall(data.vesselCall);
                _this.vesselCallId = _this.vesselCall.uid;
            }
            if (data.commodityType) {
                _this.commodityType = new CommodityType_1.CommodityType(data.commodityType);
                _this.commodityTypeId = _this.commodityType.uid;
            }
            if (data.shippingLine) {
                _this.shippingLine = new Party_1.Party(data.shippingLine);
                _this.shippingLineId = _this.shippingLine.uid;
            }
            if (data.consignee) {
                _this.consignee = new Party_1.Party(data.consignee);
                _this.consigneeId = _this.consignee.uid;
            }
            if (data.shipper) {
                _this.shipper = new Party_1.Party(data.shipper);
                _this.shipperId = _this.shipper.uid;
            }
            if (data.agent) {
                _this.agent = new Party_1.Party(data.agent);
                _this.agentId = _this.agent.uid;
            }
            if (data.notifyParty) {
                _this.notifyParty = new Party_1.Party(data.notifyParty);
                _this.notifyPartyId = _this.notifyParty.uid;
            }
            if (data.freightForwarder) {
                _this.freightForwarder = new Party_1.Party(data.freightForwarder);
                _this.freightForwarderId = _this.freightForwarder.uid;
            }
            if (data.portOfOrigin) {
                _this.portOfOrigin = new Port_1.Port(data.portOfOrigin);
                _this.portOfOriginId = _this.portOfOrigin.uid;
            }
            if (data.portOfDestination) {
                _this.portOfDestination = new Port_1.Port(data.portOfDestination);
                _this.portOfDestinationId = _this.portOfDestination.uid;
            }
            if (data.portOfLoading) {
                _this.portOfLoading = new Port_1.Port(data.portOfLoading);
                _this.portOfLoadingId = _this.portOfLoading.uid;
            }
            if (data.portOfDischarge) {
                _this.portOfDischarge = new Port_1.Port(data.portOfDischarge);
                _this.portOfDischargeId = _this.portOfDischarge.uid;
            }
            if (data.currency) {
                _this.currency = new Currency_1.Currency(data.currency);
                _this.currencyId = _this.currency.uid;
            }
            if (data.chargeProfileGroup) {
                _this.chargeProfileGroup = new ChargeProfileGroup_1.ChargeProfileGroup(data.chargeProfileGroup);
                _this.chargeProfileGroupId = _this.chargeProfileGroup.uid;
            }
            if (data.cargoItems && data.cargoItems.length) {
                data.cargoItems.forEach(function (cargoItem) {
                    _this.cargoItems.push(new CargoItem_1.CargoItem(cargoItem));
                });
            }
            if (data.shipmentSpecificCharges && data.shipmentSpecificCharges.length) {
                data.shipmentSpecificCharges.forEach(function (shipmentSpecificCharge) {
                    _this.shipmentSpecificCharges.push(new ShipmentSpecificCharge_1.ShipmentSpecificCharge(shipmentSpecificCharge));
                });
            }
            _this.documentIndicator = data.documentIndicator;
            if (data.houseShipments) {
                _this.houseShipments = data.houseShipments;
            }
            _this.held = data.held;
            _this.approved = data.approved;
            _this.arrivalNoticeSent = data.arrivalNoticeSent;
            _this.validated = data.validated;
            _this.hasComments = data.hasComments;
            _this.presentationStatus = data.presentationStatus;
        }
        return _this;
    }
    Shipment.prototype.prepareData = function () {
        if (this.masterShipmentId) {
            this.masterShipment = this.masterShipmentId;
        }
        if (this.vesselCallId) {
            this.vesselCall = this.vesselCallId;
        }
        if (this.commodityTypeId) {
            this.commodityType = this.commodityTypeId;
        }
        if (this.shippingLineId) {
            this.shippingLine = this.shippingLineId;
        }
        if (this.consigneeId) {
            this.consignee = this.consigneeId;
        }
        if (this.shipperId) {
            this.shipper = this.shipperId;
        }
        if (this.agentId) {
            this.agent = this.agentId;
        }
        if (this.notifyPartyId) {
            this.notifyParty = this.notifyPartyId;
        }
        if (this.freightForwarderId) {
            this.freightForwarder = this.freightForwarderId;
        }
        if (this.portOfOriginId) {
            this.portOfOrigin = this.portOfOriginId;
        }
        if (this.portOfDestinationId) {
            this.portOfDestination = this.portOfDestinationId;
        }
        if (this.portOfLoadingId) {
            this.portOfLoading = this.portOfLoadingId;
        }
        if (this.portOfDischargeId) {
            this.portOfDischarge = this.portOfDischargeId;
        }
        if (this.currencyId) {
            this.currency = this.currencyId;
        }
        if (this.chargeProfileGroupId) {
            this.chargeProfileGroup = this.chargeProfileGroupId;
        }
    };
    return Shipment;
}(CargoTypeAware_1.CargoTypeAware));
exports.Shipment = Shipment;
Shipment.SHIPMENT_STATUS = [
    { value: 'Initial', name: 'Initial' },
    { value: 'Validated', name: 'Validated' },
    { value: 'Approved', name: 'Approved' },
    { value: 'Released', name: 'Released' },
    { value: 'Held', name: 'Held' }
];
Shipment.TRANSIT_TYPES = [
    { value: 'Domestic', name: 'Domestic' },
    { value: 'Transshipment', name: 'Transshipment' }
];
Shipment.DOCUMENT_TYPES = [
    { value: 'Import', name: 'Import' },
    { value: 'Export', name: 'Export' }
];
Shipment.CONSOLIDATION_TYPES = [
    { value: 'Other', name: 'Other' },
    { value: 'FCL', name: 'FCL' },
    { value: 'LCL', name: 'LCL' }
];


/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var SecretQuestion_1 = __webpack_require__(712);
var User = (function (_super) {
    __extends(User, _super);
    function User(data) {
        var _this = _super.call(this, data) || this;
        _this.password = '';
        _this.roles = new Array();
        _this.organizations = new Array();
        if (data) {
            _this.username = data.username;
            _this.password = data.password;
            _this.roles = data.roles;
            _this.email = data.email;
            _this.firstName = data.firstName;
            _this.lastName = data.lastName;
            _this.middleInitial = data.middleInitial;
            _this.organizations = data.organizations;
            _this.secretQuestion = new SecretQuestion_1.SecretQuestion(data.secretQuestion);
            _this.secretQuestionAnswer = data.secretQuestionAnswer;
            _this.userStatus = data.userStatus;
            _this.registrationDateTime = data.registrationDateTime;
            _this.expirationDate = data.expirationDate;
        }
        return _this;
    }
    User.prototype.prepareData = function () {
    };
    User.prototype.getReadableName = function () {
        var fullName = '';
        fullName = this.firstName ? this.firstName : '';
        fullName += ' ' + (this.lastName ? this.lastName : '');
        if (fullName.trim())
            return fullName;
        return this.username;
    };
    return User;
}(DomainObject_1.DomainObject));
exports.User = User;


/***/ }),

/***/ 1370:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Country_1 = __webpack_require__(1434);
var Berth_1 = __webpack_require__(1381);
var DomainObject_1 = __webpack_require__(345);
var Port = (function (_super) {
    __extends(Port, _super);
    function Port(data) {
        var _this = _super.call(this, data) || this;
        _this.berths = [];
        if (data) {
            _this.code = data.code;
            _this.description = data.description;
            _this.city = data.city;
            _this.country = new Country_1.Country(data.country);
            _this.display = _this.code + " (" + _this.description + ")";
            if (data.berths && data.berths.length) {
                data.berths.forEach(function (berth) {
                    _this.berths.push(new Berth_1.Berth(berth));
                });
            }
        }
        return _this;
    }
    Port.prototype.prepareData = function () {
    };
    return Port;
}(DomainObject_1.DomainObject));
exports.Port = Port;


/***/ }),

/***/ 1372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeProfileChargeItem_1 = __webpack_require__(1428);
var ChargeItem_1 = __webpack_require__(1362);
var ContainerSize_1 = __webpack_require__(1385);
var ContainerType_1 = __webpack_require__(1438);
/**
 * Represents a charge profile
 */
var ChargeProfile = (function (_super) {
    __extends(ChargeProfile, _super);
    function ChargeProfile(data) {
        var _this = _super.call(this, data) || this;
        _this.activeIndicator = false;
        _this.chargeProfileChargeItems = new Array();
        _this.sizeTypeIndicator = false;
        _this.containerSize = null;
        _this.containerSizeId = null;
        _this.containerType = null;
        _this.containerTypeId = null;
        if (data) {
            _this.code = data.code;
            _this.activeIndicator = data.activeIndicator;
            _this.description = data.description;
            _this.sizeTypeIndicator = data.sizeTypeIndicator;
            if (data.containerSize) {
                _this.containerSize = new ContainerSize_1.ContainerSize(data.containerSize);
                _this.containerSizeId = _this.containerSize.uid;
            }
            if (data.containerType) {
                _this.containerType = new ContainerType_1.ContainerType(data.containerType);
                _this.containerTypeId = _this.containerType.uid;
            }
            if (data.conversionFeeItem) {
                _this.conversionFeeItem = new ChargeItem_1.ChargeItem(data.conversionFeeItem);
                _this.conversionFeeItemId = _this.conversionFeeItem.uid;
            }
            if (data.chargeProfileChargeItems) {
                data.chargeProfileChargeItems.forEach(function (chargeProfileChargeItem) {
                    _this.chargeProfileChargeItems.push(new ChargeProfileChargeItem_1.ChargeProfileChargeItem(chargeProfileChargeItem));
                });
            }
        }
        return _this;
    }
    ChargeProfile.prototype.prepareData = function () {
        if (this.conversionFeeItemId) {
            this.conversionFeeItem = this.conversionFeeItemId;
        }
        if (this.containerSizeId) {
            this.containerSize = this.containerSizeId;
        }
        if (this.containerTypeId) {
            this.containerType = this.containerTypeId;
        }
    };
    return ChargeProfile;
}(DomainObject_1.DomainObject));
exports.ChargeProfile = ChargeProfile;


/***/ }),

/***/ 1373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var adv_datepicker_directive_1 = __webpack_require__(1469);
var adv_timepicker_directive_1 = __webpack_require__(1470);
var adv_combobox_directive_1 = __webpack_require__(1468);
var ng2_combobox_1 = __webpack_require__(1520);
var AdvantumInputModule = (function () {
    function AdvantumInputModule() {
    }
    return AdvantumInputModule;
}());
AdvantumInputModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_combobox_1.ComboBoxModule
        ],
        declarations: [
            adv_datepicker_directive_1.AdvantumDatepickerDirective,
            adv_timepicker_directive_1.AdvantumTimepickerDirective,
            adv_combobox_directive_1.AdvantumComboBoxDirective,
        ],
        exports: [
            adv_datepicker_directive_1.AdvantumDatepickerDirective,
            adv_timepicker_directive_1.AdvantumTimepickerDirective,
            adv_combobox_directive_1.AdvantumComboBoxDirective,
            ng2_combobox_1.ComboBoxModule
        ]
    }),
    __metadata("design:paramtypes", [])
], AdvantumInputModule);
exports.AdvantumInputModule = AdvantumInputModule;


/***/ }),

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var moment = __webpack_require__(2);
var TimeUtils = (function () {
    function TimeUtils() {
    }
    TimeUtils.to24Hour = function (time) {
        return TimeUtils.is12Hour(time) ? moment(time, ["h:mm A"]).format("HH:mm") : time;
    };
    TimeUtils.to12Hour = function (time) {
        return TimeUtils.is24Hour(time) ? moment(time, ["HH:mm"]).format("h:mm A") : time;
    };
    TimeUtils.is12Hour = function (time) {
        return moment(time, 'h:mm A').isValid();
    };
    TimeUtils.is24Hour = function (time) {
        return moment(time, 'HH:mm').isValid();
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),

/***/ 1375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Party_1 = __webpack_require__(1357);
var MeasurementInformation_1 = __webpack_require__(1377);
var ContainerSize_1 = __webpack_require__(1385);
var ContainerSizeType_1 = __webpack_require__(1437);
/**
 * Represents containers
 */
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.containerType = data.containerType;
            _this.containerSize = new ContainerSize_1.ContainerSize(data.containerSize);
            _this.serialNumber = data.serialNumber;
            if (data.owner) {
                _this.owner = new Party_1.Party(data.owner);
                _this.ownerId = _this.owner.uid;
            }
            _this.sizeType = new ContainerSizeType_1.ContainerSizeType(data.sizeType);
            _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation(data.measurementInformation);
        }
        else {
            _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation();
        }
        return _this;
    }
    Container.prototype.prepareData = function () {
        if (this.ownerId) {
            this.owner = this.ownerId;
        }
        if (this.measurementInformation) {
            this.measurementInformation.prepareData();
        }
    };
    return Container;
}(DomainObject_1.DomainObject));
exports.Container = Container;
Container.CONTAINER_TYPES = [
    { value: "Reefer", name: "Reefer" },
    { value: "Dry_Van", name: "Dry Van" },
    { value: "High_Cube", name: "High Cube" },
    { value: "Tank", name: "Tank" }
];


/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Address = (function (_super) {
    __extends(Address, _super);
    function Address(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.streetAddress = data.streetAddress;
            _this.streetAddressDetails = data.streetAddressDetails;
            _this.city = data.city;
            _this.province = data.province;
            _this.countryCode = data.countryCode;
            _this.postalCode = data.postalCode;
            _this.freeText = data.freeText;
        }
        return _this;
    }
    Address.prototype.prepareData = function () { };
    return Address;
}(DomainObject_1.DomainObject));
exports.Address = Address;


/***/ }),

/***/ 1377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Measurement_1 = __webpack_require__(1366);
var MeasurementInformation = (function (_super) {
    __extends(MeasurementInformation, _super);
    function MeasurementInformation(data) {
        var _this = _super.call(this, data) || this;
        _this.exteriorHeight = new Measurement_1.Measurement();
        _this.exteriorWidth = new Measurement_1.Measurement();
        _this.exteriorLength = new Measurement_1.Measurement();
        _this.weight = new Measurement_1.Measurement();
        _this.volume = new Measurement_1.Measurement();
        if (data) {
            if (data.exteriorHeight) {
                _this.exteriorHeight = new Measurement_1.Measurement(data.exteriorHeight);
            }
            if (data.exteriorWidth) {
                _this.exteriorWidth = new Measurement_1.Measurement(data.exteriorWidth);
            }
            if (data.exteriorLength) {
                _this.exteriorLength = new Measurement_1.Measurement(data.exteriorLength);
            }
            if (data.weight) {
                _this.weight = new Measurement_1.Measurement(data.weight);
            }
            if (data.volume) {
                _this.volume = new Measurement_1.Measurement(data.volume);
            }
        }
        return _this;
    }
    MeasurementInformation.prototype.prepareData = function () {
        if (this.exteriorHeight) {
            this.exteriorHeight.prepareData();
        }
        if (this.exteriorWidth) {
            this.exteriorWidth.prepareData();
        }
        if (this.exteriorLength) {
            this.exteriorLength.prepareData();
        }
        if (this.weight) {
            this.weight.prepareData();
        }
        if (this.volume) {
            this.volume.prepareData();
        }
    };
    return MeasurementInformation;
}(DomainObject_1.DomainObject));
exports.MeasurementInformation = MeasurementInformation;


/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var easy_pie_chart_container_directive_1 = __webpack_require__(1407);
var sparkline_container_directive_1 = __webpack_require__(1408);
var InlineGraphsModule = (function () {
    function InlineGraphsModule() {
    }
    return InlineGraphsModule;
}());
InlineGraphsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [easy_pie_chart_container_directive_1.EasyPieChartContainer, sparkline_container_directive_1.SparklineContainer],
        exports: [easy_pie_chart_container_directive_1.EasyPieChartContainer, sparkline_container_directive_1.SparklineContainer],
    }),
    __metadata("design:paramtypes", [])
], InlineGraphsModule);
exports.InlineGraphsModule = InlineGraphsModule;


/***/ }),

/***/ 1379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Party_1 = __webpack_require__(1357);
var Berth_1 = __webpack_require__(1381);
var Port_1 = __webpack_require__(1371);
var Vessel_1 = __webpack_require__(1423);
var Measurement_1 = __webpack_require__(1366);
var CargoTypeAware_1 = __webpack_require__(1392);
var time_utils_1 = __webpack_require__(1374);
/**
 * @FIXME - This entire domain object needs to conform to the common format
 * of all domain objects used here
 */
var VesselCall = (function (_super) {
    __extends(VesselCall, _super);
    function VesselCall(data) {
        var _this = _super.call(this, data) || this;
        _this.draftOnArrival = new Measurement_1.Measurement();
        _this.dataEntryCompleteIndicator = false;
        if (data) {
            _this.status = data.status;
            _this.voyageNumber = data.voyageNumber;
            _this.modeOfTransport = data.modeOfTransport;
            if (data.berth) {
                _this.berth = new Berth_1.Berth(data.berth);
                _this.berthId = data.berth ? data.berth.uid : null;
            }
            if (data.lastPortOfCall) {
                _this.lastPortOfCall = new Port_1.Port(data.lastPortOfCall);
                _this.lastPortOfCallId = data.lastPortOfCall ? data.lastPortOfCall.uid : null;
            }
            if (data.nextPortOfCall) {
                _this.nextPortOfCall = new Port_1.Port(data.nextPortOfCall);
                _this.nextPortOfCallId = data.nextPortOfCall ? data.nextPortOfCall.uid : null;
            }
            _this.lastPortOfCallDepartureDateTime = data.lastPortOfCallDepartureDateTime;
            _this.expectedArrivalDateTime = data.expectedArrivalDateTime;
            _this.actualArrivalDateTime = data.actualArrivalDateTime;
            _this.expectedDepartureDateTime = data.expectedDepartureDateTime;
            _this.departureDateTime = data.departureDateTime;
            if (data.draftOnArrival) {
                _this.draftOnArrival = new Measurement_1.Measurement(data.draftOnArrival);
            }
            if (data.vessel) {
                _this.vessel = new Vessel_1.Vessel(data.vessel);
                _this.vesselId = data.vessel ? data.vessel.uid : null;
            }
            if (data.shippingLine) {
                _this.shippingLine = new Party_1.Party(data.shippingLine);
                _this.shippingLineId = data.shippingLine ? data.shippingLine.uid : null;
            }
            if (data.agent) {
                _this.agent = new Party_1.Party(data.agent);
                _this.agentId = data.agent ? data.agent.uid : null;
            }
            _this.dischargeStartDateTime = data.dischargeStartDateTime;
            _this.dischargeEndDateTime = data.dischargeEndDateTime;
            _this.loadStartDateTime = data.loadStartDateTime;
            _this.loadEndDateTime = data.loadEndDateTime;
            _this.storageDueDate = data.storageDueDate;
            _this.remarks = data.remarks;
            _this.dataEntryCompleteIndicator = data.dataEntryCompleteIndicator;
            _this.splitDateTimes();
        }
        return _this;
    }
    VesselCall.prototype.splitDateTimes = function () {
        var parts;
        if (this.lastPortOfCallDepartureDateTime) {
            parts = this.splitDateTime(this.lastPortOfCallDepartureDateTime);
            this.lastPortOfCallDepartureDate = parts[0];
            this.lastPortOfCallDepartureTime = parts[1];
        }
        if (this.expectedArrivalDateTime) {
            parts = this.splitDateTime(this.expectedArrivalDateTime);
            this.expectedArrivalDate = parts[0];
            this.expectedArrivalTime = parts[1];
        }
        if (this.actualArrivalDateTime) {
            parts = this.splitDateTime(this.actualArrivalDateTime);
            this.actualArrivalDate = parts[0];
            this.actualArrivalTime = parts[1];
        }
        if (this.expectedDepartureDateTime) {
            parts = this.splitDateTime(this.expectedDepartureDateTime);
            this.expectedDepartureDate = parts[0];
            this.expectedDepartureTime = parts[1];
        }
        if (this.departureDateTime) {
            parts = this.splitDateTime(this.departureDateTime);
            this.departureDate = parts[0];
            this.departureTime = parts[1];
        }
        if (this.dischargeStartDateTime) {
            parts = this.splitDateTime(this.dischargeStartDateTime);
            this.dischargeStartDate = parts[0];
            this.dischargeStartTime = parts[1];
        }
        if (this.dischargeEndDateTime) {
            parts = this.splitDateTime(this.dischargeEndDateTime);
            this.dischargeEndDate = parts[0];
            this.dischargeEndTime = parts[1];
        }
        if (this.loadStartDateTime) {
            parts = this.splitDateTime(this.loadStartDateTime);
            this.loadStartDate = parts[0];
            this.loadStartTime = parts[1];
        }
        if (this.loadEndDateTime) {
            parts = this.splitDateTime(this.loadEndDateTime);
            this.loadEndDate = parts[0];
            this.loadEndTime = parts[1];
        }
    };
    VesselCall.prototype.prepareData = function () {
        if (this.lastPortOfCallDepartureDate && this.lastPortOfCallDepartureTime) {
            this.lastPortOfCallDepartureDateTime = this.lastPortOfCallDepartureDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.lastPortOfCallDepartureTime);
        }
        if (this.expectedArrivalDate && this.expectedArrivalTime) {
            this.expectedArrivalDateTime = this.expectedArrivalDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.expectedArrivalTime);
        }
        if (this.actualArrivalDate && this.actualArrivalTime) {
            this.actualArrivalDateTime = this.actualArrivalDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.actualArrivalTime);
        }
        if (this.expectedDepartureDate && this.expectedDepartureTime) {
            this.expectedDepartureDateTime = this.expectedDepartureDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.expectedDepartureTime);
        }
        else {
            this.expectedDepartureDateTime = null;
        }
        if (this.departureDate && this.departureTime) {
            this.departureDateTime = this.departureDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.departureTime);
        }
        else {
            this.departureDateTime = null;
        }
        if (this.dischargeStartDate && this.dischargeStartTime) {
            this.dischargeStartDateTime = this.dischargeStartDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.dischargeStartTime);
        }
        else {
            this.dischargeStartDateTime = null;
        }
        if (this.dischargeEndDate && this.dischargeEndTime) {
            this.dischargeEndDateTime = this.dischargeEndDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.dischargeEndTime);
        }
        else {
            this.dischargeEndDateTime = null;
        }
        if (this.loadStartDate && this.loadStartTime) {
            this.loadStartDateTime = this.loadStartDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.loadStartTime);
        }
        else {
            this.loadStartDateTime = null;
        }
        if (this.loadEndDate && this.loadEndTime) {
            this.loadEndDateTime = this.loadEndDate + 'T' + time_utils_1.TimeUtils.to24Hour(this.loadEndTime);
        }
        else {
            // Allow null
            this.loadEndDateTime = null;
        }
        if (this.vesselId) {
            this.vessel = this.vesselId;
        }
        if (this.shippingLineId) {
            this.shippingLine = this.shippingLineId;
        }
        if (this.agentId) {
            this.agent = this.agentId;
        }
        if (this.berthId) {
            this.berth = this.berthId;
        }
        if (this.lastPortOfCallId) {
            this.lastPortOfCall = this.lastPortOfCallId;
        }
        if (this.nextPortOfCallId) {
            this.nextPortOfCall = this.nextPortOfCallId;
        }
    };
    return VesselCall;
}(CargoTypeAware_1.CargoTypeAware));
exports.VesselCall = VesselCall;
VesselCall.VESSEL_CALL_STATUS = [
    { value: 'PreArrival', name: 'Pre-arrival' },
    { value: 'InProgress', name: 'In-progress' },
    { value: 'Review', name: 'review' },
    { value: 'Finalized', name: 'finalized' },
    { value: 'Cancelled', name: 'cancelled' }
];


/***/ }),

/***/ 1380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var colorpicker_directive_1 = __webpack_require__(1481);
var file_input_component_1 = __webpack_require__(1483);
var knob_directive_1 = __webpack_require__(1485);
var masked_input_directive_1 = __webpack_require__(1486);
var ui_datepicker_directive_1 = __webpack_require__(1494);
var ui_spinner_directive_1 = __webpack_require__(1495);
var x_editable_component_1 = __webpack_require__(1496);
var duallistbox_component_1 = __webpack_require__(1482);
var nouislider_directive_1 = __webpack_require__(1487);
var ionslider_directive_1 = __webpack_require__(1484);
var smart_slider_directive_1 = __webpack_require__(1491);
var smart_tags_directive_1 = __webpack_require__(1492);
var smart_timepicker_directive_1 = __webpack_require__(1493);
var smart_clockpicker_directive_1 = __webpack_require__(1490);
var select2_module_1 = __webpack_require__(1395);
var on_off_switch_module_1 = __webpack_require__(1394);
var SmartadminInputModule = (function () {
    function SmartadminInputModule() {
    }
    return SmartadminInputModule;
}());
SmartadminInputModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            colorpicker_directive_1.ColorpickerDirective,
            file_input_component_1.FileInputComponent,
            knob_directive_1.KnobDirective,
            masked_input_directive_1.MaskedInput,
            ui_datepicker_directive_1.UiDatepickerDirective,
            ui_spinner_directive_1.UiSpinner,
            x_editable_component_1.XEditableComponent,
            duallistbox_component_1.DuallistboxComponent,
            nouislider_directive_1.NouisliderDirective,
            ionslider_directive_1.IonSliderDirective,
            smart_slider_directive_1.SmartSliderDirective,
            smart_tags_directive_1.SmartTagsDirective,
            smart_timepicker_directive_1.SmartTimepickerDirective,
            smart_clockpicker_directive_1.SmartClockpickerDirective,
        ],
        exports: [
            colorpicker_directive_1.ColorpickerDirective,
            file_input_component_1.FileInputComponent,
            knob_directive_1.KnobDirective,
            masked_input_directive_1.MaskedInput,
            ui_datepicker_directive_1.UiDatepickerDirective,
            ui_spinner_directive_1.UiSpinner,
            x_editable_component_1.XEditableComponent,
            duallistbox_component_1.DuallistboxComponent,
            nouislider_directive_1.NouisliderDirective,
            ionslider_directive_1.IonSliderDirective,
            smart_slider_directive_1.SmartSliderDirective,
            smart_tags_directive_1.SmartTagsDirective,
            smart_timepicker_directive_1.SmartTimepickerDirective,
            smart_clockpicker_directive_1.SmartClockpickerDirective,
            select2_module_1.Select2Module,
            on_off_switch_module_1.OnOffSwitchModule,
        ]
    }),
    __metadata("design:paramtypes", [])
], SmartadminInputModule);
exports.SmartadminInputModule = SmartadminInputModule;


/***/ }),

/***/ 1381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Port_1 = __webpack_require__(1371);
var Measurement_1 = __webpack_require__(1366);
var DomainObject_1 = __webpack_require__(345);
var Berth = (function (_super) {
    __extends(Berth, _super);
    function Berth(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.code = data.code;
            _this.port = new Port_1.Port(data.port);
            _this.depth = new Measurement_1.Measurement(data.depth);
        }
        return _this;
    }
    Berth.prototype.prepareData = function () { };
    return Berth;
}(DomainObject_1.DomainObject));
exports.Berth = Berth;


/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents a United Nations Standard Products and Services Code® (UNSPSC®) classification
 */
var CommodityType = (function (_super) {
    __extends(CommodityType, _super);
    function CommodityType(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.code = data.code;
            _this.name = data.name;
            _this.commodityFamily = data.commodityFamily;
            _this.commodityClass = data.commodityClass;
        }
        return _this;
    }
    CommodityType.prototype.prepareData = function () { };
    return CommodityType;
}(DomainObject_1.DomainObject));
exports.CommodityType = CommodityType;


/***/ }),

/***/ 1383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var InvoiceLineItemCharge_1 = __webpack_require__(1384);
var Invoice_1 = __webpack_require__(1360);
/**
 * Represents invoice line item
 */
var InvoiceLineItem = (function (_super) {
    __extends(InvoiceLineItem, _super);
    function InvoiceLineItem(data) {
        var _this = _super.call(this, data) || this;
        _this.lineItemType = "Shipment";
        _this.invoiceLineItemCharges = [];
        _this.chargeAmount = 0; // @TODO: Remove
        if (data) {
            _this.lineItemType = data.lineItemType;
            _this.referenceNumber = data.referenceNumber;
            _this.receivingParty = data.receivingParty;
            if (data.invoice) {
                _this.invoice = new Invoice_1.Invoice(data.invoice);
            }
            if (data.invoiceLineItemCharges && data.invoiceLineItemCharges.length > 0) {
                data.invoiceLineItemCharges.forEach(function (invoiceLineItemCharge) {
                    _this.invoiceLineItemCharges.push(new InvoiceLineItemCharge_1.InvoiceLineItemCharge(invoiceLineItemCharge));
                });
            }
        }
        return _this;
    }
    InvoiceLineItem.prototype.prepareData = function () {
        if (this.invoice && this.invoice instanceof Invoice_1.Invoice) {
            this.invoice = this.invoice.uid;
        }
    };
    return InvoiceLineItem;
}(DomainObject_1.DomainObject));
exports.InvoiceLineItem = InvoiceLineItem;
InvoiceLineItem.LINE_ITEM_TYPE = [
    { value: 'Shipment', name: 'Shipment' },
    { value: 'General', name: 'General' },
];


/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Currency_1 = __webpack_require__(1356);
/**
 * Represents the cacluation of a charge item charge for a invoice item
 */
var InvoiceLineItemCharge = (function (_super) {
    __extends(InvoiceLineItemCharge, _super);
    function InvoiceLineItemCharge(data) {
        var _this = _super.call(this, data) || this;
        /**
         * The floating point number of times this charge is applied
         */
        _this.quantity = 1.00;
        if (data) {
            _this.referenceNumber = data.referenceNumber;
            _this.description = data.description;
            _this.fromDate = data.fromDate;
            _this.toDate = data.toDate;
            _this.paidToDate = data.paidToDate;
            _this.chargeAmount = data.chargeAmount ? data.chargeAmount : 0;
            _this.discount = data.discount ? data.discount : 0;
            _this.amountDue = data.amountDue ? data.amountDue : 0;
            if (data.amountBeingPaid) {
                _this.amountBeingPaid = data.amountBeingPaid > _this.amountDue ? _this.amountDue : data.amountBeingPaid;
            }
            else {
                _this.amountBeingPaid = 0;
            }
            _this.chargeRate = data.chargeRate ? data.chargeRate : 0;
            _this.quantity = data.quantity ? data.quantity : 1.00;
            if (data.currency) {
                _this.currency = new Currency_1.Currency(data.currency);
                _this.currencyId = _this.currency.uid;
            }
        }
        return _this;
    }
    InvoiceLineItemCharge.prototype.prepareData = function () {
        if (this.currency && this.currency instanceof Currency_1.Currency) {
            this.currency = this.currency.uid;
        }
        else {
            this.currency = this.currencyId;
        }
    };
    return InvoiceLineItemCharge;
}(DomainObject_1.DomainObject));
exports.InvoiceLineItemCharge = InvoiceLineItemCharge;


/***/ }),

/***/ 1385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ContainerSize = (function (_super) {
    __extends(ContainerSize, _super);
    function ContainerSize(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
            _this.code = data.code;
            _this.description = data.description;
        }
        return _this;
    }
    ContainerSize.prototype.prepareData = function () { };
    return ContainerSize;
}(DomainObject_1.DomainObject));
exports.ContainerSize = ContainerSize;


/***/ }),

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var MotorVehicleModel = (function (_super) {
    __extends(MotorVehicleModel, _super);
    function MotorVehicleModel(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
        }
        return _this;
    }
    MotorVehicleModel.prototype.prepareData = function () {
    };
    return MotorVehicleModel;
}(DomainObject_1.DomainObject));
exports.MotorVehicleModel = MotorVehicleModel;


/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Invoice_1 = __webpack_require__(1360);
var Payment_1 = __webpack_require__(1361);
/**
 * Represents an invoice payment receipt
 */
var PaymentReceipt = (function (_super) {
    __extends(PaymentReceipt, _super);
    function PaymentReceipt(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.receiptNumber = data.receiptNumber;
            if (data.invoice != null) {
                _this.invoice = new Invoice_1.Invoice(data.invoice);
            }
            if (data.payment) {
                _this.payment = new Payment_1.Payment(data.payment);
            }
            _this.receiptType = data.receiptType;
        }
        return _this;
    }
    PaymentReceipt.prototype.prepareData = function () { };
    return PaymentReceipt;
}(DomainObject_1.DomainObject));
exports.PaymentReceipt = PaymentReceipt;


/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PaymentMethod_1 = __webpack_require__(1358);
var DepositAccount_1 = __webpack_require__(1463);
var AccountWithdrawal = (function (_super) {
    __extends(AccountWithdrawal, _super);
    function AccountWithdrawal(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentMethodType = "Account_Withdrawal";
        if (data) {
            _this.withdrawalDateTime = data.withdrawalDateTime;
            _this.withdrawalAmount = data.withdrawalAmount;
            if (data.depositAccount) {
                _this.depositAccount = new DepositAccount_1.DepositAccount(data.depositAccount);
                _this.depositAccountId = _this.depositAccount.uid;
            }
            else if (data.depositAccountId) {
                _this.depositAccountId = data.depositAccountId;
            }
        }
        return _this;
    }
    AccountWithdrawal.prototype.prepareData = function () {
        if (this.depositAccount instanceof DepositAccount_1.DepositAccount) {
            this.depositAccount = this.depositAccount.uid;
        }
        else {
            this.depositAccount = this.depositAccountId;
        }
    };
    return AccountWithdrawal;
}(PaymentMethod_1.PaymentMethod));
exports.AccountWithdrawal = AccountWithdrawal;


/***/ }),

/***/ 1389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Bank = (function (_super) {
    __extends(Bank, _super);
    function Bank(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
        }
        return _this;
    }
    Bank.prototype.prepareData = function () { };
    return Bank;
}(DomainObject_1.DomainObject));
exports.Bank = Bank;


/***/ }),

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Rx_1 = __webpack_require__(84);
var forms_1 = __webpack_require__(23);
var ComboBoxComponent = (function () {
    function ComboBoxComponent() {
        this.remote = false;
        this.clearOnSelect = false;
        this.forceSelection = true;
        this.localFilter = false;
        this.localFilterCaseSensitive = true;
        this.typeAheadDelay = 500;
        this.inputClass = 'form-control';
        this.inputPlaceholder = '';
        this.loadingIconClass = 'loader';
        this.triggerIconClass = 'trigger';
        this.dataRoot = '';
        this.disabledField = null;
        this.editable = true;
        this.noMatchesText = '';
        this.onQuery = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onCreate = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onInitValue = new core_1.EventEmitter();
        this.hideList = true;
        this._loading = false;
        this._marked = null;
        this._hasFocus = false;
        this._enterCued = false;
        this._noBlur = false;
        // ControlValueAccessor props
        this.propagateTouch = function () {
        };
        this.propagateChange = function (_) {
        };
    }
    ComboBoxComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ComboBoxComponent.prototype, "listData", {
        set: function (value) {
            var _this = this;
            if (this._listDataSubscription) {
                this._listDataSubscription.unsubscribe();
            }
            if (value instanceof Rx_1.Observable) {
                var listData = value;
                this._listDataSubscription = listData.subscribe(function (data) {
                    // todo: make dataRoot work for all depths
                    if (_this.dataRoot) {
                        data = data[_this.dataRoot];
                    }
                    _this.data = _this._initialData = data;
                    _this.loading = false;
                    if (0 === _this._tmpVal || _this._tmpVal) {
                        _this.writeValue(_this._tmpVal);
                    }
                });
            }
            else {
                var data = value;
                this.data = this._initialData = data;
                this.loading = false;
                // If the list data change, trigger a reprocessing.
                this.loadData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxComponent.prototype, "currVal", {
        get: function () {
            return this._currVal;
        },
        set: function (value) {
            this._currVal = value;
            this._tmpVal = null;
            this.marked = null;
            this.hideList = !this._hasFocus && !this._noBlur;
            clearTimeout(this._aheadTimer);
            if (!this._currVal) {
                this.sendModelChange(null);
            }
            this._aheadTimer = setTimeout(this.loadData.bind(this), this.typeAheadDelay);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxComponent.prototype, "marked", {
        get: function () {
            return this._marked;
        },
        // todo: scroll marked into view
        set: function (value) {
            if (null === value) {
                this._marked = value;
            }
            else if (this.data && 0 <= value && this.data.length >= value - 1) {
                this._marked = value;
                // use private var to prevent query trigger
                this._currVal = this.getDisplayValue(this.data[this._marked]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (loading) {
            this._loading = loading;
            if (!loading && this._enterCued) {
                this._enterCued = false;
                this.handleEnter();
            }
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxComponent.prototype.onKeyDown = function (event) {
        var code = event.which || event.keyCode;
        switch (code) {
            case 13:
                event.preventDefault();
                this.handleEnter();
                break;
            case 38:
                this.handleUp();
                break;
            case 40:
                this.handleDown();
                break;
            default:
                if (!this.editable) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return false;
                }
                break;
        }
    };
    ComboBoxComponent.prototype.onItemClick = function (index, item) {
        if (this.isDisabled(item)) {
            return;
        }
        this._noBlur = false;
        this.marked = index;
        this.onSelect.emit(this.data[this.marked]);
        this.sendModelChange(this.data[this.marked]);
        if (this.clearOnSelect) {
            this.clear();
        }
        else {
            this.hideList = true;
        }
        if (!this.remote && !this.localFilter) {
            this.data = this._initialData;
        }
    };
    ComboBoxComponent.prototype.onFieldBlur = function (event) {
        var _this = this;
        this._hasFocus = false;
        if (this._noBlur) {
            return;
        }
        this.onBlur.emit(event);
        // timeout for hide to catch click event on list :-(
        setTimeout(function () {
            _this.handleEnter();
        }, 200);
        this.propagateTouch();
    };
    ComboBoxComponent.prototype.onFieldFocus = function () {
        this._hasFocus = true;
        this.hideList = false;
        if (!this.editable) {
            this.clear();
        }
        this.loadData();
    };
    ComboBoxComponent.prototype.onMouseEnterList = function () {
        this._noBlur = true;
    };
    ComboBoxComponent.prototype.onMouseLeaveList = function () {
        this._noBlur = false;
    };
    ComboBoxComponent.prototype.isMarked = function (value) {
        if (null === this.marked) {
            return false;
        }
        return this.data[this.marked] === value;
    };
    ComboBoxComponent.prototype.isDisabled = function (value) {
        if (!this.disabledField) {
            return false;
        }
        return !!value[this.disabledField];
    };
    ComboBoxComponent.prototype.handleEnter = function () {
        if (!this.loading) {
            // try to determine marked (look if item is in list)
            if (!this.marked) {
                for (var i = 0; i < this.data.length; i++) {
                    if (this.currVal === this.getDisplayValue(this.data[i])) {
                        this.marked = i;
                        break;
                    }
                }
            }
            if (null === this.marked) {
                if (this.forceSelection) {
                    this.onSelect.emit(null);
                    this.sendModelChange(null);
                    this.clear();
                }
                else {
                    this.onCreate.emit(this.currVal);
                    //this may causes error
                    this.sendModelChange(this.currVal);
                }
            }
            else {
                var item = this.data[this.marked];
                if (this.isDisabled(item)) {
                    return;
                }
                this.onSelect.emit(this.data[this.marked]);
                this.sendModelChange(this.data[this.marked]);
            }
            if (this.clearOnSelect) {
                this.clear();
            }
            else {
                this.hideList = true;
            }
            if (!this.remote && !this.localFilter) {
                this.data = this._initialData;
            }
        }
        else {
            this._enterCued = true;
        }
    };
    ComboBoxComponent.prototype.handleUp = function () {
        if (this.marked) {
            this.marked--;
        }
    };
    ComboBoxComponent.prototype.handleDown = function () {
        if (null !== this.marked) {
            this.marked++;
        }
        else {
            this.marked = 0;
        }
    };
    ComboBoxComponent.prototype.clear = function () {
        this.currVal = '';
        this.data = [];
    };
    ComboBoxComponent.prototype.getDisplayValue = function (val) {
        var result = val;
        if (!this.displayField || !val) {
            return null;
        }
        this.displayField.split('.').forEach(function (index) {
            result = result[index];
        });
        return result;
    };
    ComboBoxComponent.prototype.getValueValue = function (val) {
        var result = val;
        if (!this.valueField || !val) {
            return val;
        }
        this.valueField.split('.').forEach(function (index) {
            result = result[index];
        });
        return result;
    };
    ComboBoxComponent.prototype.loadData = function () {
        var _this = this;
        if (!this.remote) {
            if (this.localFilter) {
                this.data = this._initialData.filter(function (item) {
                    if (!_this.currVal) {
                        return true;
                    }
                    else {
                        if (_this.localFilterCaseSensitive) {
                            return -1 !== _this.getDisplayValue(item).indexOf(_this.currVal);
                        }
                        else {
                            return -1 !== _this.getDisplayValue(item).toLowerCase().indexOf(_this.currVal.toLowerCase());
                        }
                    }
                });
            }
        }
        else {
            this.loading = true;
            this.onQuery.emit(this._currVal);
        }
    };
    ComboBoxComponent.prototype.sendModelChange = function (val) {
        this.propagateChange(this.getValueValue(val));
    };
    ComboBoxComponent.prototype.searchValueObject = function (value) {
        var _this = this;
        if (false === value instanceof Object && this.valueField && this._initialData) {
            this._initialData.forEach(function (item) {
                if (value === _this.getValueValue(item)) {
                    value = item;
                }
            });
        }
        return value;
    };
    ComboBoxComponent.prototype.onTriggerClick = function () {
        this._input.nativeElement.focus();
    };
    ComboBoxComponent.prototype.writeValue = function (value) {
        value = this.searchValueObject(value);
        if (value instanceof Object && this.getDisplayValue(value)) {
            this.currVal = this.getDisplayValue(value);
        }
        else {
            this._tmpVal = value;
        }
        this.onInitValue.emit(value);
    };
    ComboBoxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ComboBoxComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    return ComboBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "displayField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "valueField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ComboBoxComponent.prototype, "remote", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ComboBoxComponent.prototype, "clearOnSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ComboBoxComponent.prototype, "forceSelection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ComboBoxComponent.prototype, "localFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ComboBoxComponent.prototype, "localFilterCaseSensitive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ComboBoxComponent.prototype, "typeAheadDelay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "inputPlaceholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "loadingIconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "triggerIconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "dataRoot", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "disabledField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ComboBoxComponent.prototype, "editable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComboBoxComponent.prototype, "noMatchesText", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboBoxComponent.prototype, "onQuery", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboBoxComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboBoxComponent.prototype, "onCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboBoxComponent.prototype, "onBlur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboBoxComponent.prototype, "onInitValue", void 0);
__decorate([
    core_1.ViewChild('inputField'),
    __metadata("design:type", Object)
], ComboBoxComponent.prototype, "_input", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComboBoxComponent.prototype, "listData", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComboBoxComponent.prototype, "currVal", null);
ComboBoxComponent = __decorate([
    core_1.Component({
        moduleId: 'ng2-combobox',
        selector: 'combo-box',
        template: "\n        <div class=\"field-wrap\">\n            <input #inputField class=\"{{inputClass}}\" type=\"text\" placeholder=\"{{inputPlaceholder}}\"\n                   [(ngModel)]=\"currVal\"\n                   (keydown)=\"onKeyDown($event)\"\n                   (blur)=\"onFieldBlur($event)\"\n                   (focus)=\"onFieldFocus()\">\n        \n            <div class=\"icons\">\n                <i *ngIf=\"loading\" class=\"{{loadingIconClass}}\"></i>\n                <i *ngIf=\"!loading\" (click)=\"onTriggerClick()\" class=\"{{triggerIconClass}}\"></i>\n            </div>\n        \n            <div class=\"list\" *ngIf=\"data && !hideList\" (mouseenter)=\"onMouseEnterList($event)\" (mouseleave)=\"onMouseLeaveList($event)\">\n                <div class=\"no-matches\" *ngIf=\"noMatchesText && data.length == 0\">{{noMatchesText}}</div>\n                <div *ngFor=\"let item of data;let index = index;\"\n                     [ngClass]=\"{'item': true, 'marked': isMarked(item), 'disabled': isDisabled(item)}\"\n                     (click)=\"onItemClick(index, item)\">\n                    {{getDisplayValue(item)}}\n                </div>\n            </div>\n        </div>\n    ",
        styles: ["\n        .field-wrap {\n            position: relative;\n        }\n                \n        .list {\n            position: absolute;\n            width: 100%;\n            height: auto;\n            background-color: white;\n            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n            z-index: 9999;\n            max-height: 200px;\n            overflow: auto;\n        }\n        \n        .list .no-matches {\n            padding: 10px 20px;\n            cursor: default;\n            user-select: none;\n            font-style: italic;\n        }\n\n        .list .item {\n            padding: 10px 20px;\n            cursor: pointer;\n        }\n        \n        .list .item.marked,\n        .list .item:hover{\n            background-color: #ecf0f5;\n        }\n        \n        .list .item.marked {\n            font-weight: bold;\n        }\n        \n        .list .item.disabled {\n            opacity: .5;\n        }\n        \n        .icons {\n            position: absolute;\n            right: 8px;\n            top: 0px;\n            height: 100%;\n        }\n        \n        .icons i {\n            height: 20px;\n            width: 20px;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin: auto auto auto -20px;\n        }\n        \n        .loader {\n            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0nMzhweCcgaGVpZ2h0PSczOHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1yZWxvYWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTUwIDE1QTM1IDM1IDAgMSAwIDc0Ljc4NyAyNS4yMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzOCwzOCwzOCwwLjkzKSIgc3Ryb2tlLXdpZHRoPSIxMnB4Ij48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTUwIDBMNTAgMzBMNjYgMTVMNTAgMCIgZmlsbD0icmdiYSgzOCwzOCwzOCwwLjkzKSI+PC9wYXRoPgogICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDUwIDUwIiB0bz0iMzYwIDUwIDUwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9nPgo8L3N2Zz4=');\n            background-size: cover;\n        }\n        \n        .trigger {\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center center;\n            background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfM19Lb3BpZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4Ig0KCSB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1OSAzMS45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSAzMS45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjU3LjYsMS44IDI5LjUsMjkuOCAyOS41LDI5LjggMS41LDEuOCAiLz4NCjwvc3ZnPg0K\");\n            cursor: pointer;\n        }\n\n        input::-ms-clear {\n            display:none;\n        }\n    "],
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return ComboBoxComponent; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], ComboBoxComponent);
exports.ComboBoxComponent = ComboBoxComponent;
var _a, _b;


/***/ }),

/***/ 1391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var User_1 = __webpack_require__(1369);
/**
 * Class to represent a general cancellation
 */
var Cancellation = (function (_super) {
    __extends(Cancellation, _super);
    function Cancellation(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.cancellationDateTime = data.cancellationDateTime;
            _this.cancellationReason = data.cancellationReason;
            if (data.responsibleUser != null) {
                _this.responsibleUser = new User_1.User(data.responsibleUser);
            }
            _this.splitDateTimes();
        }
        return _this;
    }
    Cancellation.prototype.splitDateTimes = function () {
        var parts;
        if (this.cancellationDateTime) {
            parts = this.splitDateTime(this.cancellationDateTime);
            this.cancellationDate = parts[0];
            this.cancellationTime = parts[1];
        }
    };
    Cancellation.prototype.prepareData = function () { };
    return Cancellation;
}(DomainObject_1.DomainObject));
exports.Cancellation = Cancellation;


/***/ }),

/***/ 1392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var CargoTypeAware = (function (_super) {
    __extends(CargoTypeAware, _super);
    function CargoTypeAware(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.cargoType = data.cargoType;
        }
        return _this;
    }
    CargoTypeAware.prototype.prepareData = function () { };
    return CargoTypeAware;
}(DomainObject_1.DomainObject));
exports.CargoTypeAware = CargoTypeAware;
CargoTypeAware.CARGO_TYPES = [
    { value: "Container", name: "Container" },
    { value: "Bulk", name: "Bulk" },
    { value: "BreakBulk", name: "BreakBulk" },
    { value: "LiquidBulk", name: "LiquidBulk" },
    { value: "Vehicle", name: "Vehicle" },
    { value: "Multiple", name: "Multiple" },
    { value: "Other", name: "Other" }
];


/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var input_config_1 = __webpack_require__(1472);
var input_text_component_1 = __webpack_require__(1478);
var input_number_component_1 = __webpack_require__(1474);
var input_password_component_1 = __webpack_require__(1475);
var input_range_component_1 = __webpack_require__(1476);
var input_textarea_component_1 = __webpack_require__(1479);
var input_select_component_1 = __webpack_require__(1477);
var input_date_component_1 = __webpack_require__(1473);
exports.InputComponents = [
    input_text_component_1.InputTextComponent,
    input_number_component_1.InputNumberComponent,
    input_password_component_1.InputPasswordComponent,
    input_range_component_1.InputRangeComponent,
    input_textarea_component_1.InputTextareaComponent,
    input_select_component_1.InputSelectComponent,
    input_date_component_1.InputDateComponent,
];
// TO-DO Default's value
var inputConfig = {
    empty: 'empty',
    placeholder: '',
    type: 'text',
    disabled: false,
    name: '',
    size: 8,
    min: 1,
    pattern: '',
    max: Infinity,
    fnErrorLength: function (x) { console.error('Error: Invalid length.'); },
    fnErrorPattern: function (x) { console.error('Error: Input does not match pattern.'); }
};
var NUMERIC_TYPES = ['range', 'number'];
var InlineEditorComponent = (function () {
    function InlineEditorComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // Inputs implemented
        this.components = {
            text: input_text_component_1.InputTextComponent,
            number: input_number_component_1.InputNumberComponent,
            password: input_password_component_1.InputPasswordComponent,
            range: input_range_component_1.InputRangeComponent,
            textarea: input_textarea_component_1.InputTextareaComponent,
            select: input_select_component_1.InputSelectComponent,
            date: input_date_component_1.InputDateComponent,
        };
        this.onSave = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        //textarea's attribute
        this.cols = 50;
        this.rows = 4;
        this._value = '';
        this.preValue = '';
        this.editing = false;
        this.isEmpty = false;
    }
    InlineEditorComponent.prototype.ngOnChanges = function (changes) {
        var type = changes['type'];
        if (type) {
            this.generateComponent(type.currentValue);
        }
    };
    InlineEditorComponent.prototype.getComponentType = function (typeName) {
        var type = this.components[typeName];
        if (!type) {
            throw new Error('That type does not exist or it is not implemented yet!');
        }
        return type;
    };
    Object.defineProperty(InlineEditorComponent.prototype, "options", {
        get: function () { return this._options; },
        // select's attribute
        set: function (options) {
            if (options['data'] === undefined) {
                this._options = {};
                this._options['data'] = options;
                this._options['value'] = 'value';
                this._options['text'] = 'text';
            }
            else {
                this._options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (newValue) {
            if (newValue !== this._value) {
                this._value = newValue;
                if (this.onChange) {
                    this.onChange(newValue);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    InlineEditorComponent.prototype.ngOnInit = function () {
        if (this.type) {
            this.initializeProperties();
        }
    };
    InlineEditorComponent.prototype.generateComponent = function (type) {
        var componentType = this.getComponentType(type);
        this.inputInstance = this.createInputInstance(componentType);
        this.inputInstance.setContext(this);
    };
    InlineEditorComponent.prototype.createInputInstance = function (componentType) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(factory);
        return this.componentRef.instance;
    };
    InlineEditorComponent.prototype.initializeProperties = function () {
        this.initProperty('type');
        this.initProperty('disabled');
        this.initProperty('placeholder');
        this.initProperty('empty');
        this.initProperty('name');
        this.initProperty('size');
        this.initProperty('min');
        this.initProperty('max');
        this.initProperty('pattern');
        this.initProperty('fnErrorLength');
        this.initProperty('fnErrorPattern');
    };
    InlineEditorComponent.prototype.writeValue = function (value) {
        if (value || value === 0) {
            this.value = value;
            this.isEmpty = false;
        }
        else {
            /*if (this.type === "select") {
                this.empty = this.options.data[0][this.options.value];
            }*/
            //this._value = this.empty;
            this.isEmpty = true;
        }
    };
    InlineEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    InlineEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    ;
    // Method to display the inline edit form and hide the <a> element
    InlineEditorComponent.prototype.edit = function (value) {
        this.preValue = value; // Store original value in case the form is cancelled
        this.editing = true;
        this.inputInstance.focus();
        this.onEdit.emit(this);
    };
    // Method to display the editable value as text and emit save event to host
    InlineEditorComponent.prototype.saveChanges = function (value) {
        if (this.pattern && this.inputInstance.isRegexTestable && !new RegExp(this.pattern).test(value)) {
            return this.fnErrorPattern();
        }
        var length = this.inputInstance.isNumeric ? Number(value) : value.length;
        if (length < this.min || length > this.max) {
            return this.fnErrorLength();
        }
        this.onSave.emit(value);
        this.editing = false;
        this.isEmpty = false;
    };
    // Method to reset the editable value
    InlineEditorComponent.prototype.cancel = function (value) {
        this.value = this.preValue;
        this.editing = false;
        this.onCancel.emit(this);
    };
    InlineEditorComponent.prototype.initProperty = function (property) {
        this[property] = typeof this[property] !== 'undefined'
            ? this[property]
            : inputConfig[property];
    };
    InlineEditorComponent.prototype.showText = function () {
        return this.inputInstance.getPlaceholder();
    };
    return InlineEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof input_config_1.InputType !== "undefined" && input_config_1.InputType) === "function" && _a || Object)
], InlineEditorComponent.prototype, "type", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], InlineEditorComponent.prototype, "onSave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], InlineEditorComponent.prototype, "onEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], InlineEditorComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineEditorComponent.prototype, "empty", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineEditorComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineEditorComponent.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineEditorComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineEditorComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InlineEditorComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InlineEditorComponent.prototype, "min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InlineEditorComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineEditorComponent.prototype, "pattern", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InlineEditorComponent.prototype, "fnErrorLength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InlineEditorComponent.prototype, "fnErrorPattern", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InlineEditorComponent.prototype, "cols", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InlineEditorComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InlineEditorComponent.prototype, "options", null);
__decorate([
    core_1.ViewChild('container', { read: core_1.ViewContainerRef }),
    __metadata("design:type", typeof (_e = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _e || Object)
], InlineEditorComponent.prototype, "container", void 0);
InlineEditorComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor',
        template: "<div>\n                    <div id=\"inlineEditWrapper\">\n                        <a [ngClass]=\"{'editable-empty': isEmpty}\"  \n                           (click)=\"edit(value)\" \n                           [hidden]=\"editing && !disabled\">{{ showText() }}</a>\n                           \n                        <div class=\"inlineEditForm form-inline\" \n                             [hidden]=\"!editing || disabled\">\n                            <div class=\"form-group\">\n                                <div #container></div>\n                                <span class=\"inline-editor-button-group\">\n                                    <button id=\"inline-editor-button-save\" \n                                            class=\"btn btn-sm btn-primary\"\n                                            (click)=\"saveChanges(value)\"\n                                            type=\"button\">\n                                            <span class=\"fa fa-check\"></span></button>\n\n                                    <button class=\"btn btn-sm btn-danger\" \n                                            (click)=\"cancel(value)\"\n                                            type=\"button\">\n                                            <span class=\"fa fa-remove\"></span></button>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n               </div>",
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.inline-editor-button-group{\n    display:inline-block;\n}\n.editInvalid{\n color: #a94442;\n margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return InlineEditorComponent; }),
                multi: true,
            }],
        entryComponents: exports.InputComponents,
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof core_1.ComponentFactoryResolver !== "undefined" && core_1.ComponentFactoryResolver) === "function" && _f || Object])
], InlineEditorComponent);
exports.InlineEditorComponent = InlineEditorComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var on_off_switch_component_1 = __webpack_require__(1488);
var forms_1 = __webpack_require__(23);
var OnOffSwitchModule = (function () {
    function OnOffSwitchModule() {
    }
    return OnOffSwitchModule;
}());
OnOffSwitchModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule
        ],
        declarations: [on_off_switch_component_1.OnOffSwitchComponent],
        exports: [on_off_switch_component_1.OnOffSwitchComponent]
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchModule);
exports.OnOffSwitchModule = OnOffSwitchModule;


/***/ }),

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var select2_directive_1 = __webpack_require__(1489);
var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [select2_directive_1.Select2Directive],
        exports: [select2_directive_1.Select2Directive],
    }),
    __metadata("design:paramtypes", [])
], Select2Module);
exports.Select2Module = Select2Module;


/***/ }),

/***/ 1396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A base for pipes that display enum human-readable values
 */
var EnumBasePipe = (function () {
    function EnumBasePipe() {
    }
    EnumBasePipe.prototype.transform = function (value, args) {
        if (!value || !this.values) {
            return null;
        }
        var selectedType = this.values.find(function (entry, index, obj) {
            return entry.value == value;
        });
        return selectedType ? selectedType.value : null;
    };
    return EnumBasePipe;
}());
exports.EnumBasePipe = EnumBasePipe;


/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1363);
var _ = __webpack_require__(1400);
var BootstrapPaginator = (function () {
    function BootstrapPaginator() {
        this.rowsOnPageSet = [];
        this.minRowsOnPage = 0;
    }
    BootstrapPaginator.prototype.ngOnChanges = function (changes) {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    };
    return BootstrapPaginator;
}());
__decorate([
    core_1.Input("rowsOnPageSet"),
    __metadata("design:type", Object)
], BootstrapPaginator.prototype, "rowsOnPageSet", void 0);
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", DataTable_1.DataTable)
], BootstrapPaginator.prototype, "mfTable", void 0);
BootstrapPaginator = __decorate([
    core_1.Component({
        selector: "mfBootstrapPaginator",
        template: "\n    <mfPaginator #p [mfTable]=\"mfTable\">\n        <ul class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n            <li class=\"page-item\" [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&laquo;</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-4}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-1}}</a>\n            </li>\n            <li class=\"page-item active\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+1}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+4}}</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&raquo;</a>\n            </li>\n        </ul>\n        <ul class=\"pagination pull-right float-sm-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n            <li class=\"page-item\" *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{rows}}</a>\n            </li>\n        </ul>\n    </mfPaginator>\n    "
    })
], BootstrapPaginator);
exports.BootstrapPaginator = BootstrapPaginator;
//# sourceMappingURL=BootstrapPaginator.js.map

/***/ }),

/***/ 1398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1363);
var DefaultSorter = (function () {
    function DefaultSorter(mfTable) {
        this.mfTable = mfTable;
        this.isSortedByMeAsc = false;
        this.isSortedByMeDesc = false;
    }
    DefaultSorter.prototype.ngOnInit = function () {
        var _this = this;
        this.mfTable.onSortChange.subscribe(function (event) {
            _this.isSortedByMeAsc = (event.sortBy == _this.sortBy && event.sortOrder == "asc");
            _this.isSortedByMeDesc = (event.sortBy == _this.sortBy && event.sortOrder == "desc");
        });
    };
    DefaultSorter.prototype.sort = function () {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        }
        else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
    };
    return DefaultSorter;
}());
__decorate([
    core_1.Input("by"),
    __metadata("design:type", String)
], DefaultSorter.prototype, "sortBy", void 0);
DefaultSorter = __decorate([
    core_1.Component({
        selector: "mfDefaultSorter",
        template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>\n        </a>"
    }),
    __metadata("design:paramtypes", [DataTable_1.DataTable])
], DefaultSorter);
exports.DefaultSorter = DefaultSorter;
//# sourceMappingURL=DefaultSorter.js.map

/***/ }),

/***/ 1399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1363);
var Paginator = (function () {
    function Paginator(injectMfTable) {
        var _this = this;
        this.injectMfTable = injectMfTable;
        this.dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this.activePage = event.activePage;
            _this.rowsOnPage = event.rowsOnPage;
            _this.dataLength = event.dataLength;
            _this.lastPage = Math.ceil(_this.dataLength / _this.rowsOnPage);
        };
    }
    Paginator.prototype.ngOnChanges = function (changes) {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    Paginator.prototype.setPage = function (pageNumber) {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    };
    Paginator.prototype.setRowsOnPage = function (rowsOnPage) {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    };
    return Paginator;
}());
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", DataTable_1.DataTable)
], Paginator.prototype, "inputMfTable", void 0);
Paginator = __decorate([
    core_1.Component({
        selector: "mfPaginator",
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [DataTable_1.DataTable])
], Paginator);
exports.Paginator = Paginator;
//# sourceMappingURL=Paginator.js.map

/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(156), __webpack_require__(714)(module)))

/***/ }),

/***/ 1401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var angular2_datatable_1 = __webpack_require__(1518);
var pipe_module_1 = __webpack_require__(1514);
/**
 * Advantum commons module
 *
 * @export
 * @class AdvantumCommonsModule
 */
var AdvantumCommonsModule = (function () {
    function AdvantumCommonsModule() {
    }
    return AdvantumCommonsModule;
}());
AdvantumCommonsModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_datatable_1.DataTableModule,
            pipe_module_1.PipeModule
        ],
        declarations: [],
        exports: [
            angular2_datatable_1.DataTableModule,
            pipe_module_1.PipeModule
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], AdvantumCommonsModule);
exports.AdvantumCommonsModule = AdvantumCommonsModule;


/***/ }),

/***/ 1402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var forms_1 = __webpack_require__(23);
var http_1 = __webpack_require__(83);
var router_1 = __webpack_require__(33);
var ng2_bootstrap_1 = __webpack_require__(118);
var ng2_popover_1 = __webpack_require__(348);
var layout_1 = __webpack_require__(1507);
var i18n_module_1 = __webpack_require__(347);
var voice_control_module_1 = __webpack_require__(735);
var smartadmin_widgets_module_1 = __webpack_require__(713);
var utils_module_1 = __webpack_require__(155);
var chat_module_1 = __webpack_require__(715);
var stats_module_1 = __webpack_require__(1404);
var inline_graphs_module_1 = __webpack_require__(1378);
var smartadmin_forms_lite_module_1 = __webpack_require__(1497);
var smart_progressbar_module_1 = __webpack_require__(1516);
var advantum_module_1 = __webpack_require__(1436);
var SmartadminModule = (function () {
    function SmartadminModule() {
    }
    return SmartadminModule;
}());
SmartadminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            advantum_module_1.AdvantumModule,
        ],
        declarations: [],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            ng2_bootstrap_1.ModalModule,
            ng2_bootstrap_1.ButtonsModule,
            ng2_bootstrap_1.AlertModule,
            ng2_bootstrap_1.TabsModule,
            ng2_bootstrap_1.TooltipModule,
            ng2_bootstrap_1.DropdownModule,
            ng2_bootstrap_1.ProgressbarModule,
            ng2_popover_1.PopoverModule,
            layout_1.SmartadminLayoutModule,
            i18n_module_1.I18nModule,
            utils_module_1.UtilsModule,
            smartadmin_forms_lite_module_1.SmartadminFormsLiteModule,
            smart_progressbar_module_1.SmartProgressbarModule,
            inline_graphs_module_1.InlineGraphsModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
            chat_module_1.ChatModule,
            stats_module_1.StatsModule,
            voice_control_module_1.VoiceControlModule,
            router_1.RouterModule,
            advantum_module_1.AdvantumModule,
        ]
    }),
    __metadata("design:paramtypes", [])
], SmartadminModule);
exports.SmartadminModule = SmartadminModule;


/***/ }),

/***/ 1403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var VesselCall_1 = __webpack_require__(1379);
var VesselCallStateChange_1 = __webpack_require__(1435);
var abstract_service_1 = __webpack_require__(346);
var VesselCallService = (function (_super) {
    __extends(VesselCallService, _super);
    function VesselCallService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    VesselCallService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/vessel-calls', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    VesselCallService.prototype.getByFilter = function (filter) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("filter", filter);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/vessel-calls', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    VesselCallService.prototype.getByVoyageNumber = function (voyageNumber) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("voyageNumber", voyageNumber); // @TODO: Use underscores in query parameter key
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/vessel-calls', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    VesselCallService.prototype.getByVessel = function (vesselUid) {
        return this.http.get(this.apiBaseUrl + '/vessel-calls/vessel/search?vessel=' + vesselUid, this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    VesselCallService.prototype.getById = function (uid) {
        return this.http.get(this.apiBaseUrl + '/vessel-call/' + uid, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    VesselCallService.prototype.create = function (vesselCall) {
        return this.http.post(this.apiBaseUrl + '/vessel-calls', vesselCall, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    VesselCallService.prototype.update = function (uid, vesselCall) {
        return this.http.put(this.apiBaseUrl + '/vessel-call/' + uid, vesselCall, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    VesselCallService.prototype.finalize = function (uid) {
        return this.http.put(this.apiBaseUrl + '/vessel-call/' + uid + '/finalize', {}, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    VesselCallService.prototype.reject = function (vesselCallReviewRejection) {
        return this.http.put(this.apiBaseUrl + '/vessel-call/' + vesselCallReviewRejection.vesselCallId + '/reject', vesselCallReviewRejection, this.getStandardRequestOptions())
            .map(function (res) { return new VesselCallStateChange_1.VesselCallStateChange(res.json() || {}); })
            .catch(this.handleError);
    };
    VesselCallService.prototype.cancel = function (vesselCallCancellation) {
        return this.http.put(this.apiBaseUrl + '/vessel-call/' + vesselCallCancellation.vesselCallId + '/cancel', vesselCallCancellation, this.getStandardRequestOptions())
            .map(function (res) { return new VesselCallStateChange_1.VesselCallStateChange(res.json() || {}); })
            .catch(this.handleError);
    };
    VesselCallService.prototype.extractOne = function (res) {
        return new VesselCall_1.VesselCall(res.json() || {});
    };
    VesselCallService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (vesselCall) {
                result.push(new VesselCall_1.VesselCall(vesselCall));
            });
        }
        return result;
    };
    return VesselCallService;
}(abstract_service_1.AbstractService));
VesselCallService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], VesselCallService);
exports.VesselCallService = VesselCallService;
var _a, _b;


/***/ }),

/***/ 1404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var stats_component_1 = __webpack_require__(1409);
var inline_graphs_module_1 = __webpack_require__(1378);
var StatsModule = (function () {
    function StatsModule() {
    }
    return StatsModule;
}());
StatsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, inline_graphs_module_1.InlineGraphsModule],
        declarations: [stats_component_1.StatsComponent],
        exports: [stats_component_1.StatsComponent],
    }),
    __metadata("design:paramtypes", [])
], StatsModule);
exports.StatsModule = StatsModule;


/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(0);
var core_3 = __webpack_require__(0);
var core_4 = __webpack_require__(0);
var base_dialog_component_1 = __webpack_require__(1367);
var ConfirmationDialogComponent = (function (_super) {
    __extends(ConfirmationDialogComponent, _super);
    function ConfirmationDialogComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this.yesValue = true;
        _this.noValue = false;
        _this.onResponse = new core_2.EventEmitter();
        return _this;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () { };
    ConfirmationDialogComponent.prototype.onClickYes = function () {
        this.onResponse.emit(this.yesValue);
        this.hideDialog();
    };
    ConfirmationDialogComponent.prototype.onClickNo = function () {
        this.onResponse.emit(this.noValue);
        this.hideDialog();
    };
    return ConfirmationDialogComponent;
}(base_dialog_component_1.BaseDialogComponent));
__decorate([
    core_4.Input('title'),
    __metadata("design:type", String)
], ConfirmationDialogComponent.prototype, "dialogTitle", void 0);
__decorate([
    core_4.Input('message'),
    __metadata("design:type", String)
], ConfirmationDialogComponent.prototype, "confirmationQuestion", void 0);
__decorate([
    core_4.Input('yesValue'),
    __metadata("design:type", Object)
], ConfirmationDialogComponent.prototype, "yesValue", void 0);
__decorate([
    core_4.Input('noValue'),
    __metadata("design:type", Object)
], ConfirmationDialogComponent.prototype, "noValue", void 0);
__decorate([
    core_3.Output(),
    __metadata("design:type", typeof (_a = typeof core_2.EventEmitter !== "undefined" && core_2.EventEmitter) === "function" && _a || Object)
], ConfirmationDialogComponent.prototype, "onResponse", void 0);
ConfirmationDialogComponent = __decorate([
    core_1.Component({
        selector: 'confirmation-dialog',
        template: __webpack_require__(1522),
    }),
    __metadata("design:paramtypes", [])
], ConfirmationDialogComponent);
exports.ConfirmationDialogComponent = ConfirmationDialogComponent;
var _a;


/***/ }),

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var Shipment_1 = __webpack_require__(1368);
var Container_1 = __webpack_require__(1375);
var Rx_1 = __webpack_require__(84);
var abstract_service_1 = __webpack_require__(346);
var ng2_cache_1 = __webpack_require__(709);
/**
 * Shipment service
 *
 * @export
 * @class ShipmentService
 * @extends {AbstractService}
 */
var ShipmentService = (function (_super) {
    __extends(ShipmentService, _super);
    /**
     * Creates an instance of ShipmentService.
     * @param {Http} http
     * @param {AppProperties} appProps
     *
     * @memberOf ShipmentService
     */
    function ShipmentService(http, cacheService, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        _this.cacheService = cacheService;
        return _this;
    }
    /**
     * Returns a list of shipments
     *
     * @returns {Observable<Array<Shipment>>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/shipments', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a list of shipments filtered by vessel call
     *
     * @param {number} uid
     * @returns {Observable<Array<Shipment>>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getByVesselCall = function (uid) {
        return this.http.get(this.apiBaseUrl + '/vessel-call/' + uid + '/shipments', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a list of shipments filtered by master shipment
     *
     * @returns {Observable<Array<Shipment>>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getAllMasterShipments = function () {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("shipmentType", "Master");
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/shipments', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a list of house shipments
     *
     * @returns {Observable<Array<Shipment>>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getAllHouseShipments = function () {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("shipmentType", "House");
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/shipments', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a filtered list of shipments
     *
     * @param {string} filter
     * @returns {Observable<Array<Shipment>>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getByFilter = function (filter) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("filter", filter);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/shipments', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a filtered list of shipments
     *
     * @param {string} filter
     * @returns {Observable<Array<Shipment>>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getByShipmentNumber = function (shipmentNumber) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("shipmentNumber", shipmentNumber);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/shipments', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a shipment identified by uid
     *
     * @param {number} uid
     * @returns {Observable<Shipment>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getById = function (uid) {
        return this.http.get(this.apiBaseUrl + '/shipment/' + uid, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns a shipment identified by uid
     *
     * @param {number} uid
     * @returns {Observable<Shipment>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.getShipmentContainers = function (uid) {
        return this.http.get(this.apiBaseUrl + '/shipment/' + uid + '/containers', this.getStandardRequestOptions())
            .map(function (res) {
            var result = [];
            var jsonRes = res.json();
            if (jsonRes) {
                jsonRes.forEach(function (container) {
                    result.push(new Container_1.Container(container));
                });
            }
            return result;
        }).catch(this.handleError);
    };
    /**
     * Creates a new shipment
     *
     * @param {Shipment} shipment
     * @returns {Observable<Shipment>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.create = function (shipment) {
        this.cacheService.set("vesselCallId", shipment.vesselCallId, null);
        this.cacheService.set("shippingLineId", shipment.shippingLineId, null);
        return this.http.post(this.apiBaseUrl + '/shipments', shipment, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Updates a shipment
     *
     * @param {number} uid
     * @param {Shipment} shipment
     * @returns {Observable<Shipment>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.update = function (uid, shipment) {
        return this.http.put(this.apiBaseUrl + '/shipment/' + uid, shipment, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Deletes a shipment
     *
     * @param {number} uid
     * @returns {Observable<boolean>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.delete = function (uid) {
        return this.http.delete(this.apiBaseUrl + '/shipment/' + uid, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    ShipmentService.prototype.duplicateShipment = function (vesselCallUid, shipmentUid, shipmentNumber) {
        return this.http.put(this.apiBaseUrl + '/shipment/' + shipmentUid + "/action", { action: "duplicate", vesselCallUid: vesselCallUid, shipmentNumber: shipmentNumber }, this.getStandardRequestOptions())
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.transferShipment = function (vesselCallUid, shipmentUid) {
        return this.http.put(this.apiBaseUrl + '/shipment/' + shipmentUid + "/action", { action: "transfer", vesselCallUid: vesselCallUid }, this.getStandardRequestOptions())
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.getByVesselCallExport = function (uid) {
        return this.http.get(this.apiBaseUrl + '/vessel-call/' + uid + '/manifest/export', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.getByVesselCallImport = function (uid) {
        return this.http.get(this.apiBaseUrl + '/vessel-call/' + uid + '/manifest/import', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.getFilterByMasterShipmentExport = function (vesselUid, filter) {
        return this.http.get(this.apiBaseUrl + '/vessel-call/' + vesselUid + '/manifest/export?masterShipmentNumber=' + filter, this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.getFilterByMasterShipmentImport = function (vesselUid, filter) {
        return this.http.get(this.apiBaseUrl + '/vessel-call/' + vesselUid + '/manifest/import?masterShipmentNumber=' + filter, this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.updateShipmentStatus = function (listUid, status) {
        return this.http.post(this.apiBaseUrl + '/shipments/status/' + status, listUid, this.getStandardRequestOptions())
            .catch(this.handleProcessError);
    };
    ShipmentService.prototype.approveShipment = function (listUid) {
        return this.updateShipmentStatus(listUid, 'approved');
    };
    ShipmentService.prototype.validateShipment = function (listUid) {
        return this.updateShipmentStatus(listUid, 'validated');
    };
    ShipmentService.prototype.releaseShipment = function (listUid) {
        return this.updateShipmentStatus(listUid, 'released');
    };
    ShipmentService.prototype.unapproveShipment = function (listUid) {
        return this.updateShipmentStatus(listUid, 'unapproved');
    };
    ShipmentService.prototype.unvalidateShipment = function (listUid) {
        return this.updateShipmentStatus(listUid, 'unvalidated');
    };
    ShipmentService.prototype.holdShipment = function (listUid) {
        return this.updateShipmentStatus(listUid, 'held');
    };
    ShipmentService.prototype.handleProcessError = function (error) {
        if (error.status == 400) {
            var text = void 0;
            switch (error.text()) {
                case 'Already approved':
                    text = "At least one of the selected Shipments is already approved";
                    break;
                case 'Not Validation copy':
                    text = "Validation copy of the B/L is not associated with the B/L selected for approval.";
                    break;
                case 'Already validated':
                    text = "At least one of the selected Shipments is already validated";
                    break;
                case 'Not approved':
                    text = "At least one of the selected Shipments is not approved";
                    break;
                case 'Not unvalidated':
                    text = "Cannot change the status of the selected Shipments because at least one is not unvalidated";
                    break;
                case 'Already released':
                    text = "At least one of the selected Shipments is already released";
                    break;
                case 'Already unapproved':
                    text = "At least one of the selected Shipments is already unapproved";
                    break;
                case 'Already unvalidated':
                    text = "At least one of the selected Shipments is already unvalidated";
                    break;
                case 'Already held':
                    text = "At least one of the selected Shipments is already held";
                    break;
            }
            return Rx_1.Observable.throw({ error: text, status: error.status });
        }
        else {
            return _super.prototype.handleError.call(this, error);
        }
    };
    /**
     * Extracts a shipment from a json string
     *
     * @private
     * @param {Response} res
     * @returns {Shipment}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.extractOne = function (res) {
        return new Shipment_1.Shipment(res.json() || {});
    };
    /**
     * Extracts a list of shipments from a json string
     *
     * @private
     * @param {Response} res
     * @returns {Array<Shipment>}
     *
     * @memberOf ShipmentService
     */
    ShipmentService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (shipment) {
                result.push(new Shipment_1.Shipment(shipment));
            });
        }
        return result;
    };
    return ShipmentService;
}(abstract_service_1.AbstractService));
ShipmentService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(ng2_cache_1.CacheService)),
    __param(2, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof ng2_cache_1.CacheService !== "undefined" && ng2_cache_1.CacheService) === "function" && _b || Object, typeof (_c = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _c || Object])
], ShipmentService);
exports.ShipmentService = ShipmentService;
var _a, _b, _c;


/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
__webpack_require__(1413);
var EasyPieChartContainer = (function () {
    function EasyPieChartContainer(container) {
        this.container = container;
        this.counter = 0;
    }
    EasyPieChartContainer.prototype.render = function () {
        $('.easy-pie-chart', this.container.nativeElement).each(function (idx, element) {
            var $this = $(element), barColor = $this.css('color') || $this.data('pie-color'), trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)', size = parseInt($this.data('pie-size')) || 25;
            $this.easyPieChart({
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: size / 8.5,
                animate: 1500,
                rotate: -90,
                size: size,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    };
    EasyPieChartContainer.prototype.ngAfterContentChecked = function () {
        var _this = this;
        var counter = $('.easy-pie-chart').length;
        if (counter != this.counter) {
            this.counter = counter;
            setTimeout(function () {
                _this.render();
            }, 25);
        }
    };
    EasyPieChartContainer.prototype.ngAfterContentInit = function () {
        this.render();
    };
    return EasyPieChartContainer;
}());
EasyPieChartContainer = __decorate([
    core_1.Directive({
        selector: '[saEasyPieChartContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], EasyPieChartContainer);
exports.EasyPieChartContainer = EasyPieChartContainer;
var _a;


/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
__webpack_require__(1414);
var SparklineContainer = (function () {
    function SparklineContainer(el) {
        this.el = el;
        this.container = this.el.nativeElement;
    }
    SparklineContainer.prototype.ngOnInit = function () {
        this.drawSparklines();
    };
    SparklineContainer.prototype.barChart = function ($el) {
        var barColor = $el.data('sparkline-bar-color') || $el.css('color') || '#0000f0';
        var sparklineHeight = $el.data('sparkline-height') || '26px';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 5;
        var sparklineBarSpacing = $el.data('sparkline-barspacing') || 2;
        var sparklineNegBarColor = $el.data('sparkline-negbar-color') || '#A90329';
        var sparklineStackedColor = $el.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
        $el.sparkline('html', {
            barColor: barColor,
            type: 'bar',
            height: sparklineHeight,
            barWidth: sparklineBarWidth,
            barSpacing: sparklineBarSpacing,
            stackedBarColor: sparklineStackedColor,
            negBarColor: sparklineNegBarColor,
            zeroAxis: 'false',
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.lineChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '90px';
        var thisLineColor = $el.data('sparkline-line-color') || $el.css('color') || '#0000f0';
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisFill = $el.data('fill-color') || '#c0d0f0';
        var thisSpotColor = $el.data('sparkline-spot-color') || '#f08000';
        var thisMinSpotColor = $el.data('sparkline-minspot-color') || '#ed1c24';
        var thisMaxSpotColor = $el.data('sparkline-maxspot-color') || '#f08000';
        var thishighlightSpotColor = $el.data('sparkline-highlightspot-color') || '#50f050';
        var thisHighlightLineColor = $el.data('sparkline-highlightline-color') || 'f02020';
        var thisSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisChartMinYRange = $el.data('sparkline-min-y');
        var thisChartMaxYRange = $el.data('sparkline-max-y');
        var thisChartMinXRange = $el.data('sparkline-min-x');
        var thisChartMaxXRange = $el.data('sparkline-max-x');
        var thisMinNormValue = $el.data('min-val');
        var thisMaxNormValue = $el.data('max-val');
        var thisNormColor = $el.data('norm-color') || '#c0c0c0';
        var thisDrawNormalOnTop = $el.data('draw-normal') || false;
        $el.sparkline('html', {
            type: 'line',
            width: sparklineWidth,
            height: sparklineHeight,
            lineWidth: thisLineWidth,
            lineColor: thisLineColor,
            fillColor: thisFill,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor,
            maxSpotColor: thisMaxSpotColor,
            highlightSpotColor: thishighlightSpotColor,
            highlightLineColor: thisHighlightLineColor,
            spotRadius: thisSpotRadius,
            chartRangeMin: thisChartMinYRange,
            chartRangeMax: thisChartMaxYRange,
            chartRangeMinX: thisChartMinXRange,
            chartRangeMaxX: thisChartMaxXRange,
            normalRangeMin: thisMinNormValue,
            normalRangeMax: thisMaxNormValue,
            normalRangeColor: thisNormColor,
            drawNormalOnTop: thisDrawNormalOnTop,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.pieChart = function ($el) {
        var pieColors = $el.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
        var pieWidthHeight = $el.data('sparkline-piesize') || 90;
        var pieBorderColor = $el.data('border-color') || '#45494C';
        var pieOffset = $el.data('sparkline-offset') || 0;
        $el.sparkline('html', {
            type: 'pie',
            width: pieWidthHeight,
            height: pieWidthHeight,
            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
            sliceColors: pieColors,
            borderWidth: 1,
            offset: pieOffset,
            borderColor: pieBorderColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.boxChart = function ($el) {
        var thisBoxWidth = $el.data('sparkline-width') || 'auto';
        var thisBoxHeight = $el.data('sparkline-height') || 'auto';
        var thisBoxRaw = $el.data('sparkline-boxraw');
        var thisBoxTarget = $el.data('sparkline-targetval');
        var thisBoxMin = $el.data('sparkline-min');
        var thisBoxMax = $el.data('sparkline-max');
        var thisShowOutlier = $el.data('sparkline-showoutlier') || true;
        var thisIQR = $el.data('sparkline-outlier-iqr') || 1.5;
        var thisBoxSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisBoxLineColor = $el.css('color') || '#000000';
        var thisBoxFillColor = $el.data('fill-color') || '#c0d0f0';
        var thisBoxWhisColor = $el.data('sparkline-whis-color') || '#000000';
        var thisBoxOutlineColor = $el.data('sparkline-outline-color') || '#303030';
        var thisBoxOutlineFill = $el.data('sparkline-outlinefill-color') || '#f0f0f0';
        var thisBoxMedianColor = $el.data('sparkline-outlinemedian-color') || '#f00000';
        var thisBoxTargetColor = $el.data('sparkline-outlinetarget-color') || '#40a020';
        $el.sparkline('html', {
            type: 'box',
            width: thisBoxWidth,
            height: thisBoxHeight,
            raw: thisBoxRaw,
            target: thisBoxTarget,
            minValue: thisBoxMin,
            maxValue: thisBoxMax,
            showOutliers: thisShowOutlier,
            outlierIQR: thisIQR,
            spotRadius: thisBoxSpotRadius,
            boxLineColor: thisBoxLineColor,
            boxFillColor: thisBoxFillColor,
            whiskerColor: thisBoxWhisColor,
            outlierLineColor: thisBoxOutlineColor,
            outlierFillColor: thisBoxOutlineFill,
            medianColor: thisBoxMedianColor,
            targetColor: thisBoxTargetColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.bulletChart = function ($el) {
        var thisBulletHeight = $el.data('sparkline-height') || 'auto';
        var thisBulletWidth = $el.data('sparkline-width') || 2;
        var thisBulletColor = $el.data('sparkline-bullet-color') || '#ed1c24';
        var thisBulletPerformanceColor = $el.data('sparkline-performance-color') || '#3030f0';
        var thisBulletRangeColors = $el.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
        $el.sparkline('html', {
            type: 'bullet',
            height: thisBulletHeight,
            targetWidth: thisBulletWidth,
            targetColor: thisBulletColor,
            performanceColor: thisBulletPerformanceColor,
            rangeColors: thisBulletRangeColors,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.discreteChart = function ($el) {
        var thisDiscreteHeight = $el.data('sparkline-height') || 26;
        var thisDiscreteWidth = $el.data('sparkline-width') || 50;
        var thisDiscreteLineColor = $el.css('color');
        var thisDiscreteLineHeight = $el.data('sparkline-line-height') || 5;
        var thisDiscreteThrushold = $el.data('sparkline-threshold');
        var thisDiscreteThrusholdColor = $el.data('sparkline-threshold-color') || '#ed1c24';
        $el.sparkline('html', {
            type: 'discrete',
            width: thisDiscreteWidth,
            height: thisDiscreteHeight,
            lineColor: thisDiscreteLineColor,
            lineHeight: thisDiscreteLineHeight,
            thresholdValue: thisDiscreteThrushold,
            thresholdColor: thisDiscreteThrusholdColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.tristaneChart = function ($el) {
        var thisTristateHeight = $el.data('sparkline-height') || 26;
        var thisTristatePosBarColor = $el.data('sparkline-posbar-color') || '#60f060';
        var thisTristateNegBarColor = $el.data('sparkline-negbar-color') || '#f04040';
        var thisTristateZeroBarColor = $el.data('sparkline-zerobar-color') || '#909090';
        var thisTristateBarWidth = $el.data('sparkline-barwidth') || 5;
        var thisTristateBarSpacing = $el.data('sparkline-barspacing') || 2;
        var thisZeroAxis = $el.data('sparkline-zeroaxis');
        $el.sparkline('html', {
            type: 'tristate',
            height: thisTristateHeight,
            posBarColor: thisTristatePosBarColor,
            negBarColor: thisTristateNegBarColor,
            zeroBarColor: thisTristateZeroBarColor,
            barWidth: thisTristateBarWidth,
            barSpacing: thisTristateBarSpacing,
            zeroAxis: thisZeroAxis,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeBarChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '100%';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 3;
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisLineColor = $el.data('sparkline-color-top') || '#ed1c24';
        var thisBarColor = $el.data('sparkline-color-bottom') || '#333333';
        $el.sparkline($el.data('sparkline-bar-val'), {
            type: 'bar',
            width: sparklineWidth,
            height: sparklineHeight,
            barColor: thisBarColor,
            barWidth: sparklineBarWidth,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor,
            lineWidth: thisLineWidth,
            composite: true,
            fillColor: false,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeLineChart = function ($el) {
        // @todo webpack gets stuck on chunk optimization if uncomment defaults
        var sparklineHeight = $el.data('sparkline-height'); // || '20px';
        var sparklineWidth = $el.data('sparkline-width'); // || '90px';
        var sparklineValue = $el.data('sparkline-bar-val');
        var sparklineValueSpots1 = $el.data('sparkline-bar-val-spots-top');
        var sparklineValueSpots2 = $el.data('sparkline-bar-val-spots-bottom');
        var thisLineWidth1 = $el.data('sparkline-line-width-top'); //  || 1;
        var thisLineWidth2 = $el.data('sparkline-line-width-bottom'); // || 1;
        var thisLineColor1 = $el.data('sparkline-color-top'); //  || '#333333';
        var thisLineColor2 = $el.data('sparkline-color-bottom'); //  || '#ed1c24';
        var thisSpotRadius1 = $el.data('sparkline-spotradius-top'); // || 1.5;
        var thisSpotRadius2 = $el.data('sparkline-spotradius-bottom'); // || thisSpotRadius1;
        var thisSpotColor = $el.data('sparkline-spot-color'); // || '#f08000';
        var thisMinSpotColor1 = $el.data('sparkline-minspot-color-top'); // || '#ed1c24';
        var thisMaxSpotColor1 = $el.data('sparkline-maxspot-color-top'); //  || '#f08000';
        var thisMinSpotColor2 = $el.data('sparkline-minspot-color-bottom'); // || thisMinSpotColor1;
        var thisMaxSpotColor2 = $el.data('sparkline-maxspot-color-bottom'); //  || thisMaxSpotColor1;
        var thishighlightSpotColor1 = $el.data('sparkline-highlightspot-color-top'); //  || '#50f050';
        var thisHighlightLineColor1 = $el.data('sparkline-highlightline-color-top'); // || '#f02020';
        var thishighlightSpotColor2 = $el.data('sparkline-highlightspot-color-bottom'); // || thishighlightSpotColor1;
        var thisHighlightLineColor2 = $el.data('sparkline-highlightline-color-bottom'); // || thisHighlightLineColor1;
        var thisFillColor1 = $el.data('sparkline-fillcolor-top'); // || 'transparent';
        var thisFillColor2 = $el.data('sparkline-fillcolor-bottom'); // || 'transparent';
        $el.sparkline(sparklineValue, {
            type: 'line',
            spotRadius: thisSpotRadius1,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor1,
            maxSpotColor: thisMaxSpotColor1,
            highlightSpotColor: thishighlightSpotColor1,
            highlightLineColor: thisHighlightLineColor1,
            valueSpots: sparklineValueSpots1,
            lineWidth: thisLineWidth1,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor1,
            fillColor: thisFillColor1,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            type: 'line',
            spotRadius: thisSpotRadius2,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor2,
            maxSpotColor: thisMaxSpotColor2,
            highlightSpotColor: thishighlightSpotColor2,
            highlightLineColor: thisHighlightLineColor2,
            valueSpots: sparklineValueSpots2,
            lineWidth: thisLineWidth2,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor2,
            composite: true,
            fillColor: thisFillColor2,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.drawSparklines = function () {
        var _this = this;
        $('.sparkline:not(:has(>canvas))', this.container).each(function (i, el) {
            var $el = $(el), sparklineType = $el.data('sparkline-type') || 'bar';
            if (sparklineType == 'bar') {
                _this.barChart($el);
            }
            if (sparklineType == 'line') {
                _this.lineChart($el);
            }
            if (sparklineType == 'pie') {
                _this.pieChart($el);
            }
            if (sparklineType == 'box') {
                _this.boxChart($el);
            }
            if (sparklineType == 'bullet') {
                _this.bulletChart($el);
            }
            if (sparklineType == 'discrete') {
                _this.discreteChart($el);
            }
            if (sparklineType == 'tristate') {
                _this.tristaneChart($el);
            }
            if (sparklineType == 'compositebar') {
                _this.compositeBarChart($el);
            }
            if (sparklineType == 'compositeline') {
                _this.compositeLineChart($el);
            }
        });
    };
    return SparklineContainer;
}());
SparklineContainer = __decorate([
    core_1.Directive({
        selector: '[saSparklineContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SparklineContainer);
exports.SparklineContainer = SparklineContainer;
var _a;


/***/ }),

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    core_1.Component({
        selector: 'sa-stats',
        template: __webpack_require__(1412)
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);
exports.StatsComponent = StatsComponent;


/***/ }),

/***/ 1410:
/***/ (function(module, exports) {

module.exports = "/**!\n * easyPieChart\n * Lightweight plugin to render simple, animated and retina optimized pie charts\n *\n * @license \n * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)\n * @version 2.1.6\n **/\n!function(a,b){\"object\"==typeof exports?module.exports=b(require(\"jquery\")):\"function\"==typeof define&&define.amd?define([\"jquery\"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement(\"canvas\");a.appendChild(d),\"undefined\"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext(\"2d\");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,\"px\"].join(\"\"),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d=\"function\"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:\"#ef1e25\",trackColor:\"#f9f9f9\",scaleColor:\"#dfe0e0\",scaleLength:5,lineCap:\"round\",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if(\"undefined\"!=typeof b)d.renderer=b;else{if(\"undefined\"==typeof SVGRenderer)throw new Error(\"Please load either the SVG- or the CanvasRenderer\");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&\"undefined\"!=typeof c[b]?c[b]:d[b],\"function\"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing=\"string\"==typeof e.easing&&\"undefined\"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,\"number\"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),\"boolean\"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute(\"data-percent\")&&this.update(parseFloat(a.getAttribute(\"data-percent\")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,\"easyPieChart\")||(d=a.extend({},b,a(this).data()),a.data(this,\"easyPieChart\",new c(this,d)))})}});"

/***/ }),

/***/ 1411:
/***/ (function(module, exports) {

module.exports = "/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ \n Licensed under the New BSD License - see above site for details */\n!function(a,b,c){!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){\"use strict\";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{common:{type:\"line\",lineColor:\"#00f\",fillColor:\"#cdf\",defaultPixelsPerValue:3,width:\"auto\",height:\"auto\",composite:!1,tagValuesAttribute:\"values\",tagOptionsPrefix:\"spark\",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:\"\",tooltipSuffix:\"\",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:\",\",numberDecimalMark:\".\",disableTooltips:!1,disableInteraction:!1},line:{spotColor:\"#f80\",highlightSpotColor:\"#5f5\",highlightLineColor:\"#f22\",spotRadius:1.5,minSpotColor:\"#f80\",maxSpotColor:\"#f80\",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:\"#ccc\",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:\"#3366cc\",negBarColor:\"#f44\",stackedBarColor:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:\"#6f6\",negBarColor:\"#f44\",zeroBarColor:\"#999\",colorMap:{},tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{\"-1\":\"Loss\",0:\"Draw\",1:\"Win\"}}},discrete:{lineHeight:\"auto\",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new g(\"{{prefix}}{{value}}{{suffix}}\")},bullet:{targetColor:\"#f33\",targetWidth:3,performanceColor:\"#33f\",rangeColors:[\"#d3dafe\",\"#a8b6ff\",\"#7f94ff\"],base:c,tooltipFormat:new g(\"{{fieldkey:fields}} - {{value}}\"),tooltipValueLookups:{fields:{r:\"Range\",p:\"Performance\",t:\"Target\"}}},pie:{offset:0,sliceColors:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],borderWidth:0,borderColor:\"#000\",tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:\"#000\",boxFillColor:\"#cdf\",whiskerColor:\"#000\",outlierLineColor:\"#333\",outlierFillColor:\"#fff\",medianColor:\"#f00\",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:\"#4a2\",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new g(\"{{field:fields}}: {{value}}\"),tooltipFormatFieldlistKey:\"field\",tooltipValueLookups:{fields:{lq:\"Lower Quartile\",med:\"Median\",uq:\"Upper Quartile\",lo:\"Left Outlier\",ro:\"Right Outlier\",lw:\"Left Whisker\",rw:\"Right Whisker\"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({fre:/\\{\\{([\\w.]+?)(:(.+?))?\\}\\}/g,precre:/(\\w+)\\.(\\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?\"\":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get(\"numberFormatter\")?d.get(\"numberFormatter\")(h):r(h,i,d.get(\"numberDigitGroupCount\"),d.get(\"numberDigitGroupSep\"),d.get(\"numberDecimalMark\"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case\"undefined\":a=c;break;case\"null\":a=null;break;case\"true\":a=!0;break;case\"false\":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(\"\"),g=(g=d.inArray(\".\",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join(\"\")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+=\"number\"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c,d;if(a.createStyleSheet)try{return a.createStyleSheet().cssText=b,void 0}catch(e){d=!0}c=a.createElement(\"style\"),c.type=\"text/css\",a.getElementsByTagName(\"head\")[0].appendChild(c),d?a.styleSheets[a.styleSheets.length-1].cssText=b:c[\"string\"==typeof a.body.style.WebkitAppearance?\"innerText\":\"innerHTML\"]=b},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data(\"_jqs_vcanvas\")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement(\"canvas\");if(j.getContext&&j.getContext(\"2d\"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add(\"v\",\"urn:schemas-microsoft-com:vml\",\"#default#VML\"),d.fn.sparkline.canvas=function(a,b,c){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data(\"_jqs_mhandler\"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data(\"_jqs_vcanvas\");a&&a.reset()},d.RangeMapClass=s=f({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&\"string\"==typeof b&&b.indexOf(\":\")>-1&&(c=b.split(\":\"),c[0]=0===c[0].length?-1/0:parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get(\"disableTooltips\"),this.highlightEnabled=!b.get(\"disableHighlight\")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event(\"sparklineClick\");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind(\"mousemove.jqs\"),d(a.body).bind(\"mousemove.jqs\",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind(\"mousemove.jqs\");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event(\"sparklineRegionChange\"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a=\"\",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({sizeStyle:\"position: static !important;display: block !important;visibility: hidden !important;float: left !important;\",init:function(b){var c,e=b.get(\"tooltipClassname\",\"jqstooltip\"),f=this.sizeStyle;this.container=b.get(\"tooltipContainer\")||a.body,this.tooltipOffsetX=b.get(\"tooltipOffsetX\",10),this.tooltipOffsetY=b.get(\"tooltipOffsetY\",12),d(\"#jqssizetip\").remove(),d(\"#jqstooltip\").remove(),this.sizetip=d(\"<div/>\",{id:\"jqssizetip\",style:f,\"class\":e}),this.tooltip=d(\"<div/>\",{id:\"jqstooltip\",\"class\":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind(\"resize.jqs scroll.jqs\"),d(window).bind(\"resize.jqs scroll.jqs\",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){return a?(this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:\"visible\"}),this.hidden&&(this.hidden=!1,this.updatePosition()),void 0):(this.tooltip.css(\"visibility\",\"hidden\"),this.hidden=!0,void 0)},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind(\"resize.jqs scroll.jqs\")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return\"html\"===b||b===c?(m=this.getAttribute(h.get(\"tagValuesAttribute\")),(m===c||null===m)&&(m=i.html()),e=m.replace(/(^\\s*<!--)|(-->\\s*$)|\\s+/g,\"\").split(\",\")):e=b,f=\"auto\"===h.get(\"width\")?e.length*h.get(\"defaultPixelsPerValue\"):h.get(\"width\"),\"auto\"===h.get(\"height\")?h.get(\"composite\")&&d.data(this,\"_jqs_vcanvas\")||(j=a.createElement(\"span\"),j.innerHTML=\"a\",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get(\"height\"),h.get(\"disableInteraction\")?k=!1:(k=d.data(this,\"_jqs_mhandler\"),k?h.get(\"composite\")||k.reset():(k=new t(this,h),d.data(this,\"_jqs_mhandler\",k))),h.get(\"composite\")&&!d.data(this,\"_jqs_vcanvas\")?(d.data(this,\"_jqs_errnotify\")||(alert(\"Attempted to attach a composite sparkline to an element with no existing sparkline\"),d.data(this,\"_jqs_errnotify\",!0)),void 0):(l=new(d.fn.sparkline[h.get(\"type\")])(this,e,h,f,g),l.render(),k&&k.registerSparkline(l),void 0)},d(this).html()&&!h.get(\"disableHiddenCheck\")&&d(this).is(\":hidden\")||!d(this).parents(\"body\").length){if(!h.get(\"composite\")&&d.data(this,\"_jqs_pending\"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,\"_jqs_pending\",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(\":visible\")&&!d(a).parents().is(\":hidden\")?(J[b][1].call(a),d.data(J[b][0],\"_jqs_pending\",!1),e.push(b)):d(a).closest(\"html\").length||d.data(a,\"_jqs_pending\")||(d.data(J[b][0],\"_jqs_pending\",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({init:function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting(\"type\"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},getTagSetting:function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if(\"[\"===b.substr(0,1))for(b=b.substr(1,b.length-2).split(\",\"),d=b.length;d--;)b[d]=j(b[d].replace(/(^\\s*)|(\\s*$)/g,\"\"));else if(\"{\"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(\",\"),b={},d=e.length;d--;)f=e[d].split(\":\",2),b[f[0].replace(/(^\\s*)|(\\s*$)/g,\"\")]=j(f[1].replace(/(^\\s*)|(\\s*$)/g,\"\"));else b=j(b);this.tagValCache.key=b}return b},get:function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get(\"disableInteraction\");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get(\"composite\"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML=\"\",!1):!0},getRegion:function(){},setRegionHighlight:function(a,b,d){var e,f=this.currentRegion,g=!this.options.get(\"disableHighlight\");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(){},getCurrentRegionTooltip:function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s=\"\",t=[];if(this.currentRegion===c)return\"\";if(a=this.getCurrentRegionFields(),n=r.get(\"tooltipFormatter\"))return n(this,r,a);if(r.get(\"tooltipChartTitle\")&&(s+='<div class=\"jqs jqstitle\">'+r.get(\"tooltipChartTitle\")+\"</div>\\n\"),b=this.options.get(\"tooltipFormat\"),!b)return\"\";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get(\"tooltipFormatFieldlist\"),k=this.options.get(\"tooltipFormatFieldlistKey\"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],\"string\"==typeof o&&(o=new g(o)),f=o.fclass||\"jqsfield\",q=0;p>q;q++)a[q].isNull&&r.get(\"tooltipSkipNull\")||(d.extend(a[q],{prefix:r.get(\"tooltipPrefix\"),suffix:r.get(\"tooltipSuffix\")}),h=o.render(a[q],r.get(\"tooltipValueLookups\"),r),t.push('<div class=\"'+f+'\">'+h+\"</div>\"));return t.length?s+t.join(\"\\n\"):\"\"},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d,e,f,g,i=c.get(\"highlightColor\"),j=c.get(\"highlightLighten\");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return\"rgb(\"+f.join(\",\")+\")\"}return a}}),v={changeHighlight:function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},render:function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{type:\"line\",init:function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b){var d,e=this.regionMap;for(d=e.length;d--;)if(null!==e[d]&&b>=e[d][0]&&b<=e[d][1])return e[d][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:null===this.yvalues[a],x:this.xvalues[a],y:this.yvalues[a],color:this.options.get(\"lineColor\"),fillColor:this.options.get(\"fillColor\"),offset:a}},renderHighlight:function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get(\"spotRadius\"),i=g.get(\"highlightSpotColor\"),j=g.get(\"highlightLineColor\");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d=\"string\"==typeof g[a],e=\"object\"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(\":\"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||\"null\"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get(\"xvalues\")&&(i=this.options.get(\"xvalues\")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},processRangeOptions:function(){var a=this.options,b=a.get(\"normalRangeMin\"),d=a.get(\"normalRangeMax\");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get(\"chartRangeMin\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMin\")<this.miny)&&(this.miny=a.get(\"chartRangeMin\")),a.get(\"chartRangeMax\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMax\")>this.maxy)&&(this.maxy=a.get(\"chartRangeMax\")),a.get(\"chartRangeMinX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMinX\")<this.minx)&&(this.minx=a.get(\"chartRangeMinX\")),a.get(\"chartRangeMaxX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMaxX\")>this.maxx)&&(this.maxx=a.get(\"chartRangeMaxX\"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get(\"normalRangeMin\"),i=this.options.get(\"normalRangeMax\"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get(\"normalRangeColor\")).append()},render:function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get(\"spotRadius\"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get(\"highlightSpotColor\")&&!E.get(\"disableInteraction\"),(z||E.get(\"minSpotColor\")||E.get(\"spotColor\")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get(\"maxSpotColor\")||E.get(\"spotColor\")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get(\"minSpotColor\")||E.get(\"maxSpotColor\"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get(\"spotColor\")||E.get(\"minSpotColor\")||E.get(\"maxSpotColor\")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get(\"normalRangeMin\")===c||E.get(\"drawNormalOnTop\")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get(\"fillColor\")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get(\"fillColor\"),E.get(\"fillColor\")).append();for(E.get(\"normalRangeMin\")!==c&&E.get(\"drawNormalOnTop\")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get(\"lineColor\"),c,E.get(\"lineWidth\")).append();if(J&&E.get(\"valueSpots\"))for(y=E.get(\"valueSpots\"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get(\"spotColor\")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get(\"spotColor\")).append(),this.maxy!==this.minyorg&&(J&&E.get(\"minSpotColor\")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get(\"minSpotColor\")).append()),J&&E.get(\"maxSpotColor\")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get(\"maxSpotColor\")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{type:\"bar\",init:function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get(\"barWidth\"),10),L=parseInt(f.get(\"barSpacing\"),10),M=f.get(\"chartRangeMin\"),N=f.get(\"chartRangeMax\"),O=f.get(\"chartRangeClip\"),P=1/0,Q=-1/0;for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m=\"string\"==typeof H&&H.indexOf(\":\")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(\":\"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-1/0:M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<y)&&(y=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>z)&&(z=f.get(\"chartRangeMax\")),this.zeroAxis=v=f.get(\"zeroAxis\",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get(\"colorMap\"))?(this.colorMapByIndex=f.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},getRegion:function(a,d){var e=b.floor(d/this.totalBarWidth);return 0>e||e>=this.values.length?c:e},getCurrentRegionFields:function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({isNull:null===a,value:a,color:this.calcColor(b,a,c),offset:c});return e},calcColor:function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get(\"stackedBarColor\"):0>b?j.get(\"negBarColor\"):j.get(\"barColor\"),0===b&&j.get(\"zeroColor\")!==c&&(f=j.get(\"zeroColor\")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},renderRegion:function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get(\"nullColor\")?(h=e?r.get(\"nullColor\"):this.calcHighlightColor(r.get(\"nullColor\"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{type:\"tristate\",init:function(a,b,e,f,g){var h=parseInt(e.get(\"barWidth\"),10),i=parseInt(e.get(\"barSpacing\"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get(\"colorMap\"))?(this.colorMapByIndex=e.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get(\"negBarColor\"):e[b]>0?f.get(\"posBarColor\"):f.get(\"zeroBarColor\")},renderRegion:function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{type:\"discrete\",init:function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=\"auto\"===f.get(\"width\")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<this.min)&&(this.min=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>this.max)&&(this.max=f.get(\"chartRangeMax\")),this.initTarget(),this.target&&(this.lineHeight=\"auto\"===f.get(\"lineHeight\")?b.round(.3*this.canvasHeight):f.get(\"lineHeight\"))},getRegion:function(a,c){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get(\"thresholdColor\")&&e<j.get(\"thresholdValue\")?j.get(\"thresholdColor\"):j.get(\"lineColor\"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{type:\"bullet\",init:function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get(\"base\")===c?0>h?h:0:e.get(\"base\"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=\"auto\"===e.get(\"width\")?\"4.0em\":f,this.target=this.$el.simpledraw(f,g,e.get(\"composite\")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case\"r\":b=this.renderRange(c.substr(1),a);break;case\"p\":b=this.renderPerformance(a);break;case\"t\":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get(\"rangeColors\")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get(\"performanceColor\");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get(\"targetWidth\")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get(\"targetColor\");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get(\"targetWidth\")-1,f-1,g,g)},render:function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]=\"r\"+a,this.valueShapes[\"r\"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]=\"p1\",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]=\"t0\",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{type:\"pie\",init:function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),\"auto\"===e.get(\"width\")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get(\"sliceColors\")[a%this.options.get(\"sliceColors\").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get(\"borderWidth\"),n=k.get(\"offset\"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get(\"sliceColors\")[g%k.get(\"sliceColors\").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);\nr=f}},render:function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get(\"borderWidth\");if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get(\"borderColor\"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{type:\"box\",init:function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=\"auto\"===c.get(\"width\")?\"4.0em\":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:\"lq\",value:this.quartiles[0]},{field:\"med\",value:this.quartiles[1]},{field:\"uq\",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:\"lo\",value:this.loutlier}),this.routlier!==c&&a.push({field:\"ro\",value:this.routlier}),this.lwhisker!==c&&a.push({field:\"lw\",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:\"rw\",value:this.rwhisker}),a},render:function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get(\"chartRangeMin\")===c?b.min.apply(b,p):r.get(\"chartRangeMin\"),v=r.get(\"chartRangeMax\")===c?b.max.apply(b,p):r.get(\"chartRangeMax\"),w=0;if(C._super.render.call(this)){if(r.get(\"raw\"))r.get(\"showOutliers\")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get(\"showOutliers\")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get(\"outlierIQR\")&&(a=p[l]),p[l]<h+e*r.get(\"outlierIQR\")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get(\"showOutliers\")&&(w=b.ceil(r.get(\"spotRadius\")),s-=2*b.ceil(r.get(\"spotRadius\")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get(\"boxLineColor\"),r.get(\"boxFillColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get(\"medianColor\")).append(),r.get(\"target\")&&(m=b.ceil(r.get(\"spotRadius\")),o.drawLine(b.round((r.get(\"target\")-u)*n+w),b.round(t/2-m),b.round((r.get(\"target\")-u)*n+w),b.round(t/2+m),r.get(\"targetColor\")).append(),o.drawLine(b.round((r.get(\"target\")-u)*n+w-m),b.round(t/2),b.round((r.get(\"target\")-u)*n+w+m),b.round(t/2),r.get(\"targetColor\")).append()),o.render()}}}),F=f({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),G=f({_pxregex:/(\\d+)(px)?\\s*$/i,init:function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,\"_jqs_vcanvas\",this))},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape(\"Shape\",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape(\"Circle\",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape(\"PieSlice\",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape(\"Rect\",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert(\"reset not implemented\")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),this.pixelHeight=e?e[1]:d(c).height(),e=this._pxregex.exec(a),this.pixelWidth=e?e[1]:d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},appendShape:function(){alert(\"appendShape not implemented\")},replaceWithShape:function(){alert(\"replaceWithShape not implemented\")},insertAfterShape:function(){alert(\"insertAfterShape not implemented\")},removeShapeId:function(){alert(\"removeShapeId not implemented\")},getShapeAt:function(){alert(\"getShapeAt not implemented\")},render:function(){alert(\"render not implemented\")}}),H=f(G,{init:function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement(\"canvas\"),f[0]&&(f=f[0]),d.data(f,\"_jqs_vcanvas\",this),d(this.canvas).css({display:\"inline-block\",width:b,height:e,verticalAlign:\"top\"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext(\"2d\");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},insertAfterShape:function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),this.shapes[b.id]=b,void 0},removeShapeId:function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this[\"_draw\"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{init:function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,\"_jqs_vcanvas\",this),this.canvas=a.createElement(\"span\"),d(this.canvas).css({display:\"inline-block\",position:\"relative\",overflow:\"hidden\",width:b,height:c,margin:\"0px\",padding:\"0px\",verticalAlign:\"top\"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\" style=\"position:absolute;top:0;left:0;width:'+this.pixelWidth+\"px;height=\"+this.pixelHeight+'px;\"></v:group>',this.canvas.insertAdjacentHTML(\"beforeEnd\",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=\"\"},_drawShape:function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=\"\"+b[m][0]+\",\"+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked=\"false\" ':' strokeWeight=\"'+f+'px\" strokeColor=\"'+d+'\" ',i=e===c?' filled=\"false\"':' fillColor=\"'+e+'\" filled=\"true\" ',j=n[0]===n[n.length-1]?\"x \":\"\",k='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+h+i+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+g+\" l \"+n.join(\", \")+\" \"+j+'e\"> </v:shape>'},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked=\"false\" ':' strokeWeight=\"'+h+'px\" strokeColor=\"'+f+'\" ',j=g===c?' filled=\"false\"':' fillColor=\"'+g+'\" filled=\"true\" ',k='<v:oval  id=\"jqsshape'+a+'\" '+i+j+' style=\"position:absolute;top:'+d+\"px; left:\"+b+\"px; width:\"+2*e+\"px; height:\"+2*e+'px\"></v:oval>'},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return\"\";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return\"\";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?\"\":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked=\"false\" ':' strokeWeight=\"1px\" strokeColor=\"'+i+'\" ',q=j===c?' filled=\"false\"':' fillColor=\"'+j+'\" filled=\"true\" ',r='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+p+q+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+d+\",\"+e+\" wa \"+k.join(\", \")+' x e\"> </v:shape>')},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=\"\"},appendShape:function(a){var b=this[\"_draw\"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML(\"beforeEnd\",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c,e=d(\"#jqsshape\"+a[0]),f=\"\",g=b.length;for(c=0;g>c;c++)f+=this[\"_draw\"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d(\"#jqsshape\"+a[c]).remove()},insertAfterShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].insertAdjacentHTML(\"afterEnd\",e)},removeShapeId:function(a){var b=d(\"#jqsshape\"+a);this.group.removeChild(b[0])},getShapeAt:function(a){var b=a.id.substr(8);return b},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);"

/***/ }),

/***/ 1412:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" saSparklineContainer>\n  <ul id=\"sparks\" class=\"\">\n    <li class=\"sparks-info\">\n      <h5> Total Revenue <span class=\"txt-color-blue\">$47 Million</span></h5>\n      <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n        1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Users Logged In <span class=\"txt-color-purple\">\n        <i class=\"fa\"></i>&nbsp;45</span></h5>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Vessel Currently Being Processed <span class=\"txt-color-greenDark\">&nbsp;300</span></h5>\n    \n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1370)(__webpack_require__(1410)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///home/denisdbell/APM2/APM_2/APM2-UI/node_modules/smartadmin-plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js")

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1370)(__webpack_require__(1411)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///home/denisdbell/APM2/APM_2/APM2-UI/node_modules/smartadmin-plugins/bower_components/relayfoods-jquery.sparkline/dist/jquery.sparkline.min.js")

/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(83);
var Rx_1 = __webpack_require__(84);
var ng2_cache_1 = __webpack_require__(709);
var app_properties_1 = __webpack_require__(154);
var Currency_1 = __webpack_require__(1356);
var CurrencyExchangeRate_1 = __webpack_require__(1364);
var abstract_service_1 = __webpack_require__(346);
/**
 * Currency service
 *
 * @export
 * @class CurrencyService
 * @extends {AbstractService}
 */
var CurrencyService = (function (_super) {
    __extends(CurrencyService, _super);
    /**
     * Creates an instance of CurrencyService.
     * @param {Http} http
     * @param {AppProperties} appProps
     *
     * @memberOf CurrencyService
     */
    function CurrencyService(http, cacheService, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        _this.cacheService = cacheService;
        return _this;
    }
    CurrencyService.prototype.get = function (isCacheable) {
        var _this = this;
        if (isCacheable === void 0) { isCacheable = false; }
        var uri = this.apiBaseUrl + '/currencies';
        return this.cacheService.exists(uri) ?
            Rx_1.Observable.of(this.cacheService.get(uri)) :
            this.http.get(uri, this.getStandardRequestOptions())
                .map(function (res) {
                var currencies = _this.extractMany(res);
                // Max age is 1 minute
                if (isCacheable)
                    _this.cacheService.set(uri, currencies, { maxAge: 1 * 60 });
                return currencies;
            }).catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Array<Currency>}
     * @returns {Observable<Array<Currency>>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.getAll = function () {
        return this.get();
    };
    /**
     * Returns an {@link Observable} that emits {@link Array<Currency>}
     * @param {string} filter
     * @returns {Observable<Array<Currency>>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.getByFilter = function (filter) {
        var _this = this;
        var uri = this.apiBaseUrl + '/currencies';
        var cacheKey = uri + filter;
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("filter", filter);
        options.search = searchParams;
        return this.cacheService.exists(cacheKey) ?
            Rx_1.Observable.of(this.cacheService.get(cacheKey)) :
            this.http.get(this.apiBaseUrl + '/currencies', options)
                .map(function (res) {
                var currencies = _this.extractMany(res);
                // Max age is 1 minute
                _this.cacheService.set(cacheKey, currencies, { maxAge: 10 * 60 });
                return currencies;
            }).catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Array<Currency>}
     * @param {string} filter
     * @returns {Observable<Array<Currency>>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.getByIsoCode = function (isoCode) {
        var _this = this;
        var options = this.getStandardRequestOptions();
        var uri = this.apiBaseUrl + '/currencies';
        var cacheKey = uri + isoCode;
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("isoCode", isoCode);
        options.search = searchParams;
        return this.cacheService.exists(cacheKey) ?
            Rx_1.Observable.of(this.cacheService.get(cacheKey)) :
            this.http.get(this.apiBaseUrl + '/currencies', options)
                .map(function (res) {
                var currencies = _this.extractMany(res);
                // Max age is 1 minute
                _this.cacheService.set(cacheKey, currencies, { maxAge: 10 * 60 });
                return currencies;
            }).catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Currency}
     * @param {number} uid
     * @returns {Observable<Currency>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.getById = function (uid) {
        var _this = this;
        var uri = this.apiBaseUrl + '/currency/' + uid;
        return this.cacheService.exists(uri) ?
            Rx_1.Observable.of(this.cacheService.get(uri)) :
            this.http.get(uri, this.getStandardRequestOptions())
                .map(function (res) {
                var currency = _this.extractOne(res);
                _this.cacheService.set(uri, currency, { maxAge: 10 * 60 });
                return currency;
            }).catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Currency}
     * @param {number} uid
     * @returns {Observable<Currency>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.getCurrentExchangeRate = function (uid) {
        var _this = this;
        var uri = this.apiBaseUrl + '/currency/' + uid + '/current-exchange-rate';
        return this.cacheService.exists(uri) ?
            Rx_1.Observable.of(this.cacheService.get(uri)) :
            this.http.get(uri, this.getStandardRequestOptions())
                .map(function (res) {
                var rate = new CurrencyExchangeRate_1.CurrencyExchangeRate(res.json() || {});
                _this.cacheService.set(uri, rate, { maxAge: 10 * 60 });
                return rate;
            }).catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Currency}
     * @param {Currency} currency
     * @returns {Observable<Currency>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.create = function (currency) {
        return this.http.post(this.apiBaseUrl + '/currencies', currency, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Currency}
     * @param {number} uid
     * @param {Currency} currency
     * @returns {Observable<Currency>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.update = function (uid, currency) {
        return this.http.put(this.apiBaseUrl + '/currency/' + uid, currency, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link boolean}
     * @param {number} uid
     * @returns {Observable<boolean>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.delete = function (uid) {
        return this.http.delete(this.apiBaseUrl + '/currency/' + uid, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    /**
     * Extracts a {@link Currency} from a json string
     * @private
     * @param {Response} res
     * @returns {Currency}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.extractOne = function (res) {
        return new Currency_1.Currency(res.json() || {});
    };
    /**
     * Extracts a {@link Array<Currency>} from a json string     *
     * @private
     * @param {Response} res
     * @returns {Array<Currency>}
     *
     * @memberOf CurrencyService
     */
    CurrencyService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (currency) {
                result.push(new Currency_1.Currency(currency));
            });
        }
        return result;
    };
    return CurrencyService;
}(abstract_service_1.AbstractService));
CurrencyService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(ng2_cache_1.CacheService)),
    __param(2, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof ng2_cache_1.CacheService !== "undefined" && ng2_cache_1.CacheService) === "function" && _b || Object, typeof (_c = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _c || Object])
], CurrencyService);
exports.CurrencyService = CurrencyService;
var _a, _b, _c;


/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(0);
var base_dialog_component_1 = __webpack_require__(1367);
var NotificationDialogComponent = (function (_super) {
    __extends(NotificationDialogComponent, _super);
    function NotificationDialogComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this.title = "Notification";
        _this.multiple = true;
        return _this;
    }
    return NotificationDialogComponent;
}(base_dialog_component_1.BaseDialogComponent));
__decorate([
    core_2.Input('title'),
    __metadata("design:type", String)
], NotificationDialogComponent.prototype, "title", void 0);
__decorate([
    core_2.Input('message'),
    __metadata("design:type", String)
], NotificationDialogComponent.prototype, "message", void 0);
__decorate([
    core_2.Input('multiple'),
    __metadata("design:type", Boolean)
], NotificationDialogComponent.prototype, "multiple", void 0);
NotificationDialogComponent = __decorate([
    core_1.Component({
        selector: 'notification-dialog',
        template: __webpack_require__(1525),
    }),
    __metadata("design:paramtypes", [])
], NotificationDialogComponent);
exports.NotificationDialogComponent = NotificationDialogComponent;


/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(0);
var Observable_1 = __webpack_require__(1);
var app_properties_1 = __webpack_require__(154);
var abstract_service_1 = __webpack_require__(346);
var currency_service_1 = __webpack_require__(1415);
var Currency_1 = __webpack_require__(1356);
/**
 * App Properties service
 *
 * @export
 * @class AppPropertiesService
 * @extends {AbstractService}
 */
var AppPropertiesService = (function (_super) {
    __extends(AppPropertiesService, _super);
    /**
     * Creates an instance of AppPropertiesService.
     * @param {AppProperties} appProps
     *
     * @memberOf AppPropertiesService
     */
    function AppPropertiesService(appProps, currencyService) {
        var _this = _super.call(this, appProps) || this;
        _this.appProps = appProps;
        _this.currencyService = currencyService;
        return _this;
    }
    AppPropertiesService.prototype.getProperties = function () {
        return this.appProps;
    };
    /**
     * Returns a observable for currency values
     *
     * @returns {Observable<Currency>}
     *
     * @memberOf AppPropertiesService
     */
    AppPropertiesService.prototype.getDefaultCurrency = function () {
        var _this = this;
        if (this.defaultCurrency) {
            return Observable_1.Observable.of(this.defaultCurrency.clone(Currency_1.Currency));
        }
        // @TODO Retrieve these values from the web service for the currently active organization
        var uid = this.appProps.get(app_properties_1.AppProperties.DEFAULT_CURRENCY_KEY);
        var isoCode = this.appProps.get(app_properties_1.AppProperties.DEFAULT_CURRENCY_CODE_KEY);
        this.currencyObservable = Observable_1.Observable.create(function (observer) {
            if (!_this.appProps.get(app_properties_1.AppProperties.DEFAULT_CURRENCY_KEY)) {
                return _this.currencyService.getById(uid).subscribe(function (currency) {
                    if (currency) {
                        _this.defaultCurrency = new Currency_1.Currency(currency);
                        observer.next(_this.defaultCurrency.clone(Currency_1.Currency));
                        observer.complete();
                    }
                    else {
                        observer.error("We were unable to find a currency with this UID \"" + uid + "\"");
                    }
                }, function (error) {
                    observer.error(error);
                });
            }
            else {
                return _this.currencyService.getByIsoCode(isoCode).subscribe(function (currencies) {
                    if (currencies && currencies.length == 1) {
                        _this.defaultCurrency = new Currency_1.Currency(currencies[0]);
                        observer.next(_this.defaultCurrency.clone(Currency_1.Currency));
                        observer.complete();
                    }
                    else {
                        observer.error("We were unable to find a currency with ISO code \"" + isoCode + "\"");
                    }
                }, function (error) {
                    observer.error(error);
                });
            }
        });
        return this.currencyObservable;
    };
    return AppPropertiesService;
}(abstract_service_1.AbstractService));
AppPropertiesService = __decorate([
    core_1.Injectable(),
    __param(0, core_2.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _a || Object, typeof (_b = typeof currency_service_1.CurrencyService !== "undefined" && currency_service_1.CurrencyService) === "function" && _b || Object])
], AppPropertiesService);
exports.AppPropertiesService = AppPropertiesService;
var _a, _b;


/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var MeasurementInformation_1 = __webpack_require__(1377);
var PackagingInformation_1 = __webpack_require__(1464);
var CommodityType_1 = __webpack_require__(1382);
var Container_1 = __webpack_require__(1375);
var MotorVehicle_1 = __webpack_require__(1429);
var Shipment_1 = __webpack_require__(1368);
var HarmonizedSystemCode_1 = __webpack_require__(1432);
var CargoItem = (function (_super) {
    __extends(CargoItem, _super);
    function CargoItem(data) {
        var _this = _super.call(this, data) || this;
        _this.packagingInformation = new PackagingInformation_1.PackagingInformation();
        _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation();
        _this.containers = [];
        _this.motorVehicles = [];
        if (data) {
            _this.itemNumber = data.itemNumber;
            _this.quantity = data.quantity;
            _this.tallyStatus = data.tallyStatus ? data.tallyStatus : "NotTallied";
            _this.description = data.description;
            _this.shipment = new Shipment_1.Shipment(data.shipment);
            _this.shipmentId = _this.shipment.uid;
            if (data.commodityType) {
                _this.commodityType = new CommodityType_1.CommodityType(data.commodityType);
                _this.commodityTypeId = _this.commodityType.uid;
            }
            else {
                _this.commodityType = _this.commodityTypeId = null;
            }
            if (data.harmonizedSystemCode) {
                _this.harmonizedSystemCode = new HarmonizedSystemCode_1.HarmonizedSystemCode(data.harmonizedSystemCode);
                _this.harmonizedSystemCodeId = _this.harmonizedSystemCode.uid;
            }
            else {
                _this.harmonizedSystemCode = _this.harmonizedSystemCodeId = null;
            }
            if (data.containers instanceof Array) {
                data.containers.forEach(function (container) {
                    _this.containers.push(new Container_1.Container(container));
                });
            }
            if (data.motorVehicles instanceof Array) {
                data.motorVehicles.forEach(function (vehicle) {
                    _this.motorVehicles.push(new MotorVehicle_1.MotorVehicle(vehicle));
                });
            }
            if (data.packagingInformation) {
                _this.packagingInformation = new PackagingInformation_1.PackagingInformation(data.packagingInformation);
            }
            if (data.measurementInformation) {
                _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation(data.measurementInformation);
            }
            // @todo: Remove. Inventory should be retrieved from a webservice
            _this.inventoryQuantity = data.inventoryQuantity;
        }
        else {
            _this.tallyStatus = "NotTallied";
            _this.quantity = 0;
            _this.harmonizedSystemCode = _this.harmonizedSystemCodeId = null;
            _this.commodityType = _this.commodityTypeId = null;
            _this.packagingInformation.packageType = _this.packagingInformation.packageTypeId = null;
        }
        return _this;
    }
    CargoItem.prototype.prepareData = function () {
        if (this.commodityType instanceof CommodityType_1.CommodityType) {
            this.commodityType = this.commodityType.uid;
        }
        else {
            this.commodityType = this.commodityTypeId;
        }
        if (this.harmonizedSystemCode instanceof HarmonizedSystemCode_1.HarmonizedSystemCode) {
            this.harmonizedSystemCode = this.harmonizedSystemCode.uid;
        }
        else {
            this.harmonizedSystemCode = this.harmonizedSystemCodeId;
        }
        if (this.shipment instanceof Shipment_1.Shipment) {
            this.shipment = this.shipment.uid;
        }
        else {
            this.shipment = this.shipmentId;
        }
        this.packagingInformation.prepareData();
        this.measurementInformation.prepareData();
    };
    return CargoItem;
}(DomainObject_1.DomainObject));
exports.CargoItem = CargoItem;
CargoItem.TALLY_STATUS = [
    { value: 'Tallied', name: 'Pre-Tallied' },
    { value: 'NotTallied', name: 'Not Tallied' }
];


/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var ChargeItem_1 = __webpack_require__(1362);
var abstract_service_1 = __webpack_require__(346);
/**
 * Charge item service
 *
 * @export
 * @class ChargeItemService
 * @extends {AbstractService}
 */
var ChargeItemService = (function (_super) {
    __extends(ChargeItemService, _super);
    /**
     * Creates an instance of ChargeItemService.
     * @param {Http} http
     * @param {AppProperties} appProps
     *
     * @memberOf ChargeItemService
     */
    function ChargeItemService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    ChargeItemService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/billing/charge-items', this.getStandardRequestOptions()).map(this.extractMany).catch(this.handleError);
    };
    ChargeItemService.prototype.getById = function (uid) {
        var _this = this;
        return this.http.get(this.apiBaseUrl + '/billing/charge-item/' + uid, this.getStandardRequestOptions()).map(function (res) {
            return _this.extractOne(res);
        }).catch(this.handleError);
    };
    ChargeItemService.prototype.getByFilter = function (filter) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("filter", filter);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/billing/charge-items', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ChargeItemService.prototype.getDepositChargeItems = function () {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("deposit_item", "true");
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/billing/charge-items', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ChargeItemService.prototype.getActiveChargeItems = function () {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("active_item", "true");
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/billing/charge-items', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ChargeItemService.prototype.getByCode = function (code) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("charge_item_code", code);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/billing/charge-items', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    ChargeItemService.prototype.create = function (chargeItem) {
        return this.http.post(this.apiBaseUrl + '/billing/charge-items', chargeItem, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ChargeItemService.prototype.update = function (uid, chargeItem) {
        return this.http.put(this.apiBaseUrl + '/billing/charge-item/' + uid, chargeItem, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    ChargeItemService.prototype.delete = function (uid) {
        return this.http.delete(this.apiBaseUrl + '/billing/charge-item/' + uid, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    ChargeItemService.prototype.extractOne = function (res) {
        return new ChargeItem_1.ChargeItem(res.json() || {});
    };
    ChargeItemService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (chargeItem) {
                result.push(new ChargeItem_1.ChargeItem(chargeItem));
            });
        }
        return result;
    };
    return ChargeItemService;
}(abstract_service_1.AbstractService));
ChargeItemService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], ChargeItemService);
exports.ChargeItemService = ChargeItemService;
var _a, _b;


/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var CurrencyExchangeRate_1 = __webpack_require__(1364);
var abstract_service_1 = __webpack_require__(346);
/**
 * CurrencyExchangeRate service
 *
 * @export
 * @class CurrencyExchangeRateService
 * @extends {AbstractService}
 */
var CurrencyExchangeRateService = (function (_super) {
    __extends(CurrencyExchangeRateService, _super);
    /**
     * Creates an instance of CurrencyExchangeRateService.
     * @param {Http} http
     * @param {AppProperties} appProps
     *
     * @memberOf CurrencyExchangeRateService
     */
    function CurrencyExchangeRateService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    /**
     * Returns an {@link Observable} that emits {@link Array<CurrencyExchangeRate>}
     * @returns {Observable<Array<CurrencyExchangeRate>>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/currency-exchange-rates', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link Array<CurrencyExchangeRate>}
     * @param {string} filter
     * @returns {Observable<Array<CurrencyExchangeRate>>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.getActive = function () {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("active", "true");
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/currency-exchange-rates', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link CurrencyExchangeRate}
     * @param {number} uid
     * @returns {Observable<CurrencyExchangeRate>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.getById = function (uid) {
        return this.http.get(this.apiBaseUrl + '/currency-exchange-rate/' + uid, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link CurrencyExchangeRate}
     * @param {CurrencyExchangeRate} currencyExchangeRate
     * @returns {Observable<CurrencyExchangeRate>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.create = function (currencyExchangeRate) {
        return this.http.post(this.apiBaseUrl + '/currency-exchange-rates', currencyExchangeRate, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link CurrencyExchangeRate}
     * @param {number} uid
     * @param {CurrencyExchangeRate} currencyExchangeRate
     * @returns {Observable<CurrencyExchangeRate>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.update = function (uid, currencyExchangeRate) {
        return this.http.put(this.apiBaseUrl + '/currency-exchange-rate/' + uid, currencyExchangeRate, this.getStandardRequestOptions())
            .map(this.extractOne)
            .catch(this.handleError);
    };
    /**
     * Returns an {@link Observable} that emits {@link boolean}
     * @param {number} uid
     * @returns {Observable<boolean>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.delete = function (uid) {
        return this.http.delete(this.apiBaseUrl + '/currency-exchange-rate/' + uid, this.getStandardRequestOptions())
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    /**
     * Extracts a {@link CurrencyExchangeRate} from a json string
     * @private
     * @param {Response} res
     * @returns {CurrencyExchangeRate}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.extractOne = function (res) {
        return new CurrencyExchangeRate_1.CurrencyExchangeRate(res.json() || {});
    };
    /**
     * Extracts a {@link Array<CurrencyExchangeRate>} from a json string     *
     * @private
     * @param {Response} res
     * @returns {Array<CurrencyExchangeRate>}
     *
     * @memberOf CurrencyExchangeRateService
     */
    CurrencyExchangeRateService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (currencyExchangeRate) {
                result.push(new CurrencyExchangeRate_1.CurrencyExchangeRate(currencyExchangeRate));
            });
        }
        return result;
    };
    return CurrencyExchangeRateService;
}(abstract_service_1.AbstractService));
CurrencyExchangeRateService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], CurrencyExchangeRateService);
exports.CurrencyExchangeRateService = CurrencyExchangeRateService;
var _a, _b;


/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var VesselType_1 = __webpack_require__(1425);
var ShippingLine_1 = __webpack_require__(1444);
var DomainObject_1 = __webpack_require__(345);
var Vessel = (function (_super) {
    __extends(Vessel, _super);
    function Vessel(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.vesselCode = data.vesselCode;
            _this.vesselName = data.vesselName;
            _this.vesselNumber = data.vesselNumber;
            _this.callSign = data.callSign;
            _this.vesselType = new VesselType_1.VesselType(data.vesselType);
            _this.vesselOperator = new ShippingLine_1.ShippingLine(data.vesselOperator);
            _this.vesselNationality = data.vesselNationality;
            _this.cityOfRegistration = data.cityOfRegistration;
            _this.registrationNumber = data.registrationNumber;
            _this.vesselLength = data.vesselLength;
            _this.maxGrossRegisteredTonnage = data.maxGrossRegisteredTonnage;
            _this.maxNetRegisteredTonnage = data.maxNetRegisteredTonnage;
            _this.maximumBeam = data.maximumBeam;
            _this.maximumDraught = data.maximumDraught;
            _this.netRevenueTonnage = data.netRevenueTonnage;
        }
        return _this;
    }
    Vessel.prototype.prepareData = function () { };
    return Vessel;
}(DomainObject_1.DomainObject));
exports.Vessel = Vessel;


/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Address_1 = __webpack_require__(1376);
var Organization = (function (_super) {
    __extends(Organization, _super);
    function Organization(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
            _this.telephone = data.telephone;
            _this.fax = data.fax;
            _this.email = data.email;
            _this.taxNumber = data.taxNumber;
            if (data.mailingAddress) {
                _this.mailingAddress = new Address_1.Address(data.mailingAddress);
            }
            if (data.billingAddress) {
                _this.billingAddress = new Address_1.Address(data.billingAddress);
            }
        }
        return _this;
    }
    Organization.prototype.prepareData = function () { };
    return Organization;
}(DomainObject_1.DomainObject));
exports.Organization = Organization;


/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents Package Types
 */
var VesselType = (function (_super) {
    __extends(VesselType, _super);
    function VesselType(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.code = data.code;
            _this.description = data.description;
        }
        return _this;
    }
    VesselType.prototype.prepareData = function () {
    };
    return VesselType;
}(DomainObject_1.DomainObject));
exports.VesselType = VesselType;


/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var ng2_bootstrap_1 = __webpack_require__(118);
var common_1 = __webpack_require__(9);
var advantum_commons_module_1 = __webpack_require__(1401);
var smartadmin_input_module_1 = __webpack_require__(1380);
var advantum_input_module_1 = __webpack_require__(1373);
var utils_module_1 = __webpack_require__(155);
var charge_item_lookup_dialog_component_1 = __webpack_require__(1458);
var confirmation_dialog_component_1 = __webpack_require__(1405);
var notification_dialog_component_1 = __webpack_require__(1417);
var shipment_lookup_dialog_component_1 = __webpack_require__(1446);
var exchange_rates_dialog_component_1 = __webpack_require__(1433);
var consignee_lookup_dialog_component_1 = __webpack_require__(1459);
var vessel_call_lookup_dialog_component_1 = __webpack_require__(1447);
var DialogModule = (function () {
    function DialogModule() {
    }
    return DialogModule;
}());
DialogModule = __decorate([
    core_1.NgModule({
        declarations: [
            charge_item_lookup_dialog_component_1.ChargeItemLookupDialogComponent,
            confirmation_dialog_component_1.ConfirmationDialogComponent,
            notification_dialog_component_1.NotificationDialogComponent,
            shipment_lookup_dialog_component_1.ShipmentLookupDialogComponent,
            exchange_rates_dialog_component_1.ExchangeRatesDialogComponent,
            consignee_lookup_dialog_component_1.ConsigneeLookupDialogComponent,
            vessel_call_lookup_dialog_component_1.VesselCallLookupDialogComponent,
        ],
        imports: [
            advantum_commons_module_1.AdvantumCommonsModule,
            smartadmin_input_module_1.SmartadminInputModule,
            advantum_input_module_1.AdvantumInputModule,
            ng2_bootstrap_1.ModalModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            utils_module_1.UtilsModule,
        ],
        exports: [
            charge_item_lookup_dialog_component_1.ChargeItemLookupDialogComponent,
            confirmation_dialog_component_1.ConfirmationDialogComponent,
            notification_dialog_component_1.NotificationDialogComponent,
            shipment_lookup_dialog_component_1.ShipmentLookupDialogComponent,
            exchange_rates_dialog_component_1.ExchangeRatesDialogComponent,
            consignee_lookup_dialog_component_1.ConsigneeLookupDialogComponent,
            vessel_call_lookup_dialog_component_1.VesselCallLookupDialogComponent,
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], DialogModule);
exports.DialogModule = DialogModule;


/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeItem_1 = __webpack_require__(1362);
var ChargeItemRateRange_1 = __webpack_require__(1452);
var ChargeProfile_1 = __webpack_require__(1372);
var Currency_1 = __webpack_require__(1356);
var ChargeItemRate = (function (_super) {
    __extends(ChargeItemRate, _super);
    function ChargeItemRate(data) {
        var _this = _super.call(this, data) || this;
        _this.computeOnRemainingIndicator = false;
        _this.decimalPrecision = 2;
        /**
         * Basis type uses a union type of string literals to represent our enum.
         * @see <a href="https://goo.gl/iHd3ru">String Literal Type</a>
         */
        _this.basisType = null;
        /**
         * Basis unit type
         */
        _this.basisUnitType = null; // TODO: Change to type
        /**
         * Result rounding type
         */
        _this.roundingType = null;
        /**
         * How rate results are to be added up
         */
        _this.summaryOperationType = null;
        /**
         * The frequency at which to apply this rate
         */
        _this.rateFrequencyType = null;
        /**
         * Rate frequency factor, i.e., every 2 Days or every 2 Weeks or every 3 Months
         */
        _this.rateFrequency = 1;
        _this.otherRates = new Array();
        if (data) {
            _this.startDate = data.startDate;
            _this.endDate = data.endDate;
            if (data.currency) {
                _this.currency = new Currency_1.Currency(data.currency);
                _this.currencyId = _this.currency.uid;
            }
            _this.rate = data.rate;
            _this.basisDivisor = data.basisDivisor;
            _this.fixedAmount = data.fixedAmount;
            _this.minimumValue = data.minimumValue;
            _this.maximumValue = data.maximumValue;
            _this.computeOnRemainingIndicator = data.computeOnRemainingIndicator;
            _this.decimalPrecision = data.decimalPrecision;
            _this.basisType = data.basisType; // Postfix ! removes null and undefined
            _this.basisUnitType = data.basisUnitType;
            _this.roundingType = data.roundingType;
            _this.summaryOperationType = data.summaryOperatorType;
            _this.rateFrequencyType = data.rateFrequencyType;
            _this.rateFrequency = data.rateFrequency;
            _this.rangeType = data.rangeType;
            _this.profileType = data.profileType;
            _this.usageType = data.usageType;
            if (data.currency) {
                _this.currency = new Currency_1.Currency(data.currency);
                _this.currencyId = _this.currency.uid;
            }
            if (data.chargeItem) {
                _this.chargeItem = new ChargeItem_1.ChargeItem(data.chargeItem);
                _this.chargeItemId = _this.chargeItem.uid;
            }
            if (data.chargeProfile) {
                _this.chargeProfile = new ChargeProfile_1.ChargeProfile(data.chargeProfile);
                _this.chargeProfileId = _this.chargeProfile.uid;
            }
            if (data.chargeItemRateRange) {
                _this.chargeItemRateRange = new ChargeItemRateRange_1.ChargeItemRateRange(data.chargeItemRateRange);
                _this.chargeItemRateRangeId = _this.chargeItemRateRange.uid;
            }
            for (var rate in data.otherRates) {
                _this.otherRates.push(new ChargeItemRate(rate));
            }
        }
        return _this;
    }
    ChargeItemRate.prototype.prepareData = function () {
        if (this.currencyId) {
            this.currency = this.currencyId;
        }
        if (this.chargeItemId) {
            this.chargeItem = this.chargeItemId;
        }
        if (this.chargeProfileId) {
            this.chargeProfile = this.chargeProfileId;
        }
    };
    return ChargeItemRate;
}(DomainObject_1.DomainObject));
exports.ChargeItemRate = ChargeItemRate;
ChargeItemRate.BASIS_TYPES = [
    { value: 'Charge_Profile', name: 'Charge Profile' },
    { value: 'Container', name: 'Container' },
    { value: 'Custom', name: 'Custom' },
    { value: 'Fixed', name: 'Fixed' },
    { value: 'Greater', name: 'Greater' },
    { value: 'Lesser', name: 'Lesser' },
    { value: 'Measure', name: 'Measure' },
    { value: 'Other', name: 'Other' },
    { value: 'Prorate', name: 'Prorate' },
    { value: 'Quantity', name: 'Quantity' },
    { value: 'Range', name: 'Range' },
    { value: 'Summary', name: 'Summary' },
    { value: 'User', name: 'User' },
    { value: 'Vehicle', name: 'Vehicle' },
    { value: 'Weight', name: 'Weight' },
];
// TODO: Use units of measure instead
ChargeItemRate.BASIS_TYPE_UNITS = [
    { value: 'Board_Feet', name: 'Board Feet' },
    { value: 'Cubic_Feet', name: 'Cubic Feet' },
    { value: 'Cubic_Metre', name: 'Cubic Metre' },
    { value: 'Days', name: 'Days' },
    { value: 'Gross_Register_Tonne', name: 'Gross Register Tonne' },
    { value: 'Kilograms', name: 'Kilograms' },
    { value: 'Net_Register_Tonne', name: 'Net Register Tonne' },
    { value: 'None', name: 'None' },
    { value: 'Pounds', name: 'Pounds' },
    { value: 'Quantity', name: 'Quantity' },
    { value: 'Tonnes', name: 'Tonnes' }
];
ChargeItemRate.ROUNDING_TYPES = [
    'None', 'Round', 'Round_Up', 'Round_Down', 'Round_Non_Zero'
];
ChargeItemRate.RATE_FREQUENCY_TYPES = [
    'None', 'Day', 'Week', 'Month'
];
ChargeItemRate.SUMMARY_OPERATION_TYPES = [
    'Sum', 'Average', 'Minimum', 'Maximum', 'Product', 'None'
];
ChargeItemRate.RANGE_TYPES = [
    'Fixed', 'Rate'
];
// TODO: Make domain objects
ChargeItemRate.USAGE_TYPES = [
    'Demurrage', 'Detention', 'Electricity', 'FCL Activities',
    'Monitoring', 'Plug In', 'Storage', 'Striping Auto', 'Stripping',
    'Stuffing', 'Wharfage TS KCT', 'Wharfage TS KWL'
];
ChargeItemRate.PROFILE_TYPES = [
    'Fixed', 'Container', 'Voyage Container', 'Master B/L'
];


/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeItem_1 = __webpack_require__(1362);
var ChargeProfile_1 = __webpack_require__(1372);
/**
 * Association class for charge group and charge item
 */
var ChargeProfileChargeItem = (function (_super) {
    __extends(ChargeProfileChargeItem, _super);
    function ChargeProfileChargeItem(data) {
        var _this = _super.call(this, data) || this;
        _this.startApplyAfterWorkingDays = 0;
        _this.startAddedDays = 0;
        _this.startExcludeHolidaysIndicator = false;
        _this.startExcludeWeekendsIndicator = false;
        _this.endApplyAfterWorkingDays = 0;
        _this.endAddedDays = 0;
        _this.endExcludeHolidaysIndicator = false;
        _this.endExcludeWeekendsIndicator = false;
        _this.printableIndicator = true;
        _this.precedence = null;
        if (data) {
            _this.startPeriodDateType = data.startPeriodDateType;
            _this.startApplyAfterWorkingDays = data.startApplyAfterWorkingDays;
            _this.startAddedDays = data.startAddedDays;
            _this.startExcludeHolidaysIndicator = data.startExcludeHolidaysIndicator;
            _this.startExcludeWeekendsIndicator = data.startExcludeWeekendsIndicator;
            _this.endPeriodDateType = data.endPeriodDateType;
            _this.endApplyAfterWorkingDays = data.endApplyAfterWorkingDays;
            _this.endAddedDays = data.endAddedDays;
            _this.endExcludeHolidaysIndicator = data.endExcludeHolidaysIndicator;
            _this.endExcludeWeekendsIndicator = data.endExcludeWeekendsIndicator;
            _this.printableIndicator = data.printableIndicator;
            _this.chargeProfile = new ChargeProfile_1.ChargeProfile(data.chargeProfile);
            _this.chargeProfileId = _this.chargeProfile.uid;
            _this.chargeItem = new ChargeItem_1.ChargeItem(data.chargeItem);
            _this.chargeItemId = _this.chargeItem.uid;
            _this.precedence = data.precedence;
        }
        return _this;
    }
    ChargeProfileChargeItem.prototype.prepareData = function () {
        if (this.chargeItemId) {
            this.chargeItem = this.chargeItemId;
        }
        if (this.chargeProfileId) {
            this.chargeProfile = this.chargeProfileId;
        }
    };
    return ChargeProfileChargeItem;
}(DomainObject_1.DomainObject));
exports.ChargeProfileChargeItem = ChargeProfileChargeItem;
ChargeProfileChargeItem.CALCULATION_PERIOD_DATE_TYPES = [
    { value: 'Today', name: 'Today' },
    { value: 'Storage_Due', name: 'Storage Due' },
    { value: 'Storage_End', name: 'Storage End' },
    { value: 'Demurrage_Due', name: 'Demurrage Due' },
    { value: 'Demurrage_End', name: 'Demurrage End' },
    { value: 'Vessel_Arrive', name: 'Vessel Arrive' },
    { value: 'Vessel_Depart', name: 'Vessel Depart' },
    { value: 'Stripping_Date', name: 'Stripping Date' },
    { value: 'Stuffing_Date', name: 'Stuffing Date' }
];


/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Measurement_1 = __webpack_require__(1366);
var MotorVehicleModel_1 = __webpack_require__(1386);
var MotorVehicleManufacturer_1 = __webpack_require__(1441);
var MotorVehicle = (function (_super) {
    __extends(MotorVehicle, _super);
    function MotorVehicle(data) {
        var _this = _super.call(this, data) || this;
        _this.weight = new Measurement_1.Measurement();
        _this.motorVehicleManufacturer = null;
        _this.motorVehicleManufacturerId = null;
        _this.motorVehicleModel = null;
        _this.motorVehicleModelId = null;
        if (data) {
            _this.chassisNumber = data.chassisNumber;
            _this.yearOfManufacture = data.yearOfManufacture;
            if (data.weight) {
                _this.weight = new Measurement_1.Measurement(data.weight);
            }
            if (data.motorVehicleModel) {
                _this.motorVehicleModel = new MotorVehicleModel_1.MotorVehicleModel(data.motorVehicleModel);
                _this.motorVehicleModelId = _this.motorVehicleModel.uid;
            }
            if (data.motorVehicleManufacturer) {
                _this.motorVehicleManufacturer = new MotorVehicleManufacturer_1.MotorVehicleManufacturer(data.motorVehicleManufacturer);
                _this.motorVehicleManufacturerId = _this.motorVehicleManufacturer.uid;
            }
        }
        return _this;
    }
    MotorVehicle.prototype.prepareData = function () {
        if (this.motorVehicleModel instanceof MotorVehicleModel_1.MotorVehicleModel) {
            this.motorVehicleModel = this.motorVehicleModel.uid;
        }
        else {
            this.motorVehicleModel = this.motorVehicleModelId;
        }
        if (this.motorVehicleManufacturer instanceof MotorVehicleManufacturer_1.MotorVehicleManufacturer) {
            this.motorVehicleManufacturer = this.motorVehicleManufacturer.uid;
        }
        else {
            this.motorVehicleManufacturer = this.motorVehicleManufacturerId;
        }
        if (this.weight instanceof Measurement_1.Measurement) {
            this.weight.prepareData();
        }
    };
    return MotorVehicle;
}(DomainObject_1.DomainObject));
exports.MotorVehicle = MotorVehicle;


/***/ }),

/***/ 1430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents Package Types
 */
var PackageType = (function (_super) {
    __extends(PackageType, _super);
    function PackageType(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
            _this.description = data.description;
            _this.code = data.code;
            _this.numericCode = data.numericCode;
        }
        return _this;
    }
    PackageType.prototype.prepareData = function () {
    };
    return PackageType;
}(DomainObject_1.DomainObject));
exports.PackageType = PackageType;


/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeProfile_1 = __webpack_require__(1372);
var ChargeProfileGroup = (function (_super) {
    __extends(ChargeProfileGroup, _super);
    function ChargeProfileGroup(data) {
        var _this = _super.call(this, data) || this;
        _this.chargeProfiles = new Array();
        if (data) {
            _this.name = data.name;
            if (data.chargeProfiles) {
                data.chargeProfiles.forEach(function (item) {
                    _this.chargeProfiles.push(new ChargeProfile_1.ChargeProfile(item));
                });
            }
        }
        return _this;
    }
    ChargeProfileGroup.prototype.prepareData = function () {
    };
    return ChargeProfileGroup;
}(DomainObject_1.DomainObject));
exports.ChargeProfileGroup = ChargeProfileGroup;


/***/ }),

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents countries
 */
var HarmonizedSystemCode = (function (_super) {
    __extends(HarmonizedSystemCode, _super);
    function HarmonizedSystemCode(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.code = data.code;
            _this.description = data.description;
        }
        return _this;
    }
    HarmonizedSystemCode.prototype.prepareData = function () { };
    return HarmonizedSystemCode;
}(DomainObject_1.DomainObject));
exports.HarmonizedSystemCode = HarmonizedSystemCode;


/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var base_dialog_component_1 = __webpack_require__(1367);
var app_properties_service_1 = __webpack_require__(1418);
var currency_exchange_rate_service_1 = __webpack_require__(1421);
var ExchangeRatesDialogComponent = (function (_super) {
    __extends(ExchangeRatesDialogComponent, _super);
    function ExchangeRatesDialogComponent(propertiesService, exchangeRateService) {
        var _this = _super.call(this) || this;
        _this.propertiesService = propertiesService;
        _this.exchangeRateService = exchangeRateService;
        _this.tableData = [];
        _this.today = new Date();
        return _this;
    }
    ExchangeRatesDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.propertiesService.getDefaultCurrency()
            .subscribe(function (currency) {
            _this.defaultCurrency = currency;
        }, function (errors) {
            console.error(errors);
        });
        this.exchangeRateService.getActive()
            .subscribe(function (rates) {
            _this.tableData = rates;
        }, function (errors) {
            console.error(errors);
        });
    };
    return ExchangeRatesDialogComponent;
}(base_dialog_component_1.BaseDialogComponent));
ExchangeRatesDialogComponent = __decorate([
    core_1.Component({
        selector: 'exchange-rates-dialog',
        template: __webpack_require__(1524),
        providers: [
            currency_exchange_rate_service_1.CurrencyExchangeRateService,
            app_properties_service_1.AppPropertiesService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof app_properties_service_1.AppPropertiesService !== "undefined" && app_properties_service_1.AppPropertiesService) === "function" && _a || Object, typeof (_b = typeof currency_exchange_rate_service_1.CurrencyExchangeRateService !== "undefined" && currency_exchange_rate_service_1.CurrencyExchangeRateService) === "function" && _b || Object])
], ExchangeRatesDialogComponent);
exports.ExchangeRatesDialogComponent = ExchangeRatesDialogComponent;
var _a, _b;


/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
/**
 * Represents countries
 */
var Country = (function (_super) {
    __extends(Country, _super);
    function Country(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.code = data.code;
            _this.description = data.description;
        }
        return _this;
    }
    Country.prototype.prepareData = function () {
    };
    return Country;
}(DomainObject_1.DomainObject));
exports.Country = Country;


/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var CHANGE_TYPE_REJECTION = 'Rejection';
var CHANGE_TYPE_REOPEN = 'Reopen';
var CHANGE_TYPE_CANCEL = 'Cancellation';
var VesselCallStateChange = (function (_super) {
    __extends(VesselCallStateChange, _super);
    function VesselCallStateChange(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.stateChangeType = data.stateChangeType;
            _this.vesselCall = data.vesselCall;
            _this.vesselCallId = data.vesselCall != null ? data.vesselCall.uid : null;
            _this.reason = data.reason;
            _this.changeDateTime = data.changeDateTime;
            _this.splitDateTimes();
        }
        return _this;
    }
    VesselCallStateChange.prototype.splitDateTimes = function () {
        var parts;
        if (this.changeDateTime) {
            parts = this.splitDateTime(this.changeDateTime);
            this.changeDate = parts[0];
            this.changeTime = parts[1];
        }
    };
    VesselCallStateChange.prototype.prepareData = function () {
        if (this.changeDate && this.changeTime) {
            this.changeDateTime = this.changeDate + 'T' + this.changeTime;
        }
    };
    /**
     * Splits dates in the following format: yyyy-MM-dd'T'HH:mm:ss.SSS
     */
    VesselCallStateChange.prototype.splitDateTime = function (dt) {
        return dt.split('T');
    };
    VesselCallStateChange.prototype.exchangeData = function (data) {
        var _this = this;
        Object.keys(data).forEach(function (key) {
            _this[key] = data[key];
        });
    };
    return VesselCallStateChange;
}(DomainObject_1.DomainObject));
exports.VesselCallStateChange = VesselCallStateChange;


/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var ng2_bootstrap_1 = __webpack_require__(118);
var common_1 = __webpack_require__(9);
var inline_editor_1 = __webpack_require__(1471);
var dialog_module_1 = __webpack_require__(1426);
var party_address_component_1 = __webpack_require__(1467);
var AdvantumModule = (function () {
    function AdvantumModule() {
    }
    return AdvantumModule;
}());
AdvantumModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            ng2_bootstrap_1.ModalModule,
            inline_editor_1.InlineEditorModule,
            dialog_module_1.DialogModule
        ],
        declarations: [
            party_address_component_1.PartyAddressViewComponent,
        ],
        exports: [
            party_address_component_1.PartyAddressViewComponent,
            inline_editor_1.InlineEditorModule,
            dialog_module_1.DialogModule
        ]
    }),
    __metadata("design:paramtypes", [])
], AdvantumModule);
exports.AdvantumModule = AdvantumModule;


/***/ }),

/***/ 1437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ContainerSizeType = (function (_super) {
    __extends(ContainerSizeType, _super);
    function ContainerSizeType(data) {
        var _this = _super.call(this) || this;
        if (data) {
            _this.uid = data.uid;
            _this.code = data.code;
            _this.legacyCode = data.legacyCode;
            _this.type = data.type;
            _this.size = data.size;
            _this.description = data.description;
        }
        return _this;
    }
    ContainerSizeType.prototype.prepareData = function () { };
    return ContainerSizeType;
}(DomainObject_1.DomainObject));
exports.ContainerSizeType = ContainerSizeType;


/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ContainerType = (function (_super) {
    __extends(ContainerType, _super);
    function ContainerType(data) {
        var _this = _super.call(this) || this;
        if (data) {
            _this.uid = data.uid;
            _this.name = data.name;
            _this.code = data.code;
            _this.description = data.description;
        }
        return _this;
    }
    ContainerType.prototype.prepareData = function () { };
    return ContainerType;
}(DomainObject_1.DomainObject));
exports.ContainerType = ContainerType;


/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Cancellation_1 = __webpack_require__(1391);
var Invoice_1 = __webpack_require__(1360);
/**
 * Represents an invoice cancellation
 */
var InvoiceCancellation = (function (_super) {
    __extends(InvoiceCancellation, _super);
    function InvoiceCancellation(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            if (data.invoice) {
                _this.invoice = new Invoice_1.Invoice(data.invoice);
            }
        }
        return _this;
    }
    InvoiceCancellation.prototype.prepareData = function () { };
    return InvoiceCancellation;
}(Cancellation_1.Cancellation));
exports.InvoiceCancellation = InvoiceCancellation;


/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var InvoiceLineItem_1 = __webpack_require__(1383);
var ChargePaymentAllocation_1 = __webpack_require__(1453);
var Payment_1 = __webpack_require__(1361);
/**
 * Represents the payment amount associated with an invoice line item
 */
var InvoiceLineItemPayment = (function (_super) {
    __extends(InvoiceLineItemPayment, _super);
    function InvoiceLineItemPayment(data) {
        var _this = _super.call(this, data) || this;
        _this.chargePaymentAllocations = new Array();
        if (data) {
            _this.amountPaid = data.amountPaid;
            if (data.invoiceLineItem) {
                _this.invoiceLineItem = new InvoiceLineItem_1.InvoiceLineItem(data.invoiceLineItem);
            }
            if (data.payment) {
                _this.payment = new Payment_1.Payment(data.payment);
            }
            if (data.chargePaymentAllocations) {
                data.chargePaymentAllocations.forEach(function (item) {
                    _this.chargePaymentAllocations
                        .push(new ChargePaymentAllocation_1.ChargePaymentAllocation(item));
                });
            }
        }
        return _this;
    }
    InvoiceLineItemPayment.prototype.prepareData = function () {
        if (this.invoiceLineItem instanceof InvoiceLineItem_1.InvoiceLineItem) {
            this.invoiceLineItem = this.invoiceLineItem.uid;
        }
        else {
            this.invoiceLineItem = null;
        }
    };
    return InvoiceLineItemPayment;
}(DomainObject_1.DomainObject));
exports.InvoiceLineItemPayment = InvoiceLineItemPayment;


/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var MotorVehicleModel_1 = __webpack_require__(1386);
var MotorVehicleManufacturer = (function (_super) {
    __extends(MotorVehicleManufacturer, _super);
    function MotorVehicleManufacturer(data) {
        var _this = _super.call(this, data) || this;
        _this.motorVehicleModels = [];
        if (data) {
            _this.name = data.name;
            if (data.motorVehicleModels instanceof Array) {
                data.motorVehicleModels.forEach(function (model) {
                    _this.motorVehicleModels.push(new MotorVehicleModel_1.MotorVehicleModel(model));
                });
            }
        }
        return _this;
    }
    MotorVehicleManufacturer.prototype.prepareData = function () {
    };
    return MotorVehicleManufacturer;
}(DomainObject_1.DomainObject));
exports.MotorVehicleManufacturer = MotorVehicleManufacturer;


/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Cancellation_1 = __webpack_require__(1391);
var Payment_1 = __webpack_require__(1361);
/**
 * Represents the cancellation of an invoice payment
 */
var PaymentCancellation = (function (_super) {
    __extends(PaymentCancellation, _super);
    function PaymentCancellation(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            if (data.payment) {
                _this.payment = new Payment_1.Payment(data.payment);
                _this.paymentId = _this.payment.uid;
            }
        }
        return _this;
    }
    PaymentCancellation.prototype.prepareData = function () {
        if (this.payment instanceof Payment_1.Payment) {
            this.payment = this.payment.uid;
        }
        else {
            this.payment = this.paymentId;
        }
    };
    return PaymentCancellation;
}(Cancellation_1.Cancellation));
exports.PaymentCancellation = PaymentCancellation;


/***/ }),

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeItem_1 = __webpack_require__(1362);
var Container_1 = __webpack_require__(1375);
var Currency_1 = __webpack_require__(1356);
var Shipment_1 = __webpack_require__(1368);
var ShipmentSpecificCharge = (function (_super) {
    __extends(ShipmentSpecificCharge, _super);
    function ShipmentSpecificCharge(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.chargeAmount = data.chargeAmount;
            _this.chargeItem = data.chargeItem == null ? null : new ChargeItem_1.ChargeItem(data.chargeItem);
            _this.chargeItemId = data.chargeItem == null ? null : _this.chargeItem.uid;
            _this.container = data.container == null ? null : new Container_1.Container(data.container);
            _this.containerId = data.container == null ? null : _this.container.uid;
            _this.currency = data.currency == null ? null : new Currency_1.Currency(data.currency);
            _this.currencyId = data.currency == null ? null : _this.currency.uid;
            _this.payType = data.payType;
            _this.quantity = data.quantity;
            _this.shipment = new Shipment_1.Shipment(data.shipment);
            _this.shipmentId = _this.shipment.uid;
            _this.systemDefined = data.systemDefined;
            _this.total = _this.quantity * _this.chargeAmount;
        }
        return _this;
    }
    ShipmentSpecificCharge.prototype.prepareData = function () {
        if (this.currencyId) {
            this.currency = this.currencyId;
        }
        if (this.chargeItemId) {
            this.chargeItem = this.chargeItemId;
        }
        if (this.containerId) {
            this.container = this.containerId;
        }
    };
    return ShipmentSpecificCharge;
}(DomainObject_1.DomainObject));
exports.ShipmentSpecificCharge = ShipmentSpecificCharge;
ShipmentSpecificCharge.PAY_TYPE = [
    "Prepaid", "Collect"
];


/***/ }),

/***/ 1444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Party_1 = __webpack_require__(1357);
var ShippingLine = (function (_super) {
    __extends(ShippingLine, _super);
    function ShippingLine(data) {
        var _this = _super.call(this, data) || this;
        _this.partyTypeCode = "ShippingLine";
        return _this;
    }
    return ShippingLine;
}(Party_1.Party));
exports.ShippingLine = ShippingLine;


/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var UnitOfMeasure = (function (_super) {
    __extends(UnitOfMeasure, _super);
    function UnitOfMeasure(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
            _this.isoCode = data.isoCode;
            _this.isoSymbol = data.isoSymbol;
        }
        return _this;
    }
    UnitOfMeasure.prototype.prepareData = function () { };
    return UnitOfMeasure;
}(DomainObject_1.DomainObject));
exports.UnitOfMeasure = UnitOfMeasure;


/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var shipment_service_1 = __webpack_require__(1406);
var base_lookup_dialog_component_1 = __webpack_require__(1365);
/**
 * Shipment lookup dialog component
 */
var ShipmentLookupDialogComponent = (function (_super) {
    __extends(ShipmentLookupDialogComponent, _super);
    function ShipmentLookupDialogComponent(shipmentService) {
        var _this = _super.call(this) || this;
        _this.shipmentService = shipmentService;
        return _this;
    }
    ShipmentLookupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipmentService.getAll().subscribe(function (shipments) {
            _this.tableData = shipments;
        });
    };
    ShipmentLookupDialogComponent.prototype.doFilter = function (filter) {
        var _this = this;
        this.shipmentService.getByFilter(filter).subscribe(function (shipments) {
            _this.tableData = shipments;
            if (_this.filterQueue.length > 0) {
                _this.doFilter(_this.filterQueue.pop());
            }
        });
    };
    return ShipmentLookupDialogComponent;
}(base_lookup_dialog_component_1.BaseLookupDialogComponent));
ShipmentLookupDialogComponent = __decorate([
    core_1.Component({
        selector: 'shipment-lookup-dialog',
        template: __webpack_require__(1526),
        providers: [
            shipment_service_1.ShipmentService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof shipment_service_1.ShipmentService !== "undefined" && shipment_service_1.ShipmentService) === "function" && _a || Object])
], ShipmentLookupDialogComponent);
exports.ShipmentLookupDialogComponent = ShipmentLookupDialogComponent;
var _a;


/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var base_lookup_dialog_component_1 = __webpack_require__(1365);
var vessel_call_service_1 = __webpack_require__(1403);
var VesselCallLookupDialogComponent = (function (_super) {
    __extends(VesselCallLookupDialogComponent, _super);
    function VesselCallLookupDialogComponent(vesselCallService) {
        var _this = _super.call(this) || this;
        _this.vesselCallService = vesselCallService;
        return _this;
    }
    VesselCallLookupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vesselCallService.getAll().subscribe(function (consignees) {
            _this.tableData = consignees;
        });
    };
    VesselCallLookupDialogComponent.prototype.doFilter = function (filter) {
        var _this = this;
        this.vesselCallService.getByFilter(filter).subscribe(function (consignees) {
            _this.tableData = consignees;
            if (_this.filterQueue.length > 0) {
                _this.doFilter(_this.filterQueue.pop());
            }
        });
    };
    return VesselCallLookupDialogComponent;
}(base_lookup_dialog_component_1.BaseLookupDialogComponent));
VesselCallLookupDialogComponent = __decorate([
    core_1.Component({
        selector: 'vessel-call-lookup-dialog',
        template: __webpack_require__(1527),
        providers: [
            vessel_call_service_1.VesselCallService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof vessel_call_service_1.VesselCallService !== "undefined" && vessel_call_service_1.VesselCallService) === "function" && _a || Object])
], VesselCallLookupDialogComponent);
exports.VesselCallLookupDialogComponent = VesselCallLookupDialogComponent;
var _a;


/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PaymentMethod_1 = __webpack_require__(1358);
var CardType_1 = __webpack_require__(1450);
var CardBrand_1 = __webpack_require__(1449);
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentMethodType = "Card";
        if (data) {
            _this.authorizationCode = data.authorizationCode;
            if (data.cardType) {
                _this.cardType = new CardType_1.CardType(data.cardType);
                _this.cardTypeId = _this.cardType.uid;
            }
            else if (data.cardTypeId) {
                _this.cardTypeId = data.cardTypeId;
            }
            if (data.cardBrand) {
                _this.cardBrand = new CardType_1.CardType(data.cardBrand);
                _this.cardBrandId = _this.cardBrand.uid;
            }
            else if (data.cardBrandId) {
                _this.cardBrandId = data.cardBrandId;
            }
        }
        return _this;
    }
    Card.prototype.prepareData = function () {
        if (this.cardType instanceof CardType_1.CardType) {
            this.cardType = this.cardType.uid;
        }
        else if (this.cardTypeId) {
            this.cardType = this.cardTypeId;
        }
        if (this.cardBrand instanceof CardBrand_1.CardBrand) {
            this.cardBrand = this.cardBrand.uid;
        }
        else if (this.cardBrandId) {
            this.cardBrand = this.cardBrandId;
        }
    };
    return Card;
}(PaymentMethod_1.PaymentMethod));
exports.Card = Card;


/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var CardBrand = (function (_super) {
    __extends(CardBrand, _super);
    function CardBrand(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
        }
        return _this;
    }
    CardBrand.prototype.prepareData = function () { };
    return CardBrand;
}(DomainObject_1.DomainObject));
exports.CardBrand = CardBrand;


/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var CardType = (function (_super) {
    __extends(CardType, _super);
    function CardType(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
        }
        return _this;
    }
    CardType.prototype.prepareData = function () { };
    return CardType;
}(DomainObject_1.DomainObject));
exports.CardType = CardType;


/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PaymentMethod_1 = __webpack_require__(1358);
var Cash = (function (_super) {
    __extends(Cash, _super);
    function Cash(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentMethodType = "Cash";
        return _this;
    }
    Cash.prototype.prepareData = function () { };
    return Cash;
}(PaymentMethod_1.PaymentMethod));
exports.Cash = Cash;


/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChargeItemRateRange = (function (_super) {
    __extends(ChargeItemRateRange, _super);
    function ChargeItemRateRange(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.rangeStart = data.rangeStart;
            _this.rangeEnd = data.rangeEnd;
            _this.rangeType = data.rangeType;
            _this.rangeAmount = data.rangeAmount;
        }
        return _this;
    }
    ChargeItemRateRange.prototype.prepareData = function () {
    };
    return ChargeItemRateRange;
}(DomainObject_1.DomainObject));
exports.ChargeItemRateRange = ChargeItemRateRange;


/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var InvoiceLineItemCharge_1 = __webpack_require__(1384);
var Payment_1 = __webpack_require__(1361);
var CurrencyExchangeRate_1 = __webpack_require__(1364);
var ChargePaymentAllocation = (function (_super) {
    __extends(ChargePaymentAllocation, _super);
    function ChargePaymentAllocation(data) {
        var _this = _super.call(this, data) || this;
        _this.amountPaid = 0;
        if (data) {
            _this.amountPaid = data.amountPaid;
            if (data.invoiceLineItemCharge) {
                _this.invoiceLineItemCharge = new InvoiceLineItemCharge_1.InvoiceLineItemCharge(data.invoiceLineItemCharge);
            }
            if (data.payment) {
                _this.payment = new Payment_1.Payment(data.payment);
            }
            if (data.currencyExchangeRate) {
                _this.currencyExchangeRate = new CurrencyExchangeRate_1.CurrencyExchangeRate(data.currencyExchangeRate);
            }
        }
        return _this;
    }
    ChargePaymentAllocation.prototype.prepareData = function () {
        if (this.invoiceLineItemCharge instanceof InvoiceLineItemCharge_1.InvoiceLineItemCharge) {
            this.invoiceLineItemCharge = this.invoiceLineItemCharge.uid;
        }
        if (this.payment instanceof Payment_1.Payment) {
            this.payment = this.payment.uid;
        }
        if (this.currencyExchangeRate instanceof CurrencyExchangeRate_1.CurrencyExchangeRate) {
            this.currencyExchangeRate = this.currencyExchangeRate.uid;
        }
        else {
            this.currencyExchangeRate = this.currencyExchangeRateId;
        }
    };
    return ChargePaymentAllocation;
}(DomainObject_1.DomainObject));
exports.ChargePaymentAllocation = ChargePaymentAllocation;


/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PaymentMethod_1 = __webpack_require__(1358);
var Bank_1 = __webpack_require__(1389);
var ChequeType_1 = __webpack_require__(1455);
var Party_1 = __webpack_require__(1357);
var Cheque = (function (_super) {
    __extends(Cheque, _super);
    function Cheque(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentMethodType = "Cheque";
        if (data) {
            _this.chequeNumber = data.chequeNumber;
            _this.chequeDate = data.chequeDate;
            if (data.bank) {
                _this.bank = new Bank_1.Bank(data.bank);
                _this.bankId = _this.bank.uid;
            }
            else if (data.bankId) {
                _this.bankId = data.bankId;
            }
            if (data.chequeType) {
                _this.chequeType = new ChequeType_1.ChequeType(data.chequeType);
                _this.chequeTypeId = _this.chequeType.uid;
            }
            else if (data.chequeTypeId) {
                _this.chequeTypeId = data.chequeTypeId;
            }
            if (data.customer) {
                _this.customer = new Party_1.Party(data.customer);
                _this.customerId = _this.customer.uid;
            }
            else if (data.cardTypeId) {
                _this.customerId = data.customerId;
            }
        }
        return _this;
    }
    Cheque.prototype.prepareData = function () {
        if (this.bank instanceof Bank_1.Bank) {
            this.bank = this.bank.uid;
        }
        else if (this.bankId) {
            this.bank = this.bankId;
        }
        if (this.chequeType instanceof ChequeType_1.ChequeType) {
            this.chequeType = this.chequeType.uid;
        }
        else if (this.chequeTypeId) {
            this.chequeType = this.chequeTypeId;
        }
        if (this.customer instanceof Party_1.Party) {
            this.customer = this.customer.uid;
        }
        else if (this.customerId) {
            this.customer = this.customerId;
        }
    };
    return Cheque;
}(PaymentMethod_1.PaymentMethod));
exports.Cheque = Cheque;


/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var ChequeType = (function (_super) {
    __extends(ChequeType, _super);
    function ChequeType(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.name = data.name;
        }
        return _this;
    }
    ChequeType.prototype.prepareData = function () { };
    return ChequeType;
}(DomainObject_1.DomainObject));
exports.ChequeType = ChequeType;


/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var PaymentMethod_1 = __webpack_require__(1358);
var Payment_1 = __webpack_require__(1361);
var Card_1 = __webpack_require__(1448);
var Cash_1 = __webpack_require__(1451);
var Cheque_1 = __webpack_require__(1454);
var WireTransfer_1 = __webpack_require__(1457);
var AccountWithdrawal_1 = __webpack_require__(1388);
/**
 * Represents an invoice payment
 */
var PaymentLineItem = (function (_super) {
    __extends(PaymentLineItem, _super);
    function PaymentLineItem(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentMethod = new PaymentMethod_1.PaymentMethod({ paymentType: 'Cash' });
        if (data) {
            if (data.paymentMethod && typeof !data.paymentMethod !== "object") {
                switch (data.paymentMethod.paymentMethodType) {
                    case "Card":
                        _this.paymentMethod = new Card_1.Card(data.paymentMethod);
                        break;
                    case "Cheque":
                        _this.paymentMethod = new Cheque_1.Cheque(data.paymentMethod);
                        break;
                    case "Wire_Transfer":
                        _this.paymentMethod = new WireTransfer_1.WireTransfer(data.paymentMethod);
                        break;
                    case "Account_Withdrawal":
                        _this.paymentMethod = new AccountWithdrawal_1.AccountWithdrawal(data.paymentMethod);
                        break;
                    case "Cash":
                    default:
                        _this.paymentMethod = new Cash_1.Cash(data.paymentMethod);
                }
            }
            else if (data.paymentMethod instanceof PaymentMethod_1.PaymentMethod) {
                _this.paymentMethod = data.paymentMethod;
            }
            // @todo Ensure that we check to see if we already have a domain object before creating a new one!
            _this.payment = data.payment instanceof Payment_1.Payment ? data.payment : new Payment_1.Payment(data.payment);
            _this.paymentAmount = data.paymentAmount;
        }
        return _this;
    }
    PaymentLineItem.prototype.prepareData = function () {
        if (this.payment instanceof Payment_1.Payment) {
            this.payment = this.payment.uid;
        }
        else {
            this.payment = null;
        }
        if (this.paymentMethod && this.paymentMethod instanceof PaymentMethod_1.PaymentMethod) {
            this.paymentMethod.prepareData();
        }
    };
    return PaymentLineItem;
}(DomainObject_1.DomainObject));
exports.PaymentLineItem = PaymentLineItem;


/***/ }),

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PaymentMethod_1 = __webpack_require__(1358);
var Bank_1 = __webpack_require__(1389);
var WireTransfer = (function (_super) {
    __extends(WireTransfer, _super);
    function WireTransfer(data) {
        var _this = _super.call(this, data) || this;
        _this.paymentMethodType = "Wire_Transfer";
        if (data) {
            _this.referenceNumber = data.referenceNumber;
            _this.transferDate = data.transferDate;
            if (data.bank) {
                _this.bank = new Bank_1.Bank(data.bank);
                _this.bankId = _this.bank.uid;
            }
            else if (data.bankId) {
                _this.bankId = data.bankId;
            }
        }
        return _this;
    }
    WireTransfer.prototype.prepareData = function () {
        if (this.bank instanceof Bank_1.Bank) {
            this.bank = this.bank.uid;
        }
        else {
            this.bank = this.bankId;
        }
    };
    return WireTransfer;
}(PaymentMethod_1.PaymentMethod));
exports.WireTransfer = WireTransfer;


/***/ }),

/***/ 1458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var charge_item_service_1 = __webpack_require__(1420);
var base_lookup_dialog_component_1 = __webpack_require__(1365);
var ChargeItemLookupDialogComponent = (function (_super) {
    __extends(ChargeItemLookupDialogComponent, _super);
    function ChargeItemLookupDialogComponent(chargeItemService) {
        var _this = _super.call(this) || this;
        _this.chargeItemService = chargeItemService;
        return _this;
    }
    ChargeItemLookupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chargeItemService.getAll().subscribe(function (chargeItems) {
            _this.tableData = chargeItems;
        });
    };
    ChargeItemLookupDialogComponent.prototype.doFilter = function (filter) {
        var _this = this;
        this.chargeItemService.getByFilter(filter).subscribe(function (chargeItems) {
            _this.tableData = chargeItems;
            if (_this.filterQueue.length > 0) {
                _this.doFilter(_this.filterQueue.pop());
            }
        });
    };
    return ChargeItemLookupDialogComponent;
}(base_lookup_dialog_component_1.BaseLookupDialogComponent));
ChargeItemLookupDialogComponent = __decorate([
    core_1.Component({
        selector: 'charge-item-lookup-dialog',
        template: __webpack_require__(1521),
        providers: [
            charge_item_service_1.ChargeItemService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof charge_item_service_1.ChargeItemService !== "undefined" && charge_item_service_1.ChargeItemService) === "function" && _a || Object])
], ChargeItemLookupDialogComponent);
exports.ChargeItemLookupDialogComponent = ChargeItemLookupDialogComponent;
var _a;


/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var consignee_service_1 = __webpack_require__(1466);
var base_lookup_dialog_component_1 = __webpack_require__(1365);
var ConsigneeLookupDialogComponent = (function (_super) {
    __extends(ConsigneeLookupDialogComponent, _super);
    function ConsigneeLookupDialogComponent(consigneeService) {
        var _this = _super.call(this) || this;
        _this.consigneeService = consigneeService;
        return _this;
    }
    ConsigneeLookupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.consigneeService.getAll().subscribe(function (consignees) {
            _this.tableData = consignees;
        });
    };
    ConsigneeLookupDialogComponent.prototype.doFilter = function (filter) {
        var _this = this;
        this.consigneeService.getByFilter(filter).subscribe(function (consignees) {
            _this.tableData = consignees;
            if (_this.filterQueue.length > 0) {
                _this.doFilter(_this.filterQueue.pop());
            }
        });
    };
    return ConsigneeLookupDialogComponent;
}(base_lookup_dialog_component_1.BaseLookupDialogComponent));
ConsigneeLookupDialogComponent = __decorate([
    core_1.Component({
        selector: 'consignee-lookup-dialog',
        template: __webpack_require__(1523),
        providers: [
            consignee_service_1.ConsigneeService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof consignee_service_1.ConsigneeService !== "undefined" && consignee_service_1.ConsigneeService) === "function" && _a || Object])
], ConsigneeLookupDialogComponent);
exports.ConsigneeLookupDialogComponent = ConsigneeLookupDialogComponent;
var _a;


/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var forms_1 = __webpack_require__(23);
var combo_box_component_1 = __webpack_require__(1390);
var ComboBoxModule = (function () {
    function ComboBoxModule() {
    }
    return ComboBoxModule;
}());
ComboBoxModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            combo_box_component_1.ComboBoxComponent
        ],
        exports: [
            combo_box_component_1.ComboBoxComponent
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ComboBoxModule);
exports.ComboBoxModule = ComboBoxModule;


/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Party_1 = __webpack_require__(1357);
var Consignee = (function (_super) {
    __extends(Consignee, _super);
    function Consignee(data) {
        var _this = _super.call(this, data) || this;
        _this.partyTypeCode = "Consignee";
        return _this;
    }
    return Consignee;
}(Party_1.Party));
exports.Consignee = Consignee;


/***/ }),

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var Party_1 = __webpack_require__(1357);
var AccountWithdrawal_1 = __webpack_require__(1388);
var DepositAccount = (function (_super) {
    __extends(DepositAccount, _super);
    function DepositAccount(data) {
        var _this = _super.call(this, data) || this;
        _this.withdrawals = [];
        if (data) {
            _this.accountHolder = new Party_1.Party(data.accountHolder);
            if (data.deposits && data.deposits.length > 0) {
                data.deposits.forEach(function (withdrawal) {
                    _this.withdrawals.push(new AccountWithdrawal_1.AccountWithdrawal(withdrawal));
                });
            }
        }
        return _this;
    }
    DepositAccount.prototype.prepareData = function () {
    };
    return DepositAccount;
}(DomainObject_1.DomainObject));
exports.DepositAccount = DepositAccount;


/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var MeasurementInformation_1 = __webpack_require__(1377);
var PackageType_1 = __webpack_require__(1430);
var PackagingInformation = (function (_super) {
    __extends(PackagingInformation, _super);
    function PackagingInformation(data) {
        var _this = _super.call(this, data) || this;
        _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation();
        _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation();
        if (data) {
            _this.description = data.description;
            if (data.packageType) {
                _this.packageType = new PackageType_1.PackageType(data.packageType);
                _this.packageTypeId = _this.packageType.uid;
            }
            else {
                _this.packageType = _this.packageTypeId = null;
            }
            if (data.measurementInformation) {
                _this.measurementInformation = new MeasurementInformation_1.MeasurementInformation(data.measurementInformation);
            }
        }
        else {
            _this.packageType = _this.packageTypeId = null;
        }
        return _this;
    }
    PackagingInformation.prototype.prepareData = function () {
        if (this.packageType instanceof PackageType_1.PackageType) {
            this.packageType = this.packageType.uid;
        }
        else {
            this.packageType = this.packageTypeId;
        }
        this.measurementInformation.prepareData();
    };
    return PackagingInformation;
}(DomainObject_1.DomainObject));
exports.PackagingInformation = PackagingInformation;


/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DomainObject_1 = __webpack_require__(345);
var PartyContact = (function (_super) {
    __extends(PartyContact, _super);
    function PartyContact(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.contactTypeCode = data.contactTypeCode;
            _this.details = data.details;
        }
        return _this;
    }
    PartyContact.prototype.prepareData = function () { };
    return PartyContact;
}(DomainObject_1.DomainObject));
exports.PartyContact = PartyContact;


/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var Consignee_1 = __webpack_require__(1462);
var abstract_service_1 = __webpack_require__(346);
/**
 * Consignee service
 *
 * @export
 * @class ConsigneeService
 * @extends {AbstractService}
 */
var ConsigneeService = (function (_super) {
    __extends(ConsigneeService, _super);
    /**
     * Creates an instance of ConsigneeService.
     * @param {Http} http
     * @param {AppProperties} appProps
     *
     * @memberOf ConsigneeService
     */
    function ConsigneeService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    /**
     * Returns a list of consignee
     *
     * @returns {Observable<Array<Consignee>>}
     *
     * @memberOf ConsigneeService
     */
    ConsigneeService.prototype.get = function () {
        return this.http.get(this.apiBaseUrl + '/consignees', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a list of consignee
     *
     * @returns {Observable<Array<Consignee>>}
     *
     * @memberOf ConsigneeService
     */
    ConsigneeService.prototype.getAll = function () {
        return this.http.get(this.apiBaseUrl + '/consignees', this.getStandardRequestOptions())
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a filtered list of consignee
     *
     * @param {string} filter
     * @returns {Observable<Array<Consignee>>}
     *
     * @memberOf ConsigneeService
     */
    ConsigneeService.prototype.getByFilter = function (filter) {
        var options = this.getStandardRequestOptions();
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("filter", filter);
        options.search = searchParams;
        return this.http.get(this.apiBaseUrl + '/consignees', options)
            .map(this.extractMany)
            .catch(this.handleError);
    };
    /**
     * Returns a consignee identified by uid
     *
     * @param {number} uid
     * @returns {Observable<Consignee>}
     *
     * @memberOf ConsigneeService
     */
    ConsigneeService.prototype.getById = function (uid) {
        var _this = this;
        return this.http.get(this.apiBaseUrl + '/consignee/' + uid, this.getStandardRequestOptions())
            .map(function (res) { return _this.extractOne(res); })
            .catch(this.handleError);
    };
    ConsigneeService.prototype.extractOne = function (res) {
        return (res.json() || {});
    };
    ConsigneeService.prototype.extractMany = function (res) {
        var result = [];
        var jsonRes = res.json();
        if (jsonRes) {
            jsonRes.forEach(function (party) {
                result.push(new Consignee_1.Consignee(party));
            });
        }
        return result;
    };
    return ConsigneeService;
}(abstract_service_1.AbstractService));
ConsigneeService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], ConsigneeService);
exports.ConsigneeService = ConsigneeService;
var _a, _b;


/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Address_1 = __webpack_require__(1376);
/**
 * Party address view component
 *
 * @export
 * @class PartyAddressViewComponent
 * @implements {OnInit}
 */
var PartyAddressViewComponent = (function () {
    /**
     * Creates an instance of PartyAddressViewComponent.
     *
     * @memberOf PartyAddressViewComponent
     */
    function PartyAddressViewComponent() {
        this.viewType = "table";
    }
    /**
     * @inheritdoc
     * @memberOf PartyAddressViewComponent
     */
    PartyAddressViewComponent.prototype.ngOnInit = function () { };
    return PartyAddressViewComponent;
}());
__decorate([
    core_1.Input('partyAddress'),
    __metadata("design:type", typeof (_a = typeof Address_1.Address !== "undefined" && Address_1.Address) === "function" && _a || Object)
], PartyAddressViewComponent.prototype, "partyAddress", void 0);
__decorate([
    core_1.Input('viewType'),
    __metadata("design:type", String)
], PartyAddressViewComponent.prototype, "viewType", void 0);
PartyAddressViewComponent = __decorate([
    core_1.Component({
        selector: 'party-address',
        template: __webpack_require__(1528)
    }),
    __metadata("design:paramtypes", [])
], PartyAddressViewComponent);
exports.PartyAddressViewComponent = PartyAddressViewComponent;
var _a;


/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @see https://select2.github.io
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var core_2 = __webpack_require__(0);
var core_3 = __webpack_require__(0);
var AdvantumComboBoxDirective = (function () {
    function AdvantumComboBoxDirective(el, model) {
        this.el = el;
        this.model = model;
        this.advComboBox = {};
        this.onSelection = new core_2.EventEmitter();
        this.defaultOptions = {};
    }
    AdvantumComboBoxDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(85).then(__webpack_require__.bind(null, 1542)).then(function () {
            setTimeout(function () {
                _this.render();
            }, 500);
        });
    };
    AdvantumComboBoxDirective.prototype.render = function () {
        var _this = this;
        $(this.el.nativeElement).select2($.extend(this.advComboBox, this.defaultOptions));
        if (this.model) {
            var select2 = $(this.el.nativeElement).parent().find(".select2");
            select2.addClass(this.model.invalid ? 'ng-invalid' : 'ng-valid');
        }
        $(this.el.nativeElement).on("select2:select", function (e) {
            if (_this.model && e.params && e.params.data && e.params.data.id) {
                // Angular has values in select options as "index: id"
                var itemId = e.params.data.id.split(': ')[1];
                _this.model.control.setValue(itemId);
                var select2 = $(_this.el.nativeElement).parent().find(".select2");
                select2.removeClass('ng-invalid');
                select2.removeClass('ng-valid');
                select2.addClass(_this.model.invalid ? 'ng-invalid' : 'ng-valid');
                _this.onSelection.emit(itemId);
            }
        });
    };
    return AdvantumComboBoxDirective;
}());
__decorate([
    core_1.Input('advComboBox'),
    __metadata("design:type", Object)
], AdvantumComboBoxDirective.prototype, "advComboBox", void 0);
__decorate([
    core_3.Output(),
    __metadata("design:type", typeof (_a = typeof core_2.EventEmitter !== "undefined" && core_2.EventEmitter) === "function" && _a || Object)
], AdvantumComboBoxDirective.prototype, "onSelection", void 0);
AdvantumComboBoxDirective = __decorate([
    core_1.Directive({
        selector: '[advComboBox]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof forms_1.NgModel !== "undefined" && forms_1.NgModel) === "function" && _c || Object])
], AdvantumComboBoxDirective);
exports.AdvantumComboBoxDirective = AdvantumComboBoxDirective;
var _a, _b, _c;


/***/ }),

/***/ 1469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @see http://api.jqueryui.com/datepicker/
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var AdvantumDatepickerDirective = (function () {
    function AdvantumDatepickerDirective(el, model) {
        this.el = el;
        this.model = model;
        this.advDatepicker = {};
    }
    AdvantumDatepickerDirective.prototype.ngOnInit = function () {
        this.render();
    };
    AdvantumDatepickerDirective.prototype.render = function () {
        var _this = this;
        var onSelectCallbacks = [];
        var advDatepicker = this.advDatepicker || {};
        var element = $(this.el.nativeElement);
        if (advDatepicker.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(advDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (advDatepicker.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(advDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }
        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");
            var form = element.closest('form');
            if (typeof form.bootstrapValidator == 'function') {
                try {
                    form.bootstrapValidator('revalidateField', element);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
        var options = $.extend(advDatepicker, {
            defaultDate: new Date(),
            format: 'yy-mm-dd',
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                _this.model.control.setValue(selectedDate);
                onSelectCallbacks.forEach(function (callback) {
                    callback.call(callback, selectedDate);
                });
            }
        });
        element.datepicker(options);
        if (advDatepicker.defaultDate && advDatepicker.defaultDate !== '') {
            element.datepicker('setDate', advDatepicker.defaultDate);
        }
    };
    return AdvantumDatepickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AdvantumDatepickerDirective.prototype, "advDatepicker", void 0);
AdvantumDatepickerDirective = __decorate([
    core_1.Directive({
        selector: '[advDatepicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof forms_1.NgModel !== "undefined" && forms_1.NgModel) === "function" && _b || Object])
], AdvantumDatepickerDirective);
exports.AdvantumDatepickerDirective = AdvantumDatepickerDirective;
var _a, _b;


/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @see http://jdewit.github.io/bootstrap-timepicker/
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var AdvantumTimepickerDirective = (function () {
    function AdvantumTimepickerDirective(el, model) {
        this.el = el;
        this.model = model;
        this.advTimepicker = {};
        this.defaultOptions = {
            defaultTime: 'current',
            disableFocus: false,
            disableMousewheel: false,
            isOpen: false,
            minuteStep: 1,
            modalBackdrop: false,
            orientation: { x: 'auto', y: 'auto' },
            secondStep: 15,
            snapToStep: false,
            showInputs: true,
            showMeridian: false,
            showSeconds: false,
            template: 'dropdown'
        };
    }
    AdvantumTimepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(29).then(__webpack_require__.bind(null, 1460)).then(function () {
            setTimeout(function () {
                _this.render();
            }, 500);
        });
    };
    AdvantumTimepickerDirective.prototype.render = function () {
        var _this = this;
        $(this.el.nativeElement).timepicker($.extend(this.advTimepicker, this.defaultOptions));
        $(this.el.nativeElement).timepicker().on('changeTime.timepicker', function (e) {
            if (_this.model) {
                _this.setValue(_this.el.nativeElement);
            }
        });
        if (this.model) {
            this.setValue(this.el.nativeElement);
        }
    };
    AdvantumTimepickerDirective.prototype.setValue = function (el) {
        var timepicker = $(el).data("timepicker");
        if (!this.advTimepicker.showMeridian) {
            var time = timepicker.getTime();
            this.model.control.setValue(time);
            $(el).val(time);
        }
        else {
            this.model.control.setValue(timepicker.getTime());
        }
    };
    return AdvantumTimepickerDirective;
}());
__decorate([
    core_1.Input('advTimepicker'),
    __metadata("design:type", Object)
], AdvantumTimepickerDirective.prototype, "advTimepicker", void 0);
AdvantumTimepickerDirective = __decorate([
    core_1.Directive({
        selector: '[advTimepicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof forms_1.NgModel !== "undefined" && forms_1.NgModel) === "function" && _b || Object])
], AdvantumTimepickerDirective);
exports.AdvantumTimepickerDirective = AdvantumTimepickerDirective;
var _a, _b;


/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var module_1 = __webpack_require__(1480);
exports.InlineEditorModule = module_1.InlineEditorModule;
var inline_editor_component_1 = __webpack_require__(1393);
exports.InlineEditorComponent = inline_editor_component_1.InlineEditorComponent;


/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ 1473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputDateComponent = (function (_super) {
    __extends(InputDateComponent, _super);
    function InputDateComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.defaultDateFormat = 'mm/dd/yy';
        _this.isRegexTestable = true;
        return _this;
    }
    InputDateComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    InputDateComponent.prototype.focus = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.inputElement, 'focus', []);
            _this.renderer.invokeElementMethod(_this.inputElement, 'select', []);
        });
    };
    return InputDateComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputDateComponent.prototype, "inputRef", void 0);
InputDateComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-text',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<input #inputRef type=\"text\" \n                    class=\"form-control\" \n                    [(ngModel)]=\"context.value\" \n                    [required]=\"context.required\"\n                    [disabled]=\"context.disabled\" \n                    [name]=\"context.name\" \n                    [placeholder]=\"context.placeholder\" \n                    [advDatepicker]=\"{dateFormat: defaultDateFormat}\"\n                    [size]=\"context.size\"/>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputDateComponent);
exports.InputDateComponent = InputDateComponent;
var _a, _b;


/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputNumberComponent = (function (_super) {
    __extends(InputNumberComponent, _super);
    function InputNumberComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isNumeric = true;
        return _this;
    }
    InputNumberComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputNumberComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputNumberComponent.prototype, "inputRef", void 0);
InputNumberComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-number',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<input #inputRef type=\"number\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputNumberComponent);
exports.InputNumberComponent = InputNumberComponent;
var _a, _b;


/***/ }),

/***/ 1475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputPasswordComponent = (function (_super) {
    __extends(InputPasswordComponent, _super);
    function InputPasswordComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    InputPasswordComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    InputPasswordComponent.prototype.getPlaceholder = function () {
        return "*****";
    };
    return InputPasswordComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputPasswordComponent.prototype, "inputRef", void 0);
InputPasswordComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-password',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<input #inputRef type=\"password\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputPasswordComponent);
exports.InputPasswordComponent = InputPasswordComponent;
var _a, _b;


/***/ }),

/***/ 1476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputRangeComponent = (function (_super) {
    __extends(InputRangeComponent, _super);
    function InputRangeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isNumeric = true;
        return _this;
    }
    InputRangeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputRangeComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputRangeComponent.prototype, "inputRef", void 0);
InputRangeComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-range',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<input #inputRef type=\"range\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [min]=\"context.min\" [max]=\"context.max\"/>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputRangeComponent);
exports.InputRangeComponent = InputRangeComponent;
var _a, _b;


/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputSelectComponent = (function (_super) {
    __extends(InputSelectComponent, _super);
    function InputSelectComponent(renderer) {
        return _super.call(this, renderer) || this;
    }
    InputSelectComponent.prototype.getPlaceholder = function () {
        return this.optionSelected();
    };
    InputSelectComponent.prototype.optionSelected = function () {
        var options = this.context.options;
        var text = options.text, value = options.value;
        var optionSelectedText = this.getElementText(options);
        if (text !== null) {
            var childrens = Object.keys(options.data).reduce(function (childrens, objectKey) {
                if (options.data[objectKey].hasOwnProperty('children')) {
                    childrens.push(options.data[objectKey].children);
                }
                return childrens;
            }, []);
            var i = 0;
            while (i < childrens.length && text !== null) {
                optionSelectedText = this.getElementText({ data: childrens[i], text: text, value: value });
                i++;
            }
        }
        return (optionSelectedText !== null ? optionSelectedText : this.context.empty);
    };
    InputSelectComponent.prototype.getElementText = function (options) {
        var value = options.value, text = options.text;
        var dataLength = options.data.length;
        var i = 0;
        while (i < dataLength) {
            var element = options['data'][i];
            if (element[value] == this.context.value) {
                return element[text];
            }
            i++;
        }
        return null;
    };
    InputSelectComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputSelectComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputSelectComponent.prototype, "inputRef", void 0);
InputSelectComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-select',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<select #inputRef class=\"form-control\" [(ngModel)]=\"context.value\">\n                <template ngFor let-item [ngForOf]=\"context.options.data\">\n                    <optgroup *ngIf=\"item.children\" [label]=\"item[context.options.text]\">\n                        <option *ngFor=\"let child of item.children\" [value]=\"child[context.options.value]\">\n                            {{child[context.options.text]}}\n                        </option>\n                    </optgroup>\n                    <option *ngIf=\"!item.children\" [value]=\"item[context.options.value]\">{{item[context.options.text]}}</option>\n                </template>\n                </select>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputSelectComponent);
exports.InputSelectComponent = InputSelectComponent;
var _a, _b;


/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputTextComponent = (function (_super) {
    __extends(InputTextComponent, _super);
    function InputTextComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    InputTextComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    InputTextComponent.prototype.focus = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.inputElement, 'focus', []);
            _this.renderer.invokeElementMethod(_this.inputElement, 'select', []);
        });
    };
    return InputTextComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputTextComponent.prototype, "inputRef", void 0);
InputTextComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-text',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<input #inputRef type=\"text\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputTextComponent);
exports.InputTextComponent = InputTextComponent;
var _a, _b;


/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var input_base_1 = __webpack_require__(1359);
var InputTextareaComponent = (function (_super) {
    __extends(InputTextareaComponent, _super);
    function InputTextareaComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    InputTextareaComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTextareaComponent;
}(input_base_1.InputBase));
__decorate([
    core_1.ViewChild('inputRef'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InputTextareaComponent.prototype, "inputRef", void 0);
InputTextareaComponent = __decorate([
    core_1.Component({
        selector: 'inline-editor-textarea',
        styles: ["a {\n    text-decoration: none;\n    color: #428bca;\n    border-bottom: dashed 1px #428bca;\n    cursor: pointer;\n    line-height: 2;\n    margin-right: 5px;\n    margin-left: 5px;\n}\n\n\n/* editable-empty */\n\n.editable-empty,\n.editable-empty:hover,\n.editable-empty:focus,\na.editable-empty,\na.editable-empty:hover,\na.editable-empty:focus {\n    font-style: italic;\n    color: #DD1144;\n    text-decoration: none;\n}\n\n.inlineEditForm {\n    display: inline-block;\n    white-space: nowrap;\n    margin: 0;\n}\n\n#inlineEditWrapper {\n    display: inline-block;\n}\n\n.inlineEditForm input,\nselect {\n    width: auto;\n    display: inline;\n}\n\n.editInvalid {\n    color: #a94442;\n    margin-bottom: 0;\n}\n\n.error {\n    border-color: #a94442;\n}\n\n[hidden] {\n    display: none;\n}"],
        template: "<textarea #inputRef class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [rows]=\"context.rows\" [cols]=\"context.cols\" [disabled]=\"context.disabled\" [name]=\"context.name\" \n                      [placeholder]=\"context.placeholder\"></textarea>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputTextareaComponent);
exports.InputTextareaComponent = InputTextareaComponent;
var _a, _b;


/***/ }),

/***/ 1480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var forms_1 = __webpack_require__(23);
var advantum_input_module_1 = __webpack_require__(1373);
var inline_editor_component_1 = __webpack_require__(1393);
var InlineEditorModule = (function () {
    function InlineEditorModule() {
    }
    return InlineEditorModule;
}());
InlineEditorModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, advantum_input_module_1.AdvantumInputModule],
        declarations: [inline_editor_component_1.InlineEditorComponent].concat(inline_editor_component_1.InputComponents),
        exports: [inline_editor_component_1.InlineEditorComponent, advantum_input_module_1.AdvantumInputModule]
    }),
    __metadata("design:paramtypes", [])
], InlineEditorModule);
exports.InlineEditorModule = InlineEditorModule;


/***/ }),

/***/ 1481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ColorpickerDirective = (function () {
    function ColorpickerDirective(el) {
        this.el = el;
    }
    ColorpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(104).then(__webpack_require__.bind(null, 1532)).then(function () {
            _this.render();
        });
    };
    ColorpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).colorpicker(this.saColorpicker || {});
    };
    return ColorpickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ColorpickerDirective.prototype, "saColorpicker", void 0);
ColorpickerDirective = __decorate([
    core_1.Directive({
        selector: '[saColorpicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], ColorpickerDirective);
exports.ColorpickerDirective = ColorpickerDirective;
var _a;


/***/ }),

/***/ 1482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DuallistboxComponent = (function () {
    function DuallistboxComponent(el) {
        this.el = el;
        this.itemsChange = new core_1.EventEmitter();
        this.selected = [];
        this.nonSelectedListLabel = 'Non-selected';
        this.selectedListLabel = 'Selected';
        this.preserveSelectionOnMove = 'moved';
        this.moveOnSelect = false;
        this.size = 10;
        this.element = $(this.el.nativeElement);
    }
    DuallistboxComponent.prototype.onClick = function () {
        var _this = this;
        var selected = this.element.find('.smart-duallistbox').val() || [];
        if (selected.some(function (it) { return _this.selected.indexOf(it) == -1; })
            ||
                this.selected.some(function (it) { return selected.indexOf(it) == -1; })) {
            this.selected = selected;
            this.items.forEach(function (item) {
                if (_this.selected.indexOf(item.key) > -1) {
                    item.selected = true;
                }
                else {
                    delete item.selected;
                }
            });
            this.itemsChange.emit(this.items);
        }
    };
    DuallistboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = this.items.filter(function (item) { return item.selected; }).map(function (item) { return item.key; });
        __webpack_require__.e/* import() */(95).then(__webpack_require__.bind(null, 1536)).then(function () {
            _this.render();
        });
    };
    DuallistboxComponent.prototype.render = function () {
        var options = {
            nonSelectedFilter: this.nonSelectedFilter,
            nonSelectedListLabel: this.nonSelectedListLabel,
            selectedListLabel: this.selectedListLabel,
            preserveSelectionOnMove: this.preserveSelectionOnMove,
            moveOnSelect: this.moveOnSelect,
            size: this.size
        };
        this.element.bootstrapDualListbox(options);
    };
    return DuallistboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "itemsChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "nonSelectedFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "nonSelectedListLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "selectedListLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "preserveSelectionOnMove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DuallistboxComponent.prototype, "moveOnSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DuallistboxComponent.prototype, "size", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DuallistboxComponent.prototype, "onClick", null);
DuallistboxComponent = __decorate([
    core_1.Component({
        selector: 'duallistbox',
        template: "\n     <select multiple (click)=\"onChange()\" class=\"smart-duallistbox\">\n        <option *ngFor=\"let item of items\" [selected]=\"item.selected\" [value]=\"item.key\">{{item.value}}</option>\n      </select>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DuallistboxComponent);
exports.DuallistboxComponent = DuallistboxComponent;
var _a;


/***/ }),

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var FileInputComponent = (function () {
    function FileInputComponent() {
    }
    FileInputComponent.prototype.ngOnInit = function () {
    };
    return FileInputComponent;
}());
FileInputComponent = __decorate([
    core_1.Component({
        selector: 'sa-file-input',
        template: "\n    <div class=\"input input-file\">\n        <span class=\"button\"><input type=\"file\" #file  (change)=\"viewport.value = file.value\"/>Browse</span><input #viewport type=\"text\" placeholder=\"Include some files\" readonly/>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], FileInputComponent);
exports.FileInputComponent = FileInputComponent;


/***/ }),

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var IonSliderDirective = (function () {
    function IonSliderDirective(el) {
        this.el = el;
    }
    IonSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(89).then(__webpack_require__.bind(null, 1540)).then(function () {
            _this.render();
        });
    };
    IonSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).ionRangeSlider();
    };
    return IonSliderDirective;
}());
IonSliderDirective = __decorate([
    core_1.Directive({
        selector: '[ionSlider]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], IonSliderDirective);
exports.IonSliderDirective = IonSliderDirective;
var _a;


/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var KnobDirective = (function () {
    function KnobDirective(el) {
        var _this = this;
        this.el = el;
        __webpack_require__.e/* import() */(99).then(__webpack_require__.bind(null, 1534)).then(function () {
            _this.render();
        });
    }
    KnobDirective.prototype.render = function () {
        $(this.el.nativeElement).knob(this.saKnob || {});
    };
    return KnobDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], KnobDirective.prototype, "saKnob", void 0);
KnobDirective = __decorate([
    core_1.Directive({
        selector: '[saKnob]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], KnobDirective);
exports.KnobDirective = KnobDirective;
var _a;


/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var MaskedInput = (function () {
    function MaskedInput(el) {
        this.el = el;
    }
    MaskedInput.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(87).then(__webpack_require__.bind(null, 1541)).then(function () {
            var options = _this.saMaskedPlaceholder ? { placeholder: _this.saMaskedPlaceholder } : '';
            $(_this.el.nativeElement).mask(_this.saMaskedInput, options);
        });
    };
    return MaskedInput;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MaskedInput.prototype, "saMaskedInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MaskedInput.prototype, "saMaskedPlaceholder", void 0);
MaskedInput = __decorate([
    core_1.Directive({
        selector: '[saMaskedInput]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], MaskedInput);
exports.MaskedInput = MaskedInput;
var _a;


/***/ }),

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NouisliderDirective = (function () {
    function NouisliderDirective(el) {
        this.el = el;
        this.change = new core_1.EventEmitter();
    }
    NouisliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(97).then(__webpack_require__.bind(null, 1535)).then(function (noUiSlider) {
            var slider = _this.el.nativeElement;
            var options = _this.nouiSlider || {
                range: {
                    min: 0,
                    max: 1000
                },
            };
            noUiSlider.create(slider, options);
            slider.noUiSlider.on('change', function () {
                _this.change.emit(slider.noUiSlider.get());
            });
        });
    };
    return NouisliderDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NouisliderDirective.prototype, "nouiSlider", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NouisliderDirective.prototype, "change", void 0);
NouisliderDirective = __decorate([
    core_1.Directive({
        selector: '[nouiSlider]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], NouisliderDirective);
exports.NouisliderDirective = NouisliderDirective;
var _a;


/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var OnOffSwitchComponent = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new core_1.EventEmitter();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    return OnOffSwitchComponent;
}());
OnOffSwitchComponent.widgetsCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OnOffSwitchComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OnOffSwitchComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "modelChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "value", void 0);
OnOffSwitchComponent = __decorate([
    core_1.Component({
        selector: 'on-off-switch',
        template: __webpack_require__(1529),
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchComponent);
exports.OnOffSwitchComponent = OnOffSwitchComponent;


/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var dom_helpers_1 = __webpack_require__(1517);
var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
        dom_helpers_1.addClassName(this.el.nativeElement, ['sa-cloak', 'sa-hidden']);
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(84).then(__webpack_require__.bind(null, 1543)).then(function () {
            $(_this.el.nativeElement).select2();
            dom_helpers_1.removeClassName(_this.el.nativeElement, ['sa-hidden']);
        });
    };
    return Select2Directive;
}());
Select2Directive = __decorate([
    core_1.Directive({
        selector: '[select2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], Select2Directive);
exports.Select2Directive = Select2Directive;
var _a;


/***/ }),

/***/ 1490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var SmartClockpickerDirective = (function () {
    function SmartClockpickerDirective(el) {
        this.el = el;
    }
    SmartClockpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(92).then(__webpack_require__.bind(null, 1539)).then(function () {
            _this.render();
        });
    };
    SmartClockpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).clockpicker(this.smartClockpicker || {
            placement: 'top',
            donetext: 'Done'
        });
    };
    return SmartClockpickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SmartClockpickerDirective.prototype, "smartClockpicker", void 0);
SmartClockpickerDirective = __decorate([
    core_1.Directive({
        selector: '[smartClockpicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SmartClockpickerDirective);
exports.SmartClockpickerDirective = SmartClockpickerDirective;
var _a;


/***/ }),

/***/ 1491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var SmartSliderDirective = (function () {
    function SmartSliderDirective(el) {
        this.el = el;
    }
    SmartSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(94).then(__webpack_require__.bind(null, 1537)).then(function () {
            _this.render();
        });
    };
    SmartSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).bootstrapSlider();
    };
    return SmartSliderDirective;
}());
SmartSliderDirective = __decorate([
    core_1.Directive({
        selector: '[smartSlider]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SmartSliderDirective);
exports.SmartSliderDirective = SmartSliderDirective;
var _a;


/***/ }),

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var SmartTagsDirective = (function () {
    function SmartTagsDirective(el) {
        this.el = el;
    }
    SmartTagsDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(93).then(__webpack_require__.bind(null, 1538)).then(function () {
            _this.render();
        });
    };
    SmartTagsDirective.prototype.render = function () {
        $(this.el.nativeElement).tagsinput();
    };
    return SmartTagsDirective;
}());
SmartTagsDirective = __decorate([
    core_1.Directive({
        selector: '[smartTags]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SmartTagsDirective);
exports.SmartTagsDirective = SmartTagsDirective;
var _a;


/***/ }),

/***/ 1493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var SmartTimepickerDirective = (function () {
    function SmartTimepickerDirective(el) {
        this.el = el;
    }
    SmartTimepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(29/* duplicate */).then(__webpack_require__.bind(null, 1460)).then(function () {
            _this.render();
        });
    };
    SmartTimepickerDirective.prototype.render = function () {
        $(this.el.nativeElement).timepicker();
    };
    return SmartTimepickerDirective;
}());
SmartTimepickerDirective = __decorate([
    core_1.Directive({
        selector: '[smartTimepicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SmartTimepickerDirective);
exports.SmartTimepickerDirective = SmartTimepickerDirective;
var _a;


/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var UiDatepickerDirective = (function () {
    function UiDatepickerDirective(el) {
        this.el = el;
    }
    UiDatepickerDirective.prototype.ngOnInit = function () {
        var onSelectCallbacks = [];
        var saUiDatepicker = this.saUiDatepicker || {};
        var element = $(this.el.nativeElement);
        if (saUiDatepicker.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (saUiDatepicker.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }
        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");
            var form = element.closest('form');
            if (typeof form.bootstrapValidator == 'function') {
                try {
                    form.bootstrapValidator('revalidateField', element);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
        var options = $.extend(saUiDatepicker, {
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                onSelectCallbacks.forEach(function (callback) {
                    callback.call(callback, selectedDate);
                });
            }
        });
        element.datepicker(options);
    };
    return UiDatepickerDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UiDatepickerDirective.prototype, "saUiDatepicker", void 0);
UiDatepickerDirective = __decorate([
    core_1.Directive({
        selector: '[saUiDatepicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], UiDatepickerDirective);
exports.UiDatepickerDirective = UiDatepickerDirective;
var _a;


/***/ }),

/***/ 1495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var UiSpinner = (function () {
    function UiSpinner(el) {
        this.el = el;
    }
    UiSpinner.prototype.ngOnInit = function () {
        var options;
        if (this.saUiSpinner == 'decimal') {
            options = {
                step: 0.01,
                numberFormat: "n"
            };
        }
        else if (this.saUiSpinner == 'currency') {
            options = {
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            };
        }
        $(this.el.nativeElement).spinner((options || this.saUiSpinner) || {});
    };
    return UiSpinner;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UiSpinner.prototype, "saUiSpinner", void 0);
UiSpinner = __decorate([
    core_1.Directive({
        selector: '[saUiSpinner]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], UiSpinner);
exports.UiSpinner = UiSpinner;
var _a;


/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var XEditableComponent = (function () {
    function XEditableComponent(el) {
        this.el = el;
        this.model = '';
        this.modelChange = new core_1.EventEmitter();
        this.type = 'text';
        this.disabled = false;
        this.widgetId = 'x-editable' + XEditableComponent.widgetsCounter++;
    }
    XEditableComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(105).then(__webpack_require__.bind(null, 1531)).then(function () {
            _this.render();
        });
    };
    XEditableComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this._options && ['type',
            'placement',
            'mode',
            'value',
            'disabled',
            'placeholder',
            'originalTitle',
            'source',
            'showbuttons',
            'template',
            'viewformat',
            'format',
            'pk',
        ].some(function (it) {
            return _this._options[it] != _this[it];
        })) {
            this.render();
        }
    };
    XEditableComponent.prototype.render = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var options = {
            type: this.type,
            placement: this.placement,
            mode: this.mode,
            value: this.value,
            disabled: this.disabled,
            placeholder: this.placeholder,
            originalTitle: this.originalTitle,
            source: this.source,
            showbuttons: this.showbuttons,
            template: this.template,
            viewformat: this.viewformat,
            format: this.format,
            pk: this.pk,
        };
        element.editable('destroy');
        element.editable(options);
        element.on('save', function (e, params) {
            _this.model = params.newValue;
            _this.modelChange.emit(params.newValue);
        });
        this._options = options;
    };
    return XEditableComponent;
}());
XEditableComponent.widgetsCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "modelChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "placement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "originalTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "showbuttons", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "viewformat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "className", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "pk", void 0);
XEditableComponent = __decorate([
    core_1.Component({
        selector: 'x-editable',
        template: '<a attr.id="{{widgetId}}" class="{{className}}"><ng-content></ng-content>{{model }}</a>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], XEditableComponent);
exports.XEditableComponent = XEditableComponent;
var _a;


/***/ }),

/***/ 1497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var common_1 = __webpack_require__(9);
var select2_module_1 = __webpack_require__(1395);
var on_off_switch_module_1 = __webpack_require__(1394);
var SmartadminFormsLiteModule = (function () {
    function SmartadminFormsLiteModule() {
    }
    return SmartadminFormsLiteModule;
}());
SmartadminFormsLiteModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [],
        exports: [
            select2_module_1.Select2Module, on_off_switch_module_1.OnOffSwitchModule
        ]
    }),
    __metadata("design:paramtypes", [])
], SmartadminFormsLiteModule);
exports.SmartadminFormsLiteModule = SmartadminFormsLiteModule;


/***/ }),

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var footer_component_1 = __webpack_require__(716);
exports.FooterComponent = footer_component_1.FooterComponent;


/***/ }),

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activities_message_component_1 = __webpack_require__(717);
exports.ActivitiesMessageComponent = activities_message_component_1.ActivitiesMessageComponent;


/***/ }),

/***/ 1500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activities_notification_component_1 = __webpack_require__(718);
exports.ActivitiesNotificationComponent = activities_notification_component_1.ActivitiesNotificationComponent;


/***/ }),

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activities_task_component_1 = __webpack_require__(719);
exports.ActivitiesTaskComponent = activities_task_component_1.ActivitiesTaskComponent;


/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var activities_component_1 = __webpack_require__(720);
exports.ActivitiesComponent = activities_component_1.ActivitiesComponent;
var activities_message_1 = __webpack_require__(1499);
exports.ActivitiesMessageComponent = activities_message_1.ActivitiesMessageComponent;
var activities_task_1 = __webpack_require__(1501);
exports.ActivitiesTaskComponent = activities_task_1.ActivitiesTaskComponent;
var activities_notification_1 = __webpack_require__(1500);
exports.ActivitiesNotificationComponent = activities_notification_1.ActivitiesNotificationComponent;


/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collapse_menu_component_1 = __webpack_require__(721);
exports.CollapseMenuComponent = collapse_menu_component_1.CollapseMenuComponent;


/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var full_screen_component_1 = __webpack_require__(722);
exports.FullScreenComponent = full_screen_component_1.FullScreenComponent;


/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var header_component_1 = __webpack_require__(723);
exports.HeaderComponent = header_component_1.HeaderComponent;
var header_module_1 = __webpack_require__(724);
exports.HeaderModule = header_module_1.HeaderModule;
__export(__webpack_require__(1504));
__export(__webpack_require__(1503));
__export(__webpack_require__(1506));
__export(__webpack_require__(1502));


/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var recent_projects_component_1 = __webpack_require__(725);
exports.RecentProjectsComponent = recent_projects_component_1.RecentProjectsComponent;
var recent_projects_service_1 = __webpack_require__(726);
exports.RecentProjectsService = recent_projects_service_1.RecentProjectsService;


/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var layout_switcher_component_1 = __webpack_require__(727);
exports.LayoutSwitcherComponent = layout_switcher_component_1.LayoutSwitcherComponent;
var layout_service_1 = __webpack_require__(53);
exports.LayoutService = layout_service_1.LayoutService;
var layout_module_1 = __webpack_require__(711);
exports.SmartadminLayoutModule = layout_module_1.SmartadminLayoutModule;
__export(__webpack_require__(1498));
__export(__webpack_require__(1505));
__export(__webpack_require__(1508));
__export(__webpack_require__(1509));
__export(__webpack_require__(1510));


/***/ }),

/***/ 1508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var navigation_component_1 = __webpack_require__(730);
exports.NavigationComponent = navigation_component_1.NavigationComponent;
var big_breadcrumbs_component_1 = __webpack_require__(728);
exports.BigBreadcrumbsComponent = big_breadcrumbs_component_1.BigBreadcrumbsComponent;
var minify_menu_component_1 = __webpack_require__(729);
exports.MinifyMenuComponent = minify_menu_component_1.MinifyMenuComponent;
var smart_menu_directive_1 = __webpack_require__(732);
exports.SmartMenuDirective = smart_menu_directive_1.SmartMenuDirective;
var navigation_module_1 = __webpack_require__(731);
exports.NavigationModule = navigation_module_1.NavigationModule;


/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ribbon_component_1 = __webpack_require__(733);
exports.RibbonComponent = ribbon_component_1.RibbonComponent;


/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shortcut_component_1 = __webpack_require__(734);
exports.ShortcutComponent = shortcut_component_1.ShortcutComponent;


/***/ }),

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        var _this = this;
        if (query) {
            var lowerCaseQuery_1 = query.toLowerCase();
            return array.filter(function (row) {
                return _this.queryObject(lowerCaseQuery_1, row);
            });
        }
        return array;
    };
    /**
     * This method searches the object the specified query
     *
     * @param query - The string/number to search for
     * @param row - The object/string/number to search on
     * @param level - The level of nested objects allowed to search on
     */
    DataFilterPipe.prototype.queryObject = function (query, row, level, maxLevel) {
        var _this = this;
        if (level === void 0) { level = 1; }
        if (maxLevel === void 0) { maxLevel = 2; }
        // For now, let's only search down to direct children
        if (level > maxLevel)
            return false;
        return Object.keys(row).some(function (key) {
            return key !== 'uuid' && key !== 'uid' && row[key] ?
                ((typeof row[key] == "string") ?
                    row[key].toLowerCase().indexOf(query) > -1 :
                    (typeof row[key] == "number") ?
                        row[key] == new Number(query) :
                        (typeof row[key] == "object") ?
                            _this.queryObject(query, row[key], level + 1) : false) : false;
        });
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    core_1.Pipe({
        name: "dataFilter"
    }),
    __metadata("design:paramtypes", [])
], DataFilterPipe);
exports.DataFilterPipe = DataFilterPipe;


/***/ }),

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var enum_base_pipe_1 = __webpack_require__(1396);
var Invoice_1 = __webpack_require__(1360);
var InvoiceStatusPipe = (function (_super) {
    __extends(InvoiceStatusPipe, _super);
    function InvoiceStatusPipe() {
        var _this = _super.call(this) || this;
        _this.values = Invoice_1.Invoice.INVOICE_STATUS;
        return _this;
    }
    return InvoiceStatusPipe;
}(enum_base_pipe_1.EnumBasePipe));
InvoiceStatusPipe = __decorate([
    core_1.Pipe({
        name: 'invoicestatus'
    }),
    __metadata("design:paramtypes", [])
], InvoiceStatusPipe);
exports.InvoiceStatusPipe = InvoiceStatusPipe;


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var enum_base_pipe_1 = __webpack_require__(1396);
var Invoice_1 = __webpack_require__(1360);
var InvoiceTypePipe = (function (_super) {
    __extends(InvoiceTypePipe, _super);
    function InvoiceTypePipe() {
        var _this = _super.call(this) || this;
        _this.values = Invoice_1.Invoice.INVOICE_TYPES;
        return _this;
    }
    return InvoiceTypePipe;
}(enum_base_pipe_1.EnumBasePipe));
InvoiceTypePipe = __decorate([
    core_1.Pipe({
        name: 'invoicetype'
    }),
    __metadata("design:paramtypes", [])
], InvoiceTypePipe);
exports.InvoiceTypePipe = InvoiceTypePipe;


/***/ }),

/***/ 1514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var data_filter_pipe_1 = __webpack_require__(1511);
var invoice_type_pipe_1 = __webpack_require__(1513);
var invoice_status_pipe_1 = __webpack_require__(1512);
var PipeModule = (function () {
    function PipeModule() {
    }
    return PipeModule;
}());
PipeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [data_filter_pipe_1.DataFilterPipe, invoice_type_pipe_1.InvoiceTypePipe, invoice_status_pipe_1.InvoiceStatusPipe],
        exports: [data_filter_pipe_1.DataFilterPipe, invoice_type_pipe_1.InvoiceTypePipe, invoice_status_pipe_1.InvoiceStatusPipe]
    }),
    __metadata("design:paramtypes", [])
], PipeModule);
exports.PipeModule = PipeModule;


/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ProgressbarDirective = (function () {
    function ProgressbarDirective(el) {
        this.el = el;
    }
    ProgressbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(103).then(__webpack_require__.bind(null, 1533)).then(function () {
            $(_this.el.nativeElement).progressbar(_this.saProgressbar || {
                display_text: 'fill'
            });
        });
    };
    return ProgressbarDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProgressbarDirective.prototype, "saProgressbar", void 0);
ProgressbarDirective = __decorate([
    core_1.Directive({
        selector: '[saProgressbar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], ProgressbarDirective);
exports.ProgressbarDirective = ProgressbarDirective;
var _a;


/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var progressbar_directive_1 = __webpack_require__(1515);
var SmartProgressbarModule = (function () {
    function SmartProgressbarModule() {
    }
    return SmartProgressbarModule;
}());
SmartProgressbarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [progressbar_directive_1.ProgressbarDirective],
        exports: [progressbar_directive_1.ProgressbarDirective],
    }),
    __metadata("design:paramtypes", [])
], SmartProgressbarModule);
exports.SmartProgressbarModule = SmartProgressbarModule;


/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * by griga
 */

function addClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    });
    return el;
}
exports.addClassName = addClassName;
function removeClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
    return el;
}
exports.removeClassName = removeClassName;


/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

var dataTable_directive = __webpack_require__(1363);
var defaultSorter_directive = __webpack_require__(1398);
var paginator_component = __webpack_require__(1399);
var bootstrapPaginator_component = __webpack_require__(1397);
var dataTable_module = __webpack_require__(1519);

exports.DataTable = dataTable_directive.DataTable;
exports.DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
exports.Paginator = paginator_component.Paginator;
exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;
exports.DataTableModule = dataTable_module.DataTableModule;


/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var DataTable_1 = __webpack_require__(1363);
var DefaultSorter_1 = __webpack_require__(1398);
var Paginator_1 = __webpack_require__(1399);
var BootstrapPaginator_1 = __webpack_require__(1397);
var DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
DataTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            DataTable_1.DataTable,
            DefaultSorter_1.DefaultSorter,
            Paginator_1.Paginator,
            BootstrapPaginator_1.BootstrapPaginator
        ],
        exports: [
            DataTable_1.DataTable,
            DefaultSorter_1.DefaultSorter,
            Paginator_1.Paginator,
            BootstrapPaginator_1.BootstrapPaginator
        ]
    })
], DataTableModule);
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=DataTableModule.js.map

/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1390));
__export(__webpack_require__(1461));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1521:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <form #componentForm=ngForm novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Charge Item Lookup</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" name=\"filter\" class=\"form-control\"\r\n                                    [ngModel]=\"filterQuery\"\r\n                                    (ngModelChange)=\"onFilterChange($event)\"\r\n                                    placeholder=\"Search charge items\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table table-bordered table-striped table-hover\" [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of mf.data\" class=\"cursor-pointer\" (dblclick)=\"onDblClickRow($event, item)\" title=\"Double-click to select only this row.\">\r\n                                        <td class=\"selection-column\">\r\n                                            <input [type]=\"multiple ? 'checkbox' : 'radio'\" name=\"{{ !multiple ? 'entity' : 'entity_' + item.uid }}\" (change)=\"onChange($event, item)\" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"item.code\">{{ item?.code }}</div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"item.description\">{{ item.description }}</div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"!mf.data.length\"><td colspan=\"2\">No results to display</td></tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td colspan=\"3\">\r\n                                            <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalDialog.hide()\">\r\n                        Cancel\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">\r\n                        Select\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1522:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <form #componentForm=ngForm novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">{{ dialogTitle }}</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <p class=\"text-lg\">\r\n                        {{ confirmationQuestion }}\r\n                    </p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onClickNo()\">\r\n                        No\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickYes()\">\r\n                        Yes\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1523:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <form #componentForm=ngForm novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Consignee Lookup</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" name=\"filter\" class=\"form-control\"\r\n                                    [ngModel]=\"filterQuery\"\r\n                                    (ngModelChange)=\"onFilterChange($event)\"\r\n                                    placeholder=\"Search consignees\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table table-bordered table-striped table-hover\" [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of mf.data\" class=\"cursor-pointer\" (dblclick)=\"onDblClickRow($event, item)\" title=\"Double-click to select only this row.\">\r\n                                        <td class=\"selection-column\">\r\n                                            <input [type]=\"multiple ? 'checkbox' : 'radio'\" name=\"{{ !multiple ? 'entity' : 'entity_' + item.uid }}\" (change)=\"onChange($event, item)\" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"item.name\">{{ item?.name }}</div>\r\n                                            <div *ngIf=\"item.freeText\">{{ item.freeText ? item.freeText : '' }}</div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"!mf.data.length\"><td colspan=\"2\">No results to display</td></tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td colspan=\"2\">\r\n                                            <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalDialog.hide()\">\r\n                        Cancel\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">\r\n                        Select\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1524:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <form #componentForm=ngForm novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Exchange Rates</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <strong>Default Currency:</strong> {{ defaultCurrency?.isoCode }}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table table-bordered table-striped table-hover\" [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>{{ today | moment : 'D MMMM YYYY' }}</th>\r\n                                        <th>Buy</th>\r\n                                        <th>Sell</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of mf.data\">\r\n                                        <td>{{ item?.currency?.name }}</td>\r\n                                        <td>{{ item.sellingRate | number:'1.2-2' }}</td>\r\n                                        <td>{{ item.buyingRate | number:'1.2-2' }}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"!mf.data.length\"><td colspan=\"3\">No results to display</td></tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td colspan=\"3\">\r\n                                            <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalDialog.hide()\">\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1525:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalDialogLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div>\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">{{ title }}</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <p class=\"text-lg\">\r\n                        {{ message }}\r\n                    </p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"hideDialog()\">\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1526:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <form #componentForm=ngForm novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Shipment Lookup</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" name=\"filter\" class=\"form-control\"\r\n                                    [ngModel]=\"filterQuery\"\r\n                                    (ngModelChange)=\"onFilterChange($event)\"\r\n                                    placeholder=\"Search shipments\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table table-bordered table-striped table-hover\" [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th>Shipment No.</th>\r\n                                        <th>Consignee</th>\r\n                                        <th>Vessel</th>\r\n                                        <th>Arrival Date</th>\r\n                                        <th>Approved</th>\r\n                                        <th>Validated</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of mf.data\" class=\"cursor-pointer\" (dblclick)=\"onDblClickRow($event, item)\" title=\"Double-click to select only this row.\">\r\n                                        <td class=\"selection-column\">\r\n                                            <input [type]=\"multiple ? 'checkbox' : 'radio'\" name=\"{{ !multiple ? 'entity' : 'entity_' + item.uid }}\" (change)=\"onChange($event, item)\" />\r\n                                        </td>\r\n                                        <td>{{ item?.shipmentNumber }}</td>\r\n                                        <td>{{ item?.consignee?.name }}</td>\r\n                                        <td>{{ item?.vesselCall?.vessel?.vesselName }}</td>\r\n                                        <td>{{ item?.vesselCall?.actualArrivalDateTime | moment : \"YYYY-MM-DDTHH:mm\" }}</td>\r\n                                        <td>{{ item?.status == 'Approved' ? 'Yes' : 'No' }}</td>\r\n                                        <td>{{ item?.status == 'Approved' || item?.status == 'Validated' ? 'Yes' : 'No' }}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"!mf.data.length\"><td colspan=\"7\">No results to display</td></tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td colspan=\"7\">\r\n                                            <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalDialog.hide()\">\r\n                        Cancel\r\n                    </button>\r\n                    <button type=\"submit\" [disabled]=\"selectedItems.length == 0\" class=\"btn btn-primary\">\r\n                        Select\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1527:
/***/ (function(module, exports) {

module.exports = "<div bsModal #modalDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <form #componentForm=ngForm novalidate=\"novalidate\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"modalDialog.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Vessel-Call Lookup</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" name=\"filter\" class=\"form-control\"\r\n                                    [ngModel]=\"filterQuery\"\r\n                                    (ngModelChange)=\"onFilterChange($event)\"\r\n                                    placeholder=\"Search vessel calls\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table table-bordered table-striped table-hover\" [mfData]=\"tableData | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th>Voyage Number</th>\r\n                                        <th>Vessel Name</th>\r\n                                        <th>Expected Arrival Date</th>\r\n                                        <th>Actual Arrival Date</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of mf.data\" class=\"cursor-pointer\" (dblclick)=\"onDblClickRow($event, item)\" title=\"Double-click to select only this row.\">\r\n                                        <td class=\"selection-column\">\r\n                                            <input [type]=\"multiple ? 'checkbox' : 'radio'\" name=\"{{ !multiple ? 'entity' : 'entity_' + item.uid }}\" (change)=\"onChange($event, item)\" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <strong>{{ item?.voyageNumber }}</strong>\r\n                                        </td>\r\n                                        <td>\r\n                                            {{ item?.vessel.vesselName }}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{ item?.expectedArrivalDateTime | moment : 'D MMMM YYYY hh:mmA' }}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{ item?.actualArrivalDateTime | moment : 'D MMMM YYYY hh:mmA' }}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"!mf.data.length\"><td colspan=\"5\">No results to display</td></tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td colspan=\"5\">\r\n                                            <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalDialog.hide()\">\r\n                        Cancel\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">\r\n                        Select\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1528:
/***/ (function(module, exports) {

module.exports = "<template [ngIf]=\"viewType == 'table'\">                                            \n    <table class=\"table table-bordered\">\n        <tbody>\n            <tr *ngIf=\"partyAddress?.streetAddress\">\n                <th>Street Address</th><td>{{ partyAddress?.streetAddress }}</td>\n            </tr>\n            <tr *ngIf=\"partyAddress?.streetAddressDetails\">\n                <th>Street Address Details</th><td>{{ partyAddress?.streetAddressDetails }}</td>\n            </tr>\n            <tr *ngIf=\"partyAddress?.city\">\n                <th>City</th><td>{{ partyAddress?.city }}</td>\n            </tr>\n            <tr *ngIf=\"partyAddress?.province\">\n                <th>Parish</th><td>{{ partyAddress?.province }}</td>\n            </tr>\n            <tr *ngIf=\"partyAddress?.countryCode\">\n                <th>Country</th><td>{{ partyAddress?.countryCode }}</td>\n            </tr>\n            <tr *ngIf=\"partyAddress?.freeText\">\n                <td colspan=\"2\">{{ partyAddress?.freeText }}</td>\n            </tr>\n        </tbody>\n    </table>\n</template>\n<template [ngIf]=\"viewType == 'text'\">\n    <div *ngIf=\"partyAddress?.streetAddress\">\n        {{ partyAddress?.streetAddress }}\n        <span *ngIf=\"partyAddress?.streetAddressDetails\">, \n            {{ partyAddress?.streetAddressDetails }}</span>\n    </div>\n    <div>\n        <span *ngIf=\"partyAddress?.city\">\n            {{ partyAddress?.city }}\n        </span>\n        <span *ngIf=\"partyAddress?.city && partyAddress?.province\">, </span>\n        <span *ngIf=\"partyAddress?.province\">\n            {{ partyAddress?.province }}\n        </span>\n    </div>\n    <div *ngIf=\"partyAddress?.countryCode\">\n        {{ partyAddress?.countryCode }}\n    </div>\n    <div *ngIf=\"partyAddress?.freeText\">\n        {{ partyAddress?.freeText }}\n    </div>\n</template>"

/***/ }),

/***/ 1529:
/***/ (function(module, exports) {

module.exports = "<div class=\"onoffswitch-container\">\n  <span class=\"onoffswitch-title\">{{title}}<ng-content></ng-content></span>\n  <span class=\"onoffswitch\">\n    <input type=\"checkbox\" class=\"onoffswitch-checkbox\" [(ngModel)]=\"value\" [checked]=\"value\"\n           (ngModelChange)=\"onChange()\"\n           id=\"{{widgetId}}\"/>\n    <label class=\"onoffswitch-label\" htmlFor=\"{{widgetId}}\">\n      <span class=\"onoffswitch-inner\"  data-swchon-text=\"ON\"\n            data-swchoff-text=\"OFF\"></span>\n        <span class=\"onoffswitch-switch\"></span>\n    </label>\n  </span>\n</div>\n"

/***/ }),

/***/ 1891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var report_service_1 = __webpack_require__(2151);
var notification_service_1 = __webpack_require__(85);
var ReportListComponent = (function () {
    function ReportListComponent(reportService, notificationService) {
        this.reportService = reportService;
        this.notificationService = notificationService;
    }
    ReportListComponent.prototype.ngOnInit = function () {
    };
    ReportListComponent.prototype.downloadAuthenticationStatisticsPdfReport = function () {
        var _this = this;
        this.reportService.getAuthenticationStatisticsReport().subscribe(function (blob) { return _this.initiateDownload(blob); }, function () { return _this.showDownloadFailureNotification(); });
    };
    ReportListComponent.prototype.initiateDownload = function (blob) {
        window.open(window.URL.createObjectURL(blob));
    };
    ReportListComponent.prototype.showDownloadFailureNotification = function () {
        this.notificationService.smallBox({
            title: "File Download Failed",
            content: "We were unable to download the file you requested.",
            color: "#739E73",
            timeout: 5000,
            icon: "fa fa-warnings"
        });
    };
    return ReportListComponent;
}());
ReportListComponent = __decorate([
    core_1.Component({
        selector: 'report-list',
        template: __webpack_require__(2498),
        providers: [
            report_service_1.ReportService,
            notification_service_1.NotificationService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof report_service_1.ReportService !== "undefined" && report_service_1.ReportService) === "function" && _a || Object, typeof (_b = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" && _b || Object])
], ReportListComponent);
exports.ReportListComponent = ReportListComponent;
var _a, _b;


/***/ }),

/***/ 2139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(33);
// Components
var report_list_component_1 = __webpack_require__(1891);
exports.routes = [
    { path: '', redirectTo: 'report-list', pathMatch: 'full' },
    { path: 'report-list', component: report_list_component_1.ReportListComponent, data: { pageTitle: 'Report List' } },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ }),

/***/ 2151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_properties_1 = __webpack_require__(154);
var http_1 = __webpack_require__(83);
var abstract_service_1 = __webpack_require__(346);
var ReportService = (function (_super) {
    __extends(ReportService, _super);
    function ReportService(http, appProps) {
        var _this = _super.call(this, appProps) || this;
        _this.http = http;
        return _this;
    }
    ReportService.prototype.getAuthenticationStatisticsReport = function () {
        var options = this.getStandardRequestOptions();
        options.responseType = http_1.ResponseContentType.Blob;
        return this.http.get(this.apiBaseUrl + '/report/user/authentication-statistics', options)
            .map(function (response) {
            return response.blob();
        }).catch(this.handleError);
    };
    return ReportService;
}(abstract_service_1.AbstractService));
ReportService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_properties_1.AppProperties)),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof app_properties_1.AppProperties !== "undefined" && app_properties_1.AppProperties) === "function" && _b || Object])
], ReportService);
exports.ReportService = ReportService;
var _a, _b;


/***/ }),

/***/ 2498:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['Manifest', 'Shipment', model?.shipmentNumber]\" icon=\"desktop\"\n            class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\"></sa-big-breadcrumbs>\n    </div>\n\n    <sa-widget [editbutton]=\"false\" [deletebutton]=\"false\" color=\"darken\">\n        <header>\n            <h2>Report List</h2>\n        </header>\n\n        <!-- widget div-->\n        <div>\n\n            <!-- widget content -->\n            <div class=\"widget-body\">\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <h4>User Reports</h4>\n                        <table class=\"table table-forum\">\n                            <thead>\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Description</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td><a (click)=\"downloadAuthenticationStatisticsPdfReport()\">Authentication Statistics</a></td>\n                                    <td>Provides a list of all users and the successful and unsuccessful login attempts associated with them.</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </sa-widget>\n</div>"

/***/ })

});
//# sourceMappingURL=16.map