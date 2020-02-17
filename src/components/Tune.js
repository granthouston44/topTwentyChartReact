import React, {Component} from 'react'


class Tune extends Component{

render(){
  return(
    <div className="tune">
      <h4>{this.props.children.label}</h4>
    </div>
  )
}


}
export default Tune;
