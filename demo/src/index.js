import "./style.styl"
import CheckIcon from "material-ui-icons/Check"
import Hierarchy from "@renegade/hierarchy"
import MoreHorizIcon from "material-ui-icons/MoreHoriz"
import debounce from "lodash/debounce"
import { h, Component } from "preact"
import { safeLoad as parseYaml, safeDump as stringifyYaml } from "js-yaml"



class Textarea extends Component {

  shouldComponentUpdate() { return false }
  render(props) { return <textarea {...props} /> }

}



export class Demo extends Component {

  constructor(props) {
    super(props)
    this.updateStructure = debounce(this.updateStructure, 300)
    this.state = {
      hierarchy: require("json-loader!yaml-loader!./sample.yml")
    }
  }



  updateStructure(value) {
    try {
      const hierarchy = parseYaml(value)
      this.setState({ hierarchy })

    } catch (error) {
      console.warn(error)
      this.setState({ error })
    }
  }



  render(props) {

    const icons = {
      check:    CheckIcon,
      ellipsis: MoreHorizIcon
    }

    const getIcon = ({ icon, x, y }) => {
      if( !(icon in icons) ) return
      const Icon = icons[icon]
      return <Icon x={x - 12} y={y - 12} width="24" height="24" />
    }

    return (
      <div className="demo">
        <Textarea defaultValue={stringifyYaml(this.state.hierarchy)} onInput={e => this.updateStructure(e.target.value)} />
        <div className="hierarchy-wrap">
          <Hierarchy tree={this.state.hierarchy} getIcon={getIcon} />
        </div>
      </div>
    )
  }

}



export default Demo
