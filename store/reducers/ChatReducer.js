import { NEW_CHATROOM, TOGGLE_HAPPY } from "../actions/ChatActions";

const initialState = {
    isHappy: false,
    chatRooms: []
};

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HAPPY:
            //state.isHappy = true; // NOOOOO !!! state mutation not allowed
            return { ...state, isHappy: action.payload };

        case NEW_CHATROOM:
            //fjkdæka

    default:
        return state;
    }
}

export default ChatReducer;