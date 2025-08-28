import React, { useContext, useEffect, useState } from 'react';
import storedata from '../utils/ContextApi';
import { Link } from 'react-router-dom';

const ItemData = () => {
    const [itemData, setItemData] = useState([])
    const { searchValue, addProduct } = useContext(storedata)
    useEffect(() => {
        const filterSearchProduct = addProduct.filter((item) => item.name.toLowerCase().includes(searchValue));
        setItemData(filterSearchProduct)
    }, [searchValue])

    return (
        <>
            <div className='mx-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        itemData.length ? itemData.map((item, index) =>
                            <Link to={`/iteminformetion/?id=${item.id}`}>

                                <div key={index} className="bg-white rounded-xl p-4 mt-20">
                                    <img src={item.image} className="mx-auto mb-4 h-56 object-contain" />
                                    <h3><span className='font-bold my-2'>Name: </span>{item.name}</h3>
                                    <h3><span className='font-bold'>Brand: </span>{item.brand}</h3>
                                    <h3><span className='font-bold my-2'>category: </span>{item.category}</h3>
                                    <h3><span className='font-bold my-2'>Size: </span>{item.sizes}</h3>
                                    <h3><span className='font-bold my-2'>Description: </span>{item.description}</h3>
                                    <div className='flex justify-between mt-5'>
                                        <p className="mt-2 font-bold text-lg"><i className="fa-solid fa-indian-rupee-sign mx-1"></i>{item.price}</p>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add To Cart</button>
                                    </div>
                                </div>
                            </Link>
                        ) : <>
                            <div className='  w-full  flex justify-center'>
                                <div className='w-96'>
                                    <img src="https://cdn.dribbble.com/userupload/42405840/file/original-852d6f73c84968175995781dcd056d89.gif" alt="" className='mt-20' />
                                </div>
                            </div>
                            <p className='text-4xl font-bold text-center my-3'>Product Is Not Avalibale</p>
                        </>
                    }
                </div>
            </div>

        </>
    )
}

export default ItemData