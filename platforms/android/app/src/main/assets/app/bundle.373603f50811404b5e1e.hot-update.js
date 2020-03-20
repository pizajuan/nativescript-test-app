webpackHotUpdate("bundle",{

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/firebase.service.ts");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3__);




Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3__["registerElement"])('Fab', function () { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'nativescript-floatingactionbutton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).Fab; });
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFHTDtBQUNTO0FBQ2tCO0FBQ3hFLDZGQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sMEJBQU8sQ0FBQywySkFBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBTy9FO0lBR0ksd0JBQ1ksV0FBd0IsRUFDeEIsZUFBZ0M7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BDLENBQUM7SUFFVCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLHFDQUFxQztJQUN6QyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBakJ3Qix5REFBVztnQkFDUCxpRUFBZTs7SUFMbkMsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZ0VBQXFDOztTQUV4QyxDQUFDO3lDQUsyQix5REFBVztZQUNQLGlFQUFlO09BTG5DLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQTtBQXRCMEIiLCJmaWxlIjoiYnVuZGxlLjM3MzYwM2Y1MDgxMTQwNGI1ZTFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xucmVnaXN0ZXJFbGVtZW50KCdGYWInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b24nKS5GYWIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9pdGVtcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2VcbiAgICAgICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICB0aGlzLmxpc3RlblBsYXllcnMoKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndHJhZXIganVnYWRvcmVzMScpO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRQbGF5ZXJzKCk7XG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnB1c2hQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5QbGF5ZXJzKCkge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5saXN0ZW5QbGF5ZXJzKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==