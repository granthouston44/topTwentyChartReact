import React, {Component} from 'react'
import TuneDetail from './TuneDetail'

class Tune extends Component{

// function handleClick(event){
//   props.tuneDetails(event.target.value);
// }



render(){
  return(
    <div className="tune">
      <h3>Position: {this.props.chartPosition}</h3>
      <h4>{this.props.children.label}</h4>
      <TuneDetail detail={this.props.tuneDetails}/>

    </div>
  )
}


}
export default Tune;
