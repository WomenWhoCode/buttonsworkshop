import React from 'react';

const Button = (props) => {
  const { color } = props
  return (
    <button style={{ color: color }}></button>
  )
}

export default Button;