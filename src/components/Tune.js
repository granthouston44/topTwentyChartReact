import React, {Component} from 'react'


class Tune extends Component{

// function handleClick(event){
//   props.
// }

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
