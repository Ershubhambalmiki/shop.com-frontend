import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ShowError from '../components/ShowError';
import storedata from '../utils/ContextApi';

const SignIn = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { setCurrentUser } = useContext(storedata)

    const handleSigingBtn = async () => {
        if (!userEmail.trim() || !userPassword.trim()) {
            setError("Email or Password cannot be empty!")
            return;
        }
        try {
            const res = await axios.post("http://localhost:5000/api/signin", {
                email: userEmail.trim().toLowerCase(),
                password: userPassword.trim()
            })
            sessionStorage.setItem("user", JSON.stringify(res?.data?.result))
            setCurrentUser(JSON.parse(sessionStorage.getItem("user")))
            setSuccess(res?.data?.message);
            setUserEmail("");
            setUserPassword("");
        } catch (error) {
            if (error?.response?.data?.message) {
                setError(error?.response?.data?.message)
            }
            else {
                setError(`Somthing to want ${error}`)
            }
        }

    }

    return (
        <>
            <div className=' mx-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mb-5">
                    {/* Left Section with Image */}
                    <div className="flex items-center justify-center bg-blue-50 p-4 mt-20">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3BwaW5nfGVufDB8fDB8fHww"
                            alt="Shopping"
                            className="max-w-full h-auto rounded"
                        />
                    </div>
                    {/* Right Section with Form */}
                    <div className="flex items-center justify-center p-6 lg:mt-20">
                        <div className="w-full max-w-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                                Sign in
                            </h2>
                            <from className="space-y-4">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={userEmail}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />


                                <input
                                    type="password"
                                    placeholder=" Password"
                                    value={userPassword}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />


                                <button
                                    type="submit"
                                    className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-3 font-medium"
                                    onClick={handleSigingBtn}
                                >
                                    Sign in
                                </button>
                            </from>
                            <div className="my-4 flex items-center">
                                <hr className="flex-grow border-gray-300" />
                                <span className="px-2 text-gray-400 text-sm">or</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-6">
                                don't  you have account?
                                <Link to={"/signup"} className="text-black font-medium">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <ShowError error={error} success={success} setError={setError} setSuccess={setSuccess} />
            </div>

        </>
    )
}

export default SignIn
