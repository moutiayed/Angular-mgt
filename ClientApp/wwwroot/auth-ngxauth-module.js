(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-ngxauth-module"],{

/***/ "./src/app/auth/ngx-auth/ngx-auth.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/ngx-auth/ngx-auth.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-column>\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n        </nav>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-auth-block>\n          <router-outlet></router-outlet>\n        </nb-auth-block>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>"

/***/ }),

/***/ "./src/app/auth/ngx-auth/ngx-auth.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/ngx-auth/ngx-auth.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host nb-card {\n  margin: 0;\n  height: calc(100vh - 2 * 2.5rem); }\n\n:host .navigation .link {\n  text-decoration: none; }\n\n:host .navigation .link .icon {\n    font-size: 2rem; }\n\n:host nb-card-body {\n  display: flex;\n  width: 100%; }\n\n:host nb-auth-block {\n  margin: auto; }\n\n:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9uZ3gtYXV0aC9DOlxcVXNlcnNcXEhvdXNzZW0gSGFtaWxhXFxEZXNrdG9wXFxXb3JrU3BhY2VcXEJDX01BTkFHRU1FTlRfVE9PTFxcTWFuYWdlbWVudFRvb2xcXE1hbmFnZW1lbnRUb29sLkFQSVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhdXRoXFxuZ3gtYXV0aFxcbmd4LWF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxTQUFTO0VBQ1QsZ0NBQWlELEVBQUE7O0FBTHJEO0VBU0kscUJBQXFCLEVBQUE7O0FBVHpCO0lBWU0sZUFBZSxFQUFBOztBQVpyQjtFQWlCSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQWxCZjtFQXNCSSxZQUFZLEVBQUE7O0FBdEJoQjtFQTRCTSxlQTNCd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbmd4LWF1dGgvbmd4LWF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgJGF1dGgtbGF5b3V0LXBhZGRpbmc6IDIuNXJlbTtcclxuXHJcbiAgbmItY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogI3skYXV0aC1sYXlvdXQtcGFkZGluZ30pO1xyXG4gIH1cclxuXHJcbiAgLm5hdmlnYXRpb24gLmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmItY2FyZC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIG5iLWF1dGgtYmxvY2sge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiBcclxuICAvZGVlcC8ge1xyXG4gICAgbmItbGF5b3V0IC5sYXlvdXQgLmxheW91dC1jb250YWluZXIgLmNvbnRlbnQgLmNvbHVtbnMgbmItbGF5b3V0LWNvbHVtbiB7XHJcbiAgICAgIHBhZGRpbmc6ICRhdXRoLWxheW91dC1wYWRkaW5nO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/ngx-auth/ngx-auth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/ngx-auth/ngx-auth.component.ts ***!
  \*****************************************************/
/*! exports provided: NgxAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthComponent", function() { return NgxAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgxAuthComponent = /** @class */ (function (_super) {
    __extends(NgxAuthComponent, _super);
    function NgxAuthComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxAuthComponent.prototype.ngOnInit = function () {
    };
    NgxAuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-auth',
            template: __webpack_require__(/*! ./ngx-auth.component.html */ "./src/app/auth/ngx-auth/ngx-auth.component.html"),
            styles: [__webpack_require__(/*! ./ngx-auth.component.scss */ "./src/app/auth/ngx-auth/ngx-auth.component.scss")]
        })
    ], NgxAuthComponent);
    return NgxAuthComponent;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthComponent"]));



/***/ }),

/***/ "./src/app/auth/ngx-login/ngx-login.component.css":
/*!********************************************************!*\
  !*** ./src/app/auth/ngx-login/ngx-login.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9uZ3gtbG9naW4vbmd4LWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL25neC1sb2dpbi9uZ3gtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/ngx-login/ngx-login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/ngx-login/ngx-login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/logo.png\" height=\"150\" width=\"300\" class=\"center\">\n<!-- <h1 id=\"title\" class=\"title\">Login</h1> -->\n<p class=\"sub-title\">Hello! Log in with your user-name.</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">Username:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.username\"\n           #username=\"ngModel\"\n           name=\"username\"\n           id=\"input-username\"\n           placeholder=\"User-name\"\n           autofocus >\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           placeholder=\"Password\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    \n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"success\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Log In\n  </button>\n</form>"

/***/ }),

/***/ "./src/app/auth/ngx-login/ngx-login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/ngx-login/ngx-login.component.ts ***!
  \*******************************************************/
/*! exports provided: NgxLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoginComponent", function() { return NgxLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgxLoginComponent = /** @class */ (function (_super) {
    __extends(NgxLoginComponent, _super);
    function NgxLoginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.onTokenChange().subscribe(function (token) {
            //console.log('inside on init');
            if (token.isValid()) {
                //console.log('token valid');
                _this.router.navigate(['']); // Your redirection goes here
            }
            else {
                //console.log('token not valid');
            }
        }, function (error) {
            _this.errors = error;
            console.log("Login/Email combination is not correct, please try again.");
        });
    };
    NgxLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-login',
            template: __webpack_require__(/*! ./ngx-login.component.html */ "./src/app/auth/ngx-login/ngx-login.component.html"),
            styles: [__webpack_require__(/*! ./ngx-login.component.css */ "./src/app/auth/ngx-login/ngx-login.component.css")]
        })
    ], NgxLoginComponent);
    return NgxLoginComponent;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbLoginComponent"]));



/***/ }),

/***/ "./src/app/auth/ngxauth-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/ngxauth-routing.module.ts ***!
  \************************************************/
/*! exports provided: routes, NgxauthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxauthRoutingModule", function() { return NgxauthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-login/ngx-login.component */ "./src/app/auth/ngx-login/ngx-login.component.ts");
/* harmony import */ var _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-auth/ngx-auth.component */ "./src/app/auth/ngx-auth/ngx-auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_3__["NgxAuthComponent"],
        children: [
            {
                path: 'login',
                component: _ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_2__["NgxLoginComponent"],
            },
        ],
    },
];
var NgxauthRoutingModule = /** @class */ (function () {
    function NgxauthRoutingModule() {
    }
    NgxauthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NgxauthRoutingModule);
    return NgxauthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/ngxauth.module.ts":
/*!****************************************!*\
  !*** ./src/app/auth/ngxauth.module.ts ***!
  \****************************************/
/*! exports provided: NgxAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthModule", function() { return NgxAuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _ngxauth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngxauth-routing.module */ "./src/app/auth/ngxauth-routing.module.ts");
/* harmony import */ var _ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-login/ngx-login.component */ "./src/app/auth/ngx-login/ngx-login.component.ts");
/* harmony import */ var _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-auth/ngx-auth.component */ "./src/app/auth/ngx-auth/ngx-auth.component.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NgxAuthModule = /** @class */ (function () {
    function NgxAuthModule() {
    }
    NgxAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                _ngxauth_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgxauthRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_8__["NbAuthModule"]
            ],
            declarations: [_ngx_login_ngx_login_component__WEBPACK_IMPORTED_MODULE_6__["NgxLoginComponent"], _ngx_auth_ngx_auth_component__WEBPACK_IMPORTED_MODULE_7__["NgxAuthComponent"]]
        })
    ], NgxAuthModule);
    return NgxAuthModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-ngxauth-module.js.map