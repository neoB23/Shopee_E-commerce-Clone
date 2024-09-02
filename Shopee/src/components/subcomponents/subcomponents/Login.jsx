import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-12 rounded shadow-md">
                <h1 className="flex items-center justify-center font-bold text-3xl pb-4">Login</h1>
                <label htmlFor="username" className="block mb-2">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="w-full mb-4 p-2 border rounded"
                />
                <label htmlFor="password" className="block mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border rounded"
                />
                <div className="flex items-center gap-x-4 mb-4">
                    <input type="checkbox" id="showPassword" className="mr-2 " />
                    <label htmlFor="showPassword" className="cursor-pointer text-sm">Show Password</label>
                    <CustomLink to="/" className="text-sm">Forgot Password?</CustomLink>
                </div>
                <button className="w-full bg-zinc-900 text-white p-2 rounded-full mb-4">Login</button>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">Or</span>
                    <hr className="flex-grow border-gray-300" />
                </div> 
                <div className="space-y-3">      
                <div className="relative w-full">
                    <button className="w-full bg-[#4285F4] text-white p-2 rounded-full ">
                        <img src="images/fb.ico" className="absolute left-4 w-6 h-6"/> Sign in with Facebook</button>
                    </div>
                    <div className="relative w-full">
                        <button className="w-full bg-gray-100 text-black p-2 rounded-full flex items-center justify-center gap-2 relative">
                            <img src="images/google.svg.webp" alt="Google icon" className="absolute left-4 w-6 h-6" /> Sign in with Google </button>
                    </div>
                    </div>    
            </div>
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    );
}

export default Login;
