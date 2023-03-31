import classNames from 'classnames';
import React from 'react';
import useNavigationContext from '../hooks/useNavigationContext';

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigationContext();
    const classes = classNames('text-blue-500',
        className,
        currentPath === to && activeClassName
    )

    function handleClick(e) {
        if (e.metaKey || e.ctrlKey) {
            return
        }
        e.preventDefault();
        navigate(to);
    }
    return (
        <a href={to} className={classes} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;