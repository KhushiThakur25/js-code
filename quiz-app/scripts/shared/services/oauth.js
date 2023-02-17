// Oauth Contains the Logic to Connect Firebase OAuth
// DeStructure
// Async Call
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// {loginWithGmail}
// export wrap the things in object
export function loginwithGmail(){
  // Step-1 Specify the Google Provider
const provider = new GoogleAuthProvider();
const auth = getAuth();
return  signInWithPopup(auth, provider)
  
}