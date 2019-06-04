(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/ngxauth.module": [
		"./src/app/auth/ngxauth.module.ts",
		"auth-ngxauth-module"
	],
	"./modules/container.module": [
		"./src/app/modules/container.module.ts",
		"modules-container-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            {
                path: '',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
                loadChildren: './modules/container.module#ContainerModule',
            },
            {
                path: 'auth',
                loadChildren: './auth/ngxauth.module#NgxAuthModule',
            },
        ],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host nb-layout-column {\n  width: 500px;\n}\n\n:host nb-layout-column a {\n  background: #f4f4f7;\n}\n\n:host nb-layout-column nb-user{\n  background: #f4f4f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IG5iLWxheW91dC1jb2x1bW4ge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbjpob3N0IG5iLWxheW91dC1jb2x1bW4gYSB7XG4gIGJhY2tncm91bmQ6ICNmNGY0Zjc7XG59XG5cbjpob3N0IG5iLWxheW91dC1jb2x1bW4gbmItdXNlcntcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]])
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
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_renderers_custom_render_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/renderers/custom-render.component */ "./src/app/modules/renderers/custom-render.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var _core_services_role_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/role.provider */ "./src/app/core/services/role.provider.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _modules_renderers_custom_render_component__WEBPACK_IMPORTED_MODULE_5__["CustomRenderComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["JsonpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"].forRoot({ name: 'default' }),
                // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbProgressBarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_security__WEBPACK_IMPORTED_MODULE_12__["NbSecurityModule"].forRoot({
                    accessControl: {
                        User: {
                            // login
                            // home 
                            // full access on : task, timesheetElement
                            view: ['tasks', 'timesheets', 'releases', 'requirements', 'home', 'login'],
                            create: ['tasks', 'timesheets'],
                            remove: ['tasks', 'timesheets'],
                        },
                        TeamLeader: {
                            parent: 'User',
                            // parent user : task, timesheet
                            // full access on : users, teams, releases, requirement
                            view: ['users', 'teams', 'releases', 'requirements', 'contracts', 'customers'],
                            create: ['users', 'teams', 'releases', 'requirements'],
                            remove: ['users', 'teams', 'releases', 'requirements'],
                        },
                        Admin: {
                            // customers, contracts, rates, : Admin
                            // full access on : everything
                            view: '*',
                            create: '*',
                            remove: '*',
                        },
                    },
                }),
                _nebular_auth__WEBPACK_IMPORTED_MODULE_11__["NbAuthModule"].forRoot({
                    strategies: [
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_11__["NbPasswordAuthStrategy"].setup({
                            name: 'email',
                            token: {
                                class: _nebular_auth__WEBPACK_IMPORTED_MODULE_11__["NbAuthJWTToken"],
                                key: 'auth_token',
                            },
                            baseEndpoint: 'http://localhost:5001',
                            login: {
                                endpoint: '/api/Auth/login',
                                method: 'post',
                                defaultErrors: ['Login/Email combination is not correct, please try again.'],
                            },
                        }),
                    ],
                    forms: {},
                }),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            providers: [
                { provide: _nebular_security__WEBPACK_IMPORTED_MODULE_12__["NbRoleProvider"], useClass: _core_services_role_provider__WEBPACK_IMPORTED_MODULE_13__["RoleProvider"] },
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['auth/login']);
            }
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_2__["ContractService"],
                _services__WEBPACK_IMPORTED_MODULE_2__["RequirementService"],
                _services__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/models/passwordChange.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/passwordChange.model.ts ***!
  \*****************************************************/
/*! exports provided: PasswordChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChange", function() { return PasswordChange; });
var PasswordChange = /** @class */ (function () {
    function PasswordChange() {
    }
    return PasswordChange;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.token = token.getValue(); // here we receive a payload from the token and assigne it to our `user` variable 
            }
        });
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](); }
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.get(path, { headers: myHeaders });
    };
    ApiService.prototype.put = function (path, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.put(path, body, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.post(path, body, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.delete(path, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put2 = function (path, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
        });
        return this.http.put(path, body, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/contract.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/contract.service.ts ***!
  \***************************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractService = /** @class */ (function () {
    function ContractService(apiService) {
        this.apiService = apiService;
    }
    ContractService.prototype.getAll = function () {
        return this.apiService.get('api/Contract');
    };
    ContractService.prototype.create = function (contract) {
        return this.apiService.post('api/Contract/', contract);
    };
    ContractService.prototype.destroy = function (contractId) {
        return this.apiService.delete('api/Contract/' + contractId);
    };
    ContractService.prototype.update = function (contract) {
        return this.apiService.put('api/Contract/', contract);
    };
    ContractService.prototype.getContractsByCustomerId = function (customerId) {
        return this.apiService.get('api/Contract/byCustomers/' + customerId);
    };
    ContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/app/core/services/employee.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/employee.service.ts ***!
  \***************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(apiService) {
        this.apiService = apiService;
    }
    EmployeeService.prototype.getAll = function () {
        return this.apiService.get('api/Employee');
    };
    EmployeeService.prototype.create = function (employee) {
        return this.apiService.post('api/accounts', employee);
    };
    EmployeeService.prototype.destroy = function (employeeId) {
        return this.apiService.delete('api/Employee/' + employeeId);
    };
    EmployeeService.prototype.update = function (employee) {
        return this.apiService.put('api/Employee/', employee);
    };
    EmployeeService.prototype.getById = function (employeeId) {
        return this.apiService.get('api/Employee/' + employeeId);
    };
    EmployeeService.prototype.changePassword = function (passwordchange) {
        return this.apiService.put('api/accounts', passwordchange);
    };
    EmployeeService.prototype.resetPassword = function (passwordChange) {
        return this.apiService.put('/api/Accounts/PutAsyncReset', passwordChange);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, ContractService, RequirementService, TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract.service */ "./src/app/core/services/contract.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return _contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"]; });

/* harmony import */ var _requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requirement.service */ "./src/app/core/services/requirement.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequirementService", function() { return _requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"]; });

/* harmony import */ var _timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return _timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]; });







/***/ }),

/***/ "./src/app/core/services/requirement.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/requirement.service.ts ***!
  \******************************************************/
/*! exports provided: RequirementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementService", function() { return RequirementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequirementService = /** @class */ (function () {
    function RequirementService(apiService) {
        this.apiService = apiService;
    }
    RequirementService.prototype.getAll = function () {
        return this.apiService.get('api/Requirement');
    };
    RequirementService.prototype.create = function (requirement) {
        return this.apiService.post('api/Requirement/', requirement);
    };
    RequirementService.prototype.destroy = function (requirementId) {
        return this.apiService.delete('api/Requirement/' + requirementId);
    };
    RequirementService.prototype.update = function (requirement) {
        return this.apiService.put('api/Requirement/', requirement);
    };
    RequirementService.prototype.GetAllByEmployeeId = function (employeeId) {
        return this.apiService.get('api/Requirement/byEmployees/' + employeeId);
    };
    RequirementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], RequirementService);
    return RequirementService;
}());



/***/ }),

/***/ "./src/app/core/services/role.provider.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/role.provider.ts ***!
  \************************************************/
/*! exports provided: RoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleProvider", function() { return RoleProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleProvider = /** @class */ (function () {
    function RoleProvider(authService) {
        this.authService = authService;
    }
    RoleProvider.prototype.getRole = function () {
        return this.authService.onTokenChange()
            .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (token) {
            return token.isValid() ? token.getPayload()['rol'] : 'guest';
        }));
    };
    RoleProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]])
    ], RoleProvider);
    return RoleProvider;
}());



/***/ }),

/***/ "./src/app/core/services/timesheet.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/timesheet.service.ts ***!
  \****************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimesheetService = /** @class */ (function () {
    function TimesheetService(apiService) {
        this.apiService = apiService;
    }
    TimesheetService.prototype.getAll = function () {
        return this.apiService.get('api/TimeSheetElement');
    };
    TimesheetService.prototype.create = function (timesheet) {
        return this.apiService.post('/api/TimeSheetElement/', timesheet);
    };
    TimesheetService.prototype.getById = function (idUser) {
        return this.apiService.get('api/TimeSheetElement/byUser/' + idUser);
    };
    //[HttpGet("byUser/{idUser}/{startDate}")]
    TimesheetService.prototype.GetWeekTsByUser = function (idUser, startDate) {
        return this.apiService.get('api/TimeSheetElement/byUser/' + idUser + '/' + startDate);
    };
    //AddTsByWeek
    TimesheetService.prototype.update = function (timesheet) {
        return this.apiService.post('api/TimeSheetElement/AddTsByWeek/', timesheet);
    };
    // Get: api/UserTask/GetSumDurationsTask
    TimesheetService.prototype.GetSumDurationsTask = function (taskId) {
        return this.apiService.get('api/TimeSheetElement/GetSumDurationsTask/' + taskId);
    };
    TimesheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "./src/app/modules/modals/usersmanagement-modals/profile/profile.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/modals/usersmanagement-modals/profile/profile.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 1rem;\r\n  }\r\n\r\n  [nbInput] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .form-control:focus {\r\n    box-shadow:none;\r\n  }\r\n\r\n  nb-card-header button {\r\n    float: right;\r\n  }\r\n\r\n  img {\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb2RhbHMvdXNlcnNtYW5hZ2VtZW50LW1vZGFscy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBSUE7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21vZGFscy91c2Vyc21hbmFnZW1lbnQtbW9kYWxzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcblxyXG4gIFtuYklucHV0XSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG5iLWNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/modals/usersmanagement-modals/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/modals/usersmanagement-modals/profile/profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card [style.width.px]=\"1300\" [style.height.px]=\"800\">\n\n  <nb-card-header>\n    Profile\n    <button nbButton hero status=\"danger\" (click)=\"dismiss()\">Close</button>\n  </nb-card-header>\n\n  <nb-card-body>\n\n    <form>\n      <nb-card>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-sm-2\">\n              <img src=\"assets/dominus.jpg\" height=\"170\" width=\"170\"></div>\n            <div class=\"col-sm-8\">\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"firstname\"><b>First Name:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\"\n                      placeholder=\"First Name\" [(ngModel)]=\"employee.firstName\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.firstName}}</label></div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"lastname\"><b>Last Name:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"> <input nbInput type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\"\n                      placeholder=\"Last Name\" [(ngModel)]=\"employee.lastName\"> </div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.lastName}}</label></div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"email\"><b>Email:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\n                      placeholder=\"email\" [(ngModel)]=\"employee.email\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.email}}</label></div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"function\"><b>Function:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"function\" class=\"form-control\" id=\"function\"\n                      name=\"function\" placeholder=\"Function\" [(ngModel)]=\"employee.function\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.function}}</label></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"role\"><b>Role:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div> <label>{{employee.role}}</label></div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </nb-card-body>\n      </nb-card>\n      <nb-card>\n        <nb-card-header>\n          Personal Data\n        </nb-card-header>\n        <nb-card-body>\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"cin\"><b>Cin:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"cin\" class=\"form-control\" id=\"cin\" name=\"cin\"\n                      placeholder=\"Cin\" [(ngModel)]=\"employee.cin\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.cin}}</label></div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label><b>Birthday:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"> <input [nbDatepicker]=\"birthday\" class=\"form-control\" placeholder=\"Birthday\"\n                      [(ngModel)]=\"employee.birthday\" name=\"birthday\"></div>\n                  <nb-datepicker #birthday format=\"dd\\MM\\yyyy\"></nb-datepicker>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.birthday}}</label></div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"adress\"><b>Address:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"adress\" class=\"form-control\" id=\"adress\" name=\"adress\"\n                      placeholder=\"Address\" [(ngModel)]=\"employee.adress\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.adress}}</label></div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"city\"><b>City:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"\n                      placeholder=\"City\" [(ngModel)]=\"employee.city\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.city}}</label></div>\n                </div>\n              </div>\n\n\n            </div>\n\n            <div class=\"col-sm-6\">\n\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <label for=\"phoneNumber\"><b>Phone Number:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"phoneNumber\" class=\"form-control\" id=\"phoneNumber\"\n                      name=\"phoneNumber\" placeholder=\"Phone Number\" [(ngModel)]=\"employee.phoneNumber\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.phoneNumber}}</label></div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"registrationNumber\"><b>Registration Number:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input nbInput type=\"registrationNumber\" class=\"form-control\"\n                      id=\"registrationNumber\" name=\"registrationNumber\" placeholder=\"Registration Number\"\n                      [(ngModel)]=\"employee.registrationNumber\"></div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.registrationNumber}}</label></div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label><b>Start Date:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\"><input [nbDatepicker]=\"startDate\" class=\"form-control\" placeholder=\"Start Date\"\n                      [(ngModel)]=\"employee.startDate\" name=\"startDateR\">\n                    <nb-datepicker #startDate format=\"dd\\MM\\yyyy\"></nb-datepicker>\n                  </div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.startDate}}</label></div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <label for=\"civilStatus\"><b>Civil Status:&nbsp;&nbsp;&nbsp;</b></label>\n                  <div *ngIf=\"showHide\">\n                    <nb-select type=\"civilStatus\" size=\"small\" outline status=\"success\" name=\"civilStatus\"\n                      placeholder=\"Civil Status\" [(ngModel)]=\"employee.civilStatus\" (click)=\"$event.preventDefault()\">\n                      <option value=\"\" disabled selected>Select your option</option>\n                      <nb-option value=\"Single\">Single</nb-option>\n                      <nb-option value=\"Married\">Married</nb-option>\n                      <nb-option value=\"Divorced\">Divorced</nb-option>\n                      <nb-option value=\"Widowed\">Widowed</nb-option>\n                      <nb-option value=\"Separated\">Separated</nb-option> <!--Liste dynamique ici-->\n                    </nb-select>\n                  </div>\n                  <div *ngIf=\"!showHide\"> <label>{{employee.civilStatus}}</label></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </nb-card-body>\n      </nb-card>\n      <nb-reveal-card>\n        <nb-card-front>\n          <nb-card>\n            <nb-card-body>\n              <p>\n                <b>Login Parameters</b> <br /><br /><br /><br /><br /><br /><br /><br />\n              </p>\n\n            </nb-card-body>\n          </nb-card>\n        </nb-card-front>\n\n        <nb-card-back>\n\n          <nb-card>\n\n            <nb-card-body>\n\n              <div class=\"row\">\n\n                <div class=\"col-sm-5\">\n                  <div class=\"form-group\">\n                    <label for=\"civilStatus\">User name</label>\n                    <input Disabled nbInput type=\"userName\" class=\"form-control\" id=\"userName\" name=\"userName\"\n                      placeholder=\"User Name\" [(ngModel)]=\"employee.userName\">\n                  </div>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label for=\"oldPassword\">Current Password</label>\n                        <input nbInput type=\"oldPassword\" class=\"form-control\" id=\"oldPassword\" name=\"oldPassword\"\n                          placeholder=\"oldPassword\" [(ngModel)]=\"oldPassword\">\n                      </div>\n                    </div>\n\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label for=\"newPassword\">New Password</label>\n                        <input nbInput type=\"newPassword\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\"\n                          placeholder=\"newPassword\" [(ngModel)]=\"newPassword\">\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-2\">\n                  <button nbButton class=\"submitButton\" type=\"submit\" hero status=\"success\"\n                    (click)=\"changePassword()\">Confirm</button>\n                </div>\n\n              </div>\n\n            </nb-card-body>\n          </nb-card>\n        </nb-card-back>\n      </nb-reveal-card>\n    </form>\n\n    <div *ngIf=!showHide>\n      <button nbButton status=\"info\" (click)=\"showHide = !showHide\">Edit</button>\n    </div>\n\n    <div *ngIf=showHide><button nbButton class=\"submitButton\" type=\"submit\" hero status=\"success\"\n        (click)=\"update()\">Submit</button>\n    </div>\n\n  </nb-card-body>\n\n</nb-card>"

/***/ }),

/***/ "./src/app/modules/modals/usersmanagement-modals/profile/profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/modals/usersmanagement-modals/profile/profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/employee.service */ "./src/app/core/services/employee.service.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var src_app_core_models_passwordChange_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/passwordChange.model */ "./src/app/core/models/passwordChange.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(employeeservice, authService, ref, toastrService) {
        var _this = this;
        this.employeeservice = employeeservice;
        this.authService = authService;
        this.ref = ref;
        this.toastrService = toastrService;
        this.passwordchange = new src_app_core_models_passwordChange_model__WEBPACK_IMPORTED_MODULE_4__["PasswordChange"]();
        this.showHide = 0;
        this.isMale = 0; // for blank photo
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeservice.getById(this.user.id).subscribe(function (data) {
            _this.employee = data;
        });
    };
    ProfileComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.employeeservice.update(this.employee).subscribe(function () { _this.showHide = 0; });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        this.passwordchange.userId = this.employee.id;
        this.passwordchange.newPassword = this.newPassword;
        this.passwordchange.oldPassword = this.oldPassword;
        this.employeeservice.changePassword(this.passwordchange).subscribe(function () {
            _this.showToast('Password updated successfully', 'Success');
        });
    };
    ProfileComponent.prototype.showToast = function (status, message) {
        this.toastrService.success(status, message, { status: status, });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/modals/usersmanagement-modals/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/modals/usersmanagement-modals/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/renderers/custom-render.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/renderers/custom-render.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRenderComponent", function() { return CustomRenderComponent; });
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

var CustomRenderComponent = /** @class */ (function () {
    function CustomRenderComponent() {
    }
    CustomRenderComponent.prototype.ngOnInit = function () {
        if (this.value === '1') {
            this.renderValue = 'Opened';
        }
        else if (this.value = '2') {
            this.renderValue = 'Closed';
        }
        else {
            this.renderValue = 'OnGoing';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomRenderComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomRenderComponent.prototype, "rowData", void 0);
    CustomRenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    {{renderValue}}\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], CustomRenderComponent);
    return CustomRenderComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, FooterComponent, NavComponent, SidebarComponent, ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/app/shared/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]; });





/***/ }),

/***/ "./src/app/shared/layout/content/content.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/content/content.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/layout/content/content.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/content/content.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/layout/content/content.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/content/content.component.ts ***!
  \************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/shared/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/shared/layout/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    All rights reserved 2019.\n</p>\n"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: FooterComponent, NavComponent, SidebarComponent, ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/layout/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/layout/nav/nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/layout/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]; });

/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "./src/app/shared/layout/content/content.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]; });







/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/layout/footer/footer.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/layout/nav/nav.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/shared/layout/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"]
            ],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/layout/nav/nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/nav/nav.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-user {\n  justify-content: flex-end;\n  float: right;\n}\n\na {\n  font-size: 2rem;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItdXNlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layout/nav/nav.component.html":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/nav/nav.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"position: absolute; top: 0; bottom: 0; left: 0; right: 0;\">\r\n\r\n  <tr>\r\n\r\n    <td width=\"1%\"></td>\r\n\r\n    <td>\r\n      <a href=\"#\" (click)=\"toggle()\"><i class=\"nb-menu\"></i></a>\r\n    </td>\r\n\r\n    <td width=\"5%\"></td>\r\n\r\n    <td>\r\n      <table font-family=\"Segoe UI\">\r\n        <tr>\r\n          <td><img src=\"assets/logo.png\" height=\"75\" width=\"150\"></td>\r\n          <td><H2>Management</H2></td>\r\n          <td><H2>Tools</H2></td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n\r\n<td width=\"81%\"></td>\r\n\r\n<td width=\"7%\">\r\n  <div *ngIf=\"!user; else elseBlock\">\r\n    <!-- not display current user credentials if not logged in  -->\r\n  </div>\r\n  <ng-template #elseBlock>\r\n    <form>\r\n      <nb-user [name]=\"user?.fullName\" [title]=\"user?.function\" size=\"middle\" [nbContextMenu]=\"items\"\r\n        nbContextMenuTag=\"my-context-menu\">\r\n      </nb-user>\r\n    </form>\r\n  </ng-template>\r\n</td>\r\n\r\n<td width=\"2%\"></td>\r\n\r\n</tr>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/shared/layout/nav/nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/layout/nav/nav.component.ts ***!
  \****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/modals/usersmanagement-modals/profile/profile.component */ "./src/app/modules/modals/usersmanagement-modals/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavComponent = /** @class */ (function () {
    function NavComponent(sidebarService, authService, nbMenuService, router, dialogService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.authService = authService;
        this.nbMenuService = nbMenuService;
        this.router = router;
        this.dialogService = dialogService;
        // token: NbAuthJWTToken; // inside the component
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload(); // here we receive a payload
                // from the token and assigne it to our `user` variable
            }
        });
    }
    NavComponent.prototype.toggle = function () {
        this.sidebarService.toggle(true);
        return false;
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nbMenuService.onItemClick()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var tag = _a.tag;
            return tag === 'my-context-menu';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var title = _a.item.title;
            return title;
        }))
            .subscribe(function (title) {
            if (title === 'Logout') {
                localStorage.clear();
                _this.router.navigate(['auth/login']);
            }
            if (title === 'Profile') {
                _this.dialogService.open(src_app_modules_modals_usersmanagement_modals_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]);
            }
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/shared/layout/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/sidebar/pages-menu.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/sidebar/pages-menu.ts ***!
  \*****************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Parameters',
        icon: 'nb-compose',
        link: '/pages/parameters',
    },
];


/***/ }),

/***/ "./src/app/shared/layout/sidebar/pages-menu2.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/sidebar/pages-menu2.ts ***!
  \******************************************************/
/*! exports provided: MENU_ITEMS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS2", function() { return MENU_ITEMS2; });
var MENU_ITEMS2 = [
    {
        title: 'Home',
        icon: 'nb-home',
        link: '/pages/home',
        home: true
    },
    {
        title: 'Requirements',
        icon: 'nb-list',
        link: '/pages/requirement',
    },
    {
        title: 'Tasks',
        icon: 'nb-compose',
        link: '/pages/tasks',
    },
    {
        title: 'Timesheets',
        icon: 'nb-compose',
        link: '/pages/timesheetmanagement',
    },
    {
        title: 'Release',
        icon: 'nb-compose',
        link: '/pages/release',
    },
];


/***/ }),

/***/ "./src/app/shared/layout/sidebar/pages-menu3.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/sidebar/pages-menu3.ts ***!
  \******************************************************/
/*! exports provided: MENU_ITEMS3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS3", function() { return MENU_ITEMS3; });
var MENU_ITEMS3 = [
    {
        title: 'Personal',
        icon: 'nb-gear',
        expanded: false,
        children: [
            {
                title: 'Users',
                icon: 'nb-compose',
                link: '/pages/usersmanagement',
            },
            {
                title: 'Teams',
                icon: 'nb-compose',
                link: '/pages/teamsmanagement',
            },
        ],
    },
    {
        title: 'Contracts & Customers',
        icon: 'nb-gear',
        expanded: false,
        children: [
            {
                title: 'Customers',
                icon: 'nb-person',
                link: '/pages/customersmanagement',
            },
            {
                title: 'Contracts',
                icon: 'nb-compose',
                link: '/pages/contractmanagement',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-menu *ngIf=\"accessChecker.isGranted('view', 'tasks') | async\" [items]=\"menu2\">\n</nb-menu>\n\n<br>\n\n<nb-menu *ngIf=\"accessChecker.isGranted('remove', 'teams') | async\" [items]=\"menu3\">\n</nb-menu>\n\n<br>\n\n<nb-menu *ngIf=\"accessChecker.isGranted('remove', 'teams') | async\" [items]=\"menu\">\n</nb-menu>"

/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-menu */ "./src/app/shared/layout/sidebar/pages-menu.ts");
/* harmony import */ var _pages_menu2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-menu2 */ "./src/app/shared/layout/sidebar/pages-menu2.ts");
/* harmony import */ var _pages_menu3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-menu3 */ "./src/app/shared/layout/sidebar/pages-menu3.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(accessChecker) {
        this.accessChecker = accessChecker;
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
        this.menu2 = _pages_menu2__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS2"];
        this.menu3 = _pages_menu3__WEBPACK_IMPORTED_MODULE_4__["MENU_ITEMS3"];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/layout/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_nebular_security__WEBPACK_IMPORTED_MODULE_1__["NbAccessChecker"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            ],
            declarations: [],
            providers: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Houssem Hamila\Desktop\WorkSpace\BC_MANAGEMENT_TOOL\ManagementTool\ManagementTool.API\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map