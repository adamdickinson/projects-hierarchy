import PropTypes from "prop-types"
import { generateHierarchyData, UNIT } from "../../helpers/hierarchy"
import { h } from 'preact'



export const Hierarchy = props => {
  const { tree, buffer, circleSize, getIcon, onClick, textDistance } 
    = { buffer: UNIT, circleSize: 40, textDistance: 35, ...props }

  const { nodes, lines, width, height } = generateHierarchyData(tree)
  const viewBox = [ -buffer, -buffer, width + buffer * 2, height + buffer * 2 ]
  return (
    <svg className="hierarchy" viewBox={viewBox.join(" ")} width="100%" height="100%">
      { lines.map(line => <line className={line.status} x1={line.x1} x2={line.x2} y1={line.y1} y2={line.y2} />) }
      { nodes.map(node => { 
        const circleProps = {}
        if( onClick ) circleProps.onClick = onClick

        return (
          <g className={node.status}>
            <circle className={onClick ? "clickable" : ""} {...circleProps} cx={node.x} cy={node.y} r={circleSize / 2} />
            <text x={node.x} y={node.y} dy={textDistance}>{node.label}</text>
            { !!getIcon && getIcon(node) }
          </g>
        )
      }) }
    </svg>
  )
}



Hierarchy.propTypes = {
  buffer:       PropTypes.integer,
  circleSize:   PropTypes.integer,
  getIcon:      PropTypes.func,
  onClick:      PropTypes.func,
  textDistance: PropTypes.integer,
  tree:         PropTypes.object.isRequired,
}



export default Hierarchy
