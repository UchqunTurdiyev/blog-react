import React from 'react';

function Header(props) {
    return (
        <div className="mt-10 w-full">
            <div className="w-full flex flex-col items-center justify-center text-gray-800 font-['serif']">
                <span className='absolute top-[14%] text-md'>React && Node</span>
                <span className='absolute top-[16%] text-[100px]'>Blog</span>
            </div>
            <img className='w-full h-[450px] mt-16 object-cover' src="https://images.unsplash.com/photo-1671725501844-1e6d0081bf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    );
}

export default Header;