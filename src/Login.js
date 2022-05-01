import React from 'react';
import Button from '@mui/material/Button';
import { authentication } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
// import { signOut } from "firebase/auth";

const Login = ({ isUserSignedIn}) => {

    const signInWithGoogle = (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();

        setPersistence(authentication, browserLocalPersistence)
            .then(() => {
                signInWithPopup(authentication, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // const credential = GoogleAuthProvider.credentialFromResult(result);
                        // const token = credential.accessToken;
                        // The signed-in user info.

                        console.log(result)
                        // const user = result.user;
                    }).catch((error) => {
                        // const errorCode = error.code;
                        // const errorMessage = error.message;
                        console.log(error)
                        // const email = error.email;
                        // const credential = GoogleAuthProvider.credentialFromError(error);
                        // // ...
                    });
            })
        .catch(err=>console.log(err))
        
    }
    
    return (
        <div>
            <div className="App">
                Hello, There!!
            </div>
            {/* <button onClick={signInWithGoogle}>Sign in using google</button> */}
            <Button variant="contained" onClick={signInWithGoogle}> Sign in using google</Button>
        </div>
    )
}

export default Login
