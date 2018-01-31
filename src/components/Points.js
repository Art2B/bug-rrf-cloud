import React from 'react'
import { withFirebase } from 'react-redux-firebase'

export default withFirebase(({ user = {} }) => {
  return (
    <div>
      <p>Number of users: { user.points }</p>
    </div>
  )
})