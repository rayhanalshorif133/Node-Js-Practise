import React from 'react'

const Button = ({handleClick, children}) => {
  return (
    <>
      <button type='button' onClick={handleClick}>{children}</button>
    </>
  )
}

export default React.memo(Button);
