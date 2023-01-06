import React from 'react';
import Header from '../component/header/Header';
import Posts from '../component/posts/Posts';
import Sidebar from '../component/sidebar/Sidebar';

function Home(props) {
    return (
        <>
            <Header />
            <div className='w-full flex justify-between'>
            <Posts />
            <Sidebar />
        </div>
        </>
    );
}

export default Home;