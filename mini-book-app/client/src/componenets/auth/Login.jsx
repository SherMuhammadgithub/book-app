import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../user/UserContext';
import { FloatingLabel } from 'flowbite-react';

function Login() {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_URL}/user/signin`, {
                email,
                password,
            });

            if (res.data) {
                alert('Login Successful');
                const userObject = { id: email };
                setUser(userObject); // Update user context with the new userObject
                if (email === process.env.REACT_APP_ADMIN) {
                    navigate('/admin/Books', { state: { id: email } });
                    window.location.reload();
                } else {
                    navigate('/', { state: { id: email } }); // Use navigate as a function

                }
            } else {
                alert('Incorrect details');
                setEmail('');
                setPassword('');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12 my-24">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-red-800 md:mb-8 lg:text-3xl font-[Lobster]">Login</h2>

                <form className="mx-auto max-w-lg rounded-lg border" onSubmit={submit}>
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <FloatingLabel variant="filled" label="Email" color="error" type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </div>

                        <div>
                            <FloatingLabel variant="filled" label="Password" color="error"
                                value={password}
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </div>

                        <button className="block rounded-lg bg-red-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-red-600 md:text-base">Log in</button>



                    </div>

                    <div className="flex items-center justify-center bg-red-100 p-4">
                        <p className="text-center text-sm text-red-500">Don't have an account? <Link to="/signup" className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Sign Up</Link></p>
                    </div>
                </form>
            </div>


        </div>


    );
}

export default Login;
