import React, { useEffect, useState } from 'react'
import storedata from "../utils/ContextApi";
import axios from 'axios';

const AppProductContext = ({ children }) => {
    const [addProduct, setAddProduct] = useState([])
    const [searchValue, setSearchValue] = useState(null)
    const [cart, setCart] = useState([])
    const [buy, setBuy] = useState([])
    const [addToCartNotification, setAddToCartNotification] = useState(0)
    const [size, setSize] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [currentUser, setCurrentUser] = useState(null)
    console.log(currentUser, "cart user login data ");

    useEffect(() => {
        getAllProduct()
    }, [])

    const getAllProduct = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/get-products")
            setAddProduct(res?.data?.getAllProduct)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <storedata.Provider value={{ searchValue, setSearchValue, cart, setCart, addToCartNotification, setAddToCartNotification, buy, setBuy, size, setSize, currentUser, setCurrentUser, addProduct, setAddProduct, quantity, setQuantity }}>
            {children}
        </storedata.Provider>
    )
}

export default AppProductContext;