import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"

function Sidebar(props) {
    return (
        <div className='w-3/12 bg-[#fdfbfb] m-2 rounded-sm flex flex-col items-center'>
            <div className="flex flex-col items-center w-4/5 mx-auto">
                <div className="text-center text-sm m-2 py-1 w-full border-y-2 border-[#a7a4a4]">ABOUT ME</div>
                <img className='w-full object-cover my-2' src="https://images.unsplash.com/photo-1671726203394-3fb856bdd8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="sidebar img" />
                <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit id omnis, aperiam veritatis accusamus ratione. Unde explicabo nesciunt consequuntur aliquam quae, in vitae harum dolorum molestias omnis soluta culpa.</p>
            </div>
            <div className="w-4/5 mx-auto">
                <div className="text-center text-sm m-2 py-1 w-full border-y-2 border-[#a7a4a4]">CATEGORY</div>
                <ul className='py-3'>
                    <li className='mb-2 inline-block w-2/4'>Life</li>
                    <li className='mb-2 inline-block w-2/4'>Music</li>
                    <li className='mb-2 inline-block w-2/4'>Style</li>
                    <li className='mb-2 inline-block w-2/4'>Sport</li>
                    <li className='mb-2 inline-block w-2/4'>Tech</li>
                    <li className='mb-2 inline-block w-2/4'>Cinema</li>
                </ul>
            </div>
            <div className="w-4/5 mx-auto">
            <div className="text-center text-sm m-2 py-1 w-full border-y-2 border-[#a7a4a4]">FOLLOW US</div>
              <div className="flex items-center justify-center my-4 text-center">
              <AiFillFacebook className='text-xl text-slate-800 ms-3 cursor-pointer text-md' />
                <AiFillTwitterSquare className='text-xl text-slate-800 ms-3 cursor-pointer text-md' />
                <BsPinterest className='text-xl text-slate-800 ms-3 cursor-pointer text-md' />
                <AiFillInstagram className='text-xl text-slate-800 ms-3 cursor-pointer text-md' />
              </div>

            </div>
        </div>
    );
}

export default Sidebar;