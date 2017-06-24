webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "html, body {\n    background-color: #fff;\n    color: #636b6f;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 100;\n    height: 100vh;\n    margin: 20px;\n    text-align: center;\n}\n\n.full-height {\n    height: 100vh;\n}\n\n.flex-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.position-ref {\n    position: relative;\n}\n\n.top-right {\n    position: absolute;\n    right: 10px;\n    top: 18px;\n}\n\n.content {\n    text-align: center;\n}\n\n.title {\n    font-size: 84px;\n}\n\n.links > a {\n    color: #636b6f;\n    padding: 0 25px;\n    font-size: 12px;\n    font-weight: 600;\n    letter-spacing: .1rem;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n\n.m-b-md {\n    margin-bottom: 30px;\n}\n\nh1 {\n    font-weight:100;\n}\n\nul {\n    list-style: none;\n    padding:0\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bookings && !service.isLoading\">\n  <ul>\n    <li *ngFor=\"let booking of bookings.data\">{{booking.description}}</li>\n  </ul>\n  <p>Showing booking {{bookings.from}} to {{bookings.to}} of {{bookings.total}}</p>\n  <p>Page {{bookings.current_page}} of {{bookings.last_page}}</p>\n  <button (click)=\"prevPage()\" [disabled]=\"!bookings.prev_page_url\" >Prev</button>\n  <button (click)=\"nextPage()\" [disabled]=\"!bookings.next_page_url\">Next</button> \n</div>\n<p *ngIf=\"service.isLoading\">Loading...</p>"

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPaginationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicPaginationService = (function () {
    function BasicPaginationService(http) {
        this.http = http;
        this.bookinUrl = '/api/bookings';
        this.isLoading = false;
    }
    BasicPaginationService.prototype.getBookings = function () {
        var _this = this;
        this.isLoading = true;
        return this.http.get(this.bookinUrl)
            .toPromise()
            .then(function (response) {
            _this.isLoading = false;
            return response.json();
        })
            .catch(this.handleError);
    };
    BasicPaginationService.prototype.getBookingsAtUrl = function (url) {
        var _this = this;
        this.isLoading = true;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            _this.isLoading = false;
            return response.json();
        })
            .catch(this.handleError);
    };
    BasicPaginationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        this.isLoading = false;
        return Promise.reject(error.message || error);
    };
    return BasicPaginationService;
}());
BasicPaginationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BasicPaginationService);

var _a;
//# sourceMappingURL=basic-pagination.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Basic Pagination Setup';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(156),
        styles: [__webpack_require__(154)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_pagination_basic_pagination_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_basic_pagination_basic_pagination_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basic_pagination_basic_pagination_component__["a" /* BasicPaginationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'basic-pagination', component: __WEBPACK_IMPORTED_MODULE_6__basic_pagination_basic_pagination_component__["a" /* BasicPaginationComponent */] },
                { path: '',
                    redirectTo: '/basic-pagination',
                    pathMatch: 'full'
                }
            ])
            // other imports here
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7_app_basic_pagination_basic_pagination_service__["a" /* BasicPaginationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_pagination_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPaginationComponent = (function () {
    function BasicPaginationComponent(service) {
        this.service = service;
    }
    BasicPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBookings().then(function (bookings) { return _this.bookings = bookings; });
    };
    BasicPaginationComponent.prototype.prevPage = function () {
        var _this = this;
        this.service.getBookingsAtUrl(this.bookings.prev_page_url).then(function (bookings) { return _this.bookings = bookings; });
    };
    BasicPaginationComponent.prototype.nextPage = function () {
        var _this = this;
        this.service.getBookingsAtUrl(this.bookings.next_page_url).then(function (bookings) { return _this.bookings = bookings; });
    };
    return BasicPaginationComponent;
}());
BasicPaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'basic',
        template: __webpack_require__(157),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__basic_pagination_service__["a" /* BasicPaginationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__basic_pagination_service__["a" /* BasicPaginationService */]) === "function" && _a || Object])
], BasicPaginationComponent);

var _a;
//# sourceMappingURL=basic-pagination.component.js.map

/***/ })

},[191]);
//# sourceMappingURL=main.bundle.js.map