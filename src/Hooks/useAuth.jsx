import React, { useContext } from 'react';
import { Authcontext } from '../Context/Authcontext';

const useAuth = () => {
    const authInfo=useContext(Authcontext);
    return authInfo;
};

export default useAuth;