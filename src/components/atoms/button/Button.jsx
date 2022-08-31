import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/style/button.scss'

const cx = classNames.bind(styles)
function Button({
  to,
  herf,
  disabed = false,
  small = false,
  large = false,
  primary = false,
  outline = false,
  text = false,
  roundedButton = false,
  defaultButton,
  iconButtonLeft,
  iconButtonRight,
  children,
  onClick,
  ...passProps
}) {
  let Component = 'button'
  const props = {
    onClick,
    ...passProps,
  }
  if (to) {
    props.to = to
    Component = Link
  } else if (herf) {
    props.herf = herf
    Component = 'a'
  }
  ///disabel button
  if (disabed) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  const classes = cx('Wrapper_Button_global', {
    primary,
    outline,
    small,
    large,
    text,
    disabed,
    roundedButton,
  })
  return (
    <>
      <Component className={classes} {...props}>
        {iconButtonLeft && <span className={cx('icon')}>{iconButtonLeft}</span>}
        <span className={cx("title")}>{children}</span>
        {iconButtonRight && <span className={cx('icon')}>{iconButtonRight}</span>}
      </Component>
    </>
  )
}

export default Button
