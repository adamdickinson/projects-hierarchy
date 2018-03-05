import * as helpers from "./hierarchy"



describe("hierarchy helpers", () => {

  const sampleChildren = [
    { x: 50,  y: 100, width: 100, status: "done" },
    { x: 150, y: 100, width: 100 },
    { x: 250, y: 100, width: 100 },
    { x: 350, y: 100, width: 100 }
  ]

  const sampleLines = [
    { x1: 200, y1: 0, x2: 50,  y2: 100, status: "done" },
    { x1: 200, y1: 0, x2: 150, y2: 100 },
    { x1: 200, y1: 0, x2: 250, y2: 100 },
    { x1: 200, y1: 0, x2: 350, y2: 100 }
  ]

  const sampleTree = {
    children: sampleChildren,
    width: 400,
    x: 200,
    y: 0
  }

  const sampleNodes = [ sampleTree, ...sampleChildren ]



  it("should generateHierarchyData", () => 
    expect(helpers.generateHierarchyData(sampleTree))
      .toEqual({
        height: 100,
        lines: sampleLines,
        nodes: sampleNodes,
        width: 400
      }))



  it("should getNodeSiblingOffset", () => 
    expect(helpers.getNodeSiblingOffset(sampleChildren[2], sampleChildren)).toBe(200))



  it("should getNodeLines", () =>
    expect(helpers.getNodeLines(sampleTree)).toEqual(sampleLines))



  it("should getTreeLines", () =>
    expect(helpers.getTreeLines(sampleTree)).toEqual(sampleLines))



  it("should getTreeNodes", () =>
    expect(helpers.getTreeNodes(sampleTree)).toEqual(sampleNodes))



  it("should measureNode", () => {
    expect(helpers.measureNode({}))
      .toEqual({ width: helpers.UNIT })

    expect(helpers.measureNode({ children: [{}, {}] }))
      .toEqual({ width: 2 * helpers.UNIT, children: [{ width: helpers.UNIT }, { width: helpers.UNIT }] })
  })



  it("should positionNode", () => {
    expect(helpers.measureNode({}))
      .toEqual({ width: helpers.UNIT })

    expect(helpers.measureNode({ children: [{}, {}] }))
      .toEqual({ width: 2 * helpers.UNIT, children: [{ width: helpers.UNIT }, { width: helpers.UNIT }] })
  })



  it("should positionNodeChildren", () => {
    const emptyTree = { 
      x: sampleTree.x, 
      y: sampleTree.y, 
      width: sampleTree.width, 
      children: sampleTree.children.map(child => {
        const emptyChild = { width: child.width }
        if( child.status ) emptyChild.status = child.status
        return emptyChild
      })
    }

    expect(helpers.positionNodeChildren(emptyTree))
      .toEqual(sampleTree)
  })



  it("should walkNode", () => {
    const sampleNode = {
      children: [
        { 
          children: [
            {}, 
            {}
          ] 
        },
        {}
      ]
    }

    const mock = jest.fn()
    helpers.walkNode(sampleNode, mock)
    expect(mock.mock.calls)
      .toEqual([
        [sampleNode],
        [sampleNode.children[0]],
        [sampleNode.children[0].children[0]],
        [sampleNode.children[0].children[1]],
        [sampleNode.children[1]]
      ])
  })



})
