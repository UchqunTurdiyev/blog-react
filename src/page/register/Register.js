import React from 'react';
import {Link} from "react-router-dom"

function Register(props) {
    return (
        <div className='flex flex-col justify-center items-center bg-[url(https://images.unsplash.com/photo-1609895720459-394a6a8c99ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHx0ZXh0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-no-repeat bg-cover bg-center' style={{height: "calc(100vh - 65px)"}}>
            <span className='text-3xl'>Register</span>
            <form className='mt-2 flex flex-col'>
            <label className='mt-3 mb-1'>Username</label>
                <input className='w-72 py-2 px-1 outline-none rounded-md' type="text" placeholder='Enter your username...'/>
                <label className='mt-3 mb-1'>Email</label>
                <input className='w-72 py-2 px-1 outline-none rounded-md' type="email" placeholder='Enter your email...'/>
                <label className='mt-3 mb-1'>Password</label>
                <input className='w-72 py-2 px-1 outline-none rounded-md' type="password" placeholder='Enter your password...'/>
                <button className='px-10 py-2 bg-orange-700 hover:bg-orange-600 my-2 rounded-md text-white'>Register</button>
            </form>
                <Link to="/login" className='px-10 py-2 bg-green-700 hover:bg-green-600 my-2 rounded-md text-white absolute right-2 top-16'>
                Login
                </Link>
        </div>
    );
}

export default Register;