"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PopoverStore = require("./PopoverStore");

var _styles = require("./styles");

import { jsx as ___EmotionJSX } from "@emotion/core";

class Popover extends _react.default.PureComponent {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "state", {
      isPopoverShown: false
    });
    (0, _defineProperty2.default)(this, "componentWillUnmount", () => {
      _PopoverStore.popoverStore.unregister(this.hide);
    });
    (0, _defineProperty2.default)(this, "show", e => {
      _PopoverStore.popoverStore.register(this.hide);

      this.setState({
        isPopoverShown: true
      });

      if (this.props.onShow) {
        this.props.onShow(e);
      }
    });
    (0, _defineProperty2.default)(this, "hide", e => {
      this.setState({
        isPopoverShown: false
      });

      if (this.props.onHide) {
        this.props.onHide(e);
      }
    });
    (0, _defineProperty2.default)(this, "toggle", e => {
      e.preventDefault();
      e.stopPropagation();

      if (this.state.isPopoverShown) {
        this.hide(e);

        _PopoverStore.popoverStore.unregister(this.hide);
      } else {
        this.show(e);
      }
    });
  }

  render() {
    var {
      position,
      trigger,
      PopoverContent,
      PopoverTrigger,
      PopoverContainer
    } = this.props;
    var {
      isPopoverShown
    } = this.state;
    return _react.default.createElement(PopoverContainer, {
      position: position,
      active: isPopoverShown
    }, _react.default.createElement(PopoverTrigger, {
      href: "",
      onClick: this.toggle
    }, trigger), _react.default.createElement(PopoverContent, {
      position: position,
      active: isPopoverShown
    }, this.props.children));
  }

}

exports.default = Popover;
(0, _defineProperty2.default)(Popover, "propTypes", {
  children: _propTypes.default.node,
  trigger: _propTypes.default.any.isRequired,
  position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func,
  PopoverContainer: _propTypes.default.node,
  PopoverTrigger: _propTypes.default.node,
  PopoverContent: _propTypes.default.node
});
(0, _defineProperty2.default)(Popover, "defaultProps", {
  children: [],
  position: 'top',
  onShow: undefined,
  onHide: undefined,
  PopoverContainer: _styles.PopoverContainer,
  PopoverTrigger: _styles.PopoverTrigger,
  PopoverContent: _styles.PopoverContent
});