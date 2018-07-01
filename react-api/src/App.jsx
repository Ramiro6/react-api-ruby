import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fetch() {
    fetch('http://localhost:3000/api/posts').then(items => {
      return items.json()
    }).then(res => {
      console.log(res);
      return res
    })
  }

  render() {
    return (
      <div className="App">
        <h1>kasdkñdakañlsd</h1>
        {
          this.fetch().map(res => {
            console.log(res);
          })
        }
        <button className="bt btn-primary">Click</button>
      </div>
    );
  }
}

export default App;
