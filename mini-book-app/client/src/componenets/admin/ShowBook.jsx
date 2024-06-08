import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from './Layout';

const URL = 'http://localhost:5000/books';

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

export default function ShowBook() {
    const location = useLocation();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    }, [location]);

    const deleteHandler = async (bookId) => {
        try {
            await axios.delete(`http://localhost:5000/books/${bookId}`);
            // Update the state to remove the deleted book
            setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <>
            <Layout>
                <section className="table  w-full my-16">
                    <table className='w3-table-all w3-hoverable'>
                        <thead>
                            <tr className='w3-light-grey'>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {books && books.map((book) => (
                                <tr key={book._id}>
                                    <td><div className='flex items-center space-x-2'><img src={book.image} className='w-10 h-10 rounded-full' alt="" />
                                        <h1>{book.name} </h1>
                                    </div></td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>
                                        <button onClick={() => deleteHandler(book._id)}>Delete</button>
                                        <Link to={`/admin/Books/${book._id}`}> <button >/Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </Layout>
        </>
    );
}
