import React from 'react'

import Sidebars from './Sidebar'

export default function Layout({ children }) {
    return (
        <section>
            <div className=" min-h-screen flex">
                <div className='w-[20%]'>
                <Sidebars />
                </div>
                <div className="bg-white flex-grow rounded-lg p-4 mt-2 mr-2 mb-2 w-[80%]">
                    {children}
                </div>
            </div>
        </section>
    )
}
