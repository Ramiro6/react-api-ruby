import React from 'react';

const Post = (props) => {
  console.log(props);
  if(!props) {
    return (
      <div>... Loading</div>
    )
  }

  return(
    <div>
      {
        props.data.map((res) => {
          return <div key={res.id}>
            <h1>{res.title}</h1>
            <h3>{res.description}</h3>
          </div>
        })
      }
      <h1>desde el hijo</h1>
    </div>
  )
}



export default Post