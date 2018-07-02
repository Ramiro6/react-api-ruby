import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    return(
      <div>
        {
          console.log(this.props)
        }
        <h1>Posts!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Posts)