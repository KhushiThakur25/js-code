//dom 
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { loginwithGmail } from "../../shared/services/oauth.js";
window.addEventListener('load',bindEvents);

// it is a glue btw view and model
function bindEvents(){
    const button = document.querySelector('#teacher-login');
    button.addEventListener('click',doLogin);
}
function doLogin(){
   const promise= loginwithGmail();
    promise.then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        ///sessionStorage=
        console.log('User Info is ',user);
        // Redirect to the DashBoard
        location.href = 'dashboard.html';
        // ...
      }).catch((err) => {
        console.log('Error in OAuth ', err);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

}