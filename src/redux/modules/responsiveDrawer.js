const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export function handleDrawerToggle(show){
    return {
        type: TOGGLE_DRAWER,
        show
    }
}

const initialState = {
    mobileOpen: true,
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_DRAWER:
            return {...state, mobileOpen: action.show}
        default:
            return state;
    }
}
