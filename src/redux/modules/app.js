const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export function handleDrawerToggle(show){
    return {
        type: TOGGLE_DRAWER,
        show
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
    mobileOpen: false
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_DRAWER:
            return {...state, mobileOpen: !action.show}
        default:
            return state;
    }
}
