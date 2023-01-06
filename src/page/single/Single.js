import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import SinglePost from '../../component/singlePost/SinglePost';

function Single(props) {
    return (
        <div className='flex'>
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;