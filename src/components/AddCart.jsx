import React, { useContext, useEffect, useState } from 'react'
import storedata from '../utils/ContextApi'
import { Link, useNavigate } from 'react-router-dom'

const AddCart = () => {
    const { addToCartNotification, setAddToCartNotification, currentUser, cart, setCart } = useContext(storedata)

    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (!currentUser) {
    //         setTimeout(() => {
    //             alert("Please Login")
    //         }, 1000);
    //         navigate("/signin")
    //         return;
    //     }
    // }, [])

    const increement = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                const PriceQuantity = { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price };
                return PriceQuantity

            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decrement = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > 1) {
                const decrementQuantity = { ...item, quantity: item.quantity - 1 , totalPrice: (item.quantity - 1) * item.price};
                return decrementQuantity;
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(localStorageData)
    }, [])
    const handelDeletbBtn = (id) => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cartData.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        localStorage.setItem("notification", JSON.stringify(updatedCart.length))
        const notice = JSON.parse(localStorage.getItem("notification"))
        setAddToCartNotification(notice)

    };


    return (
        <>
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md grid lg:grid-cols-3 gap-6 p-6">
                {/* Left Section: Shopping Cart */}
                <div className="lg:col-span-2 space-y-6 mt-20">
                    <h2 className="text-3xl font-bold">
                        Shopping Cart{" "}
                        <span className="text-gray-500 text-lg font-normal">{addToCartNotification}
                            items</span>
                    </h2>
                    {/* Item */}
                    {
                        cart.map((item) => <div key={item.id} className="grid grid-cols-6 items-center gap-4 border-b pb-4">
                            <Link to={`/ItemInformetion/?id=${item.id}`}>  <img
                                src={item.image}
                                alt="T-shirt"
                                className="w-16 h-16 object-cover rounded-md col-span-1"
                            />
                            </Link>
                            <div className="col-span-1 text-right flex">
                                <button className='px-2  bg-gray-300'
                                    onClick={() => decrement(item.id)}
                                >-</button>
                                <p>{item.quantity}</p>
                                <button className='px-2  bg-gray-300' onClick={() => increement(item.id)}>+</button>
                            </div>
                            <div className="col-span-1 text-right">
                                <p className="font-semibold"><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}</p>
                                <i className="fa-solid fa-trash cursor-pointer"
                                    onClick={() => handelDeletbBtn(item.id)}
                                ></i>
                            </div>
                            <div className="col-span-1 text-right">
                                <p className='font-bold'>Total Price</p>
                                <p className="font-semibold"><i class="fa-solid fa-indian-rupee-sign"></i> {
                                    !item.totalPrice ? item.price : item.totalPrice
                                }</p>

                            </div>
                        </div>
                        )
                    }


                    {/* Back to shop */}
                    <div>
                        <Link to={"E"}
                            className="text-sm text-gray-600 hover:text-black inline-flex items-center"
                        >
                            <Link to={"/"}>← Back to shop</Link>
                        </Link>
                    </div>
                </div>
                {/* Right Section: Summary */}
                {/* <div className="bg-gray-50 p-6 rounded-md shadow-sm space-y-6">
                    <h3 className="text-2xl font-bold mb-4">Summary</h3>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">ITEMS 3</span>
                        <span className="font-semibold">€ 132.00</span>
                    </div>
                    <div>
                        <label className="text-sm font-semibold block mb-1">SHIPPING</label>
                        <select className="w-full border rounded px-2 py-2">
                            <option>Standard-Delivery- €5.00</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold block mb-1">GIVE CODE</label>
                        <input
                            type="text"
                            placeholder="Enter your code"
                            className="w-full border rounded px-2 py-2"
                        />
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-semibold">
                        <span>TOTAL PRICE</span>
                        <span>€ 137.00</span>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                        REGISTER
                    </button>
                </div>  */}
            </div>
        </>
    )
}

export default AddCart