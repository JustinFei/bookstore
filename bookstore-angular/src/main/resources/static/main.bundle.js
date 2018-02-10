webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_material_module__ = __webpack_require__("../../../../../src/app/module/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shipping_service__ = __webpack_require__("../../../../../src/app/services/shipping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_checkout_service__ = __webpack_require__("../../../../../src/app/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_my_account_my_account_component__ = __webpack_require__("../../../../../src/app/components/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_book_list_book_list_component__ = __webpack_require__("../../../../../src/app/components/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_order_summary_order_summary_component__ = __webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_my_account_my_account_component__["a" /* MyAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_order_summary_order_summary_component__["a" /* OrderSummaryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__module_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__services_payment_service__["a" /* PaymentService */],
                __WEBPACK_IMPORTED_MODULE_11__services_shipping_service__["a" /* ShippingService */],
                __WEBPACK_IMPORTED_MODULE_12__services_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_13__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_14__services_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_15__services_checkout_service__["a" /* CheckoutService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_my_account_my_account_component__ = __webpack_require__("../../../../../src/app/components/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_book_list_book_list_component__ = __webpack_require__("../../../../../src/app/components/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_order_summary_order_summary_component__ = __webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.ts");









var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'myAccount',
        component: __WEBPACK_IMPORTED_MODULE_2__components_my_account_my_account_component__["a" /* MyAccountComponent */]
    },
    {
        path: 'myProfile',
        component: __WEBPACK_IMPORTED_MODULE_3__components_my_profile_my_profile_component__["a" /* MyProfileComponent */]
    },
    {
        path: 'bookList',
        component: __WEBPACK_IMPORTED_MODULE_4__components_book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: 'bookDetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_book_detail_book_detail_component__["a" /* BookDetailComponent */]
    },
    {
        path: 'shoppingCart',
        component: __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_7__components_order_order_component__["a" /* OrderComponent */]
    },
    {
        path: 'orderSummary',
        component: __WEBPACK_IMPORTED_MODULE_8__components_order_summary_order_summary_component__["a" /* OrderSummaryComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/book-detail/book-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>Book Info</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\t<div class=\"row\">\n\t\t<div class=\"row\" style=\"margin-top:120px;\">\n\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t<a routerLink=\"/bookList\">Back to Book List</a>\n\t\t\t\t<br />\n\t\t\t\t<img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{book.bookId}}.png\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t<h3><span *ngIf=\"addBookSuccess\" style=\"color:forestgreen;\"><i class=\"fa fa-check\" style=\"color:forestgreen;\"></i>Added to cart.</span></h3>\n\t\t\t\t<h3><span *ngIf=\"notEnoughStock\" style=\"color:red;\">Oops, only <span>{{book.inStockNumber}}</span> in stock.</span></h3>\n\t\t\t\t<h3>{{book.title}}</h3>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-5\">\n\t\t\t\t\t\t<h5><strong>Author: </strong><span>{{book.author}}</span></h5>\n\t\t\t\t\t\t<p><strong>Publisher: </strong><span>{{book.publisher}}</span></p>\n\t\t\t\t\t\t<p><strong>Publication Date: </strong><span>{{book.publicationDate}}</span></p>\n\t\t\t\t\t\t<p><strong>Language: </strong><span>{{book.language}}</span></p>\n\t\t\t\t\t\t<p><strong>Category: </strong><span>{{book.category}}</span></p>\n\t\t\t\t\t\t<p><strong><span>{{book.format | uppercase}}</span>:</strong> <span>{{book.numberOfPages}}</span> pages</p>\n\t\t\t\t\t\t<p><strong>ISBN: </strong><span>{{book.isbn}}</span></p>\n\t\t\t\t\t\t<p><strong>Shipping Weight : </strong><span>{{book.shippingWeight}}</span> ounces</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t<div class=\"panel panel-default\" style=\"border-width:5px;margin-top:20px;\">\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t<h4>Our Price: <span style=\"color:#db3208\">$<span>{{book.ourPrice | number : '1.2-2'}}</span></span></h4>\n\t\t\t\t\t\t\t\t\t<p>List Price: <span style=\"text-decoration:line-through;\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span></p>\n\t\t\t\t\t\t\t\t\t<p>You save: $<span>{{book.listPrice-book.ourPrice | number : '1.2-2'}}</span></p>\n\t\t\t\t\t\t\t\t\t<span>Qty: </span>\n\t\t\t\t\t\t\t\t\t<select [(ngModel)]=\"qty\" class=\"broswer-default\" style=\"width:50px;display:inline;\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let x of numberList\" [ngValue]=\"x\">{{x}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"book.inStockNumber>=10\" style=\"color:green;\">in stock.</h4>\n\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"book.inStockNumber<10\" style=\"color:yellow;\">Only <span>{{book.inStockNumber}}</span> in stock.</h4>\n\t\t\t\t\t\t\t\t\t<h4 *ngIf=\"book.inStockNumber==0\" style=\"color:darkred;\">Unavailable</h4>\n\t\t\t\t\t\t\t\t\t<button\tmat-raised-button [disabled]=\"book.inStockNumber==0\" (click)=\"onAddToCart()\" class=\"mat-primary\">Add to Cart</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr />\n\t\t\t<p>{{book.description}}</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../src/app/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, cartService, http, router, route) {
        this.bookService = bookService;
        this.cartService = cartService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_6__constants_app_const__["a" /* AppConst */].serverPath;
        this.book = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]();
        this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.addBookSuccess = false;
        this.notEnoughStock = false;
    }
    BookDetailComponent.prototype.onAddToCart = function () {
        var _this = this;
        this.cartService.addItem(this.book.bookId, this.qty).subscribe(function (res) {
            console.log(res.text());
            _this.addBookSuccess = true;
        }, function (error) {
            console.log(error.text());
            if (error.text() == "Not enough stock!")
                _this.notEnoughStock = true;
        });
    };
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.bookId = Number.parseInt(params['id']);
        });
        this.bookService.getBook(this.bookId).subscribe(function (res) {
            _this.book = res.json();
            _this.book.publicationDate = new Date(_this.book.publicationDate).toISOString().slice(0, 10);
            if (_this.book.inStockNumber < 9) {
                _this.numberList = _this.numberList.filter(function (num) { return num <= _this.book.inStockNumber; });
            }
            else {
                _this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            }
        }, function (error) {
            console.log(error);
        });
        this.qty = 1;
    };
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/book-list/book-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>Book List</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\"></div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<!-- <div class=\"form-group\"> -->\n\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"/> -->\n\t\t\t<!-- </div> -->\n\t\t\t<!-- <div class=\"row\" style=\"margin-bottom:30px;\" *ngFor=\"let book of filteredBookList\"> -->\n\t\t\t\t<!-- <div class=\"col-md-3\"> -->\n\t\t\t\t\t<!-- <a (click)=\"onSelect(book)\" style=\"cursor:pointer;\"> -->\n\t\t\t\t\t\t<!-- <img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{book.bookId}}.png\"> -->\n\t\t\t\t\t<!-- </a> -->\n\t\t\t\t<!-- </div> -->\n\t\t\t\t<!-- <div class=\"col-md-9\"> -->\n\t\t\t\t\t<!-- <h4 (click)=\"onSelect(book)\" style=\"margin-top:20px;cursor:pointer;\">{{book.title}}</h4> -->\n\t\t\t\t\t<!-- <span>{{book.publicationDate}}</span> -->\n\t\t\t\t\t<!-- <p>{{book.author}}</p> -->\n\t\t\t\t\t<!-- <a (click)=\"onSelect(book)\" style=\"cursor:pointer;\"> -->\n\t\t\t\t\t\t<!-- <span>{{book.format | uppercase}}</span> -->\n\t\t\t\t\t<!-- </a> -->\n\t\t\t\t\t<!-- <span>{{book.numberOfPages}} pages</span> -->\n\t\t\t\t\t<!-- <br /> -->\n\t\t\t\t\t<!-- <a (click)=\"onSelect(book)\"> -->\n\t\t\t\t\t\t<!-- <span style=\"font-size:x-large;color:#db3208;\">$<span>{{book.ourPrice | number : '1.2-2'}}</span></span> -->\n\t\t\t\t\t<!-- </a> -->\n\t\t\t\t\t<!-- <span style=\"text-decoration:line-through;\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span> -->\n\t\t\t\t\t<!-- <p>{{book.description | slice:0:500}}</p> -->\n\t\t\t\t<!-- </div> -->\n\t\t\t<!-- </div> -->\n\t\t\t<!-- <mat-paginator #paginator [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" (page)=\"onPageEvent($event)\"> -->\n\t\t\t<!-- </mat-paginator> -->\n\t\t\t<!-- <div *ngIf=\"pageEvent\"> -->\n\t\t\t\t<!-- <h5>Page Change Event Properties</h5> -->\n\t\t\t\t<!-- <div>List length: {{pageEvent.length}}</div> -->\n\t\t\t\t<!-- <div>Page size: {{pageEvent.pageSize}}</div> -->\n\t\t\t\t<!-- <div>Page index: {{pageEvent.pageIndex}}</div> -->\n\t\t\t<!-- </div> -->\n\t\t\t<!-- <hr /> -->\n\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" style = \"width:85%;\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr hidden=\"hidden\">\n\t\t\t\t\t  <th>Image</th>\n\t\t\t\t\t  <th>Book</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let book of bookList\">\n\t\t\t\t\t\t<td class=\"col-md-3\">\n\t\t\t\t\t\t\t<a (click)=\"onSelect(book)\" style=\"cursor:pointer;\">\n\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{book.bookId}}.png\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h4 (click)=\"onSelect(book)\" style=\"margin-top:20px;cursor:pointer;\">{{book.title}}</h4>\n\t\t\t\t\t\t\t<span>{{book.publicationDate | date:\"yyyy-MM-dd\"}}</span>\n\t\t\t\t\t\t\t<p>{{book.author}}</p>\n\t\t\t\t\t\t\t<a (click)=\"onSelect(book)\" style=\"cursor:pointer;\">\n\t\t\t\t\t\t\t\t<span>{{book.format | uppercase}}</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span>{{book.numberOfPages}} pages</span>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<a (click)=\"onSelect(book)\">\n\t\t\t\t\t\t\t\t<span style=\"font-size:x-large;color:#db3208;\">$<span>{{book.ourPrice | number : '1.2-2'}}</span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span style=\"text-decoration:line-through;\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span>\n\t\t\t\t\t\t\t<p>{{book.description | slice:0:500}}</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {MatTableDataSource, MatPaginator} from '@angular/material';
// import {PageEvent} from '@angular/material';

var BookListComponent = (function () {
    // private dtOptions: DataTables.Settings = {};
    function BookListComponent(bookService, http, router, route) {
        this.bookService = bookService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_5__constants_app_const__["a" /* AppConst */].serverPath;
        // pageEvent: PageEvent;
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        // pageSize = 10;
        // pageSizeOptions = [5, 10, 20];
        // length: number;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
    }
    // onPageEvent(pageEvent: PageEvent){
    // this.pageEvent = pageEvent;
    // }
    // applyFilter(keyword: string){
    // this.filteredBookList = this.bookList.filter(book => book.title.includes(keyword) || book.author.includes(keyword) || book.description.includes(keyword));
    // }
    BookListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['bookList']) {
                _this.bookList = JSON.parse(params['bookList']);
                console.log(_this.bookList);
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    // Destroy the table first
                    dtInstance.destroy();
                    // Call the dtTrigger to rerender again
                    _this.dtTrigger.next();
                });
            }
            else {
                _this.bookService.getBookList().subscribe(function (res) {
                    console.log(res.json());
                    _this.bookList = res.json();
                    _this.dtElement.dtInstance.then(function (dtInstance) {
                        // Destroy the table first
                        dtInstance.destroy();
                        // Call the dtTrigger to rerender again
                        _this.dtTrigger.next();
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        });
        // this.dtOptions = {
        // pagingType: 'full_numbers',
        // pageLength: 10};
    };
    BookListComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail/', this.selectedBook.bookId]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */])
    ], BookListComponent.prototype, "dtElement", void 0);
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-list',
            template: __webpack_require__("../../../../../src/app/components/book-list/book-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\"><span>Home</span></h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\t\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-4\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<a class=\"pointer\" routerLink=\"/bookList\">\n\t\t\t\t\t\t<img src=\"../../../assets/image/bestseller.png\" class=\"img-responsive\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<a class=\"pointer\" routerLink=\"/hours\">\n\t\t\t\t\t\t<img src=\"../../../assets/image/hours.png\" class=\"img-responsive\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<a class=\"pointer\" routerLink=\"/faq\">\n\t\t\t\t\t\t<img src=\"../../../assets/image/faq.png\" class=\"img-responsive\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div>\n\t\t<div class=\"home-headline\"><span>Featured Books</span></div>\n\t\t<hr style=\"margin-top:-15px;\" />\n\t</div>\n\t<img src=\"../../../assets/image/shelf.png\" class=\"img-responsive\" style=\"margin-top:-5px;z-index:-1;\" />\n\t\n\t<div class=\"row\" style=\"margin:auto;margin-top:-190px;margin-bottom:50px;width:90%;\">\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img src=\"../../../assets/image/book1.png\" class=\"img-responsive\" style=\"width:70%;\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img src=\"../../../assets/image/book1.png\" class=\"img-responsive\" style=\"width:70%;\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img src=\"../../../assets/image/book1.png\" class=\"img-responsive\" style=\"width:70%;\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img src=\"../../../assets/image/book1.png\" class=\"img-responsive\" style=\"width:70%;\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img src=\"../../../assets/image/book1.png\" class=\"img-responsive\" style=\"width:70%;\" />\n\t\t</div>\n\t\t<div class=\"col-xs-2\">\n\t\t\t<img src=\"../../../assets/image/book1.png\" class=\"img-responsive\" style=\"width:70%;\" />\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/my-account/my-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab-body-wrapper {\r\n  color: white;\r\n  background-color: red !important;\r\n}\r\n.mat-tab-label.mat-tab-label-active {\r\n  background-color: #3f51b5 !important;\r\n}\r\nmat-tab-label {\r\n\tcolor: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-account/my-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>My Account</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\n\t<div class=\"row\" style=\"margin-top:30px;\">\n\t\t<div class=\"col-xs-3\">\n\t\t</div>\n\n\t\t<div class=\"col-xs-9\">\n\t\t\t<div class=\"panel-group\">\n\t\t\t\t<div class=\"panel panel-default panel-faq\" style=\"border:none\">\n\t\t\t\t\t<div class=\"panel-body\" style=\"background-color:#cdcdcd;margin-top:20px;\">\n\t\t\t\t\t\t<mat-tab-group>\n\t\t\t\t\t\t\t<mat-tab label=\"Login\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top:20px;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"loginError\" style=\"color:red;\">\n\t\t\t\t\t\t\t\t\t\tIncorrect username or password!\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onLogin()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">Username *</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"credential.username\" required=\"required\" autofocus=\"autofocus\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your username</p> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"password\">Password *</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"credential.password\" required=\"required\" autofocus=\"autofocus\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your password</p> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">Log In</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t<mat-tab label=\"New Account\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top:20px;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"emailSent\" class=\"alert alert-info\">\n\t\t\t\t\t\t\t\t\t\tAn email has been sent to the email address you just registered. Please validate your email address and update your password info.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onNewAccount()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"newUsername\">Username *</label>&nbsp;<span *ngIf=\"usernameExists\" style=\"color:red;\">Username already exists. Choose a differrent one.</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newUsername\" name=\"username\" [(ngModel)]=\"username\" required=\"required\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your username</p> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">Email Address *</label>&nbsp;<span *ngIf=\"emailExists\" style=\"color:red;\">Email already exists. Choose a differrent one.</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required=\"required\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">A valid email address. All emails from this system will be sent to this address.</p> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"mat-primary\">Create new account</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t<mat-tab label=\"Forget Password\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top:20px;\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"emailNotExists\" class=\"alert alert-warning\">\n\t\t\t\t\t\t\t\t\t\tEmail doesn't exists.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"forgetPasswordEmailSent\" class=\"alert alert-success\">\n\t\t\t\t\t\t\t\t\t\tEmail sent.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onForgetPassword()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"recoverEmail\">Your Email Address *</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"recoverEmail\" name=\"recoverEmail\" [(ngModel)]=\"recoverEmail\" required=\"required\" />\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your registered email address.</p> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"mat-primary\">Submit</button>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/my-account/my-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyAccountComponent = (function () {
    function MyAccountComponent(loginService, userService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
        this.loggedIn = false;
        this.credential = { 'username': '', 'password': '' };
        this.emailSent = false;
    }
    MyAccountComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(function (res) {
            console.log(res);
            localStorage.setItem("xAuthToken", res.json().token);
            _this.loggedIn = true;
            location.reload();
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.loggedIn = false;
            _this.loginError = true;
        });
    };
    MyAccountComponent.prototype.onNewAccount = function () {
        var _this = this;
        this.usernameExists = false;
        this.emailExists = false;
        this.emailSent = false;
        this.userService.newUser(this.username, this.email).subscribe(function (res) {
            console.log(res);
            _this.emailSent = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage == "usernameExists")
                _this.usernameExists = true;
            if (errorMessage == "emailExists")
                _this.emailExists = true;
        });
    };
    MyAccountComponent.prototype.onForgetPassword = function () {
        var _this = this;
        this.forgetPasswordEmailSent = false;
        this.emailNotExists = false;
        this.userService.retrievePassword(this.recoverEmail).subscribe(function (res) {
            console.log(res);
            _this.forgetPasswordEmailSent = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage == "emailNotExists")
                _this.emailNotExists = true;
        });
    };
    MyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    MyAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-account',
            template: __webpack_require__("../../../../../src/app/components/my-account/my-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/my-account/my-account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>My Profile</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\n\t<div *ngIf=\"!dataFetched\" style=\"margin-top:50px;\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2 col-md-offset-5\">\n\t\t\t\t<mat-spinner></mat-spinner>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-3\"></div>\n\t\t<div *ngIf=\"dataFetched\">\n\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t<div class=\"panel-group\">\n\t\t\t\t\t<div class=\"panel panel-default\" style=\"border:none\">\n\t\t\t\t\t\t<div class=\"panel-body\" style=\"background-color:#cdcdcd;margin-top:20px;\">\n\t\t\t\t\t\t\t<mat-tab-group [selectedIndex]=\"selectedProfileTab\">\n\t\t\t\t\t\t\t\t<mat-tab label=\"Edit\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin-top:20px;\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"incorrectPassword\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Incorrect password!</strong> Please enter the correct password for current user.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"updateSuccess\" class=\"alert alert-success\">\n\t\t\t\t\t\t\t\t\t\t\tUpdate Success!\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onUpdateUserInfo()\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" [(ngModel)]=\"user.userId\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bg-info\" *ngIf=\"updateUserInfo\">User info updated!</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"user.firstName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"user.lastName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">Username *</label>&nbsp;<span *ngIf=\"usernameExists\" style=\"color:red\">Username already exists. Choose a different one.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" required=\"required\"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"currentPassword\">Current Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">Enter your current password to change your E-mail address or password.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">Email Address *</label>&nbsp;<span *ngIf=\"emailExists\" style=\"color:red\">Email already exists. Choose a different one.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" required=\"required\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"color:#828282;\">A valid email address. All emails from this system will be sent to this address.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtNewPassword\">New Password *</label>&nbsp;<span id=\"checkPasswordMatch\" style=\"color:red;\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"txtNewPassword\" name=\"txtNewPassword\" [(ngModel)]=\"newPassword\" #newP (keyup)=\"onPasswordMatch(newP.value,conP.value)\" required=\"required\"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtConfirmPassword\">Confirm New Password *</label>&nbsp;<span id=\"checkPasswordMatch\" style=\"color:red;\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"txtConfirmPassword\" name=\"txtConfirmPassword\" #conP (keyup)=\"onPasswordMatch(newP.value,conP.value)\" required=\"required\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<p [hidden]=\"passwordMatched\" style=\"color:red;\">Password mismatched</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button [disabled]=\"!passwordMatched\" type=\"submit\" color=\"primary\" id=\"updateUserInfoButton\">Save</button>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t<mat-tab label=\"Orders\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default panel-faq\" style=\"border:none\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\" style=\"background-color:#ededed;margin-top:20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm table-inverse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Order Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Order Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let order of orderList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"onDisplayOrder(order)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.orderDate | date:\"yyyy-MM-dd\"}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{order.id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{order.orderTotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{order.orderStatus}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"displayOrderDetail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Order Detail for purchase #<span>{{order.id}}</span></h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Billing Details</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.userBillingName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.userBillingStreet1}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.userBillingStreet2}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.userBillingCity}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.userBillingState}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.billingAddress.userBillingZipcode}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Payment Information</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.payment.holderName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.payment.type}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Exp Date:</span> <span>{{order.payment.expiryMonth}}</span>/<span>{{order.payment.expiryYear}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Shipping Details</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.userShippingName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.userShippingStreet1}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.userShippingStreet2}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.userShippingCity}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.userShippingState}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{order.shippingAddress.userShippingZipcode}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default height\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3><strong>Order Summary</strong></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th><strong>Item Name</strong></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><strong>Item Price</strong></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"><strong>Item Qty</strong></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\"><strong>Item Total</strong></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let cartItem of order.cartItemList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{cartItem.book.title}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{cartItem.book.ourPrice}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{cartItem.qty}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{cartItem.subtotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow text-center\">Subtotal</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"highrow text-right\">{{order.orderTotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-center\">Tax</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-right\">{{order.orderTotal*0.0625 | number:'1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-center\">Total</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"emptyrow text-right\">{{order.orderTotal*1.0625 | number:'1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t<mat-tab label=\"Payment\">\n\t\t\t\t\t\t\t\t\t<br/><br/>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"defaultPaymentSet\">Default payment set successfully!</p>\n\t\t\t\t\t\t\t\t\t\t<mat-tab-group (selectedIndexChange)=\"selectedBillingChange($event)\" [selectedIndex]=\"selectedBillingTab\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"List of Credit Cards\">\n\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"setDefaultPayment()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Default</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Credit Card</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Operations</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userPayment of userPaymentList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"defaultUserPaymentId\" [(ngModel)]=\"defaultUserPaymentId\" [value]=\"userPayment.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>default</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{userPayment.cardName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a mat-button (click)=\"onUpdatePayment(userPayment)\"><i class=\"fa fa-pencil\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a mat-button (click)=\"onRemovePayment(userPayment.id)\"><i class=\"fa fa-times\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button class=\"mat-primary\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Add(Update) Credit Card\">\n\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onNewPayment()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bg-info\" *ngIf=\"updateUserPaymentInfo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"userPayment.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>* Give a name for your card</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cardName\" placeholder=\"Card Name\" name=\"cardName\" required=\"required\" [(ngModel)]=\"userPayment.cardName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Billing address -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingName\">* Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userBillingName\" placeholder=\"Receiver Name\" name=\"userBillingName\" required=\"required\" [(ngModel)]=\"userBilling.userBillingName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingAddress\">* Street Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billingAddress\" placeholder=\"Street Address 1\" name=\"userBillingStreet1\" required=\"required\" [(ngModel)]=\"userBilling.userBillingStreet1\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Address 2\" name=\"userBillingStreet2\" [(ngModel)]=\"userBilling.userBillingStreet2\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingCity\">* City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userBillingCity\" placeholder=\"Your Billing City\" name=\"userBillingCity\" required=\"required\" [(ngModel)]=\"userBilling.userBillingCity\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingState\">* State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" id=\"userBillingState\" name=\"userBillingState\" required=\"required\" [(ngModel)]=\"userBilling.userBillingState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- State --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of stateList\">{{state}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingZipcode\">* Zipcode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userBillingZipcode\" placeholder=\"Zipcode\" name=\"userBillingZipcode\" required=\"required\" [(ngModel)]=\"userBilling.userBillingZipcode\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- User Payment -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Credit Card Information</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../../assets/image/creditcard.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardType\">*Select Card Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" id=\"cardType\" name=\"cardType\" required=\"required\" [(ngModel)]=\"userPayment.type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Card Type --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"visa\">Visa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mastercard\">Mastercard</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"discover\">Discover</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"amex\">American Express</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardholder\">* Card Holder</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cardholder\" placeholder=\"Card Holder Name\" name=\"cardholderName\" required=\"required\" [(ngModel)]=\"userPayment.holderName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardNumber\">* Card Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"tel\" class=\"form-control\" id=\"cardNumber\" placeholder=\"Valid Card Number\" name=\"cardNumber\" required=\"required\" [(ngModel)]=\"userPayment.cardNumber\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>* Expiration Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" name=\"expiryMonth\" required=\"required\" [(ngModel)]=\"userPayment.expiryMonth\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Month --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Jan (01)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Feb (02)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Mar (03)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Apr (04)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">May (05)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">Jun (06)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\">July (07)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\">Aug (08)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\">Sep (09)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">Oct (10)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">Nov (11)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\">Dec (12)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" name=\"expiryYear\" required=\"required\" [(ngModel)]=\"userPayment.expiryYear\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Year --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let year of yearList\" [value]=\"year.value\">{{year.year}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardCVC\">* CV Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"cardCVC\" type=\"tel\" class=\"form-control\" name=\"cardCVC\" placeholder=\"CVC\" [(ngModel)]=\"userPayment.cvc\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"mat-primary\">Save All</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t<mat-tab label=\"Shipping\">\n\t\t\t\t\t\t\t\t\t<br/><br/>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"defaultShippingSet\">Default shipping set successfully!</p>\n\t\t\t\t\t\t\t\t\t\t<mat-tab-group (selectedIndexChange)=\"selectedShippingChange($event)\" [selectedIndex]=\"selectedShippingTab\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"List of Shipping Address\">\n\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"setDefaultShipping()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Default</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Shipping Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Operations</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userShipping of userShippingList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"defaultUserShippingId\" [(ngModel)]=\"defaultUserShippingId\" [value]=\"userShipping.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>default</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{userShipping.userShippingStreet1}} {{userShipping.userShippingStreet2}},{{userShipping.userShippingCity}},{{userShipping.userShippingState}} {{userShipping.userShippingZipcode}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a mat-button (click)=\"onUpdateShipping(userShipping)\"><i class=\"fa fa-pencil\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a mat-button (click)=\"onRemoveShipping(userShipping.id)\"><i class=\"fa fa-times\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button class=\"mat-primary\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Add(Update) Shipping Address\">\n\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"onNewShipping()\" method=\"post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bg-info\" *ngIf=\"updateUserShippingInfo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"userShipping.id\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingName\">* Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userShippingName\" placeholder=\"Receiver Name\" name=\"userShippingName\" required=\"required\" [(ngModel)]=\"userShipping.userShippingName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingAddress\">* Street Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingAddress\" placeholder=\"Street Address 1\" name=\"userShippingStreet1\" required=\"required\" [(ngModel)]=\"userShipping.userShippingStreet1\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Address 2\" name=\"userShippingStreet2\" [(ngModel)]=\"userShipping.userShippingStreet2\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ShippingCity\">* City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userShippingCity\" placeholder=\"Your Shipping City\" name=\"userShippingCity\" required=\"required\" [(ngModel)]=\"userShipping.userShippingCity\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingState\">* State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" id=\"userShippingState\" name=\"userShippingState\" required=\"required\" [(ngModel)]=\"userShipping.userShippingState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- State --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of stateList\">{{state}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingZipcode\">* Zipcode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"userShippingZipcode\" placeholder=\"Zipcode\" name=\"userShippingZipcode\" required=\"required\" [(ngModel)]=\"userShipping.userShippingZipcode\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"mat-primary\">Save All</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_payment__ = __webpack_require__("../../../../../src/app/models/user-payment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_billing__ = __webpack_require__("../../../../../src/app/models/user-billing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user_shipping__ = __webpack_require__("../../../../../src/app/models/user-shipping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shipping_service__ = __webpack_require__("../../../../../src/app/services/shipping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyProfileComponent = (function () {
    function MyProfileComponent(loginService, userService, paymentService, shippingService, orderService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.paymentService = paymentService;
        this.shippingService = shippingService;
        this.orderService = orderService;
        this.router = router;
        this.yearList = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].yearList;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
        this.dataFetched = false;
        this.credential = { 'username': '', 'password': '' };
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.passwordMatched = true;
        this.selectedProfileTab = 0;
        this.selectedBillingTab = 0;
        this.selectedShippingTab = 0;
        this.userPayment = new __WEBPACK_IMPORTED_MODULE_4__models_user_payment__["a" /* UserPayment */]();
        this.userBilling = new __WEBPACK_IMPORTED_MODULE_5__models_user_billing__["a" /* UserBilling */]();
        this.userShipping = new __WEBPACK_IMPORTED_MODULE_6__models_user_shipping__["a" /* UserShipping */]();
        this.order = new __WEBPACK_IMPORTED_MODULE_7__models_order__["a" /* Order */]();
        this.userPaymentList = [];
        this.userShippingList = [];
        this.orderList = [];
        this.stateList = Object.keys(__WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].usStates);
    }
    MyProfileComponent.prototype.selectedShippingChange = function (value) {
        this.selectedShippingTab = value;
    };
    MyProfileComponent.prototype.selectedBillingChange = function (value) {
        this.selectedBillingTab = value;
    };
    MyProfileComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            _this.user = res.json();
            _this.user.password = "";
            _this.userPaymentList = _this.user.userPaymentList;
            _this.userShippingList = _this.user.userShippingList;
            for (var index in _this.userPaymentList) {
                if (_this.userPaymentList[index].defaultPayment) {
                    _this.defaultUserPaymentId = _this.userPaymentList[index].id;
                    break;
                }
            }
            for (var index in _this.userShippingList) {
                if (_this.userShippingList[index].defaultShipping) {
                    _this.defaultUserShippingId = _this.userShippingList[index].id;
                    break;
                }
            }
            _this.dataFetched = true;
        }, function (error) {
            console.log(error);
        });
    };
    MyProfileComponent.prototype.onPasswordMatch = function (newPass, conPass) {
        if (newPass != conPass) {
            this.passwordMatched = false;
        }
        else {
            this.passwordMatched = true;
        }
        // console.log({
        // 'newPassword':newPass,
        // 'confirmPassword':conPass,
        // 'passwordMatched':this.passwordMatched
        // });
    };
    MyProfileComponent.prototype.onUpdateUserInfo = function () {
        var _this = this;
        this.userService.updateUserInfo(this.user, this.newPassword).subscribe(function (res) {
            console.log(res.text());
            _this.updateSuccess = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage.includes("Incorrect password"))
                _this.incorrectPassword = true;
        });
    };
    MyProfileComponent.prototype.onNewPayment = function () {
        var _this = this;
        this.paymentService.newPayment(this.userPayment).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedBillingTab = 0;
            _this.userPayment = new __WEBPACK_IMPORTED_MODULE_4__models_user_payment__["a" /* UserPayment */]();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onNewShipping = function () {
        var _this = this;
        this.shippingService.newShipping(this.userShipping).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedShippingTab = 0;
            _this.userShipping = new __WEBPACK_IMPORTED_MODULE_6__models_user_shipping__["a" /* UserShipping */]();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onUpdatePayment = function (payment) {
        this.userPayment = payment;
        this.userBilling = payment.userBilling;
        this.selectedBillingTab = 1;
    };
    MyProfileComponent.prototype.onUpdateShipping = function (shipping) {
        this.userShipping = shipping;
        this.selectedBillingTab = 1;
    };
    MyProfileComponent.prototype.onRemovePayment = function (id) {
        var _this = this;
        this.paymentService.removePayment(id).subscribe(function (res) {
            _this.getCurrentUser();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onRemoveShipping = function (id) {
        var _this = this;
        this.shippingService.removeShipping(id).subscribe(function (res) {
            _this.getCurrentUser();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.setDefaultPayment = function () {
        var _this = this;
        this.defaultPaymentSet = false;
        this.paymentService.setDefaultPayment(this.defaultUserPaymentId).subscribe(function (res) {
            _this.getCurrentUser();
            _this.defaultPaymentSet = true;
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.setDefaultShipping = function () {
        var _this = this;
        this.defaultShippingSet = false;
        this.shippingService.setDefaultShipping(this.defaultUserShippingId).subscribe(function (res) {
            _this.getCurrentUser();
            _this.defaultShippingSet = true;
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onDisplayOrder = function (order) {
        console.log(order);
        this.order = order;
        this.displayOrderDetail = true;
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
            console.log("Inactive session");
            _this.router.navigate(['/myAccount']);
        });
        this.orderService.getOrderList().subscribe(function (res) {
            _this.orderList = res.json();
        }, function (error) {
            console.log(error.text());
        });
        this.getCurrentUser();
        this.userBilling.userBillingState = "";
        this.userShipping.userShippingState = "";
        this.userPayment.type = "";
        this.userPayment.expiryMonth = "";
        this.userPayment.expiryYear = "";
        this.userPayment.userBilling = this.userBilling;
        this.defaultPaymentSet = false;
        this.defaultShippingSet = false;
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-profile',
            template: __webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_payment_service__["a" /* PaymentService */], __WEBPACK_IMPORTED_MODULE_11__services_shipping_service__["a" /* ShippingService */], __WEBPACK_IMPORTED_MODULE_12__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top\" style=\"width:100%;height:20px; background-color:#f46b42\"></div>\n<nav class=\"navbar narbar-default navbar-inverse\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand pointer\" routerLink=\"/home\">YU'S BOOKSTORE</a>\n\t\t</div>\n\t\t\n\t\t<div id=\"navbar\">\n\t\t\t<ul class=\"nav navbar-nav navbar-left\">\n\t\t\t\t<li><a mat-button routerLink=\"/bookList\">BOOK</a></li>\n\t\t\t\t<form (ngSubmit)=\"onSearchByTitle()\" class=\"navbar-form\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"searchByTitle\" [(ngModel)]=\"keyword\" class=\"form-control\" placeholder=\"Book Title\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Search</button>\n\t\t\t\t</form>\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li *ngIf=\"!loggedIn\">\n\t\t\t\t\t<a mat-button routerLink=\"/myAccount\">MY ACCOUNT</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"loggedIn\">\n\t\t\t\t\t<a mat-button routerLink=\"/shoppingCart\">SHOPPING CART</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"loggedIn\">\n\t\t\t\t\t<a mat-button routerLink=\"/myProfile\">MY PROFILE</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"loggedIn\">\n\t\t\t\t\t<a mat-button (click)=\"logout()\">LOG OUT</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(loginService, bookService, router) {
        this.loginService = loginService;
        this.bookService = bookService;
        this.router = router;
        this.loggedIn = false;
        this.bookList = [];
    }
    NavBarComponent.prototype.logout = function () {
        this.loginService.logout().subscribe(function (res) {
            location.reload();
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/']);
    };
    NavBarComponent.prototype.onSearchByTitle = function () {
        var _this = this;
        this.bookService.searchBook(this.keyword).subscribe(function (res) {
            _this.bookList = res.json();
            var navigationExtras = {
                queryParams: {
                    "bookList": JSON.stringify(_this.bookList)
                }
            };
            _this.router.navigate(['/bookList'], navigationExtras);
        }, function (error) {
            console.log(error);
        });
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/order-summary/order-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order-summary/order-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>Shopping Cart</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\t<div class=\"row\" style=\"margin-top:120px;\">\n\t\t<div class=\"alert alert-success\">\n\t\t\t<h3><i class=\"fa fa-check\" style=\"color:limegreen;\"></i>Thank you, your order has been placed</h3>\n\t\t\t<h4>The estimated delivery date is <span>{{estimatedDeliveryDate}}</span></h4>\n\t\t</div>\n\t\t<h3>List of Items</h3>\n\t\t<div class=\"row\" *ngFor=\"let cartItem of cartItemList\">\n\t\t\t<hr />\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<a mat-button (click)=\"onSelect(cartItem.book)\">\n\t\t\t\t\t<img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{cartItem.book.bookId}}.png\" style=\"width:70px;\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t<a class=\"pointer\" (click)=\"onSelect(cartItem.book)\">\n\t\t\t\t\t<h4>{{cartItem.book.title}}</h4>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<h5 style=\"color:#db3208;font-size:large;\">$<span [ngClass]=\"{'text-strike':cartItem.book.inStockNumber==0}\">{{cartItem.book.ourPrice | number : '1.2-2'}}</span></h5>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-2\" style=\"text-center\">\n\t\t\t\t<h5 style=\"font-size:large;\">{{cartItem.qty}}</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<hr />\n\t\t\t<h4 class=\"col-xs-12 text-right\">\n\t\t\t\t<strong style=\"font-size:large;\">Total Price (after taxed, <span>{{cartItemNumber}}</span> items): </strong><span style=\"color:#db3208;font-size:large;\">$<span>{{order.orderTotal}}</span></span> \n\t\t\t</h4>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/order-summary/order-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_checkout_service__ = __webpack_require__("../../../../../src/app/services/checkout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(router, route, checkoutService) {
        this.router = router;
        this.route = route;
        this.checkoutService = checkoutService;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
        this.order = new __WEBPACK_IMPORTED_MODULE_3__models_order__["a" /* Order */]();
        this.cartItemList = [];
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.order = JSON.parse(params['order']);
            var deliveryDate = new Date();
            if (_this.order.shippingMethod == "groundShipping") {
                deliveryDate.setDate(deliveryDate.getDate() + 5);
            }
            else {
                deliveryDate.setDate(deliveryDate.getDate() + 2);
            }
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            _this.estimatedDeliveryDate = days[deliveryDate.getDay()] + ',' + deliveryDate.getFullYear() + '/' + deliveryDate.getMonth() + '/' + deliveryDate.getDate();
            _this.cartItemList = _this.order.cartItemList;
        });
    };
    OrderSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-summary',
            template: __webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/order-summary/order-summary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_checkout_service__["a" /* CheckoutService */]])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>Checkout</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\t\n\t<div class=\"row\" style=\"margin-top:120px;\">\n\t\t<form (ngSubmit)=\"onSubmit()\" method=\"post\">\n\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn-block mat-primary\">Place your order</button>\n\t\t\t\t\t\t<p style=\"font-size:smaller;\">By placing your order, you agree to Yu's Bookstore's terms & condition.</p>\n\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t<h3>Order Summary</h3>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-7 text-left\">\n\t\t\t\t\t\t\t\tTotal before tax:\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-5 text-right\">\n\t\t\t\t\t\t\t\t$<span style=\"color:#db3208;\">{{shoppingCart.grandTotal}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-7 text-left\">\n\t\t\t\t\t\t\t\tEstimated tax:\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-5 text-right\">\n\t\t\t\t\t\t\t\t$<span style=\"color:#db3208;\">{{shoppingCart.grandTotal * 0.0625 | number: '1.2-2'}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-7 text-left\">\n\t\t\t\t\t\t\t\t<h3 style=\"color:darkred;\"><strong>Order Total: </strong></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-5 text-right\">\n\t\t\t\t\t\t\t\t<h3><strong style=\"color:darkred;\">\n\t\t\t\t\t\t\t\t\t$<span style=\"color:#db3208;\">{{shoppingCart.grandTotal * 1.0625 | number: '1.2-2'}}</span>\n\t\t\t\t\t\t\t\t</strong></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\tShipping and handling haven't applied.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t<div *ngIf=\"missingRequiredField\">\n\t\t\t\t\t<h5 class=\"alert alert-warning\">There are some fields missing. Fields with * is required.</h5>\n\t\t\t\t</div>\n\t\t\t\t<mat-tab-group (selectedIndexChange)=\"selectedChange($event)\" [selectedIndex]=\"selectedTab\">\n\t\t\t\t\t<!-- 1. Shipping Address -->\n\t\t\t\t\t<mat-tab label=\"1. Shipping Address\">\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">1. Shipping Address</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table\" *ngIf=\"!emptyShippingList\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Available Shipping Address</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Operation</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userShipping of userShippingList\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{userShipping.userShippingStreet1}} {{userShipping.userShippingStreet2}},{{userShipping.userShippingCity}},{{userShipping.userShippingState}} {{userShipping.userShippingZipcode}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"setShippingAddress(userShipping)\">Use this address</a>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"shippingName\">* Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingAddressName\" placeholder=\"Receiver Name\" name=\"shippingAddressName\" required=\"required\" [(ngModel)]=\"shippingAddress.userShippingName\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"streetAddress\">* Street Address</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"streetAddress\" placeholder=\"Street Address 1\" name=\"shippingAddressStreet1\" required=\"required\" [(ngModel)]=\"shippingAddress.userShippingStreet1\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Address 2\" name=\"shippingAddressStreet2\" [(ngModel)]=\"shippingAddress.userShippingStreet2\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"ShippingCity\">* City</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingAddressCity\" placeholder=\"Your Shipping City\" name=\"shippingAddressCity\" required=\"required\" [(ngModel)]=\"shippingAddress.userShippingCity\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingState\">* State</label>\n\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" id=\"shippingAddressState\" name=\"shippingAddressState\" required=\"required\" [(ngModel)]=\"shippingAddress.userShippingState\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- State --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of stateList\">{{state}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"shippingZipcode\">* Zipcode</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"shippingAddressZipcode\" placeholder=\"Zipcode\" name=\"shippingAddressZipcode\" required=\"required\" [(ngModel)]=\"shippingAddress.userShippingZipcode\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a mat-raised-button class=\"mat-primary\" (click)=\"goToPayment()\">Next</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-tab>\n\t\t\t\t\t<!-- 2. Payment Information -->\n\t\t\t\t\t<mat-tab label=\"2. Payment Information\">\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">2. Payment Information</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table\" *ngIf=\"!emptyPaymentList\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Available Credit Card</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Operation</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userPayment of userPaymentList\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{userPayment.cardName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"setPaymentMethod(userPayment)\">Use this card</a>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<!-- Credit Card Info -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../../assets/image/creditcard.png\" class=\"img-responsive\" />\n\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardType\">*Select Card Type</label>\n\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" id=\"cardType\" name=\"cardType\" required=\"required\" [(ngModel)]=\"payment.type\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Card Type --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"visa\">Visa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mastercard\">Mastercard</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"discover\">Discover</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"amex\">American Express</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardholder\">* Card Holder</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cardholder\" placeholder=\"Card Holder Name\" name=\"cardholderName\" required=\"required\" [(ngModel)]=\"payment.holderName\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardNumber\">* Card Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"tel\" class=\"form-control\" id=\"cardNumber\" placeholder=\"Valid Card Number\" name=\"cardNumber\" required=\"required\" [(ngModel)]=\"payment.cardNumber\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>* Expiration Date</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" name=\"expiryMonth\" required=\"required\" [(ngModel)]=\"payment.expiryMonth\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Month --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Jan (01)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Feb (02)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Mar (03)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Apr (04)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">May (05)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">Jun (06)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\">July (07)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\">Aug (08)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\">Sep (09)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">Oct (10)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">Nov (11)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\">Dec (12)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" name=\"expiryYear\" required=\"required\" [(ngModel)]=\"payment.expiryYear\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- Year --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let year of yearList\" [value]=\"year.value\">{{year.year}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 pull-right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"cardCVC\">* CV Code</label>\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"cardCVC\" type=\"tel\" class=\"form-control\" name=\"cardCVC\" placeholder=\"CVC\" [(ngModel)]=\"payment.cvc\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input id=\"theSameAsShippingAddress\" type=\"checkbox\" name=\"billingSameAsShipping\" value=\"true\" (click)=\"setBillingAsShipping($event.target.checked)\" />The same as shipping address\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<!-- Billing Address -->\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"billingName\">* Name</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billingAddressName\" placeholder=\"Receiver Name\" name=\"billingAddressName\" required=\"required\" [(ngModel)]=\"billingAddress.userBillingName\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"billingAddress\">* Street Address</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billingAddress\" placeholder=\"Street Address 1\" name=\"billingAddressStreet1\" required=\"required\" [(ngModel)]=\"billingAddress.userBillingStreet1\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Street Address 2\" name=\"billingAddressStreet2\" [(ngModel)]=\"billingAddress.userBillingStreet2\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingCity\">* City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billingAddressCity\" placeholder=\"Your Billing City\" name=\"billingAddressCity\" required=\"required\" [(ngModel)]=\"billingAddress.userBillingCity\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingState\">* State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select type=\"text\" class=\"form-control\" id=\"billingAddressState\" name=\"billingAddressState\" required=\"required\" [(ngModel)]=\"billingAddress.userBillingState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>-- State --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of stateList\">{{state}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"billingZipcode\">* Zipcode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"billingAddressZipcode\" placeholder=\"Zipcode\" name=\"billingAddressZipcode\" required=\"required\" [(ngModel)]=\"billingAddress.userBillingZipcode\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a mat-raised-button class=\"mat-primary\" (click)=\"goToReview()\">Next</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-tab>\n\t\t\t\t\t<!-- 3. Review Items and Shipping -->\n\t\t\t\t\t<mat-tab label=\"3. Review\">\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">3. Review Items and Shipping</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<h4>Choose your shipping method:</h4>\n\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"shippingMethod\" value=\"groundShipping\" [(ngModel)]=\"shippingMethod\" />Groud Shipping\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"shippingMethod\" value=\"premiumShipping\" [(ngModel)]=\"shippingMethod\" />Premuim Shipping\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t\t\t\t\t\t\t<h4>Products</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t\t\t\t<h4>Price</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t\t\t\t<h4>Qty</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Display Products -->\n\t\t\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let cartItem of cartItemList\">\n\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t\t\t\t<a mat-button (click)=\"onSelect(cartItem.book)\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{cartItem.book.bookId}}.png\" style=\"width:70px;\" />\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"onSelect(cartItem.book)\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>{{cartItem.book.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"cartItem.book.inStockNumber>=10\" style=\"color:green;\">In Stock</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"cartItem.book.inStockNumber<10 && cartItem.book.inStockNumber>0\" style=\"color:yellow;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"cartItem.book.inStockNumber==0\" style=\"color:darkred;\">Product Unavailable.</p>\n\t\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\"><i class=\"fa fa-times\"></i>Delete</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t\t\t\t<h5 style=\"color:#db3208;font-size:large;\">$<span [ngClass]=\"{'text-strike':cartItem.book.inStockNumber==0}\">{{cartItem.book.ourPrice | number : '1.2-2'}}</span></h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<h5 style=\"font-size:large;\">{{cartItem.qty}}</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t\t\t<h4 class=\"col-xs-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t<strong style=\"font-size:large;\">Total Price (<span>{{cartItemNumber}}</span> items): </strong><span style=\"color:#db3208;font-size:large;\">$<span>{{shoppingCart.grandTotal}}</span></span> \n\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"btn-block mat-primary\">Place your order</button>\n\t\t\t\t\t\t\t\t\t<p>By placing your order, you agree to Yu's Bookstore's terms & conditions.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-tab>\n\t\t\t\t</mat-tab-group>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_billing__ = __webpack_require__("../../../../../src/app/models/user-billing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user_shipping__ = __webpack_require__("../../../../../src/app/models/user-shipping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user_payment__ = __webpack_require__("../../../../../src/app/models/user-payment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shipping_service__ = __webpack_require__("../../../../../src/app/services/shipping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_checkout_service__ = __webpack_require__("../../../../../src/app/services/checkout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OrderComponent = (function () {
    function OrderComponent(router, cartService, shippingService, paymentService, checkoutService) {
        this.router = router;
        this.cartService = cartService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
        this.checkoutService = checkoutService;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
        this.yearList = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].yearList;
        this.stateList = Object.keys(__WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].usStates);
        this.userShippingList = [];
        this.userPaymentList = [];
        this.cartItemList = [];
        this.shoppingCart = new __WEBPACK_IMPORTED_MODULE_3__models_shopping_cart__["a" /* ShoppingCart */]();
        this.userPayment = new __WEBPACK_IMPORTED_MODULE_7__models_user_payment__["a" /* UserPayment */]();
        this.userBilling = new __WEBPACK_IMPORTED_MODULE_5__models_user_billing__["a" /* UserBilling */]();
        this.userShipping = new __WEBPACK_IMPORTED_MODULE_6__models_user_shipping__["a" /* UserShipping */]();
        this.payment = new __WEBPACK_IMPORTED_MODULE_7__models_user_payment__["a" /* UserPayment */]();
        this.billingAddress = new __WEBPACK_IMPORTED_MODULE_5__models_user_billing__["a" /* UserBilling */]();
        this.shippingAddress = new __WEBPACK_IMPORTED_MODULE_6__models_user_shipping__["a" /* UserShipping */]();
        this.emptyShippingList = true;
        this.emptyPaymentList = true;
        this.order = new __WEBPACK_IMPORTED_MODULE_4__models_order__["a" /* Order */]();
    }
    OrderComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail/', this.selectedBook.bookId]);
    };
    OrderComponent.prototype.selectedChange = function (val) {
        this.selectedTab = val;
    };
    OrderComponent.prototype.goToPayment = function () {
        this.selectedTab = 1;
    };
    OrderComponent.prototype.goToReview = function () {
        this.selectedTab = 2;
    };
    OrderComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItemList().subscribe(function (res) {
            _this.cartItemList = res.json();
            _this.cartItemNumber = _this.cartItemList.length;
        }, function (error) {
            console.log(error.text());
        });
    };
    OrderComponent.prototype.setShippingAddress = function (userShipping) {
        this.shippingAddress = userShipping;
    };
    OrderComponent.prototype.setPaymentMethod = function (userPayment) {
        this.payment = userPayment;
        this.billingAddress = userPayment.userBilling;
    };
    OrderComponent.prototype.setBillingAsShipping = function (checked) {
        console.log("same as shipping");
        if (checked) {
            this.billingAddress.userBillingName = this.shippingAddress.userShippingName;
            this.billingAddress.userBillingStreet1 = this.shippingAddress.userShippingStreet1;
            this.billingAddress.userBillingStreet2 = this.shippingAddress.userShippingStreet2;
            this.billingAddress.userBillingCity = this.shippingAddress.userShippingCity;
            this.billingAddress.userBillingState = this.shippingAddress.userShippingState;
            this.billingAddress.userBillingZipcode = this.shippingAddress.userShippingZipcode;
        }
    };
    OrderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkoutService.checkout(this.shippingAddress, this.billingAddress, this.payment, this.shippingMethod).subscribe(function (res) {
            console.log(_this.order);
            _this.order = res.json();
            var navigateExtras = {
                queryParams: {
                    "order": JSON.stringify(_this.order)
                }
            };
            _this.router.navigate(['/orderSummary/'], navigateExtras);
        }, function (error) {
            console.log(error.text());
        });
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartItemList();
        this.cartService.getShoppingCart().subscribe(function (res) {
            _this.shoppingCart = res.json();
        }, function (error) {
            console.log(error.text());
        });
        this.shippingService.getUserShippingList().subscribe(function (res) {
            _this.userShippingList = res.json();
            if (_this.userShippingList.length != 0) {
                _this.emptyShippingList = false;
                for (var _i = 0, _a = _this.userShippingList; _i < _a.length; _i++) {
                    var userShipping = _a[_i];
                    if (userShipping.defaultShipping) {
                        _this.setShippingAddress(userShipping);
                        return;
                    }
                }
            }
        }, function (error) {
            console.log(error.text());
        });
        this.paymentService.getPaymentList().subscribe(function (res) {
            _this.userPaymentList = res.json();
            if (_this.userPaymentList.length != 0) {
                _this.emptyPaymentList = false;
                for (var _i = 0, _a = _this.userPaymentList; _i < _a.length; _i++) {
                    var userPayment = _a[_i];
                    if (userPayment.defaultPayment) {
                        _this.setPaymentMethod(userPayment);
                        return;
                    }
                }
            }
        }, function (error) {
            console.log(error.text());
        });
        this.payment.type = "";
        this.payment.expiryMonth = "";
        this.payment.expiryYear = "";
        this.billingAddress.userBillingState = "";
        this.shippingAddress.userShippingState = "";
        this.shippingMethod = "groundShipping";
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/components/order/order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_9__services_shipping_service__["a" /* ShippingService */], __WEBPACK_IMPORTED_MODULE_10__services_payment_service__["a" /* PaymentService */], __WEBPACK_IMPORTED_MODULE_11__services_checkout_service__["a" /* CheckoutService */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-8\">\n\t\t\t<h2 class=\"section-headline\">\n\t\t\t\t<span>Shopping Cart</span>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-4\">\n\t\t\t<img src=\"../../../assets/image/logo.png\" class=\"img-responsive right\" style=\"width:400px;z-index:1;\" />\n\t\t</div>\n\t\t<img src=\"../../../assets/image/wood.png\" class=\"img-responsive right\" style=\"position:absolute;margin-top:90px;z-index:-2;\" />\n\t</div>\n\t<hr style=\"position:absolute;width:85%;height:6px;background-color:#333;z-index:-1;margin-top:-170px;\" />\n\t\n\t<div class=\"row\" style=\"margin-top:120px;\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6 text-left\">\n\t\t\t\t\t<a mat-raised-button class=\"mat-warn\" routerLink=\"/bookList\">Continue Shopping</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-6 text-right\">\n\t\t\t\t\t<a mat-raised-button class=\"mat-warn\" routerLink=\"/checkout\">Check Out</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br />\n\t\t\t<div *ngIf=\"cartItemUpdate\" class=\"alert alert-success\">\n\t\t\t\tCart Item Updated Successfully!\n\t\t\t</div>\n\t\t\t<div *ngIf=\"notEnoughStock\" class=\"alert alert-warning\">\n\t\t\t\tOops, some of products don't have enough stock. Please update product quantity.\n\t\t\t</div>\n\t\t\t<div *ngIf=\"emptyCart\" class=\"alert alert-warning\">\n\t\t\t\tOops, your cart is empty. See if you can find what you like in the bookshelf and add them to cart.\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t\t<h4>Products</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t<h4>Price</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t<h4>Qty</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let cartItem of cartItemList\">\n\t\t\t\t<hr />\n\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t<a mat-button (click)=\"onSelect(cartItem.book)\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{cartItem.book.bookId}}.png\" style=\"width:70px;\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<a class=\"pointer\" (click)=\"onSelect(cartItem.book)\">\n\t\t\t\t\t\t<h4>{{cartItem.book.title}}</h4>\n\t\t\t\t\t</a>\n\t\t\t\t\t<p *ngIf=\"cartItem.book.inStockNumber>=10\" style=\"color:green;\">In Stock</p>\n\t\t\t\t\t<p *ngIf=\"cartItem.book.inStockNumber<10 && cartItem.book.inStockNumber>0\" style=\"color:yellow;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n\t\t\t\t\t<p *ngIf=\"cartItem.book.inStockNumber==0\" style=\"color:darkred;\">Product Unavailable.</p>\n\t\t\t\t\t<a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\"><i class=\"fa fa-times\"></i>Delete</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t<h5 style=\"color:#db3208;font-size:large;\">$<span [ngClass]=\"{'text-strike':cartItem.book.inStockNumber==0}\">{{cartItem.book.ourPrice | number : '1.2-2'}}</span></h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"cartItem.id\" />\n\t\t\t\t\t<input id=\"cartItem.id\" name=\"qty\" [disabled]=\"cartItem.book.inStockNumber==0\" class=\"form-control cartItemQty\" [(ngModel)]=\"cartItem.qty\" (ngModelChange)=\"cartItem.toUpdate=true\" />\n\t\t\t\t\t<a mat-button *ngIf=\"cartItem.toUpdate\" class=\"pointer mat-warn\" (click)=\"onUpdateCartItem(cartItem)\">Update</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<hr />\n\t\t\t\t<h4 class=\"col-xs-12 text-right\">\n\t\t\t\t\t<strong style=\"font-size:large;\">Total Price (<span>{{cartItemNumber}}</span> items): </strong><span style=\"color:#db3208;font-size:large;\">$<span>{{shoppingCart.grandTotal}}</span></span> \n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
        this.cartItemList = [];
        this.shoppingCart = new __WEBPACK_IMPORTED_MODULE_3__models_shopping_cart__["a" /* ShoppingCart */]();
    }
    ShoppingCartComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail/', this.selectedBook.bookId]);
    };
    ShoppingCartComponent.prototype.onRemoveCartItem = function (cartItem) {
        var _this = this;
        this.cartService.removeCartItem(cartItem.id).subscribe(function (res) {
            console.log(res.text());
            _this.getCartItemList();
            _this.getShoppingCart();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.onUpdateCartItem = function (cartItem) {
        var _this = this;
        this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(function (res) {
            console.log(res.text());
            _this.cartItemUpdated = true;
            _this.getShoppingCart();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItemList().subscribe(function (res) {
            _this.cartItemList = res.json();
            _this.cartItemNumber = _this.cartItemList.length;
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.getShoppingCart = function () {
        var _this = this;
        this.cartService.getShoppingCart().subscribe(function (res) {
            console.log(res.json());
            _this.shoppingCart = res.json();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.onCheckOut = function () {
        if (this.cartItemNumber == 0) {
            this.emptyCart = true;
        }
        else {
            for (var _i = 0, _a = this.cartItemList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.qty > item.book.inStockNumber) {
                    console.log("Not enough stock on some item");
                    this.notEnoughStock = true;
                    return;
                }
            }
            this.router.navigate['/checkout'];
        }
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.getShoppingCart();
        this.getCartItemList();
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/constants/app-const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConst; });
var AppConst = (function () {
    function AppConst() {
    }
    AppConst.serverPath = "http://127.0.0.1:8080";
    AppConst.yearList = [
        { 'year': '2017', 'value': '17' },
        { 'year': '2018', 'value': '18' },
        { 'year': '2019', 'value': '19' },
        { 'year': '2020', 'value': '20' },
        { 'year': '2021', 'value': '21' },
        { 'year': '2022', 'value': '22' },
        { 'year': '2023', 'value': '23' },
        { 'year': '2024', 'value': '24' },
        { 'year': '2025', 'value': '25' }
    ];
    AppConst.usStates = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    };
    return AppConst;
}());



/***/ }),

/***/ "../../../../../src/app/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/app/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "../../../../../src/app/models/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-billing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBilling; });
var UserBilling = (function () {
    function UserBilling() {
    }
    return UserBilling;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-payment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPayment; });
var UserPayment = (function () {
    function UserPayment() {
    }
    return UserPayment;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-shipping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserShipping; });
var UserShipping = (function () {
    function UserShipping() {
    }
    return UserShipping;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/module/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatListModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatListModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookService = (function () {
    function BookService(http, router) {
        this.http = http;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    BookService.prototype.getBookList = function () {
        var url = this.serverPath + '/book/bookList';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    BookService.prototype.getBook = function (id) {
        var url = this.serverPath + '/book/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    BookService.prototype.searchBook = function (keyword) {
        var url = this.serverPath + "/book/searchBook";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, keyword, { headers: tokenHeader });
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    CartService.prototype.addItem = function (id, qty) {
        var url = this.serverPath + '/cart/add';
        var cartItemInfo = {
            "bookId": id,
            "qty": qty
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, cartItemInfo, { headers: headers });
    };
    CartService.prototype.getCartItemList = function () {
        var url = this.serverPath + '/cart/getCartItemList';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    CartService.prototype.getShoppingCart = function () {
        var url = this.serverPath + '/cart/getShoppingCart';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    CartService.prototype.updateCartItem = function (cartItemId, qty) {
        var url = this.serverPath + '/cart/updateCartItem';
        var cartItemInfo = {
            "cartItemId": cartItemId,
            "qty": qty
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, cartItemInfo, { headers: headers });
    };
    CartService.prototype.removeCartItem = function (id) {
        var url = this.serverPath + '/cart/removeCartItem';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, id, { headers: headers });
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/checkout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutService = (function () {
    function CheckoutService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    CheckoutService.prototype.checkout = function (userShipping, userBilling, userPayment, shippingMethod) {
        var url = this.serverPath + '/checkout/checkout';
        var order = {
            "userShipping": userShipping,
            "userBilling": userBilling,
            "userPayment": userPayment,
            "shippingMethod": shippingMethod
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, order, { headers: headers });
    };
    CheckoutService.prototype.getUserOrder = function () {
        var url = this.serverPath + '/checkout/getUserOrder';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = this.serverPath + '/token';
        var encodedCredential = btoa(username + ":" + password);
        var basicHeader = "Basic " + encodedCredential;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.checkSession = function () {
        var url = this.serverPath + '/checkSession';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        var url = this.serverPath + '/user/logout';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken'),
        });
        return this.http.post(url, '', { headers: headers });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    OrderService.prototype.getOrderList = function () {
        var url = this.serverPath + '/order/getOrderList';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    PaymentService.prototype.newPayment = function (payment) {
        var url = this.serverPath + "/payment/add";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(payment), { headers: tokenHeader });
    };
    PaymentService.prototype.getPaymentList = function () {
        var url = this.serverPath + "/payment/getPaymentList";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    PaymentService.prototype.removePayment = function (id) {
        var url = this.serverPath + "/payment/remove";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService.prototype.setDefaultPayment = function (id) {
        var url = this.serverPath + "/payment/setDefault";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shipping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippingService = (function () {
    function ShippingService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    ShippingService.prototype.newShipping = function (shipping) {
        var url = this.serverPath + "/shipping/add";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(shipping), { headers: tokenHeader });
    };
    ShippingService.prototype.getUserShippingList = function () {
        var url = this.serverPath + "/shipping/getShippingList";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    ShippingService.prototype.removeShipping = function (id) {
        var url = this.serverPath + "/shipping/remove";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    ShippingService.prototype.setDefaultShipping = function (id) {
        var url = this.serverPath + "/shipping/setDefault";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    ShippingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ShippingService);
    return ShippingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_const__ = __webpack_require__("../../../../../src/app/constants/app-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__constants_app_const__["a" /* AppConst */].serverPath;
    }
    UserService.prototype.newUser = function (username, email) {
        var url = this.serverPath + "/user/newUser";
        var userInfo = {
            'username': username,
            'email': email
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.retrievePassword = function (email) {
        var url = this.serverPath + "/user/getPassword";
        var userInfo = email;
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'text/plain',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, userInfo, { headers: tokenHeader });
    };
    UserService.prototype.updateUserInfo = function (user, newPassword) {
        var url = this.serverPath + "/user/updateUserInfo";
        var userInfo = {
            'id': user.userId,
            'firstName': user.firstName,
            'lastName': user.lastName,
            'username': user.username,
            'currentPassword': user.password,
            'email': user.email,
            'newPassword': newPassword
        };
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.getCurrentUser = function () {
        var url = this.serverPath + "/user/getCurrentUser";
        var tokenHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map