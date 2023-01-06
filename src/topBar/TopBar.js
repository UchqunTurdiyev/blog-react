import React from 'react';

function TopBar(props) {
    return (
        <div className='w-full h-12 bg-blue-500 sticky t-0 flex items-center'>
            {/* Top Left */}
            <div className="w-full flex-3">l</div>
            {/* Top Center */}
            <div className="w-full flex-6 bg-tomato-600">C</div>

            {/* Top Right  */}
            <div className="w-full flex-3">R</div>

        </div>
    );
}

export default TopBar;