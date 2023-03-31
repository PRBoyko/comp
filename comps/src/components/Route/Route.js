import React from 'react';
import useNavigationContext from '../hooks/useNavigationContext';

function Route({ path, children }) {
    const { currentPath } = useNavigationContext();


    return (
        <div>
            {path === currentPath && children}
        </div>
    );
}

export default Route;