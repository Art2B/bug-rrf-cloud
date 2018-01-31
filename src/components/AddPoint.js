import React from 'react'
import { withFirebase } from 'react-redux-firebase'

export default withFirebase(({ addPoint }) => {
  return (
    <div>
      <button onClick={addPoint}>Add point</button>
    </div>
  )
})