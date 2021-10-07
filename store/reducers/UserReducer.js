import { SIGNUP } from "../actions/UserActions";

const initialState = {
    loggedInUser: undefined
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            // Do something here
            return state;

    default:
        return state;
    }
}

export default UserReducer;