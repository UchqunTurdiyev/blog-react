import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import {FaRegUserCircle} from "react-icons/fa"

function Settings(props) {
    return (
        <div className='flex ps-4'>
            <div className="w-9/12">
                <div className="flex items-center justify-between py-4">
                    <span className='text-2xl text-red-500 cursor-pointer'>Udate Your Account</span>
                    <span className='text-red-500 cursor-pointer'>Delete Account</span>
                </div>
                <form action="flex flex-col">
                    <label htmlFor="">Profile Picture</label>
                    <div className="flex items-center my-2">
                        <img className='w-16 h-16 rounded-lg object-cover ' src="https://images.unsplash.com/photo-1673024697368-947323b88951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <label htmlFor="fileInput" className='w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white ms-2 cursor-pointer'>
                            <FaRegUserCircle />
                        </label>
                        <input type="file" name="" id="fileInput" style={{display: "none"}} />
                    </div>
                      <div className="flex flex-col">
                      <label className='mt-4 text-md'>Username</label>
                        <input type="text" className='text-md m-2 text-gray-500 outline-none border-b py-2 px-1 text-lg border-slate-200 hover:border-slate-400' placeholder='Example' />
                        <label className='mt-4 text-md'>Email</label>
                        <input type="email" className='text-md m-2 text-gray-500 outline-none border-b py-2 px-1 text-lg border-slate-200 hover:border-slate-400' placeholder='example@gmail.com' />
                        <label className='mt-4 text-md'>Password</label>
                        <input type="password" className='text-md m-2 text-gray-500 outline-none border-b py-2 px-1 text-lg border-slate-200 hover:border-slate-400' placeholder='12345' />
                        <button className='w-36 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded mx-auto mt-4'>Update</button>
                      </div>
                </form>
            </div>
                <Sidebar /> 
        </div>
    );
}

export default Settings;