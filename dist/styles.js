"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContainer = exports.PopoverContent = exports.PopoverTrigger = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var PopoverTrigger = (0, _styledBase.default)("a", {
  target: "e1l45afw0",
  label: "PopoverTrigger"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXNDIiwiZmlsZSI6Ii4uL3NyYy9zdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuZXhwb3J0IGNvbnN0IFBvcG92ZXJUcmlnZ2VyID0gc3R5bGVkLmFgXG5gO1xuXG5leHBvcnQgY29uc3QgUG9wb3ZlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMG1zO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogN2VtO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcblxuICAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSAmJiBgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xuICBgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBtcztcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBQb3BvdmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAndG9wJyAmJiBgXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZSBub3dyYXA7XG4gICAgJHtQb3BvdmVyQ29udGVudH0ge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWSgtNnB4KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcbiAgICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSg4cHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAnYm90dG9tJyAmJiBgXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICR7UG9wb3ZlckNvbnRlbnR9IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDZweCk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XG4gICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDhweCk7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG4gICR7cHJvcHMgPT4gcHJvcHMucG9zaXRpb24gPT09ICdsZWZ0JyAmJiBgXG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZSBub3dyYXA7XG4gICAgJHtQb3BvdmVyQ29udGVudH0ge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtMTAwJSk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xuICAgICAgICByaWdodDogLTZweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAncmlnaHQnICYmIGBcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgJHtQb3BvdmVyQ29udGVudH0ge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCg2cHgpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7XG4gICAgICAgIGxlZnQ6IC02cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5gO1xuIl19 */");
exports.PopoverTrigger = PopoverTrigger;
var PopoverContent = (0, _styledBase.default)("div", {
  target: "e1l45afw1",
  label: "PopoverContent"
})("box-sizing:border-box;position:absolute;z-index:10;box-shadow:2px 2px 8px rgba(0,0,0,0.3);transition:all 0.3s ease 0ms;border-radius:3px;min-width:7em;flex-flow:column nowrap;background-color:#000;color:#fff;padding:5px;visibility:hidden;opacity:0;", props => props.active && "\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  ", " &::before{content:\"\";position:absolute;background:transparent none repeat scroll 0 0;border:6px solid transparent;transition:all 0.3s ease 0ms;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3dDIiwiZmlsZSI6Ii4uL3NyYy9zdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuZXhwb3J0IGNvbnN0IFBvcG92ZXJUcmlnZ2VyID0gc3R5bGVkLmFgXG5gO1xuXG5leHBvcnQgY29uc3QgUG9wb3ZlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMG1zO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogN2VtO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcblxuICAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSAmJiBgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xuICBgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBtcztcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBQb3BvdmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAndG9wJyAmJiBgXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZSBub3dyYXA7XG4gICAgJHtQb3BvdmVyQ29udGVudH0ge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWSgtNnB4KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcbiAgICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSg4cHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAnYm90dG9tJyAmJiBgXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICR7UG9wb3ZlckNvbnRlbnR9IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDZweCk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XG4gICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDhweCk7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG4gICR7cHJvcHMgPT4gcHJvcHMucG9zaXRpb24gPT09ICdsZWZ0JyAmJiBgXG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZSBub3dyYXA7XG4gICAgJHtQb3BvdmVyQ29udGVudH0ge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtMTAwJSk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xuICAgICAgICByaWdodDogLTZweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAncmlnaHQnICYmIGBcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgJHtQb3BvdmVyQ29udGVudH0ge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCg2cHgpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7XG4gICAgICAgIGxlZnQ6IC02cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5gO1xuIl19 */"));
exports.PopoverContent = PopoverContent;
var PopoverContainer = (0, _styledBase.default)("div", {
  target: "e1l45afw2",
  label: "PopoverContainer"
})("position:relative;display:inline-flex;box-sizing:border-box;", props => props.position === 'top' && "\n    flex-flow: column-reverse nowrap;\n    ".concat(PopoverContent, " {\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%) translateY(-6px);\n\n      &::before {\n        border-top-color: #000;\n        bottom: -4px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n    }\n  "), " ", props => props.position === 'bottom' && "\n    flex-flow: column nowrap;\n    ".concat(PopoverContent, " {\n      left: 50%;\n      transform: translateX(-50%) translateY(6px);\n\n      &::before {\n        border-bottom-color: #000;\n        top: -20px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n      }\n    }\n  "), " ", props => props.position === 'left' && "\n    flex-flow: row-reverse nowrap;\n    ".concat(PopoverContent, " {\n      top: 50%;\n      transform: translateY(-50%) translateX(-100%);\n\n      &::before {\n        border-left-color: #000;\n        right: -6px;\n        transform: translateX(50%) translateY(-6px);\n        top: 50%;\n      }\n    }\n  "), " ", props => props.position === 'right' && "\n    flex-flow: row nowrap;\n    ".concat(PopoverContent, " {\n      top: 50%;\n      transform: translateY(-50%) translateX(6px);\n\n      &::before {\n        border-right-color: #000;\n        left: -6px;\n        transform: translateX(-50%) translateY(-6px);\n        top: 50%;\n      }\n    }\n  "), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0MwQyIsImZpbGUiOiIuLi9zcmMvc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBQb3BvdmVyVHJpZ2dlciA9IHN0eWxlZC5hYFxuYDtcblxuZXhwb3J0IGNvbnN0IFBvcG92ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBtcztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDdlbTtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgJiYgYFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcbiAgYH1cblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwbXM7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgUG9wb3ZlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5wb3NpdGlvbiA9PT0gJ3RvcCcgJiYgYFxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2Ugbm93cmFwO1xuICAgICR7UG9wb3ZlckNvbnRlbnR9IHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVkoLTZweCk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDA7XG4gICAgICAgIGJvdHRvbTogLTRweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoOHB4KTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgIH1cbiAgYH1cbiAgJHtwcm9wcyA9PiBwcm9wcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScgJiYgYFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAke1BvcG92ZXJDb250ZW50fSB7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSg2cHgpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xuICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSg4cHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICB9XG4gICAgfVxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLnBvc2l0aW9uID09PSAnbGVmdCcgJiYgYFxuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2Ugbm93cmFwO1xuICAgICR7UG9wb3ZlckNvbnRlbnR9IHtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTEwMCUpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDtcbiAgICAgICAgcmlnaHQ6IC02cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgYH1cbiAgJHtwcm9wcyA9PiBwcm9wcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiBgXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICR7UG9wb3ZlckNvbnRlbnR9IHtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoNnB4KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwO1xuICAgICAgICBsZWZ0OiAtNnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICBgfVxuYDtcbiJdfQ== */");
exports.PopoverContainer = PopoverContainer;