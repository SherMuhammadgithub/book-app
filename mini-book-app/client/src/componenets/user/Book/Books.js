import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const URL = 'http://localhost:5000/books'
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}
export default function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
  
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="my-10 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl font-[Lobster]" style={{letterSpacing:"4px"}}>Books-Collection</h2>
          </div>

          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 my-4">

            {books && books.length > 0 ? (
              books.map((book, i) => (

                <div key={i}>
                  <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                    <img src={book.image} loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                  </a>

                  <div>
                    <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{book.name}</a>

                    <div className="flex items-end gap-2">
                      <span className="font-bold text-gray-800 lg:text-lg">${book.price}</span>
                      <Link to={`/detail/${book._id}`} className="ml-auto bg-red-600 text-white px-4 py-2 rounded-md">Read More</Link>
                    </div>
                  </div>
                </div>
              ))
            )
              : (
                <div>No Books 🙂</div>
              )}

            {/* <!-- product - start --> */}

            {/* <!-- product - end --> */}
          </div>
        </div>
      </div>
  )
}
