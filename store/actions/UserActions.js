export const SIGNUP = 'SIGNUP';

const api_key = 'AIzaSyBV2KOnzeYrwe6Lwz2B_NbMExB2Jo2aTNs';
 
export const signup = (email, password) => {
   return async dispatch => { // redux thunk
       const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +  api_key, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ //javascript to json
               //key value pairs of data you want to send to server
               // ...
               returnSecureToken: true
           })
       });
 
       if (!response.ok) {
           //There was a problem..
       } else {
           const data = await response.json(); // json to javascript
           dispatch({type: SIGNUP, payload: 'something to pass to reducer'})
       }
   };
};
