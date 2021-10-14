import { SIGNUP } from "../actions/UserActions";

const initialState = {
    loggedInUser: undefined,
    token: undefined
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            // Do something here
            // const test = { ...state, loggedInUser: action.payload.user, token: action.payload.token };
            // console.log(test);

            return { ...state, loggedInUser: action.payload.user, token: action.payload.token };
            
            return state;

    default:
        return state;
    }
}

export default UserReducer;