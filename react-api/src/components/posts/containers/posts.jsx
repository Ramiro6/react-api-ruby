import React, { Component } from 'react';
import Post from '../components/post.jsx';


class Posts extends Component {
  state = { data: [] }
  componentWillMount() {
    fetch('http://localhost:3000/api/posts').then((item) => {
      return item.json()
    }).then((res) => {
      this.setState({data: res})
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Posts</h1>
        <Post data={this.state.data} />
      </div>
    )
  }
}

export default Posts