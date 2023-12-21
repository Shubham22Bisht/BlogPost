import React from 'react'
import {auth,provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
export const Login = () => {
    const navigate= useNavigate();
    const signInWithGoogle=async ()=>{
        await signInWithPopup(auth,provider);
        navigate("/");
    };
  return (
    <div>
      <p>Sign in With Google</p>
      <button onClick={signInWithGoogle}>Sign in With Google</button>

    </div>
  )
}
