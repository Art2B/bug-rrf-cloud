import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

import Points from './../components/Points'

export default compose(
  firebaseConnect([
    'users'
  ]),
  connect( ({ firebase }) => {
    const currentUser = firebase.data.users ? firebase.data.users[firebase.auth.uid] : {}
    return {
      user: currentUser,
    }
  })
)(Points)