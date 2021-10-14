import Message from './../../models/Message';
import User from './../../models/User';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const NEW_CHATROOM = 'NEW_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const NEW_CHATMESSAGE = 'NEW_CHATMESSAGE';

export const toggleHappy = (isHappy) => {
    return { type: TOGGLE_HAPPY, payload: isHappy };
};



export const newChatRoom = (chatroomName) => {
    return async (dispatch, getState) => { // redux thunk
        const token = getState().user.token; // accessing token in the state.

        const response = await fetch('https://kvaliapp-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' +  token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                
            })
        });
  
        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            // do something?
            dispatch({ type: NEW_CHATROOM, payload: chatroomName })
        }
    };
};






export const deleteChatRoom = (chatroomName) => {
    return { type: DELETE_CHATROOM, payload: chatroomName };
};

export const newChatMessage = (chatRoomId, message) => {
    const tempUser = new User('1', 'Peter Møller', 'Jensen', 'dummyUrlLink');
    const messageObj = new Message(Math.random().toString(), message, new Date(), tempUser);
    // console.log("************");
    // console.log(messageObj);
    // console.log("************");
    return { type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj } };
};
