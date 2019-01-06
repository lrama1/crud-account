import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App from './components/App'
import reducers from './reducers'
import {fetchAllAccounts} from './actions'

const store = createStore(reducers, {}, applyMiddleware(thunk) )
store.dispatch(fetchAllAccounts('/accounts?page=1&per_page=10'))

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, 
    document.querySelector("#root"));