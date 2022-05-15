import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Reload from '../../Pages/Shared/ReloadAnimation/Reload';


const Login = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data => console.log(data);

 // login with google 
 const [signInWithGoogle] = useSignInWithGoogle(auth)
 const handelGoogleLogin = () => {
  signInWithGoogle();
 }

 //If Auth.user exit Navigate to route
 const navigate = useNavigate();
 const location = useLocation();
 const [user, loading, error] = useAuthState(auth);
 let from = location.state?.from?.pathname || '/'
 if (user) {
  navigate(from, { replace: true })
 }

 if (loading) {
  return <Reload></Reload>
 }

 return (
  <div className='grid justify-center items-center max-h-fit'>
   <div className="card w-96 bg-base-100 shadow-xl ">
    <div className="card-body">
     <h2 className="card-title">LogIn</h2>
     <input type="text" placeholder="Type here" className="input w-full max-w-xs" />

     <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      <input type="submit" />
     </form>
     <div className="divider">OR</div>
     <button onClick={handelGoogleLogin} className="btn btn-accent text-white">Login With Google</button>
    </div>
   </div>
  </div>
 );
};

export default Login;