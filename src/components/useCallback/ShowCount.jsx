import React from 'react'

const  ShowCount = (props) => {


  const {count, title} = props;


  return (
    <>
      <h2>{title} is {count}</h2>
    </>
  )
}

export default React.memo(ShowCount);
