import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';

function Write(props) {
    return (
        <div className='w-4/5 mx-auto py-4 relative'>
            <img className='w-full h-64 rounded-md object-cover' src="https://images.unsplash.com/photo-1672935347581-ad3363263d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="write img" />
            <form className="pt-10 ml-10">
                <div className="flex items-center">
                    <label htmlFor="fileInput">
                        <AiFillFileAdd className='text-2xl cursor-pointer' />
                    </label>
                    <input type="file" className='border-2 border-slate-600 outline-none' name="" id="fileInput" style={{display: 'none'}} />
                    <input className='text-xl px-3 py-2 border-2 rounded-sm border-slate-600 outline-none' type="title" placeholder='Title' autoFocus={true} />
                </div>
                <div className="">
                    <textarea className='px-3 py-2 border-2 rounded-sm border-slate-600 outline-none' type="text" placeholder='Tell your story...'></textarea>
                </div>
                <button className='bg-teal-600 px-4 py-2 text-white rounded-sm absolute top-15 right-12'>Publish</button>
            </form>
        </div>
    );
}

export default Write;