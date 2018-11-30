(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top></app-top>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BahaaSimpleInvFront';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _receiving_receiving_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receiving/receiving.component */ "./src/app/receiving/receiving.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'mainmenu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"] },
    { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
    { path: 'reader', component: _receiving_receiving_component__WEBPACK_IMPORTED_MODULE_8__["ReceivingComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _top_top_component__WEBPACK_IMPORTED_MODULE_6__["TopComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _receiving_receiving_component__WEBPACK_IMPORTED_MODULE_8__["ReceivingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\t\r\n\tposition: relative;\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tpadding: 5px;\r\n}\r\n    \r\n.selector, .right{\r\n\t  flex: 1;\r\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class =\"container\" >\n        <div class=\"selector\" id=\"selector\"> \n          <div class= \"selectorimg\" id=\"selectorimg\" ></div>\n        </div>\n        <div class=\"option1\" id=\"option1\">\n          <a [routerLink]=\"['/reader']\">          \n          <div  style=\"float: right;\n            background-color: rgb(49, 54, 49);\n            border: none;\n            color: white;\n            padding: 20px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            font-size: 40x;\n            margin: 4px 2px;\n            cursor: pointer;\">\n            Barcode Reader\n           </div>\n            </a>\n          </div>\n        <div class = \"right\"> \n      </div>\n    </div>\n    <div class =\"container\" >\n        <div class=\"selector\" id=\"selector\"> \n          <div class= \"selectorimg\" id=\"selectorimg\" ></div>\n        </div>\n        <div class=\"option1\" id=\"option1\">\n          <div style = \"text-align: right; cursor: pointer; color:black;\"  (click)= \"printReport()\">          \n          <div  style=\"float: right;\n            background-color: rgb(49, 54, 49);\n            border: none;\n            color: white;\n            padding: 20px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            font-size: 40x;\n            margin: 4px 2px;\n            cursor: pointer;\">\n            Print Report on Desktop\n           </div>\n            </div>\n          </div>\n        <div class = \"right\"> \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _print_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../print-report.service */ "./src/app/print-report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(report) {
        this.report = report;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.printReport = function () {
        console.log("attempting to print");
        this.report.requestReport();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_print_report_service__WEBPACK_IMPORTED_MODULE_1__["PrintReportService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/messanger.service.ts":
/*!**************************************!*\
  !*** ./src/app/messanger.service.ts ***!
  \**************************************/
/*! exports provided: MessangerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessangerService", function() { return MessangerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessangerService = /** @class */ (function () {
    function MessangerService(http, router) {
        this.http = http;
        this.router = router;
        this.messageURL = "/api/newReceiving";
        this.unableToSendMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageSent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.submitted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.vendor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MessangerService.prototype.attemptSendMessage = function (message, callback) {
        var _this = this;
        this.http.post(this.messageURL, message, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](), responseType: 'text' })
            .subscribe(function (res) {
            console.log('attempting to send ' + message);
            console.log(res);
            if (!(res == "success!")) {
                _this.setUnableToSendMessage(true);
            }
            else {
                _this.setMessageSent(true);
                _this.setSubmitted(false);
                _this.router.navigate(['/']);
            }
        });
        this.setMessageSent(true);
        this.setSubmitted(false);
        return callback && callback();
    };
    MessangerService.prototype.setUnableToSendMessage = function (unableToSendMessage) {
        this.unableToSendMessage.next(unableToSendMessage);
    };
    MessangerService.prototype.getUnableToSendMessage = function () {
        return this.unableToSendMessage.asObservable();
    };
    MessangerService.prototype.setMessageSent = function (unableToSendMessage) {
        this.messageSent.next(unableToSendMessage);
    };
    MessangerService.prototype.getMessageSent = function () {
        return this.messageSent.asObservable();
    };
    MessangerService.prototype.setSubmitted = function (unableToSendMessage) {
        this.submitted.next(unableToSendMessage);
    };
    MessangerService.prototype.getSubmitted = function () {
        return this.submitted.asObservable();
    };
    MessangerService.prototype.setVendor = function (vendor) {
        this.vendor.next(vendor);
    };
    MessangerService.prototype.getVendor = function () {
        return this.vendor.asObservable();
    };
    MessangerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessangerService);
    return MessangerService;
}());



/***/ }),

/***/ "./src/app/print-report.service.ts":
/*!*****************************************!*\
  !*** ./src/app/print-report.service.ts ***!
  \*****************************************/
/*! exports provided: PrintReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintReportService", function() { return PrintReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintReportService = /** @class */ (function () {
    function PrintReportService(http) {
        this.http = http;
    }
    PrintReportService.prototype.requestReport = function () {
        this.http.get('/api/printReport', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](), responseType: 'text' }).subscribe(function (res) {
            console.log(res);
        });
    };
    PrintReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PrintReportService);
    return PrintReportService;
}());



/***/ }),

/***/ "./src/app/receiving/receiving.component.css":
/*!***************************************************!*\
  !*** ./src/app/receiving/receiving.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redError{\r\n    color: red;\r\n}\r\nh1{\r\n    color: black\r\n}\r\n.styleButton {\r\n    background-color: white; \r\n    border: 2px solid #4CAF50;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 24px;\r\n    width: 30%;\r\n}\r\n.selectedButton{\r\n    background-color: green; \r\n    border: 2px solid #4CAF50;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 24px;\r\n    width: 30%;\r\n\r\n}"

/***/ }),

/***/ "./src/app/receiving/receiving.component.html":
/*!****************************************************!*\
  !*** ./src/app/receiving/receiving.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='mobileScale'>\n<div class = 'formStyle'>\n<div *ngIf =\"unableToSendMessage;\"><h1>Recorded</h1></div>\n<div *ngIf =\"messageSent && !unableToSendMessage\"><h1>Recorded</h1></div>\n\n<div *ngIf =\"!loggedIn;\"> \n  <h2> Please input </h2>\n  <form #thisForm= \"ngForm\" (ngSubmit)=\"sendMessage(); resetFormLite();\" [formGroup]=\"messageFormNotLoggedIn\">\n      Vendor: <p></p>\n      <div *ngIf=\"submitted && fnli.vendor.errors?.required\" class=\"redError\">**Vendor Required**</div>\n      <input  type=\"text\" formControlName=\"vendor\" class=\"form-control\" value={{vendorInput}}>\n      Invoice Number: <p></p>\n      <div *ngIf=\"submitted && fnli.quantity.errors?.required\" class=\"redError\">**Invoice Number Required**</div>\n      <input  type=\"text\" formControlName=\"invoiceNumber\" class=\"form-control\">\n      <div style = \"text-align: center\">\n        <div *ngIf=\"submitted && missingUnitSelection\" class =\"redError\"> **Select Unit Type</div>\n        <div *ngIf=\"!caseSelected\" class=\"styleButton\" (click)=\"selectCase()\"> Case</div>\n        <div *ngIf=\"caseSelected\" class=\"selectedButton\" (click)=\"selectCase()\"> Case</div>\n        <div *ngIf= \"!eachSelected\" class=\"styleButton\"(click)=\"selectSingle()\"> Each</div>\n        <div *ngIf= \"eachSelected\" class=\"selectedButton\" (click)=\"selectSingle()\"> Each</div>\n      </div>\n      <br>\n      Quantity: <p></p>\n      <div *ngIf=\"submitted && fnli.quantity.errors?.required\" class=\"redError\">**Quantity Required**</div>\n      <input  type=\"text\" formControlName=\"quantity\" class=\"form-control\" id=\"quantity\">\n      <p></p>\n      Vendor Item Number (Optional): <p></p>\n      <div *ngIf=\"submitted && fnli.itemVendNo.errors?.required\" class=\"redError\">**Item Vendor Number Required**</div>\n      <input  type=\"text\" formControlName=\"itemVendNo\" class=\"form-control\">\n      Barcode: <p></p>\n      <div *ngIf=\"submitted && fnli.barcode.errors?.required\" class=\"redError\">**Barcode Required**</div>\n      <input  type=\"text\" formControlName=\"barcode\" class=\"form-control\">  \n      <p></p>\n      <button type=\"submit\"> Submit Received </button>\n  </form>\n  <p></p>\n  <p></p>\n  <a [routerLink] = \"['/']\">\n    <button > Return to Main Menu </button> \n  </a>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/receiving/receiving.component.ts":
/*!**************************************************!*\
  !*** ./src/app/receiving/receiving.component.ts ***!
  \**************************************************/
/*! exports provided: ReceivingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivingComponent", function() { return ReceivingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _messanger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messanger.service */ "./src/app/messanger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReceivingComponent = /** @class */ (function () {
    function ReceivingComponent(formBuilder, messangerService) {
        this.formBuilder = formBuilder;
        this.messangerService = messangerService;
        this.unableToSendMessage = false;
        this.submitted = false;
        this.messageSent = false;
        this.caseSelected = false;
        this.eachSelected = false;
        this.missingUnitSelection = true;
        this.vendorInput = '';
        this.message = { barcode: '', vendor: '', itemVendNo: '', numberofCases: '', numberofSingles: '', invoiceNumber: '' };
    }
    ReceivingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageFormNotLoggedIn = this.formBuilder.group({
            barcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vendor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            itemVendNo: [''],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            invoiceNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.messangerService.getUnableToSendMessage().subscribe(function (res) { return _this.unableToSendMessage = res; });
        this.messangerService.getMessageSent().subscribe(function (res) { return _this.messageSent = res; });
        this.messangerService.getSubmitted().subscribe(function (res) { return _this.submitted = res; });
        this.messangerService.getVendor().subscribe(function (res) { return _this.vendorInput = res; });
    };
    Object.defineProperty(ReceivingComponent.prototype, "fnli", {
        get: function () { return this.messageFormNotLoggedIn.controls; },
        enumerable: true,
        configurable: true
    });
    ReceivingComponent.prototype.sendMessage = function () {
        this.messangerService.setSubmitted(true);
        this.messangerService.setVendor(this.fnli.vendor.value);
        if (this.missingUnitSelection) {
            return;
        }
        if (this.caseSelected) {
            this.message = {
                barcode: this.fnli.barcode.value,
                vendor: this.fnli.vendor.value,
                itemVendNo: this.fnli.itemVendNo.value,
                numberofCases: this.fnli.quantity.value,
                numberofSingles: 'null',
                invoiceNumber: this.fnli.invoiceNumber.value
            };
        }
        if (this.eachSelected) {
            this.message = {
                barcode: this.fnli.barcode.value,
                vendor: this.fnli.vendor.value,
                itemVendNo: this.fnli.itemVendNo.value,
                numberofCases: 'null',
                numberofSingles: this.fnli.quantity.value,
                invoiceNumber: this.fnli.invoiceNumber.value
            };
        }
        if (this.messageFormNotLoggedIn.invalid) {
            return;
        }
        return this.messangerService.attemptSendMessage(this.message, function () { });
    };
    ReceivingComponent.prototype.resetFormLite = function () {
        this.messageFormNotLoggedIn.controls['quantity'].setValue(null);
        this.selectNiether();
    };
    ReceivingComponent.prototype.selectCase = function () {
        this.caseSelected = true;
        this.eachSelected = false;
        this.missingUnitSelection = false;
        this.messageFormNotLoggedIn.controls['barcode'].setValue(null);
        this.focusTo("quantity");
    };
    ReceivingComponent.prototype.selectSingle = function () {
        this.caseSelected = false;
        this.eachSelected = true;
        this.missingUnitSelection = false;
        this.messageFormNotLoggedIn.controls['barcode'].setValue(null);
        this.focusTo("quantity");
    };
    ReceivingComponent.prototype.selectNiether = function () {
        this.caseSelected = false;
        this.eachSelected = false;
        this.missingUnitSelection = true;
    };
    ReceivingComponent.prototype.focusTo = function (idName) {
        var element = document.getElementById(idName);
        element.focus();
    };
    ReceivingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receiving',
            template: __webpack_require__(/*! ./receiving.component.html */ "./src/app/receiving/receiving.component.html"),
            styles: [__webpack_require__(/*! ./receiving.component.css */ "./src/app/receiving/receiving.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _messanger_service__WEBPACK_IMPORTED_MODULE_2__["MessangerService"]])
    ], ReceivingComponent);
    return ReceivingComponent;
}());



/***/ }),

/***/ "./src/app/top/top.component.css":
/*!***************************************!*\
  !*** ./src/app/top/top.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 20%;\r\n}"

/***/ }),

/***/ "./src/app/top/top.component.html":
/*!****************************************!*\
  !*** ./src/app/top/top.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style =\"background-color: maroon\"><img src = \"assets/lyonsDenType.png\"> </div>\n"

/***/ }),

/***/ "./src/app/top/top.component.ts":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/app/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./src/app/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\BahaaSimpleInv\BahaaSimpleInvFront\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map