import { combineReducers } from 'redux';

import menuReducers from './menuReducers';

const rootReducer = combineReducers({
    menu: menuReducers, 
});

export default rootReducer;