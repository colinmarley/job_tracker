import {
    OPEN_MENU, CLOSE_MENU
} from '../actions';


const initState = {
    menuState: false,
}

const menuReducers = (state = initState, action) => {
    switch(action.type) {
        case OPEN_MENU:
            console.log("OPEN");
            return ({...state, menuState: action.menuState});
        case CLOSE_MENU:
            console.log("CLOSE");
            return ({...state, menuState: action.menuState});
        default:
            return state;
    }
}

export default menuReducers;