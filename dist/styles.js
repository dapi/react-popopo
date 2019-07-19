"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = exports.PopoverElement = exports.PopoverTrigger = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  box-sizing: border-box;\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #000;\n  color: #fff;\n  padding: 5px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    background: transparent none repeat scroll 0 0;\n    border: 6px solid transparent;\n    transition: all 0.3s ease 0ms;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-flex;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//import styled from '@emotion/styled'
var PopoverTrigger = _styledComponents.default.a(_templateObject());

exports.PopoverTrigger = PopoverTrigger;

var PopoverElement = _styledComponents.default.div(_templateObject2(), props => props.position === 'top' && "\n    flex-flow: column-reverse nowrap;\n  ", props => props.position === 'bottom' && "\n    flex-flow: column nowrap;\n  ", props => props.position === 'left' && "\n    flex-flow: row-reverse nowrap;\n  ", props => props.position === 'right' && "\n    flex-flow: row nowrap;\n  ");

exports.PopoverElement = PopoverElement;

var PopoverContent = _styledComponents.default.div(_templateObject3(), props => props.position === 'top' && "\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%) translateY(-6px);\n\n      &::before {\n        border-top-color: #000;\n        bottom: -4px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n  ", props => props.position === 'bottom' && "\n      left: 50%;\n      transform: translateX(-50%) translateY(6px);\n\n      &::before {\n        border-bottom-color: #000;\n        top: -20px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n      }\n  ", props => props.position === 'left' && "\n      top: 50%;\n      transform: translateY(-50%) translateX(-100%);\n\n      &::before {\n        border-left-color: #000;\n        right: -6px;\n        transform: translateX(50%) translateY(-6px);\n        top: 50%;\n      }\n  ", props => props.position === 'right' && "\n      top: 50%;\n      transform: translateY(-50%) translateX(6px);\n\n      &::before {\n        border-right-color: #000;\n        left: -6px;\n        transform: translateX(-50%) translateY(-6px);\n        top: 50%;\n      }\n  ", props => props.active && "\n      visibility: visible;\n      opacity: 1;\n      transition-delay: 100ms;\n  ");

exports.PopoverContent = PopoverContent;