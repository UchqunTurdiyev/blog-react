import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineSearch} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"

function TopBar(props) {
    return (
        <div className='w-full h-16 sticky top-0 flex items-center bg-slate-100 z-10'>
            {/* Top Left */}
            <div className="w-full flex-3 flex items-center justify-center">
                <AiFillFacebook className='text-xl text-slate-800 me-2' />
                <AiFillTwitterSquare className='text-xl text-slate-800 me-2' />
                <BsPinterest className='text-xl text-slate-800 me-2' />
                <AiFillInstagram className='text-xl text-slate-800 me-2' />
            </div>
            {/* Top Center */}
            <div className="w-full flex-6">
                <ul className='flex items-center justify-center'>
                    <li className="text-md text-slate-700 me-4 cursor-pointer hover:text-slate-600">HOME</li>
                    <li className="text-md text-slate-700 me-4 cursor-pointer hover:text-slate-600">ABOUT</li>
                    <li className="text-md text-slate-700 me-4 cursor-pointer hover:text-slate-600">CONTACT</li>
                    <li className="text-md text-slate-700 me-4 cursor-pointer hover:text-slate-600">WRITE</li>
                    <li className="text-md text-slate-700 me-4 cursor-pointer hover:text-slate-600">LOGOUT</li>
                </ul>
            </div>

            {/* Top Right  */}
            <div className="w-full flex-3 flex items-center justify-center">
                <img className='w-12 h-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1672930127425-8c2b31153413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Error img" />
                <AiOutlineSearch className="cursor-pointer text-xl ms-2 text-slate-700" />
            </div>

        </div>
    );
}

export default TopBar;