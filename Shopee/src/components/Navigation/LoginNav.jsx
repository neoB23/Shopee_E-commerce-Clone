import React from 'react';
import { Link } from 'react-router-dom';

function LoginNav(){
    return(
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
                <img src="images/shopee_logo.webp" className="h-10"/>
                <h1 className="text-xl mt-2">Log In</h1>
                </div>
            <CustomLink a href="/" className="text-[17px]">Need Help?</CustomLink>
            
        </div>
    );
}

function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props}> {children} </Link>
    );
}
export default LoginNav;