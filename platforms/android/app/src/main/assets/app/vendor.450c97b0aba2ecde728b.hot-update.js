webpackHotUpdate("vendor",{

/***/ "../node_modules/nativescript-floatingactionbutton/fab-common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
var view_1 = __webpack_require__("../node_modules/tns-core-modules/ui/core/view/view.js");
var FloatingActionButtonBase = (function (_super) {
    __extends(FloatingActionButtonBase, _super);
    function FloatingActionButtonBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.swipeEventAttached = false;
        return _this;
    }
    FloatingActionButtonBase.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this.swipeEventAttached === false) {
            var fab_1 = this;
            if (this.hideOnSwipeOfView) {
                var parent_1 = this.parent || this.parentNode;
                var swipeItem = parent_1.getViewById(this.hideOnSwipeOfView);
                if (!swipeItem) {
                    return;
                }
                var animationType_1 = this.swipeAnimation
                    ? this.swipeAnimation
                    : 'slideDown';
                if (swipeItem !== undefined) {
                    var duration_1 = this.hideAnimationDuration
                        ? this.hideAnimationDuration
                        : this._getDurationDefault(animationType_1);
                    swipeItem.on('pan', function (args) {
                        if (args.deltaY < -10) {
                            switch (animationType_1) {
                                case 'slideUp':
                                    try {
                                        fab_1.animate({
                                            target: fab_1,
                                            translate: {
                                                x: 0,
                                                y: -200
                                            },
                                            opacity: 0,
                                            duration: 400
                                        });
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                    break;
                                case 'slideDown':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: 0,
                                            y: 200
                                        },
                                        opacity: 0,
                                        duration: duration_1
                                    });
                                    break;
                                case 'slideRight':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: 200,
                                            y: 0
                                        },
                                        opacity: 0,
                                        duration: duration_1
                                    });
                                    break;
                                case 'slideLeft':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: -200,
                                            y: 0
                                        },
                                        opacity: 0,
                                        duration: duration_1
                                    });
                                    break;
                                case 'scale':
                                    fab_1.animate({
                                        target: fab_1,
                                        scale: {
                                            x: 0,
                                            y: 0
                                        },
                                        duration: duration_1
                                    });
                                    break;
                            }
                        }
                        else if (args.deltaY > 0) {
                            switch (animationType_1) {
                                case 'slideUp':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: 0,
                                            y: 0
                                        },
                                        opacity: 1,
                                        duration: duration_1
                                    });
                                    break;
                                case 'slideDown':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: 0,
                                            y: 0
                                        },
                                        opacity: 1,
                                        duration: duration_1
                                    });
                                    break;
                                case 'slideRight':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: 0,
                                            y: 0
                                        },
                                        opacity: 1,
                                        duration: duration_1
                                    });
                                    break;
                                case 'slideLeft':
                                    fab_1.animate({
                                        target: fab_1,
                                        translate: {
                                            x: 0,
                                            y: 0
                                        },
                                        opacity: 1,
                                        duration: duration_1
                                    });
                                    break;
                                case 'scale':
                                    fab_1.animate({
                                        target: fab_1,
                                        scale: {
                                            x: 1,
                                            y: 1
                                        },
                                        duration: duration_1
                                    });
                                    break;
                            }
                        }
                    });
                    this.swipeEventAttached = true;
                }
            }
        }
    };
    FloatingActionButtonBase.prototype._getDurationDefault = function (animationType) {
        switch (animationType) {
            case 'scale':
                return 200;
            default:
                return 400;
        }
    };
    return FloatingActionButtonBase;
}(view_1.View));
exports.FloatingActionButtonBase = FloatingActionButtonBase;
exports.iconProperty = new view_1.Property({
    name: 'icon',
    affectsLayout: true
});
exports.iconProperty.register(FloatingActionButtonBase);
exports.rippleColorProperty = new view_1.Property({
    name: 'rippleColor',
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.rippleColorProperty.register(FloatingActionButtonBase);
//# sourceMappingURL=fab-common.js.map

/***/ }),

/***/ "../node_modules/nativescript-floatingactionbutton/fab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
var ImageSource = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
var view_1 = __webpack_require__("../node_modules/tns-core-modules/ui/core/view/view.js");
var fab_common_1 = __webpack_require__("../node_modules/nativescript-floatingactionbutton/fab-common.js");
var FABNamespace = useAndroidX()
    ? com.google.android.material.floatingactionbutton
    : android.support.design.widget;
function useAndroidX() {
    return global.androidx && global.androidx.cardview;
}
var Fab = (function (_super) {
    __extends(Fab, _super);
    function Fab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Fab.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    Fab.prototype.createNativeView = function () {
        this._android = new FABNamespace.FloatingActionButton(this._context);
        return this._android;
    };
    Fab.prototype.initNativeView = function () {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
        initializeClickListener();
        var clickListener = new ClickListener(this);
        this.nativeView.setOnClickListener(clickListener);
        this.nativeView.clickListener = clickListener;
        this.android.setScaleType(android.widget.ImageView.ScaleType.CENTER);
    };
    Fab.prototype[view_1.backgroundColorProperty.getDefault] = function () {
        return this.nativeView.getBackgroundTintList();
    };
    Fab.prototype[view_1.backgroundColorProperty.setNative] = function (value) {
        var newValue;
        if (value instanceof color_1.Color) {
            newValue = android.content.res.ColorStateList.valueOf(value.android);
        }
        else {
            newValue = value;
        }
        try {
            this.nativeView.setBackgroundTintList(newValue);
        }
        catch (err) {
            console.log("Error setNative backgroundColorProperty: ", err);
        }
    };
    Fab.prototype[view_1.backgroundInternalProperty.setNative] = function (value) {
    };
    Fab.prototype[fab_common_1.rippleColorProperty.setNative] = function (value) {
        this.nativeView.setRippleColor(value.android);
    };
    Fab.prototype[fab_common_1.iconProperty.setNative] = function (value) {
        var iconDrawable = null;
        if (!value) {
            return;
        }
        if (ImageSource.isFileOrResourcePath(value)) {
            iconDrawable = ImageSource.fromFileOrResource(value);
            if (iconDrawable) {
                this.nativeView.setImageBitmap(iconDrawable.android);
            }
            else {
                console.log('The icon: ' +
                    value +
                    ' was not found. Check your icon property value. Be sure to rebuild the project after adding images.');
            }
        }
        else {
            var drawableId = android.content.res.Resources.getSystem().getIdentifier(value, 'drawable', 'android');
            iconDrawable = android.content.res.Resources.getSystem().getDrawable(drawableId);
            if (iconDrawable) {
                this.nativeView.setImageDrawable(iconDrawable);
            }
            else {
                console.log('The icon: ' +
                    value +
                    ' was not found. Check your icon property value. Be sure to rebuild the project after adding images.');
            }
        }
    };
    Fab.tapEvent = 'tap';
    return Fab;
}(fab_common_1.FloatingActionButtonBase));
exports.Fab = Fab;
var ClickListener;
function initializeClickListener() {
    if (ClickListener) {
        return;
    }
    var ClickListenerImpl = (function (_super) {
        __extends(ClickListenerImpl, _super);
        function ClickListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ClickListenerImpl.prototype.onClick = function (v) {
            var owner = this.owner;
            if (owner) {
                owner._emit('tap');
            }
        };
        ClickListenerImpl = __decorate([
            Interfaces([android.view.View.OnClickListener]),
            __metadata("design:paramtypes", [fab_common_1.FloatingActionButtonBase])
        ], ClickListenerImpl);
        return ClickListenerImpl;
    }(java.lang.Object));
    ClickListener = ClickListenerImpl;
}
//# sourceMappingURL=fab.android.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvbi9mYWItY29tbW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uL2ZhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxpREFBd0I7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLHVEQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZCQUE2QjtBQUMvRCxDQUFDO0FBQ0Q7QUFDQSxzQzs7Ozs7Ozs7QUNsTEEsOENBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsaURBQXdCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLCtEQUErQjtBQUN6RCxhQUFhLG1CQUFPLENBQUMsdURBQStCO0FBQ3BELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVDIiwiZmlsZSI6InZlbmRvci40NTBjOTdiMGFiYTJlY2RlNzI4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpO1xudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiKTtcbnZhciBGbG9hdGluZ0FjdGlvbkJ1dHRvbkJhc2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdGluZ0FjdGlvbkJ1dHRvbkJhc2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRpbmdBY3Rpb25CdXR0b25CYXNlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3dpcGVFdmVudEF0dGFjaGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmxvYXRpbmdBY3Rpb25CdXR0b25CYXNlLnByb3RvdHlwZS5vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vbkxvYWRlZC5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5zd2lwZUV2ZW50QXR0YWNoZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgZmFiXzEgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZU9uU3dpcGVPZlZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSB0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlSXRlbSA9IHBhcmVudF8xLmdldFZpZXdCeUlkKHRoaXMuaGlkZU9uU3dpcGVPZlZpZXcpO1xuICAgICAgICAgICAgICAgIGlmICghc3dpcGVJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblR5cGVfMSA9IHRoaXMuc3dpcGVBbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN3aXBlQW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDogJ3NsaWRlRG93bic7XG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbl8xID0gdGhpcy5oaWRlQW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5oaWRlQW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZ2V0RHVyYXRpb25EZWZhdWx0KGFuaW1hdGlvblR5cGVfMSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlSXRlbS5vbigncGFuJywgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmRlbHRhWSA8IC0xMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uVHlwZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NsaWRlVXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJfMS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBmYWJfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2xpZGVEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYl8xLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogZmFiXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25fMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2xpZGVSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJfMS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGZhYl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NsaWRlTGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJfMS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGZhYl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbl8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzY2FsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJfMS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGZhYl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbl8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3MuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uVHlwZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NsaWRlVXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXzEuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBmYWJfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25fMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2xpZGVEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYl8xLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogZmFiXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NsaWRlUmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXzEuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBmYWJfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25fMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2xpZGVMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYl8xLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogZmFiXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NjYWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYl8xLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogZmFiXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZUV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRmxvYXRpbmdBY3Rpb25CdXR0b25CYXNlLnByb3RvdHlwZS5fZ2V0RHVyYXRpb25EZWZhdWx0ID0gZnVuY3Rpb24gKGFuaW1hdGlvblR5cGUpIHtcbiAgICAgICAgc3dpdGNoIChhbmltYXRpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzY2FsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDIwMDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDQwMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0aW5nQWN0aW9uQnV0dG9uQmFzZTtcbn0odmlld18xLlZpZXcpKTtcbmV4cG9ydHMuRmxvYXRpbmdBY3Rpb25CdXR0b25CYXNlID0gRmxvYXRpbmdBY3Rpb25CdXR0b25CYXNlO1xuZXhwb3J0cy5pY29uUHJvcGVydHkgPSBuZXcgdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnaWNvbicsXG4gICAgYWZmZWN0c0xheW91dDogdHJ1ZVxufSk7XG5leHBvcnRzLmljb25Qcm9wZXJ0eS5yZWdpc3RlcihGbG9hdGluZ0FjdGlvbkJ1dHRvbkJhc2UpO1xuZXhwb3J0cy5yaXBwbGVDb2xvclByb3BlcnR5ID0gbmV3IHZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3JpcHBsZUNvbG9yJyxcbiAgICBlcXVhbGl0eUNvbXBhcmVyOiBjb2xvcl8xLkNvbG9yLmVxdWFscyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBjb2xvcl8xLkNvbG9yKHYpOyB9XG59KTtcbmV4cG9ydHMucmlwcGxlQ29sb3JQcm9wZXJ0eS5yZWdpc3RlcihGbG9hdGluZ0FjdGlvbkJ1dHRvbkJhc2UpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFiLWNvbW1vbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7XG52YXIgSW1hZ2VTb3VyY2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIik7XG52YXIgdmlld18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpO1xudmFyIGZhYl9jb21tb25fMSA9IHJlcXVpcmUoXCIuL2ZhYi1jb21tb25cIik7XG52YXIgRkFCTmFtZXNwYWNlID0gdXNlQW5kcm9pZFgoKVxuICAgID8gY29tLmdvb2dsZS5hbmRyb2lkLm1hdGVyaWFsLmZsb2F0aW5nYWN0aW9uYnV0dG9uXG4gICAgOiBhbmRyb2lkLnN1cHBvcnQuZGVzaWduLndpZGdldDtcbmZ1bmN0aW9uIHVzZUFuZHJvaWRYKCkge1xuICAgIHJldHVybiBnbG9iYWwuYW5kcm9pZHggJiYgZ2xvYmFsLmFuZHJvaWR4LmNhcmR2aWV3O1xufVxudmFyIEZhYiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZhYiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGYWIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZhYi5wcm90b3R5cGUsIFwiYW5kcm9pZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlVmlldztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRmFiLnByb3RvdHlwZS5jcmVhdGVOYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9hbmRyb2lkID0gbmV3IEZBQk5hbWVzcGFjZS5GbG9hdGluZ0FjdGlvbkJ1dHRvbih0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuZHJvaWQ7XG4gICAgfTtcbiAgICBGYWIucHJvdG90eXBlLmluaXROYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9hbmRyb2lkVmlld0lkID0gYW5kcm9pZC52aWV3LlZpZXcuZ2VuZXJhdGVWaWV3SWQoKTtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldElkKHRoaXMuX2FuZHJvaWRWaWV3SWQpO1xuICAgICAgICBpbml0aWFsaXplQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB2YXIgY2xpY2tMaXN0ZW5lciA9IG5ldyBDbGlja0xpc3RlbmVyKHRoaXMpO1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0T25DbGlja0xpc3RlbmVyKGNsaWNrTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuY2xpY2tMaXN0ZW5lciA9IGNsaWNrTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuYW5kcm9pZC5zZXRTY2FsZVR5cGUoYW5kcm9pZC53aWRnZXQuSW1hZ2VWaWV3LlNjYWxlVHlwZS5DRU5URVIpO1xuICAgIH07XG4gICAgRmFiLnByb3RvdHlwZVt2aWV3XzEuYmFja2dyb3VuZENvbG9yUHJvcGVydHkuZ2V0RGVmYXVsdF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVZpZXcuZ2V0QmFja2dyb3VuZFRpbnRMaXN0KCk7XG4gICAgfTtcbiAgICBGYWIucHJvdG90eXBlW3ZpZXdfMS5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY29sb3JfMS5Db2xvcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBhbmRyb2lkLmNvbnRlbnQucmVzLkNvbG9yU3RhdGVMaXN0LnZhbHVlT2YodmFsdWUuYW5kcm9pZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0QmFja2dyb3VuZFRpbnRMaXN0KG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNldE5hdGl2ZSBiYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eTogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZhYi5wcm90b3R5cGVbdmlld18xLmJhY2tncm91bmRJbnRlcm5hbFByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB9O1xuICAgIEZhYi5wcm90b3R5cGVbZmFiX2NvbW1vbl8xLnJpcHBsZUNvbG9yUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0UmlwcGxlQ29sb3IodmFsdWUuYW5kcm9pZCk7XG4gICAgfTtcbiAgICBGYWIucHJvdG90eXBlW2ZhYl9jb21tb25fMS5pY29uUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaWNvbkRyYXdhYmxlID0gbnVsbDtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJbWFnZVNvdXJjZS5pc0ZpbGVPclJlc291cmNlUGF0aCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGljb25EcmF3YWJsZSA9IEltYWdlU291cmNlLmZyb21GaWxlT3JSZXNvdXJjZSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaWNvbkRyYXdhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldEltYWdlQml0bWFwKGljb25EcmF3YWJsZS5hbmRyb2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgaWNvbjogJyArXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICtcbiAgICAgICAgICAgICAgICAgICAgJyB3YXMgbm90IGZvdW5kLiBDaGVjayB5b3VyIGljb24gcHJvcGVydHkgdmFsdWUuIEJlIHN1cmUgdG8gcmVidWlsZCB0aGUgcHJvamVjdCBhZnRlciBhZGRpbmcgaW1hZ2VzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRyYXdhYmxlSWQgPSBhbmRyb2lkLmNvbnRlbnQucmVzLlJlc291cmNlcy5nZXRTeXN0ZW0oKS5nZXRJZGVudGlmaWVyKHZhbHVlLCAnZHJhd2FibGUnLCAnYW5kcm9pZCcpO1xuICAgICAgICAgICAgaWNvbkRyYXdhYmxlID0gYW5kcm9pZC5jb250ZW50LnJlcy5SZXNvdXJjZXMuZ2V0U3lzdGVtKCkuZ2V0RHJhd2FibGUoZHJhd2FibGVJZCk7XG4gICAgICAgICAgICBpZiAoaWNvbkRyYXdhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldEltYWdlRHJhd2FibGUoaWNvbkRyYXdhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgaWNvbjogJyArXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICtcbiAgICAgICAgICAgICAgICAgICAgJyB3YXMgbm90IGZvdW5kLiBDaGVjayB5b3VyIGljb24gcHJvcGVydHkgdmFsdWUuIEJlIHN1cmUgdG8gcmVidWlsZCB0aGUgcHJvamVjdCBhZnRlciBhZGRpbmcgaW1hZ2VzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBGYWIudGFwRXZlbnQgPSAndGFwJztcbiAgICByZXR1cm4gRmFiO1xufShmYWJfY29tbW9uXzEuRmxvYXRpbmdBY3Rpb25CdXR0b25CYXNlKSk7XG5leHBvcnRzLkZhYiA9IEZhYjtcbnZhciBDbGlja0xpc3RlbmVyO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgaWYgKENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgQ2xpY2tMaXN0ZW5lckltcGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQ2xpY2tMaXN0ZW5lckltcGwsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIENsaWNrTGlzdGVuZXJJbXBsKG93bmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwuX19uYXRpdmUoX3RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIENsaWNrTGlzdGVuZXJJbXBsLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciBvd25lciA9IHRoaXMub3duZXI7XG4gICAgICAgICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgICAgICAgICBvd25lci5fZW1pdCgndGFwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENsaWNrTGlzdGVuZXJJbXBsID0gX19kZWNvcmF0ZShbXG4gICAgICAgICAgICBJbnRlcmZhY2VzKFthbmRyb2lkLnZpZXcuVmlldy5PbkNsaWNrTGlzdGVuZXJdKSxcbiAgICAgICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbZmFiX2NvbW1vbl8xLkZsb2F0aW5nQWN0aW9uQnV0dG9uQmFzZV0pXG4gICAgICAgIF0sIENsaWNrTGlzdGVuZXJJbXBsKTtcbiAgICAgICAgcmV0dXJuIENsaWNrTGlzdGVuZXJJbXBsO1xuICAgIH0oamF2YS5sYW5nLk9iamVjdCkpO1xuICAgIENsaWNrTGlzdGVuZXIgPSBDbGlja0xpc3RlbmVySW1wbDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhYi5hbmRyb2lkLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=