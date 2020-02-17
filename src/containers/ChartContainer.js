import React, {Component} from 'react'
import TuneList from '../components/TuneList'

class ChartContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      tunes: [],
      selectedTune: ""
    }
  }



componentDidMount(){
  console.log('did mount');
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
  fetch(url)
  .then(res => res.json())
  .then(tuneData => this.setState({tunes: tuneData.feed.entry}))
  .catch(err => console.error)
}

render(){
console.log('render');
// const selectedTune = this.state.tunes.find(tune => {
//   return tune. === this.state.selectedTune;
// })

return (
  <div>
  <h2>
  Tunes!
  </h2>
  <TuneList tunesData={this.state.tunes} />

  </div>
)
}

}

export default ChartContainer
