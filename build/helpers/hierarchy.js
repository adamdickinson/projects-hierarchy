"use strict";

exports.__esModule = true;
exports.walkNode = exports.positionNodeChildren = exports.positionNode = exports.measureNode = exports.getTreeNodes = exports.getTreeLines = exports.getNodeLines = exports.getNodeSiblingOffset = exports.generateHierarchyData = exports.UNIT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _maxBy = require("lodash/maxBy");

var _maxBy2 = _interopRequireDefault(_maxBy);

var _sumBy = require("lodash/sumBy");

var _sumBy2 = _interopRequireDefault(_sumBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNIT = exports.UNIT = 100;

var generateHierarchyData = exports.generateHierarchyData = function generateHierarchyData(tree) {
  tree = measureNode(tree);
  tree = _extends({}, tree, { x: tree.width / 2, y: 0 });
  tree = walkNode(tree, positionNodeChildren);

  var nodes = getTreeNodes(tree);
  var lines = getTreeLines(tree);
  var width = tree.width;
  var height = (0, _maxBy2.default)(nodes, "y").y - tree.y;

  return { nodes: nodes, lines: lines, width: width, height: height };
};

var getNodeSiblingOffset = exports.getNodeSiblingOffset = function getNodeSiblingOffset(node, siblings) {
  var index = siblings.indexOf(node);
  return index ? (0, _sumBy2.default)(siblings.slice(0, index), "width") : 0;
};

var getNodeLines = exports.getNodeLines = function getNodeLines(node) {
  if (!node.children) return [];
  return node.children.map(function (child) {
    var line = {
      x1: node.x,
      y1: node.y,
      x2: child.x,
      y2: child.y
    };

    if (child.status) line.status = child.status;
    return line;
  });
};

var getTreeLines = exports.getTreeLines = function getTreeLines(tree) {
  var lines = [];
  walkNode(tree, function (node) {
    lines.push.apply(lines, getNodeLines(node));
  });
  return lines;
};

var getTreeNodes = exports.getTreeNodes = function getTreeNodes(tree) {
  var nodes = [];
  walkNode(tree, function (node) {
    nodes.push(node);
  });
  return nodes;
};

var measureNode = exports.measureNode = function measureNode(node) {
  if (!node.children || !node.children.length) return _extends({}, node, { width: UNIT });

  var children = node.children.map(function (child) {
    return measureNode(child);
  });
  return _extends({}, node, { children: children, width: (0, _sumBy2.default)(children, "width") });
};

var positionNode = exports.positionNode = function positionNode(node, parent) {
  return _extends({}, node, {
    y: parent.y + UNIT,
    x: parent.x - parent.width / 2 + getNodeSiblingOffset(node, parent.children) + node.width / 2
  });
};

var positionNodeChildren = exports.positionNodeChildren = function positionNodeChildren(node) {
  return _extends({}, node, {
    children: node.children && node.children.map(function (child) {
      return positionNode(child, node);
    })
  });
};

var walkNode = exports.walkNode = function walkNode(node, fn) {
  var result = fn(node);
  if (result) node = result;

  return _extends({}, node, {
    children: node.children && node.children.map(function (child) {
      return walkNode(child, fn);
    })
  });
};