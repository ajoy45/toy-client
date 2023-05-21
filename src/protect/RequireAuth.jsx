import React, { useContext } from 'react';
import { authContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { user, loading } = useContext(authContext);
    let location = useLocation();
    if (loading) {
        return <div className="inline-block  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
}

export default RequireAuth;