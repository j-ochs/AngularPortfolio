webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-inverse\">\n  <ul class=\"nav navbar-nav\">\n    <li><a style=\"font-size:1.2; color:#00b7c7\" routerLink=\"home\">Jacob Ochs</a></li>\n    <li><a routerLink=\"home\">Home</a></li>\n    <li><a routerLink=\"about\">About</a></li>\n    <li><a routerLink=\"projects\">Projects</a></li>\n    <li><a routerLink=\"contact\">Contact</a></li>\n  </ul>\n</nav>\n\n<div style=\"text-align:center\">\n  <h1 (click)=\"title='It worked. yay angular'\">\n    {{title}}\n  </h1>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <span class=\"copyright\">Copyright &copy; Jacob Ochs 2018</span>\n          </div>\n          <div class=\"col-md-4\">\n              <ul class=\"list-inline social-buttons\">\n                  <li><a href=\"mailto:jochs@westmont.edu\"><i class=\"fa fa-envelope\"></i></a>\n                  </li>\n                  <li><a href=\"https://www.linkedin.com/in/jacobochs\"><i class=\"fa fa-linkedin\"></i></a>\n                  </li>\n                  <li><a href=\"https://www.github.com/j-ochs\"><i class=\"fa fa-github\"></i></a>\n                  </li>\n              </ul>\n          </div>\n          <!-- <div class=\"col-md-4\">\n              <ul class=\"list-inline quicklinks\">\n                  <li><a href=\"#\">Privacy Policy</a>\n                  </li>\n                  <li><a href=\"#\">Terms of Use</a>\n                  </li>\n              </ul>\n          </div> -->\n      </div>\n  </div>\n</footer>\n\n<!-- colors: #00b7c7 , #4d0ce8 -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello, world!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { AppRoutingModule } from './app-routing/app-routing.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__["a" /* ModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_router__["a" /* routes */]
            // AppRoutingModule,
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Console -->\n  <div class=\"code\">\n      <!-- <i class=\"fa fa-times-circle fa-2x\" style=\"color:rgb(233, 83, 14)\" aria-hidden=\"true\"></i> -->\n      <div class=\"console\">\n        <span class=\"cat\" style=\"color:#0f0\">jacob@ochs</span>\n        <span class=\"cat\" style=\"color:#0bc\">~</span>\n        <span class=\"cat\" style=\"color:#ff0096\">$</span>\n        <p class=\"cat\">cat about.json</p><br/>\n        &gt; Jacob.origin<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; \"Lake Arrowhead, CA\"<br/><br/></span>\n        &gt; Jacob.education<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; \"Westmont College - Santa Barbara, CA\"<br/><br/></span>\n        &gt; Jacob.major<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; \"Computer Science\"<br/><br/></span>\n        &gt; Jacob.expectedGraduation<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; \"May 2018\"<br/><br/></span>\n        &gt; Jacob.interests<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; [\"rock climbing\", \"traveling\", \"coding\", \"baseball\", \"piano\"]<br/><br/></span>\n        &gt; Jacob.workExperience.latest<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; Latest Work Experience<br/>\n                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; company: \"Esri\"<br/>\n                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; role: \"Web App Developer Intern\"<br/>\n                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; startDate: \"May 2017\"<br/>\n                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; endDate: \"August 2017\"<br/>\n        <br/></span>\n        &gt; Jacob.resume<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; \"<a target=\"_blank\" href=\"../../ng-portfolio/assets/Jacob_Ochs_Resume_2018.pdf\">resume2018.pdf</a>\"<br/><br/></span>\n        &gt; Jacob.email<br/>\n        <span class=\"answer\">&nbsp;&nbsp;=&gt; \"<a target=\"_blank\" href=\"mailto:jochs@westmont.edu\">jochs@westmont.edu</a>\"<br/><br/></span>\n      </div>\n    </div>\n\n  <!-- <div style=\"width:100%; background-color:red\">\n    <img class=\"hidden-phone\" src=\"../assets/profile.jpg\">\n    <p style=\"float:right\">This is a paragraph about me and why you should stay on this webpage.</p>\n  </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-modal',
        template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
        styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .card-img-top{\n    width:100%;\n    height:auto;\n  }\n\n\n\n  .card {\n    background: #eee;\n    margin-bottom: 15px;\n    border: 1px solid slategray;\n    margin: 20px;\n    display: inline-block;\n  }\n  .card-text {\n    padding-top: 10px;\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n  .card-link {\n    cursor: pointer; \n    text-decoration: none; \n    color: #333;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <div class=\"row card-deck\">\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://cdn.makeuseof.com/wp-content/uploads/2014/11/d7e5c76cf4d884433a7e9384f1e8bc8c-670x335.jpg\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Gutenberg Search Engine</h4>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <button type=\"button\" (click)=\"modal1.show()\">test</button>\n          <app-modal #modal1>\n            <div class=\"app-modal-header\">\n              header\n            </div>\n            <div class=\"app-modal-body\">\n              Whatever content you like, form fields, anything\n              <input type=\"text\">\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.show()\">Show modal 2</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </app-modal>\n\n          <app-modal #modal2>\n            <div class=\"app-modal-header\">\n              header\n            </div>\n            <div class=\"app-modal-body\">\n              Modal 2\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"modal3.show()\">Show modal 3</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </app-modal>\n\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"card card-inverse card-primary text-center\">\n            <a class=\"card-link\" (click)=\"modal1.show()\">\n          <img class=\"card-img-top\" src=\"../../ng-portfolio/assets/networkMap.png\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Network Map</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <app-modal #modal1>\n              <div class=\"app-modal-header\">\n                header\n              </div>\n              <div class=\"app-modal-body\">\n                Whatever content you like, form fields, anything\n                <input type=\"text\">\n              </div>\n              <div class=\"app-modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.show()\">Show modal 2</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </app-modal>\n          </div>\n          <div class=\"card-footer\">\n              <small class=\"text-muted\">Fall 2017</small>\n            </div>\n          </a>\n        </div>\n      </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"card card-inverse card-primary text-center\">\n            <a class=\"card-link\" (click)=\"modal1.show()\">\n          <img class=\"card-img-top\" src=\"../../ng-portfolio/assets/plus1.png\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Plus-One</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <app-modal #modal1>\n              <div class=\"app-modal-header\">\n                header\n              </div>\n              <div class=\"app-modal-body\">\n                Whatever content you like, form fields, anything\n                <input type=\"text\">\n              </div>\n              <div class=\"app-modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.show()\">Show modal 2</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </app-modal>\n          </div>\n          <div class=\"card-footer\">\n              <small class=\"text-muted\">Summer 2017</small>\n            </div>\n          </a>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n\n\n\n    <div class=\"col-md-4\">\n        <div class=\"card card-inverse card-primary text-center\">\n            <a class=\"card-link\" (click)=\"modal1.show()\">\n          <img class=\"card-img-top\" src=\"../../ng-portfolio/assets/Gomoku.png\" alt=\"Card image cap\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Gomoku AI</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <app-modal #modal1>\n              <div class=\"app-modal-header\">\n                header\n              </div>\n              <div class=\"app-modal-body\">\n                Whatever content you like, form fields, anything\n              </div>\n              <div class=\"app-modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.show()\">Show modal 2</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </app-modal>\n          </div>\n          <div class=\"card-footer\">\n              <small class=\"text-muted\">Spring 2016</small>\n            </div>\n          </a>\n        </div>\n      </div>\n\n          <div class=\"col-md-4\">\n              <div class=\"card card-inverse card-primary text-center\">\n                  <a class=\"card-link\" (click)=\"modal1.show()\">\n                <img class=\"card-img-top\" src=\"../../ng-portfolio/assets/snake1.png\" alt=\"Card image cap\">\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\">Snake Game</h4>\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                  <app-modal #modal1>\n                    <div class=\"app-modal-header\">\n                      header\n                    </div>\n                    <div class=\"app-modal-body\">\n                      Whatever content you like, form fields, anything\n                      <input type=\"text\">\n                    </div>\n                    <div class=\"app-modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\n                      <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.show()\">Show modal 2</button>\n                      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                    </div>\n                  </app-modal>\n                </div>\n                <div class=\"card-footer\">\n                    <small class=\"text-muted\">Spring 2015</small>\n                  </div>\n                </a>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-inverse card-primary text-center\">\n                    <a class=\"card-link\" (click)=\"modal1.show()\">\n                  <img class=\"card-img-top\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzw8nr4QPM7vh0qqjfErSw3ZaWmje4gbGs8qfjxqFdDwVibiL_\" alt=\"Card image cap\">\n                  <div class=\"card-block\">\n                    <h4 class=\"card-title\">iCu</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <app-modal #modal1>\n                      <div class=\"app-modal-header\">\n                        header\n                      </div>\n                      <div class=\"app-modal-body\">\n                        Whatever content you like, form fields, anything\n                        <input type=\"text\">\n                      </div>\n                      <div class=\"app-modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"modal2.show()\">Show modal 2</button>\n                        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                      </div>\n                    </app-modal>\n                  </div>\n                  <div class=\"card-footer\">\n                      <small class=\"text-muted\">Fall 2016</small>\n                    </div>\n                  </a>\n                </div>\n              </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.modal1 = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        console.log("projects init");
    };
    ProjectsComponent.prototype.showModal1 = function () {
        this.modal1 = true;
        console.log("asdfasdf", this.modal1);
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map