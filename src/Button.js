import React from 'react';

const Button = (props) => {
  const { color = "grey", onClick = () => {}, children } = props
  return (
    <button
      style={{ color: color }}
      onClick={() => onClick(color)}
    >
      {children}
    </button>
  )
}

export default Button;