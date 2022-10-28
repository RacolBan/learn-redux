import { createStore } from 'redux';
import { reducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const composedEnhancers = composeWithDevTools();
// [state, dispatch] = useReducer(reducer, initstate)
const store = createStore(reducer, composedEnhancers);
export default store;