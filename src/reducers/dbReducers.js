
import firebase from '../config/firebase';


const initState = {
    db: firebase.firestore(),
}

const dbReducers = (state = initState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default dbReducers;