import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Reload from '../../Pages/Shared/ReloadAnimation/Reload';


const Login = () => {
 const { register, handleSubmit } = useForm();
 const onSubmit = data => console.log(data);

 // login with google 
 const [signInWithGoogle] = useSignInWithGoogle(auth)
 const handelGoogleLogin = () => {
  signInWithGoogle();
 }

 //If Auth.user exit Navigate to route
 const navigate = useNavigate();
 const location = useLocation();
 const [user, loading] = useAuthState(auth);
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
    <div className="card-body ">
     <h2 className="card-title">LogIn</h2>

     <form className='' onSubmit={handleSubmit(onSubmit)}>
      <input type='email' className="input input-bordered w-full max-w-xs  " placeholder='example@gmail.com' {...register("email")} />
      <input type='password' className="input input-bordered w-full max-w-xs my-4" placeholder='password' {...register("password", { required: true })} />
      <input type="submit" className="btn btn-block" />

     </form>
     <div className="divider">OR</div>
     <button onClick={handelGoogleLogin} className="btn btn-accent text-white">Login With Google</button>
    </div>
   </div>
  </div>
 );
};

export default Login;