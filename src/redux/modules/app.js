const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';

export function handleDrawerToggle(show){
    return {
        type: TOGGLE_DRAWER,
        show
    }
}

export function handleSubmitSearch(value){
    return {
        type: SUBMIT_SEARCH,
        value
    }
}

const initialState = {
    users: [
        {
            "forename": "Susy",
            "surname": "Cuningham",
            "email": "suzy.cuningham@gmail.com",
            "lastLogin": "1/10/2015"
        },{
            "forename": "Bobby",
            "surname": "Daniels",
            "email": "bobbyD@outlook.com",
            "lastLogin": "1/10/2015"
        },{
            "forename": "John",
            "surname": "Walker",
            "email": "johnnyWalker@blue.com",
            "lastLogin": "1/10/2015"
        },{
            "forename": "Eddy",
            "surname": "Stevens",
            "email": "eStevens@yahoo.com",
            "lastLogin": "1/10/2015"
        },{
            "forename": "Jan",
            "surname": "Williams",
            "email": "jDubz@msn.com",
            "lastLogin": "1/10/2015"
        }
    ],
    mobileOpen: true,
    searchValue: '',
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_DRAWER:
            return {...state, mobileOpen: action.show}
        case SUBMIT_SEARCH:
            return {...state, searchValue: action.value}
        default:
            return state;
    }
}
