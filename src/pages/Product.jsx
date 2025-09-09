import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import storedata from '../utils/ContextApi'
const Product = () => {
    const [clothProduct, setClothProduct] = useState([])
    const [womenCategory] = useState("Women")
    const [menCategory] = useState("Men")
    const [kidsCategory] = useState("Kids")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState(0)
    const { addProduct } = useContext(storedata)

    useEffect(() => {
        setClothProduct(addProduct)
    }, [addProduct])

    const AllCategoryCloth = () => {
        setClothProduct(addProduct)
    }
    const ChooseWomenCloth = () => {
        if (womenCategory) {
            const womenCloth = addProduct.filter((item) => item.category == womenCategory)
            setClothProduct(womenCloth)
        }
    }
    const ChooseMenCloth = () => {
        if (menCategory) {
            const menCloth = addProduct.filter((item) => item.category == menCategory)
            setClothProduct(menCloth)
        }
    }
    const ChooseKidsCloth = () => {
        if (kidsCategory) {
            const kidsCloth = addProduct.filter((item) => item.category == kidsCategory)
            setClothProduct(kidsCloth)
        }
    }
    const hanSelectBtn = () => {
        if (price && !brand) {
            const selectPrice = addProduct.filter((item) => item.price <= price)
            setClothProduct(selectPrice)
        }
        if (!price && brand) {
            const selectBrand = addProduct.filter((item) => item.brand == brand)
            setClothProduct(selectBrand)
        }
        if (price && brand) {
            const selectPriceBrand = addProduct.filter((item) => item.brand == brand && item.price <= price)
            setClothProduct(selectPriceBrand)
        }
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="w-full lg:w-96">
                    <div className="max-w-full lg:max-w-xs w-full p-4 bg-white shadow rounded-md grid gap-6">
                        {/* Category */}
                        <div className="grid gap-2 mt-10 lg:mt-20 ml-2 lg:ml-5">
                            <h2 className="font-semibold text-lg">Category</h2>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p className="cursor-pointer hover:text-black" onClick={AllCategoryCloth}>{"<"} All categories</p>
                                <p className="cursor-pointer hover:text-black pl-4">{"<"} Cloth</p>
                                <div className="cursor-pointer hover:text-black pl-8" onClick={ChooseWomenCloth}>
                                    {"<"} Women's Cloth
                                </div>
                                <div className="cursor-pointer hover:text-black pl-8" onClick={ChooseMenCloth}>
                                    {"<"} Men's Cloth
                                </div>
                                <div className="cursor-pointer hover:text-black pl-8" onClick={ChooseKidsCloth}>
                                    {"<"} Kids
                                </div>
                            </div>
                        </div>

                        {/* Price & Brand */}
                        <div className="grid gap-2">
                            <h2 className="font-semibold text-lg">Select Price</h2>
                            <p><i className="fa-solid fa-indian-rupee-sign mx-1"></i>{price}</p>
                            <input
                                type="range"
                                min={399}
                                max={3000}
                                className="w-full accent-red-500"
                                onChange={(e) => setPrice(e.target.value)}
                            />

                            <div className="grid gap-2">
                                <h2 className="font-semibold text-lg">Select Brand</h2>
                                <select className='border' value={brand} onChange={(e) => setBrand(e.target.value)}>
                                    <option value="">Select</option>
                                    {
                                        addProduct.map((item, index) => <option key={index}>{item.brand}</option>)
                                    }
                                </select>

                            </div>
                            <button className='bg-blue-500 text-white py-2 rounded' onClick={hanSelectBtn}>Search</button>
                        </div>
                    </div>
                </div>

                {/* addProduct */}
                <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-10 mt-10 lg:mt-20 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            clothProduct.length === 0 ? <div><div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                                    loading...
                                </div>
                            </div></div> : clothProduct.map((item, index) =>
                                <Link to={`/iteminformetion/?id=${item.id}`} key={index}>
                                    <div className="bg-white rounded-xl p-4 shadow-xl h-full flex flex-col justify-between">
                                        <img src={item.image} className="mx-auto mb-4 h-56 object-contain" />
                                        <div>
                                            <h3><span className='font-bold my-2'>Name: </span>{item.name}</h3>
                                            <h3><span className='font-bold'>Brand: </span>{item.brand}</h3>
                                            <h3><span className='font-bold my-2'>Category: </span>{item.category}</h3>
                                            <h3><span className='font-bold my-2'>Size: </span>{item.sizes}</h3>
                                            <h3><span className='font-bold my-2'>Description: </span>{item.description}</h3>
                                        </div>
                                        <div className='flex justify-between items-center mt-4'>
                                            <p className="font-bold text-lg"><i className="fa-solid fa-indian-rupee-sign mx-1"></i>{item.price}</p>
                                            <button
                                                type="button"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product