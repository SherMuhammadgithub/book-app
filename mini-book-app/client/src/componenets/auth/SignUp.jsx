import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { FloatingLabel } from 'flowbite-react';


function SignUp() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/user/signup", {
                email, password
            })
                .then(res => {
                    if (!res.data) { // user alreday exists
                        alert("User already exists")
                    }
                    else {
                        alert("Signup Successful")
                        history("/login")
                    }
                })
        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        // <div className="SignUp">

        //     <h1>Signup</h1>

        //     <form action="POST" onSubmit={submit}>
        //         <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
        //         <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        //         <input type="submit" />
        //     </form>

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/login">Login Page</Link>

        // </div>


        <div className="bg-white py-6 sm:py-8 lg:py-12 my-24">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-red-800 md:mb-8 lg:text-3xl font-[Lobster]">Sign Up</h2>

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

                        <button className="block rounded-lg bg-red-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-red-600 md:text-base">Sign Up</button>



                    </div>

                    <div className="flex items-center justify-center bg-red-100 p-4">
                        <p className="text-center text-sm text-red-500">Back to <Link to="/login" className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Login??</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp