import Proptypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../Components'
import paths from '../constants/paths'

const PrivateRoute = ({ children, isAdmin }) => {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to={paths.Login} />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.Home} />
  }

  return (
    <>
      {!isAdmin && <Header />}
      {children}
    </>
  )
}
export default PrivateRoute

PrivateRoute.propTypes = {
  children: Proptypes.oneOfType([Proptypes.func, Proptypes.element]),
  isAdmin: Proptypes.bool
}
