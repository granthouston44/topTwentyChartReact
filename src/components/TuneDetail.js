import React, {Component} from 'react'
import Tune from './Tune'

class TuneDetail extends Component{

render(){
  return(
    <div>
      <img src={this.props.detail["im:image"][2].label} alt=""/>
    </div>
  )
}


}

export default TuneDetail;
