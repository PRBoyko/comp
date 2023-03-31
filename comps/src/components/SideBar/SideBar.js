import React from 'react';
import Link from '../Link/Link';

function SideBar() {
    const links = [
        { label: "Dropdown", path: '/' },
        { label: "Accordion", path: '/accordion' },
        { label: "Buttons", path: '/button' },
        { label: "Modal", path: '/modal' },
        {label: 'Table', path:'/table'},
        {label: 'Count', path:'/count'}
    ]

    return (
        <div className='sticky top-0 flex flex-col align-start'>
            {links.map(link => {
                return <Link activeClassName='font-bold border-l-4 border-blue-500 pl-2' className='mb-3' key={link.label} to={link.path}>{link.label}</Link>
            })}
        </div>
    );
}

export default SideBar;