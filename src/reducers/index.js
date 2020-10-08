import { combineReducers } from 'redux';

import dbReducers from './dbReducers';
import menuReducers from './menuReducers';
import listReducers from './listReducers';


const rootReducer = combineReducers({
    db: dbReducers,
    menu: menuReducers, 
    list: listReducers,

});

export default rootReducer;