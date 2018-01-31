import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'

import firebaseConfig from './config/firebase'

import PointsContainer from './containers/PointsContainer'
import AddPointContainer from './containers/AddPointContainer'

// initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  compose(
   reactReduxFirebase(firebase, {
      userProfile: 'users'
    })
  )
)

const App = () => (
  <Provider store={store}>
    <div>
      <PointsContainer />
      <AddPointContainer />
    </div>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));