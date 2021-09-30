import ChatRoom from "./../../models/ChatRoom";
import { DELETE_CHATROOM, NEW_CHATMESSAGE, NEW_CHATROOM, TOGGLE_HAPPY } from "../actions/ChatActions";
import { ChatRooms } from './../../dummy-data/DummyData';

const initialState = {
    isHappy: false,
    chatRooms: ChatRooms
};

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HAPPY:
            //state.isHappy = true; // NOOOOO !!! state mutation not allowed
            return { ...state, isHappy: action.payload };

        case NEW_CHATROOM:
            // add a new chatroom object to the chatroom array without state mutations!
            const tempId = Math.random().toString();
            //const chatRoom = {id: Math.random(), imageUrl: '', ...}
            const chatRoom = new ChatRoom(tempId, undefined, action.payload, []);

            return { ...state, chatRooms: [...state.chatRooms, chatRoom] };
        case DELETE_CHATROOM:
            console.log(action.payload);
            console.log(state.chatRooms);
            
            return { ...state, chatRooms: 
                state.chatRooms.filter(room => room.chatRoomName !== action.payload) };
            //fjkdæka
        case NEW_CHATMESSAGE:
            // Find the chatroom object based on chatroomId.    
            // Copy messages array of the right chatroom object
            // Copy chatrooms to avoid state mutations when updating the messages array in the 
            // specific chatroom object.
            

    default:
        return state;
    }
}

export default ChatReducer;