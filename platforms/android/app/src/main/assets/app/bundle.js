require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/item/item-detail.component.ts");




var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: _item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "item/:id", component: _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/firebase.service.ts");

// import * as firebase from 'nativescript-plugin-firebase';
// import * as dialogs from "tns-core-modules/ui/dialogs";

var AppComponent = /** @class */ (function () {
    function AppComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log('iniciando firebase...');
        // firebase.init({
        //     showNotifications: true,
        //     showNotificationsWhenInForeground: true,
        //     persist: true,
        //     onPushTokenReceivedCallback: (token) => {
        //         console.log('[Firebase] onPushTokenReceivedCallback:', { token });
        //     },
        //     onMessageReceivedCallback: (message: firebase.Message) => {
        //         console.log('[Firebase] onMessageReceivedCallback:', { message });
        //         // alert(message.title + ': '+ message.body);
        //         dialogs.alert({
        //             title: message.title,
        //             message: message.body,
        //             okButtonText: "OK"
        //         }).then(() => {
        //             console.log("Dialog closed!");
        //         });
        //     }
        //     })
        //     .then(() => {
        //     console.log('[Firebase] Initialized');
        //     })
        //     .catch(error => {
        //     console.log('[Firebase] Initialize', { error });
        // });
        this.firebaseService.initFirebase();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item-detail.component.ts");






// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
                _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"]
            ],
            providers: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);



var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
    }
    FirebaseService.prototype.initFirebase = function () {
        console.log('iniciando firebase...');
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["init"]({
            showNotifications: true,
            showNotificationsWhenInForeground: true,
            persist: false,
            onPushTokenReceivedCallback: function (token) {
                console.log('[Firebase] onPushTokenReceivedCallback:', { token: token });
            },
            onMessageReceivedCallback: function (message) {
                console.log('[Firebase] onMessageReceivedCallback:', { message: message });
                // alert(message.title + ': '+ message.body);
                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"]({
                    title: message.title,
                    message: message.body,
                    okButtonText: "OK"
                }).then(function () {
                    console.log("Dialog closed!");
                });
            }
        })
            .then(function () {
            console.log('[Firebase] Initialized');
        })
            .catch(function (error) {
            console.log('[Firebase] Initialize', { error: error });
        });
        // this.firebaseFirestore = require("nativescript-plugin-firebase/app");
        // this.firebaseFirestore.initializeApp({
        //     persist: false
        // });
    };
    FirebaseService.prototype.getPlayers = function () {
        console.log('getting players firestore service');
        // firebase.getValue('/players')
        //     .then(result => console.log('players get: ', JSON.stringify(result)))
        //     .catch(error => console.log("Error: " + error));
        var playersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection("players");
        // console.log(playersCollection);
        // const unsubscribe = playersCollection.onSnapshot((snapshot) => {
        //     snapshot.forEach(player => console.log(player.data()));
        // });
        //   // then after a while, to detach the listener:
        // unsubscribe();
        playersCollection.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id + " => " + JSON.stringify(doc.data()));
            });
        });
    };
    FirebaseService.prototype.onChildEvent = function (result) {
        console.log("Idea: " + JSON.stringify(result.value));
    };
    ;
    FirebaseService.prototype.listenPlayers = function () {
        var playersCollection = nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].collection("players");
        playersCollection.onSnapshot(function (snapshot) {
            snapshot.forEach(function (player) { return console.log(player.data()); });
        });
    };
    FirebaseService.prototype.pushPlayer = function () {
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["push"]('/players', {
            'first': 'Eddy',
            'last': 'Verbruggen',
            'birthYear': 1977,
            'isMale': true,
            'address': {
                'street': 'foostreet',
                'number': 123
            }
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"{{item.name}}\" class=\"action-bar\">\n    <NavigationButton   text=\"Go Back\" android.systemIcon=\"ic_menu_back\"\n                        tap=\"onNavBtnTap\" [nsRouterLink]=\"['/items']\">\n    </NavigationButton>\n</ActionBar>\n<FlexboxLayout flexDirection=\"column\" class=\"page\">\n    <FlexboxLayout class=\"m-15\">\n        <Label class=\"h2\" [text]=\"item.id + '. '\"></Label>\n        <Label class=\"h2\" [text]=\"item.name\"></Label>\n    </FlexboxLayout>\n    <Label class=\"h4\" [text]=\"item.role\"></Label>\n    <!-- <Label class=\"span\" [text]=\"'span de prueba'\"></Label>\n    <Label class=\"label\" [text]=\"'label de prueba'\"></Label> -->\n    <Button text=\"Photo\" (tap)=\"onTap($event)\"></Button>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/item/item-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".h4 {\n  padding-left: 50%; }\n\n.action-bar {\n  background-color: crimson;\n  color: white; }\n"

/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-camera/camera.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_3__);




var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
        this.saveToGallery = false;
        this.allowsEditing = false;
        this.keepAspectRatio = true;
        this.width = 320;
        this.height = 240;
        this.scale = 1;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    };
    ItemDetailComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    ItemDetailComponent.prototype.onTap = function (args) {
        var _this = this;
        Object(nativescript_camera__WEBPACK_IMPORTED_MODULE_3__["requestPermissions"])().then(function () {
            Object(nativescript_camera__WEBPACK_IMPORTED_MODULE_3__["takePicture"])({ width: _this.width, height: _this.height, keepAspectRatio: _this.keepAspectRatio, saveToGallery: _this.saveToGallery, allowsEditing: _this.allowsEditing })
                .then(function (imageAsset) {
                _this.cameraImage = imageAsset;
                var that = _this;
                imageAsset.getImageAsync(function (nativeImage, ex) {
                    if (ex instanceof Error) {
                        throw ex;
                    }
                    else if (typeof ex === "string") {
                        throw new Error(ex);
                    }
                    if (imageAsset.android) {
                        // get the current density of the screen (dpi) and divide it by the default one to get the scale
                        that.scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                        that.actualWidth = nativeImage.getWidth();
                        that.actualHeight = nativeImage.getHeight();
                    }
                    else {
                        that.scale = nativeImage.scale;
                        that.actualWidth = nativeImage.size.width * that.scale;
                        that.actualHeight = nativeImage.size.height * that.scale;
                    }
                    that.labelText = "Displayed Size: " + that.actualWidth + "x" + that.actualHeight + " with scale " + that.scale + "\n" +
                        ("Image Size: " + Math.round(that.actualWidth / that.scale) + "x" + Math.round(that.actualHeight / that.scale));
                    console.log("" + that.labelText);
                });
            }, function (error) {
                console.log("Error: " + error);
            });
        }, function () { return alert('permissions rejected'); });
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __webpack_require__("./app/item/item-detail.component.html"),
            styles: [__webpack_require__("./app/item/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "Ter Stegen", role: "Goalkeeper", age: 23 }, { id: 3, name: "Piqué", role: "Defender", age: 23 }, { id: 4, name: "I. Rakitic", role: "Midfielder", age: 23 }, { id: 5, name: "Sergio", role: "Midfielder", age: 23 }, { id: 6, name: "Denis Suárez", role: "Midfielder", age: 23 }, { id: 7, name: "Arda", role: "Midfielder", age: 23 }, { id: 8, name: "A. Iniesta", role: "Midfielder", age: 23 }, { id: 9, name: "Suárez", role: "Forward", age: 23 }, { id: 10, name: "Messi", role: "Forward", age: 23 }, { id: 11, name: "Neymar", role: "Forward", age: 23 }, { id: 12, name: "Rafinha", role: "Midfielder", age: 23 }, { id: 13, name: "Cillessen", role: "Goalkeeper", age: 23 }, { id: 14, name: "Mascherano", role: "Defender", age: 23 }, { id: 17, name: "Paco Alcácer", role: "Forward", age: 23 }, { id: 18, name: "Jordi Alba", role: "Defender", age: 23 }, { id: 19, name: "Digne", role: "Defender", age: 23 }, { id: 20, name: "Sergi Roberto", role: "Midfielder", age: 23 }, { id: 21, name: "André Gomes", role: "Midfielder", age: 23 }, { id: 22, name: "Aleix Vidal", role: "Midfielder", age: 23 }, { id: 23, name: "Umtiti", role: "Defender", age: 23 }, { id: 24, name: "Mathieu", role: "Defender", age: 23 }, { id: 25, name: "Masip", role: "Goalkeeper", age: 23 });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nThe template defines the view of the component - what is actually rendered.\nIn NativeScript applications the template is defined with XML using NativeScript UI elements.\nIt is different from HTML. So instead of <input>, <span>, <div> etc. - we have <TextField>, <Label> and layouts.\nThe important thing is that although the elements are different - all of the Angular’s template syntax works exactly the same.\nSo you can still use template expressions, bindings, templates as well as all the built-in directives.\n-->\n<!--\nThe ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\nhttp://docs.nativescript.org/ui/action-bar\n-->\n<ActionBar title=\"Jugadores\" class=\"action-bar\">\n</ActionBar>\n\n<!--\nThe GridLayout arranges its child elements in a table structure of rows and columns.\nA cell can contain multiple child elements, they can span over multiple rows and columns, \nand even overlap each other. The GridLayout has one column and one row by default.\nYou can learn more about NativeScript layouts at https://docs.nativescript.org/ui/layout-containers.\n\nThese components make use of several CSS class names that are part of the NativeScript\ncore theme, such as p-20, btn, h2, and list-group. You can view a full list of the\nclass names available for styling your app at https://docs.nativescript.org/ui/theme.\n-->\n<GridLayout class=\"page\">\n    <ListView [items]=\"items\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <Label [nsRouterLink]=\"['/item', item.id]\" [text]=\"item.name + ' (' + item.age + ')'\"\n                class=\"list-group-item\"></Label>\n        </ng-template>\n    </ListView>  \n</GridLayout>\n"

/***/ }),

/***/ "./app/item/items.component.scss":
/***/ (function(module, exports) {

module.exports = ".action-bar {\n  background-color: #030c91;\n  color: white; }\n\n.button {\n  height: 20%;\n  padding-top: 0%; }\n"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/firebase.service.ts");



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService, firebaseService) {
        this.itemService = itemService;
        this.firebaseService = firebaseService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        this.listenPlayers();
    };
    ItemsComponent.prototype.getPlayers = function () {
        console.log('traer jugadores1');
        this.firebaseService.getPlayers();
        // this.firebaseService.pushPlayer();
    };
    ItemsComponent.prototype.listenPlayers = function () {
        this.firebaseService.listenPlayers();
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] },
        { type: _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-items",
            template: __webpack_require__("./app/item/items.component.html"),
            styles: [__webpack_require__("./app/item/items.component.scss")]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmlyZWJhc2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVM7O0FBRXZCO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1D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VUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQzFELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUN0RCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDNUQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQ3BELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUMxRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQ25ELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUNwRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDeEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQzFELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUN6RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDMUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQ3pELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUNwRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDOUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQzVELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUM1RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFDckQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQ3RELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUN6RCxDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBaENRLFdBQVc7UUFIdkIsZ0VBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBaUN2QjtJQUFELGtCQUFDO0NBQUE7QUFqQ3VCOzs7Ozs7OztBQ1B4Qix1dEQ7Ozs7Ozs7QUNBQSwrQkFBK0IsOEJBQThCLGlCQUFpQixFQUFFLGFBQWEsZ0JBQWdCLG9CQUFvQixFQUFFLEc7Ozs7Ozs7O0FDQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFHTDtBQUNTO0FBT3REO0lBR0ksd0JBQ1ksV0FBd0IsRUFDeEIsZUFBZ0M7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BDLENBQUM7SUFFVCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLHFDQUFxQztJQUN6QyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBakJ3Qix5REFBVztnQkFDUCxpRUFBZTs7SUFMbkMsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZ0VBQXFDOztTQUV4QyxDQUFDO3lDQUsyQix5REFBVztZQUNQLGlFQUFlO09BTG5DLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQTtBQXRCMEI7Ozs7Ozs7Ozs7Ozs7O0FDUjNCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQWdGO0FBQ047QUFDMUUsK0RBQXNFO0FBQ3RFLGdEQUF5RDtBQUN6RCwyQkFBeUU7QUFDekUsaUJBQXdFO0FBQ1c7QUFDbkYsa0NBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcbjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbi8vIGltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHsgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2VcbiAgICApIHt9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmljaWFuZG8gZmlyZWJhc2UuLi4nKTtcblxuICAgICAgICAvLyBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgLy8gICAgIHNob3dOb3RpZmljYXRpb25zOiB0cnVlLFxuICAgICAgICAvLyAgICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgICAgICAvLyAgICAgcGVyc2lzdDogdHJ1ZSxcblxuICAgICAgICAvLyAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiAodG9rZW4pID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnW0ZpcmViYXNlXSBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6JywgeyB0b2tlbiB9KTtcbiAgICAgICAgLy8gICAgIH0sXG5cbiAgICAgICAgLy8gICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazonLCB7IG1lc3NhZ2UgfSk7XG4gICAgICAgIC8vICAgICAgICAgLy8gYWxlcnQobWVzc2FnZS50aXRsZSArICc6ICcrIG1lc3NhZ2UuYm9keSk7XG4gICAgICAgIC8vICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLnRpdGxlLFxuICAgICAgICAvLyAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmJvZHksXG4gICAgICAgIC8vICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIC8vICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gSW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gSW5pdGlhbGl6ZScsIHsgZXJyb3IgfSk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmluaXRGaXJlYmFzZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBmaXJlYmFzZUZpcmVzdG9yZTogYW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBpbml0RmlyZWJhc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaWNpYW5kbyBmaXJlYmFzZS4uLicpO1xyXG5cclxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgcGVyc2lzdDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6ICh0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOicsIHsgdG9rZW4gfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazonLCB7IG1lc3NhZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChtZXNzYWdlLnRpdGxlICsgJzogJysgbWVzc2FnZS5ib2R5KTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuYm9keSxcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gSW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gSW5pdGlhbGl6ZScsIHsgZXJyb3IgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2VGaXJlc3RvcmUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2VGaXJlc3RvcmUuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgLy8gICAgIHBlcnNpc3Q6IGZhbHNlXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVycygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBwbGF5ZXJzIGZpcmVzdG9yZSBzZXJ2aWNlJyk7XHJcbiAgICAgICAgLy8gZmlyZWJhc2UuZ2V0VmFsdWUoJy9wbGF5ZXJzJylcclxuICAgICAgICAvLyAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdwbGF5ZXJzIGdldDogJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXHJcbiAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcInBsYXllcnNcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyc0NvbGxlY3Rpb24pO1xyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gcGxheWVyc0NvbGxlY3Rpb24ub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICAgICAgICAvLyAgICAgc25hcHNob3QuZm9yRWFjaChwbGF5ZXIgPT4gY29uc29sZS5sb2cocGxheWVyLmRhdGEoKSkpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gICAvLyB0aGVuIGFmdGVyIGEgd2hpbGUsIHRvIGRldGFjaCB0aGUgbGlzdGVuZXI6XHJcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAgICAgcGxheWVyc0NvbGxlY3Rpb24uZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hpbGRFdmVudChyZXN1bHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklkZWE6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxpc3RlblBsYXllcnMoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcInBsYXllcnNcIik7XHJcbiAgICAgICAgcGxheWVyc0NvbGxlY3Rpb24ub25TbmFwc2hvdCgoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKHBsYXllciA9PiBjb25zb2xlLmxvZyhwbGF5ZXIuZGF0YSgpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaFBsYXllcigpIHtcclxuICAgICAgICAgIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICAgICAgICcvcGxheWVycycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdmaXJzdCc6ICdFZGR5JyxcclxuICAgICAgICAgICAgICAgICdsYXN0JzogJ1ZlcmJydWdnZW4nLFxyXG4gICAgICAgICAgICAgICAgJ2JpcnRoWWVhcic6IDE5NzcsXHJcbiAgICAgICAgICAgICAgICAnaXNNYWxlJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdhZGRyZXNzJzoge1xyXG4gICAgICAgICAgICAgICAgJ3N0cmVldCc6ICdmb29zdHJlZXQnLFxyXG4gICAgICAgICAgICAgICAgJ251bWJlcic6IDEyM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiAgIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcD1cXFwib25OYXZCdG5UYXBcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtcyddXFxcIj5cXG4gICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxcbjwvQWN0aW9uQmFyPlxcbjxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwibS0xNVxcXCI+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0uaWQgKyAnLiAnXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgIDwvRmxleGJveExheW91dD5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoNFxcXCIgW3RleHRdPVxcXCJpdGVtLnJvbGVcXFwiPjwvTGFiZWw+XFxuICAgIDwhLS0gPExhYmVsIGNsYXNzPVxcXCJzcGFuXFxcIiBbdGV4dF09XFxcIidzcGFuIGRlIHBydWViYSdcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiIFt0ZXh0XT1cXFwiJ2xhYmVsIGRlIHBydWViYSdcXFwiPjwvTGFiZWw+IC0tPlxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlBob3RvXFxcIiAodGFwKT1cXFwib25UYXAoJGV2ZW50KVxcXCI+PC9CdXR0b24+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwJTsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuXG5pbXBvcnQgeyB0YWtlUGljdHVyZSwgcmVxdWVzdFBlcm1pc3Npb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQvaW1hZ2UtYXNzZXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IEl0ZW07XG5cbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBhbGxvd3NFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAzMjA7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMjQwO1xuICAgIHB1YmxpYyBjYW1lcmFJbWFnZTogSW1hZ2VBc3NldDtcbiAgICBwdWJsaWMgYWN0dWFsV2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgYWN0dWFsSGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBsYWJlbFRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICAgIH1cblxuICAgIG9uTmF2QnRuVGFwKCl7XG4gICAgICAgIC8vIFRoaXMgY29kZSB3aWxsIGJlIGNhbGxlZCBvbmx5IGluIEFuZHJvaWQuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBidXR0b24gdGFwcGVkIVwiKTtcbiAgICB9XG5cbiAgICBvblRhcChhcmdzOiBFdmVudERhdGEpIHtcblxuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQsIGtlZXBBc3BlY3RSYXRpbzogdGhpcy5rZWVwQXNwZWN0UmF0aW8sIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeSwgYWxsb3dzRWRpdGluZzogdGhpcy5hbGxvd3NFZGl0aW5nIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKGZ1bmN0aW9uIChuYXRpdmVJbWFnZSwgZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXggaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBleCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUFzc2V0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRlbnNpdHkgb2YgdGhlIHNjcmVlbiAoZHBpKSBhbmQgZGl2aWRlIGl0IGJ5IHRoZSBkZWZhdWx0IG9uZSB0byBnZXQgdGhlIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCkgLyBpbWFnZUFzc2V0LmFuZHJvaWQudXRpbC5EaXNwbGF5TWV0cmljcy5ERU5TSVRZX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuYWN0dWFsV2lkdGggPSBuYXRpdmVJbWFnZS5nZXRXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmFjdHVhbEhlaWdodCA9IG5hdGl2ZUltYWdlLmdldEhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2NhbGUgPSBuYXRpdmVJbWFnZS5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hY3R1YWxXaWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiB0aGF0LnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmFjdHVhbEhlaWdodCA9IG5hdGl2ZUltYWdlLnNpemUuaGVpZ2h0ICogdGhhdC5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYWJlbFRleHQgPSBgRGlzcGxheWVkIFNpemU6ICR7dGhhdC5hY3R1YWxXaWR0aH14JHt0aGF0LmFjdHVhbEhlaWdodH0gd2l0aCBzY2FsZSAke3RoYXQuc2NhbGV9XFxuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBJbWFnZSBTaXplOiAke01hdGgucm91bmQodGhhdC5hY3R1YWxXaWR0aCAvIHRoYXQuc2NhbGUpfXgke01hdGgucm91bmQodGhhdC5hY3R1YWxIZWlnaHQgLyB0aGF0LnNjYWxlKX1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhhdC5sYWJlbFRleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcbiAgICAgICAgKTtcbiAgICAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KFxuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIlRlciBTdGVnZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJQaXF1w6lcIiwgcm9sZTogXCJEZWZlbmRlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6IFwiSS4gUmFraXRpY1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiwgYWdlOiAyMyB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIlNlcmdpb1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiwgYWdlOiAyMyB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkRlbmlzIFN1w6FyZXpcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJBcmRhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDgsIG5hbWU6IFwiQS4gSW5pZXN0YVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiwgYWdlOiAyMyB9LFxuICAgICAgICB7IGlkOiA5LCBuYW1lOiBcIlN1w6FyZXpcIiwgcm9sZTogXCJGb3J3YXJkXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMTAsIG5hbWU6IFwiTWVzc2lcIiwgcm9sZTogXCJGb3J3YXJkXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMTEsIG5hbWU6IFwiTmV5bWFyXCIsIHJvbGU6IFwiRm9yd2FyZFwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDEyLCBuYW1lOiBcIlJhZmluaGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMTMsIG5hbWU6IFwiQ2lsbGVzc2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDE0LCBuYW1lOiBcIk1hc2NoZXJhbm9cIiwgcm9sZTogXCJEZWZlbmRlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDE3LCBuYW1lOiBcIlBhY28gQWxjw6FjZXJcIiwgcm9sZTogXCJGb3J3YXJkXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMTgsIG5hbWU6IFwiSm9yZGkgQWxiYVwiLCByb2xlOiBcIkRlZmVuZGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMTksIG5hbWU6IFwiRGlnbmVcIiwgcm9sZTogXCJEZWZlbmRlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDIwLCBuYW1lOiBcIlNlcmdpIFJvYmVydG9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMjEsIG5hbWU6IFwiQW5kcsOpIEdvbWVzXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDIyLCBuYW1lOiBcIkFsZWl4IFZpZGFsXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiLCBhZ2U6IDIzIH0sXG4gICAgICAgIHsgaWQ6IDIzLCBuYW1lOiBcIlVtdGl0aVwiLCByb2xlOiBcIkRlZmVuZGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMjQsIG5hbWU6IFwiTWF0aGlldVwiLCByb2xlOiBcIkRlZmVuZGVyXCIsIGFnZTogMjMgfSxcbiAgICAgICAgeyBpZDogMjUsIG5hbWU6IFwiTWFzaXBcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIsIGFnZTogMjMgfVxuICAgICk7XG5cbiAgICBnZXRJdGVtcygpOiBBcnJheTxJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLVxcblRoZSB0ZW1wbGF0ZSBkZWZpbmVzIHRoZSB2aWV3IG9mIHRoZSBjb21wb25lbnQgLSB3aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxcbkluIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbnMgdGhlIHRlbXBsYXRlIGlzIGRlZmluZWQgd2l0aCBYTUwgdXNpbmcgTmF0aXZlU2NyaXB0IFVJIGVsZW1lbnRzLlxcbkl0IGlzIGRpZmZlcmVudCBmcm9tIEhUTUwuIFNvIGluc3RlYWQgb2YgPGlucHV0PiwgPHNwYW4+LCA8ZGl2PiBldGMuIC0gd2UgaGF2ZSA8VGV4dEZpZWxkPiwgPExhYmVsPiBhbmQgbGF5b3V0cy5cXG5UaGUgaW1wb3J0YW50IHRoaW5nIGlzIHRoYXQgYWx0aG91Z2ggdGhlIGVsZW1lbnRzIGFyZSBkaWZmZXJlbnQgLSBhbGwgb2YgdGhlIEFuZ3VsYXLigJlzIHRlbXBsYXRlIHN5bnRheCB3b3JrcyBleGFjdGx5IHRoZSBzYW1lLlxcblNvIHlvdSBjYW4gc3RpbGwgdXNlIHRlbXBsYXRlIGV4cHJlc3Npb25zLCBiaW5kaW5ncywgdGVtcGxhdGVzIGFzIHdlbGwgYXMgYWxsIHRoZSBidWlsdC1pbiBkaXJlY3RpdmVzLlxcbi0tPlxcbjwhLS1cXG5UaGUgQWN0aW9uQmFyIGlzIHRoZSBOYXRpdmVTY3JpcHQgY29tbW9uIGFic3RyYWN0aW9uIG92ZXIgdGhlIEFuZHJvaWQgQWN0aW9uQmFyIGFuZCBpT1MgTmF2aWdhdGlvbkJhci5cXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL2FjdGlvbi1iYXJcXG4tLT5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJKdWdhZG9yZXNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48IS0tXFxuVGhlIEdyaWRMYXlvdXQgYXJyYW5nZXMgaXRzIGNoaWxkIGVsZW1lbnRzIGluIGEgdGFibGUgc3RydWN0dXJlIG9mIHJvd3MgYW5kIGNvbHVtbnMuXFxuQSBjZWxsIGNhbiBjb250YWluIG11bHRpcGxlIGNoaWxkIGVsZW1lbnRzLCB0aGV5IGNhbiBzcGFuIG92ZXIgbXVsdGlwbGUgcm93cyBhbmQgY29sdW1ucywgXFxuYW5kIGV2ZW4gb3ZlcmxhcCBlYWNoIG90aGVyLiBUaGUgR3JpZExheW91dCBoYXMgb25lIGNvbHVtbiBhbmQgb25lIHJvdyBieSBkZWZhdWx0LlxcbllvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBOYXRpdmVTY3JpcHQgbGF5b3V0cyBhdCBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9sYXlvdXQtY29udGFpbmVycy5cXG5cXG5UaGVzZSBjb21wb25lbnRzIG1ha2UgdXNlIG9mIHNldmVyYWwgQ1NTIGNsYXNzIG5hbWVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIE5hdGl2ZVNjcmlwdFxcbmNvcmUgdGhlbWUsIHN1Y2ggYXMgcC0yMCwgYnRuLCBoMiwgYW5kIGxpc3QtZ3JvdXAuIFlvdSBjYW4gdmlldyBhIGZ1bGwgbGlzdCBvZiB0aGVcXG5jbGFzcyBuYW1lcyBhdmFpbGFibGUgZm9yIHN0eWxpbmcgeW91ciBhcHAgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuLS0+XFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaXRlbXNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtJywgaXRlbS5pZF1cXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lICsgJyAoJyArIGl0ZW0uYWdlICsgJyknXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz4gIFxcbjwvR3JpZExheW91dD5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwYzkxO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmctdG9wOiAwJTsgfVxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi9maXJlYmFzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2l0ZW1zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBBcnJheTxJdGVtPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZVxuICAgICAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMubGlzdGVuUGxheWVycygpO1xuICAgIH1cblxuICAgIGdldFBsYXllcnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0cmFlciBqdWdhZG9yZXMxJyk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFBsYXllcnMoKTtcbiAgICAgICAgLy8gdGhpcy5maXJlYmFzZVNlcnZpY2UucHVzaFBsYXllcigpO1xuICAgIH1cblxuICAgIGxpc3RlblBsYXllcnMoKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxpc3RlblBsYXllcnMoKTtcbiAgICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==