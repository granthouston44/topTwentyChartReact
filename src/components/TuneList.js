import React, {Component} from 'react'
import Tune from './Tune'

class TuneList extends Component{

render(){
  const tuneNodes = this.props.tunesData.map((tune, index)=>{
    return (
      <Tune tuneDetails={tune} chartPosition={index + 1} key={index}>{tune.title}</Tune>
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
