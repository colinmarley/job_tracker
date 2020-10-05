import { combineReducers } from 'redux';

import dbReducers from './dbReducers';
import menuReducers from './menuReducers';


const rootReducer = combineReducers({
    db: dbReducers,
    menu: menuReducers, 

});

export default rootReducer;