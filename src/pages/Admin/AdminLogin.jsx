import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigete = useNavigate()



    const handelLogin = async () => {
        if (!email && !password) {
            alert("All Field Is Required")
            return;
        }

        try {
            const res = await axios.post("https://shop-com-twnt.onrender.com/api/admin-signin", {
                email: email.toLowerCase(),
                password
            })
            alert(res?.data?.message)
            sessionStorage.setItem("sign-in", JSON.stringify(res?.data?.adminData))
            navigete("/stock")
        } catch (error) {
            alert(error?.res?.data?.message || "somthing won't errror")
        }
    }
    return (
        <>

            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md bg-[#1f2a38] rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl text-white text-center font-bold mb-6">
                        Admin Login
                    </h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <button
                            className="w-full bg-green-500 hover:bg-green-600 transition text-white py-2 rounded-lg font-semibold"
                            onClick={handelLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLogin