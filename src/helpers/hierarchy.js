import maxBy from "lodash/maxBy"
import sumBy from "lodash/sumBy"



export const UNIT = 100



export const generateHierarchyData = tree => {
  tree = measureNode(tree)
  tree = { ...tree, x: tree.width / 2, y: 0 }
  tree = walkNode(tree, positionNodeChildren)

  const nodes = getTreeNodes(tree)
  const lines = getTreeLines(tree)
  const width = tree.width 
  const height = maxBy(nodes, "y").y - tree.y

  return { nodes, lines, width, height }
}



export const getNodeSiblingOffset = (node, siblings) => {
  const index = siblings.indexOf(node)
  return index
    ? sumBy(siblings.slice(0, index), "width")
    : 0
}



export const getNodeLines = node => {
  if( !node.children ) return []
  return node.children.map(child => {
    const line = {
      x1: node.x, 
      y1: node.y, 
      x2: child.x, 
      y2: child.y
    }

    if( child.status ) line.status = child.status
    return line
  })
}



export const getTreeLines = tree => {
  const lines = []
  walkNode(tree, node => { lines.push(...getNodeLines(node)) })
  return lines
}



export const getTreeNodes = tree => {
  const nodes = []
  walkNode(tree, node => { nodes.push(node) })
  return nodes
}



export const measureNode = node => {
  if( !node.children || !node.children.length )
    return { ...node, width: UNIT }

  const children = node.children.map(child => measureNode(child)) 
  return { ...node, children, width: sumBy(children, "width") }
}



export const positionNode = (node, parent) => ({
  ...node,
  y: parent.y + UNIT,
  x: parent.x - (parent.width / 2) + getNodeSiblingOffset(node, parent.children) + node.width / 2
})



export const positionNodeChildren = node => ({
  ...node,
  children: node.children && node.children.map(child => positionNode(child, node))
})


export const walkNode = (node, fn) => {
  const result = fn(node)
  if( result ) node = result 

  return {
    ...node,
    children: node.children && node.children.map(child => walkNode(child, fn))
  }
}
