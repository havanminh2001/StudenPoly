import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, herf, onClick, children }) {
  let Componet = 'button'
  const classes = 'Wrapper_Button_global primary'
  const props = {
    onClick,
  }
  if (to) {
    props.to = to
    Componet = Link
  } else if (herf) {
    props.herf = herf
    Componet = 'a'
  }

  return (
    <>
      <Componet className={classes}>
        <span>{children}</span>
      </Componet>
    </>
  )
}

export default Button
