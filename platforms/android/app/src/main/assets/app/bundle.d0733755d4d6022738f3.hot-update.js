webpackHotUpdate("bundle",{

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nThe template defines the view of the component - what is actually rendered.\nIn NativeScript applications the template is defined with XML using NativeScript UI elements.\nIt is different from HTML. So instead of <input>, <span>, <div> etc. - we have <TextField>, <Label> and layouts.\nThe important thing is that although the elements are different - all of the Angular’s template syntax works exactly the same.\nSo you can still use template expressions, bindings, templates as well as all the built-in directives.\n-->\n<!--\nThe ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\nhttp://docs.nativescript.org/ui/action-bar\n-->\n<ActionBar title=\"Jugadores\" class=\"action-bar\">\n</ActionBar>\n\n<!--\nThe GridLayout arranges its child elements in a table structure of rows and columns.\nA cell can contain multiple child elements, they can span over multiple rows and columns, \nand even overlap each other. The GridLayout has one column and one row by default.\nYou can learn more about NativeScript layouts at https://docs.nativescript.org/ui/layout-containers.\n\nThese components make use of several CSS class names that are part of the NativeScript\ncore theme, such as p-20, btn, h2, and list-group. You can view a full list of the\nclass names available for styling your app at https://docs.nativescript.org/ui/theme.\n-->\n<GridLayout class=\"page\">\n    <ListView [items]=\"items\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <Label [nsRouterLink]=\"['/item', item.id]\" [text]=\"item.name + ' (' + item.age + ')'\"\n                class=\"list-group-item\"></Label>\n        </ng-template>\n    </ListView>  \n</GridLayout>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHV0RCIsImZpbGUiOiJidW5kbGUuZDA3MzM3NTVkNGQ2MDIyNzM4ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuVGhlIHRlbXBsYXRlIGRlZmluZXMgdGhlIHZpZXcgb2YgdGhlIGNvbXBvbmVudCAtIHdoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXFxuSW4gTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9ucyB0aGUgdGVtcGxhdGUgaXMgZGVmaW5lZCB3aXRoIFhNTCB1c2luZyBOYXRpdmVTY3JpcHQgVUkgZWxlbWVudHMuXFxuSXQgaXMgZGlmZmVyZW50IGZyb20gSFRNTC4gU28gaW5zdGVhZCBvZiA8aW5wdXQ+LCA8c3Bhbj4sIDxkaXY+IGV0Yy4gLSB3ZSBoYXZlIDxUZXh0RmllbGQ+LCA8TGFiZWw+IGFuZCBsYXlvdXRzLlxcblRoZSBpbXBvcnRhbnQgdGhpbmcgaXMgdGhhdCBhbHRob3VnaCB0aGUgZWxlbWVudHMgYXJlIGRpZmZlcmVudCAtIGFsbCBvZiB0aGUgQW5ndWxhcuKAmXMgdGVtcGxhdGUgc3ludGF4IHdvcmtzIGV4YWN0bHkgdGhlIHNhbWUuXFxuU28geW91IGNhbiBzdGlsbCB1c2UgdGVtcGxhdGUgZXhwcmVzc2lvbnMsIGJpbmRpbmdzLCB0ZW1wbGF0ZXMgYXMgd2VsbCBhcyBhbGwgdGhlIGJ1aWx0LWluIGRpcmVjdGl2ZXMuXFxuLS0+XFxuPCEtLVxcblRoZSBBY3Rpb25CYXIgaXMgdGhlIE5hdGl2ZVNjcmlwdCBjb21tb24gYWJzdHJhY3Rpb24gb3ZlciB0aGUgQW5kcm9pZCBBY3Rpb25CYXIgYW5kIGlPUyBOYXZpZ2F0aW9uQmFyLlxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvYWN0aW9uLWJhclxcbi0tPlxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkp1Z2Fkb3Jlc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbjwvQWN0aW9uQmFyPlxcblxcbjwhLS1cXG5UaGUgR3JpZExheW91dCBhcnJhbmdlcyBpdHMgY2hpbGQgZWxlbWVudHMgaW4gYSB0YWJsZSBzdHJ1Y3R1cmUgb2Ygcm93cyBhbmQgY29sdW1ucy5cXG5BIGNlbGwgY2FuIGNvbnRhaW4gbXVsdGlwbGUgY2hpbGQgZWxlbWVudHMsIHRoZXkgY2FuIHNwYW4gb3ZlciBtdWx0aXBsZSByb3dzIGFuZCBjb2x1bW5zLCBcXG5hbmQgZXZlbiBvdmVybGFwIGVhY2ggb3RoZXIuIFRoZSBHcmlkTGF5b3V0IGhhcyBvbmUgY29sdW1uIGFuZCBvbmUgcm93IGJ5IGRlZmF1bHQuXFxuWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IE5hdGl2ZVNjcmlwdCBsYXlvdXRzIGF0IGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL2xheW91dC1jb250YWluZXJzLlxcblxcblRoZXNlIGNvbXBvbmVudHMgbWFrZSB1c2Ugb2Ygc2V2ZXJhbCBDU1MgY2xhc3MgbmFtZXMgdGhhdCBhcmUgcGFydCBvZiB0aGUgTmF0aXZlU2NyaXB0XFxuY29yZSB0aGVtZSwgc3VjaCBhcyBwLTIwLCBidG4sIGgyLCBhbmQgbGlzdC1ncm91cC4gWW91IGNhbiB2aWV3IGEgZnVsbCBsaXN0IG9mIHRoZVxcbmNsYXNzIG5hbWVzIGF2YWlsYWJsZSBmb3Igc3R5bGluZyB5b3VyIGFwcCBhdCBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG4tLT5cXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJpdGVtc1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgW25zUm91dGVyTGlua109XFxcIlsnL2l0ZW0nLCBpdGVtLmlkXVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWUgKyAnICgnICsgaXRlbS5hZ2UgKyAnKSdcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PiAgXFxuPC9HcmlkTGF5b3V0PlxcblwiIl0sInNvdXJjZVJvb3QiOiIifQ==