import React from 'react'

import { Footer } from 'flowbite-react';
export default function Footers() {
    return (
        <div className='text-center bg-white p-4 border-t border-gray-100 shadow-2xl'>
            <Footer.Copyright href="#" by="LibertyBooks™" year={2024} />
        </div>
    )
}
