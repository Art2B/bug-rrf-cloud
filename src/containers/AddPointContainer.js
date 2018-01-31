import { connect } from 'react-redux'
import { compose } from 'redux'

import AddPoint from './../components/AddPoint'

const mapDispatchToProps = dispatch => {
  return {
    addPoint: () => {
      console.log('Add point to current user')
    }
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(AddPoint)