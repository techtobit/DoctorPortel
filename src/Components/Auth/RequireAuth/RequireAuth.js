import React from 'react';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init'
import Reload from '../../Pages/Shared/ReloadAnimation/Reload';
const RequireAuth = ({ children }) => {
 const [user, loading] = useAuthState(auth);
 const location = useLocation()
 if (loading) {
  return <Reload></Reload>
 }
 if (!user) {
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
 }


 return children;
};

export default RequireAuth;