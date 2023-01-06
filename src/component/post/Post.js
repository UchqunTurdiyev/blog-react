import React from 'react';

function Post(props) {
    return (
        <div className='w-96 mx-5 my-4'>
            <img className='w-full h-72 object-cover rounded-md' src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Post img" />
            <div className="">
                <div className="text-gray-400 cursor-pointer my-2">
                    <span className='mx-1'>Music</span>
                    <span className='mx-1'>Life</span>
                </div>
                <span className='text-xl '>
                    Lorem, ipsum dolor sit amet 
                    </span>
                <hr className='my-2'/>
                <span className='italic text-gray-500'>1 ours age</span>
                <p className='text-md text-gray-600 text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minus et cumque necessitatibus ipsum vel voluptatibus expedita! Blanditiis eos, sit veritatis dolores fugiat eum repellat? Blanditiis quas est debitis dolorum.</p>
            </div>
        </div>
    );
}

export default Post;