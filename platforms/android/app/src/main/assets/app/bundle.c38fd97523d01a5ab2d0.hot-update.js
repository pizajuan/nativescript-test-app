webpackHotUpdate("bundle",{

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");
/* harmony import */ var nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('iniciando firebase...');
        nativescript_plugin_firebase__WEBPACK_IMPORTED_MODULE_1__["init"]({
            showNotifications: true,
            showNotificationsWhenInForeground: true,
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
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNPO0FBQ0Y7QUFNdkQ7SUFBQTtJQWdDQSxDQUFDO0lBL0JHLCtCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckMsaUVBQWEsQ0FBQztZQUNWLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsaUNBQWlDLEVBQUUsSUFBSTtZQUV2QywyQkFBMkIsRUFBRSxVQUFDLEtBQUs7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEVBQUUsRUFBRSxLQUFLLFNBQUUsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7WUFFRCx5QkFBeUIsRUFBRSxVQUFDLE9BQXlCO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLEVBQUUsT0FBTyxXQUFFLENBQUMsQ0FBQztnQkFDbEUsNkNBQTZDO2dCQUM3QyxpRUFBYSxDQUFDO29CQUNWLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztvQkFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNyQixZQUFZLEVBQUUsSUFBSTtpQkFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNBLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGVBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsS0FBSyxTQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUEvQlEsWUFBWTtRQUp4QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIseURBQW1DO1NBQ3RDLENBQUM7T0FDVyxZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBQUE7QUFoQ3dCIiwiZmlsZSI6ImJ1bmRsZS5jMzhmZDk3NTIzZDAxYTVhYjJkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pY2lhbmRvIGZpcmViYXNlLi4uJyk7XG5cbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcblxuICAgICAgICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiAodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0ZpcmViYXNlXSBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6JywgeyB0b2tlbiB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazonLCB7IG1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQobWVzc2FnZS50aXRsZSArICc6ICcrIG1lc3NhZ2UuYm9keSk7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmJvZHksXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gSW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaXJlYmFzZV0gSW5pdGlhbGl6ZScsIHsgZXJyb3IgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==