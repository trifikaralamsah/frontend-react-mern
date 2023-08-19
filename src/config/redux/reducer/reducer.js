import {combineReducers} from 'redux'
import globalReducer from './globalReducer';
import homeReducer from './homeReducer';

// reducer
// dgn action dapat merubah value global yg kita miliki
const reducer = combineReducers({globalReducer, homeReducer});

export default reducer;