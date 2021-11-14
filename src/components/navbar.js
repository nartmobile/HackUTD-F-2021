import React from 'react';

export function NavBar() {
    return (
        <div className="sticky top-0 flex justify-center border-b-2 h-16 items-center bg-blue-500 border-blue-700">
            <div>
                <a className="px-3 py-1 font-open-sans text-3xl mx-16 text-white hover:bg-blue-600" href="/">Home</a>
            </div>
            <div>
                <a className="px-3 py-1 font-open-sans text-3xl mx-16 text-white hover:bg-blue-600" href="/about">About</a>
            </div>
        </div>
    );
}

export default NavBar;