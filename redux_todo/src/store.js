import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todos from './reducers/todos'
//export default createStore(todos)
const store = createStore(todos, {}, applyMiddleware(thunk, logger));
export default store;
