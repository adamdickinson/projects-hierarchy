import render from "preact-render-to-string"
import { h } from "preact"
import Hierarchy from "./"



describe("Hierarchy component", () => {

  const sampleTree = {
    label: "Sample",
    children: [
      { label: "Example" },
      { label: "Test" }
    ]
  }



  it("should render", () => {
    expect(render(<Hierarchy tree={{ label: "Sample" }} />))
      .toMatchSnapshot()
  })



  it("should render with icon and as clickable", () => {
    expect(render(<Hierarchy tree={{ label: "Sample" }} onClick={jest.fn()} getIcon={() => "icon"} />))
      .toMatchSnapshot()
  })



  it("should render many nodes", () => {
    expect(render(<Hierarchy tree={sampleTree} />))
      .toMatchSnapshot()
  })

})
