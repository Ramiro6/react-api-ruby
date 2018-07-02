import React, { Component } from 'react';
import Posts from './components/posts/containers/posts.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  (state) => state,
  {"id": 1, "title": "asljdhlajdsjdskljdasl"}
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Posts />
        </Provider>
      </div>
    );
  }
}

export default App;
