"use strict";

exports.__esModule = true;
exports.Hierarchy = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hierarchy = require("../../helpers/hierarchy");

var _preact = require("preact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hierarchy = exports.Hierarchy = function Hierarchy(props) {
  var _buffer$circleSize$te = _extends({ buffer: _hierarchy.UNIT, circleSize: 40, textDistance: 35 }, props),
      tree = _buffer$circleSize$te.tree,
      buffer = _buffer$circleSize$te.buffer,
      circleSize = _buffer$circleSize$te.circleSize,
      getIcon = _buffer$circleSize$te.getIcon,
      onClick = _buffer$circleSize$te.onClick,
      textDistance = _buffer$circleSize$te.textDistance;

  var _generateHierarchyDat = (0, _hierarchy.generateHierarchyData)(tree),
      nodes = _generateHierarchyDat.nodes,
      lines = _generateHierarchyDat.lines,
      width = _generateHierarchyDat.width,
      height = _generateHierarchyDat.height;

  var viewBox = [-buffer, -buffer, width + buffer * 2, height + buffer * 2];
  return require('preact').h(
    "svg",
    { className: "hierarchy", viewBox: viewBox.join(" "), width: "100%", height: "100%" },
    lines.map(function (line) {
      return require('preact').h("line", { className: line.status, x1: line.x1, x2: line.x2, y1: line.y1, y2: line.y2 });
    }),
    nodes.map(function (node) {
      var circleProps = {};
      if (onClick) circleProps.onClick = onClick;

      return require('preact').h(
        "g",
        { className: node.status },
        require('preact').h("circle", _extends({ className: onClick ? "clickable" : "" }, circleProps, { cx: node.x, cy: node.y, r: circleSize / 2 })),
        require('preact').h(
          "text",
          { x: node.x, y: node.y, dy: textDistance },
          node.label
        ),
        !!getIcon && getIcon(node)
      );
    })
  );
};

Hierarchy.propTypes = {
  buffer: _propTypes2.default.integer,
  circleSize: _propTypes2.default.integer,
  getIcon: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  textDistance: _propTypes2.default.integer,
  tree: _propTypes2.default.object.isRequired
};

exports.default = Hierarchy;