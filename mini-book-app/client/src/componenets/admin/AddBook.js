import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Layout from './Layout';

import { FloatingLabel } from 'flowbite-react';

export default function AddBook() {
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        name: "",
        description: "",
        price: "",
        author: "",
        available: "no",
        image: ""
    });
    const handleCahnge = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
        sendRequest().then(() => history('/admin/Books'))

    }
    const sendRequest = async () => {
        await axios.post("http://localhost:5000/books", {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            image: String(inputs.image),
            price: Number(inputs.price),
            available: String(inputs.available)
        }).then(res => res.data);
    }
    return (
        <Layout>
            <div  className="bg-white py-6 sm:py-8 lg:py-12">
                <div  className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* <!-- text - start --> */}
                    <div>
                        <h2  className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl font-[Lobster]">Add Book</h2>
                    </div>
                    {/* <!-- text - end --> */}

                    {/* <!-- form - start --> */}
                    <form onSubmit={handleSubmit} action="post"  className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 p-4">
                        <div>
                            <FloatingLabel variant="standard" label="Name" color="error"
                                required
                                type="text"
                                value={inputs.name}
                                onChange={handleCahnge}
                                name='name'
                                className='p-3 w-full' />
                        </div>

                        <div>
                            <FloatingLabel variant="standard" label="Author" color="error"
                                required
                                value={inputs.author}
                                onChange={handleCahnge}
                                type="text"
                                name='author'

                                className='p-3 w-full' />
                        </div>

                        <div  className="sm:col-span-2">
                            <FloatingLabel variant="standard" label="Price" color="error" type='number'
                                required
                                value={inputs.price}
                                onChange={handleCahnge}
                                name='price'

                                className='p-3 w-full' />
                        </div>

                        <div  className="sm:col-span-2">
                            <FloatingLabel variant="standard" label="Image" color="error"
                                required
                                value={inputs.image}
                                onChange={handleCahnge}
                                type="text"
                                name='image'

                                className='p-3 w-full' />
                        </div>

                        <div  className="sm:col-span-2">
                            <FloatingLabel variant="standard" label="Availabe" color="error"
                                required
                                value={inputs.available}
                                onChange={handleCahnge}
                                type="text"
                                name='available'

                                className='p-3 w-full'
                            />
                        </div>

                        <div  className="sm:col-span-2">
                            <label for="message"  className="mb-2 inline-block text-sm text-red-500 sm:text-base">Description</label>
                            <textarea  className="h-64 w-full rounded  bg-red-100 px-3 py-2 text-gray-800 o ring-red-300 transition duration-100 focus:ring"
                                required
                                value={inputs.description}
                                onChange={handleCahnge}
                                type="text"
                                name='description'
>
                            </textarea>
                        </div>

                        <div  className="flex items-center justify-between sm:col-span-2">
                            <button  className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
