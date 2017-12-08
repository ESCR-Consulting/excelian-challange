const INPUT_CHANGED = 'INPUT_CHANGED';

export function inputChange(value){
    return {
        type: INPUT_CHANGED,
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
    ]
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                {newToDo: action.value}
            );
        default:
            return state;
    }
}
