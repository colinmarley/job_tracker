import {
    SET_JOB_FORM_LIST,
} from '../actions';


const initState = {
    listItems: [],
}

const listReducers = (state = initState, action) => {
    switch(action.type) {
        case SET_JOB_FORM_LIST:
            console.log("Job Form List Set");
            console.log(action.listItems);
            return ({...state, listItems: [...action.listItems]});
        default:
            return state;
    }
}

export default listReducers;