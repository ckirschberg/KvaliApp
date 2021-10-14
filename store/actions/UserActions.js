import User from "../../models/User";

export const SIGNUP = 'SIGNUP';

const api_key = 'AIzaSyBV2KOnzeYrwe6Lwz2B_NbMExB2Jo2aTNs';
 
export const signup = (email, password) => {
    console.log(email + " " + password);
   return async dispatch => { // redux thunk
    console.log("again" + email + " " + password);
       const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +  api_key, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ //javascript to json
               //key value pairs of data you want to send to server
               // ...
               email: email, 
               password: password,
               returnSecureToken: true
           })
       });
 
       const data = await response.json(); // json to javascript
       console.log(data);
       if (!response.ok) {
           //There was a problem..
       } else {
           
            const user = new User(data.localId, '', '', '', email);
           dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
       }
   };
};
