import React, { useContext, useEffect, useState } from 'react'
import storedata from '../utils/ContextApi'
import { Link, useNavigate } from 'react-router-dom'

const AddCart = () => {
    const { addToCartNotification, setAddToCartNotification, currentUser, cart, setCart } = useContext(storedata)

    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser) {
            setTimeout(() => {
                alert("Please Login")
            }, 1000);
            navigate("/signin")
            return;
        }
    }, [])

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
                const decrementQuantity = { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price };
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
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md grid lg:grid-cols-3 gap-6 p-4 sm:p-6">
                <div className="lg:col-span-2 space-y-6 mt-10 sm:mt-20">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Shopping Cart{" "}
                        <span className="text-gray-500 text-base sm:text-lg font-normal">
                            {addToCartNotification} items
                        </span>
                    </h2>

                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-2 sm:grid-cols-6 items-center gap-4 border-b pb-4"
                        >
                            <Link to={`/ItemInformetion/?id=${item.id}`} className="col-span-1">
                                <img
                                    src={item.image}
                                    alt="product"
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                                />
                            </Link>

                            <div className="col-span-1 flex items-center justify-start sm:justify-end gap-2">
                                <button
                                    className="px-2 py-1 bg-gray-300 rounded"
                                    onClick={() => decrement(item.id)}
                                >
                                    -
                                </button>
                                <p className="min-w-[20px] text-center">{item.quantity}</p>
                                <button
                                    className="px-2 py-1 bg-gray-300 rounded"
                                    onClick={() => increement(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            <div className="col-span-1 text-left sm:text-right">
                                <p className="font-semibold">
                                    <i className="fa-solid fa-indian-rupee-sign"></i> {item.price}
                                </p>
                                <i
                                    className="fa-solid fa-trash cursor-pointer text-red-500 mt-2 sm:mt-0"
                                    onClick={() => handelDeletbBtn(item.id)}
                                ></i>
                            </div>

                            <div className="col-span-1 text-left sm:text-right">
                                <p className="font-bold">Total</p>
                                <p className="font-semibold">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                    {!item.totalPrice ? item.price : item.totalPrice}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div>
                        <Link
                            to="/"
                            className="text-sm text-gray-600 hover:text-black inline-flex items-center"
                        >
                            ← Back to shop
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AddCart