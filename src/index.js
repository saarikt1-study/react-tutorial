import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTsearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss'//process.env.API_KEY

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTsearch({key: API_KEY, term: 'cats'}, (videos) => {
      this.setState({ videos })
    })
    
  }
  
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    ) 
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
 ReactDOM.render(<App />, document.querySelector('.container'))