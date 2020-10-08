// Redux Action Types

// Menu
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';


export const SET_JOB_FORM_LIST = "SET_JOB_FORM_LIST";

// Action Creators

// Menu
export const openMenu = () => ({
    type: OPEN_MENU,
    menuState: true,
});

export const closeMenu = () => ({
    type: CLOSE_MENU,
    menuState: false,
});

// Job Form List
export const setJobFormList = (listItems) => ({
    type: SET_JOB_FORM_LIST,
    listItems,
});