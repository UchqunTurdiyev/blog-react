import React from 'react';
import {BiEditAlt} from "react-icons/bi"
import {CiTrash} from "react-icons/ci"

function SinglePost(props) {
    return (
        <div className='w-9/12'>
            <div className="w-full ps-5 py-5">
                <img className='w-full object-cover rounded-md' src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <h1 className='text-3xl py-2 text-center'>Lorem, ipsum dolor.
                <div className="float-right flex">
                    <BiEditAlt className='text-[22px] cursor-pointer text-teal-700 hover:text-teal-900 ms-2' />
                    <CiTrash className='text-[22px] cursor-pointer text-red-700 hover:text-red-900 ms-2' />
                </div>
                </h1>
                <div className="mb-1 flex justify-between text-xl text-yellow-600">
                    <span>Author: <b>Uchqun</b></span>
                    <span className='text-sm'>1 hours ago</span>
                </div>
                <p className='first-letter:uppercase first-letter:text-3xl first-letter:pl-5 first-letter:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni deserunt tenetur aliquam nam, sed rerum amet fugiat explicabo, atque ut commodi quam dolores consequuntur illum. Quia rerum omnis quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni deserunt tenetur aliquam nam, sed rerum amet fugiat explicabo, atque ut commodi quam dolores consequuntur illum. Quia rerum omnis quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni deserunt tenetur aliquam nam, sed rerum amet fugiat explicabo, atque ut commodi quam dolores consequuntur illum. Quia rerum omnis quidem.
                </p>
            </div>
        </div>
    );
}

export default SinglePost;