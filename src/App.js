import React, { Component } from 'react';
import Jobs from './Components/Jobs'
import Nav from './Components/Nav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav/>
         </header>
         <main className = "container">
           <Jobs/>
         </main>
      </div>
    )
  }
}

export default App
