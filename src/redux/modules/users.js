const SEARCH_CHANGE = 'SEARCH_CHANGE';
const SORT_USERS = 'SORT_USERS';

export function handleSearchChange(value){
    return {
        type: SEARCH_CHANGE,
        value
    }
}

export function sortUsers(sortDirection){
    return {
        type: SORT_USERS,
        sortDirection
    }
}

export const userList = [
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
    userList,
    searchValue: '',
    sortDirection: true,
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case SEARCH_CHANGE:
            return {
                ...state,
                searchValue: action.value,
                userList: action.value !== ""
                    ? state.userList.filter(user => user.name.toLowerCase()
                        .match(action.value.toLowerCase()))
                    : userList
            };
        case SORT_USERS:
            return action.sortDirection
                ? {...state, userList: [...state.userList.sort((a,b) =>
                        a.name < b.name
                            ? -1
                            : a.name > b.name
                            ? 1
                            : 0)],
                sortDirection: !action.sortDirection}
                : {...state, userList: [...state.userList.sort((a,b) =>
                        a.name > b.name
                            ? -1
                            : a.name < b.name
                            ? 1
                            : 0)],
                sortDirection: !action.sortDirection}
        default:
            return state;
    }
}
