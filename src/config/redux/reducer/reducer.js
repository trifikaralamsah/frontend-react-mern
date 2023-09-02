import {combineReducers} from 'redux'
import globalReducer from './globalReducer';
import homeReducer from './homeReducer';
import createBlogReducer from './createBlogReducer';

// reducer
// dgn action dapat merubah value global yg kita miliki
const reducer = combineReducers({globalReducer, homeReducer, createBlogReducer});

export default reducer;