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
        "lastLogin": "2017-12-10T00:00:00+00:00"
    },{
        "name": "Bobby Daniels",
        "email": "bobbyD@outlook.com",
        "lastLogin": "2017-11-10T00:00:00+00:00"
    },{
        "name": "John Walker",
        "email": "johnnyWalker@blue.com",
        "lastLogin": "2017-06-10T00:00:00+01:00"
    },{
        "name": "Eddy Stevens",
        "email": "eStevens@yahoo.com",
        "lastLogin": "2016-01-10T00:00:00+00:00"
    },{
        "name": "Jan Williams",
        "email": "jDubz@msn.com",
        "lastLogin": "2015-12-31T00:00:00+00:00"
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
