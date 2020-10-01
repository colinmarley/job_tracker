// Redux Action Types

// Menu
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';





// Action Creators

// Menu
export const openMenu = () => ({
    type: OPEN_MENU,
    menuState: true
});

export const closeMenu = () => ({
    type: CLOSE_MENU,
    menuState: false
});