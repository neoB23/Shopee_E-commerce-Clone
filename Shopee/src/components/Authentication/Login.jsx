import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex justify-center sm:justify-end items-center p-24 shadow-md bg-no-repeat bg-center bg-shopee" style={{ backgroundImage: "url('images/login_bg.png')", backgroundSize:"70%", }} >
            <div className="bg-white p-14 rounded shadow-md sm:mr-44">
                <h1 className=" font-bold text-3xl pb-4">Login</h1>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Phone number/ Username / Email"
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border rounded"
                />
                <button className="w-full bg-shopee text-white p-2 rounded mb-4">Login</button>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">Or</span>
                    <hr className="flex-grow border-gray-300" />
                </div> 
                <div className="space-x-2 flex">      
                <div className="relative w-full">
                    <button className="w-full border text-black p-2 rounded hover:bg-gray-100  ">
                        {/* <img src="images/fb.ico" className="absolute left-4 w-6 h-6"/>  */}
                        Sign in with Facebook</button>
                    </div>
                    <div className="relative w-full">
                        <button className="w-full border text-black p-2 flex items-center justify-center hover:bg-gray-100">
                            {/* <img src="images/google.svg.webp" alt="Google icon" className="absolute left-4 w-6 h-6" />  */}
                            Sign in with Google </button>
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
