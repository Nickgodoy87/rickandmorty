const{createStore , applyMiddleware, compose}= require('redux');
const thunk = require('reduce-thunk');
const rootReducer = require('./reducer/reducer')

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))


export default store;