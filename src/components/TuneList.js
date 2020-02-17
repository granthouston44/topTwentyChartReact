import React, {Component} from 'react'
import Tune from './Tune'

class TuneList extends Component{

  handleClick(event){
    console.log('handle click');
    console.log(event.target);
    this.props.onTuneSelected(event.target.innerText);
  }

render(){
  const tuneNodes = this.props.tunesData.map((tune, index)=>{
    return (
      <div value={tune.title.label} key={index} onClick={this.handleClick.bind(this)}>
      <Tune tuneDetails={tune} chartPosition={index + 1} key={index}>{tune.title}</Tune>
      </div>
    )
  })
  return(
    <div className="tune-list">
    {tuneNodes}
    </div>
  )
}
}
export default TuneList;
