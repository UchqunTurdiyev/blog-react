import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';

function Write(props) {
    return (
        <div>
            <form className="pt-10 ml-10">
                <div className="flex items-center">
                    <label htmlFor="fileInput">
                        <AiFillFileAdd className='text-2xl cursor-pointer' />
                    </label>
                    <input type="file" className='border-2' name="" id="fileInput" style={{display: 'none'}} />
                    <input className='text-xl px-3 py-2' type="title" placeholder='Title' autoFocus={true} />
                </div>
                <div className="">
                    <textarea className='px-3 py-2' type="text" placeholder='Tell your story...'></textarea>
                </div>
                <button className='bg-teal-600 px-4 py-2 text-white rounded-sm absolute top-15 right-12'>Publish</button>
            </form>
        </div>
    );
}

export default Write;