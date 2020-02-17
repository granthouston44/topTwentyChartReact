import React, {Component} from 'react'
import TuneList from '../components/TuneList'
import TuneDetail from '../components/TuneDetail'

class ChartContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      tunes: [],
      selectedTune: ""
    }
    this.handleSelectedTune = this.handleSelectedTune.bind(this)
  }



componentDidMount(){
  console.log('did mount');
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
  fetch(url)
  .then(res => res.json())
  .then(tuneData => this.setState({tunes: tuneData.feed.entry}))
  .catch(err => console.error)
}

handleSelectedTune(tuneTitle){
  console.log('selected Tune');
  this.setState({selectedTune: tuneTitle})
}

render(){
console.log('render');
const selectedTune = this.state.tunes.find(tune => {
  return tune.title.label === this.state.selectedTune;
})

return (
  <div>
  <h2>
  Tunes!
  </h2>
  <TuneList onTuneSelected={this.handleSelectedTune} tunesData={this.state.tunes} />
  <TuneDetail selectedTune={selectedTune}/>

  </div>
)
}

}

export default ChartContainer
