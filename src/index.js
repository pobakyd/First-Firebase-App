import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import appReducers from './reducers/index'
import {firebaseApp} from './firebase'
import {usersRef} from './firebase'
import App from './components/App';
import * as actions from './actions/index'
import reportWebVitals from './reportWebVitals';

const store = createStore(appReducers)

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const {uid, email} = user
    usersRef.child(uid).get()
      .then(data => {
        const {isAdmin, website} = data.val()
        store.dispatch(actions.actLogin({uid, isAdmin, email, website}))
      })
    
  } else {
    store.dispatch(actions.actLogout())
  }
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
