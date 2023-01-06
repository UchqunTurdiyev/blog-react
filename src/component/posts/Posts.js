import React from 'react';
import Post from '../post/Post';

function Posts(props) {
    return (
        <div className='flex flex-wrap w-9/12'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;