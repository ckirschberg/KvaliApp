export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const NEW_CHATROOM = 'NEW_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const NEW_CHATMESSAGE = 'NEW_CHATMESSAGE';

export const toggleHappy = (isHappy) => {
    return { type: TOGGLE_HAPPY, payload: isHappy };
};

export const newChatRoom = (chatroomName) => {
    return { type: NEW_CHATROOM, payload: chatroomName };
};

export const deleteChatRoom = (chatroomName) => {
    return { type: DELETE_CHATROOM, payload: chatroomName };
};

export const newChatMessage = (chatRoomId, message) => {
    return { type: NEW_CHATMESSAGE, payload: { chatRoomId, message } };
};