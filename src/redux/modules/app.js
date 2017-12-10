const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SEARCH_CHANGE = 'SEARCH_CHANGE';

export function handleDrawerToggle(show){
    return {
        type: TOGGLE_DRAWER,
        show
    }
}

export function handleSearchChange(value){
    return {
        type: SEARCH_CHANGE,
        value
    }
}
const users = [
    {
        "name": "Susy Cuningham",
        "email": "suzy.cuningham@gmail.com",
        "lastLogin": "12/10/2017"
    },{
        "name": "Bobby Daniels",
        "email": "bobbyD@outlook.com",
        "lastLogin": "11/10/2017"
    },{
        "name": "John Walker",
        "email": "johnnyWalker@blue.com",
        "lastLogin": "6/10/2017"
    },{
        "name": "Eddy Stevens",
        "email": "eStevens@yahoo.com",
        "lastLogin": "1/10/2016"
    },{
        "name": "Jan Williams",
        "email": "jDubz@msn.com",
        "lastLogin": "12/31/2015"
    }
]
const initialState = {
    users,
    mobileOpen: true,
    searchValue: '',
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_DRAWER:
            return {...state, mobileOpen: action.show}
        case SEARCH_CHANGE:
            return {
                ...state,
                searchValue: action.value,
                users: action.value !== ""
                    ? state.users.filter(user => user.name.toLowerCase()
                        .match(action.value.toLowerCase()))
                    : users
            }
        default:
            return state;
    }
}
