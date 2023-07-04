import PropTypes from 'prop-types'
import React from 'react'

import { Button as Btn } from './styles'

export const Button = ({ children, ...rest }) => {
  return <Btn {...rest}>{children}</Btn>
}

Button.propTypes = {
  children: PropTypes.string
}
