webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUdMO0FBQ1M7QUFPdEQ7SUFHSSx3QkFDWSxXQUF3QixFQUN4QixlQUFnQztRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEMsQ0FBQztJQUVULGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMscUNBQXFDO0lBQ3pDLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztnQkFqQndCLHlEQUFXO2dCQUNQLGlFQUFlOztJQUxuQyxjQUFjO1FBTDFCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixnRUFBcUM7O1NBRXhDLENBQUM7eUNBSzJCLHlEQUFXO1lBQ1AsaUVBQWU7T0FMbkMsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBO0FBdEIwQiIsImZpbGUiOiJidW5kbGUuYzNkNjU5ODk4Njg0NTEwYTE1OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9pdGVtcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2VcbiAgICAgICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICB0aGlzLmxpc3RlblBsYXllcnMoKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndHJhZXIganVnYWRvcmVzMScpO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRQbGF5ZXJzKCk7XG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnB1c2hQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5QbGF5ZXJzKCkge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5saXN0ZW5QbGF5ZXJzKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==