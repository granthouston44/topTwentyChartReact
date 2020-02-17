import React, {Component} from 'react'
import TuneDetail from './TuneDetail'

class Tune extends Component{





render(){
  return(
    <div className="tune">
      <h3>Position: {this.props.chartPosition}</h3>
      <h4>{this.props.children.label}</h4>

    </div>
  )
}


}
export default Tune;
