// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj6wF8D2QUW66e0NY7smwWRg2XCi6jmNQ",
    authDomain: "cou-bus-service.firebaseapp.com",
    projectId: "cou-bus-service",
    storageBucket: "cou-bus-service.appspot.com",
    messagingSenderId: "904396289831",
    appId: "1:904396289831:web:59dec8f2721ea5608f9b02",
    measurementId: "G-GYMX4HCXKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// for Social LogiIn
const provider = new GoogleAuthProvider();


export const registerWithEmailAndPassword = async (email, password) => {
    try{
        const user  = await createUserWithEmailAndPassword(auth, email, password) ;
       // console.log(user);
       return user;
    }
    catch (error) {
        console.log(error);
    }

}

export const logInWithEmailAndPassword = async (email, password) => {
    try{
        const user  = await signInWithEmailAndPassword(auth, email, password) ;
       // console.log(user);
       return user;
    }
    catch (error) {
        console.log(error);
    }

}


const resetPassword = async (email) => {

    try {
        const user = await sendPasswordResetEmail(auth, email);
        // console.log(user
        return user;
    } catch (error) {
        console.log(error);
    }
}

const singInWithGoogle = async () =>{
  try {
    const user = await  signInWithPopup(auth, provider)
        console.log("From firebase request"+ user) ;
        return user;
    }
    catch(error){
   console.log(error)
}

}

const analytics = getAnalytics(app);

export  {auth , resetPassword , singInWithGoogle};
