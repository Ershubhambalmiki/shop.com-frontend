import React, { useContext, useEffect } from 'react'
import storedata from '../utils/ContextApi'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const { currentUser, buy, setBuy } = useContext(storedata)

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!currentUser) {
  //     alert("Please Login")
  //     navigate("/signin")
  //     return;
  //   }
  // }, [])

  useEffect(() => {
    const localStorageorderData = JSON.parse(localStorage.getItem("order")) || [];
    setBuy(localStorageorderData)
  }, [])

  const handelCancelBtn = (id) => {
    const localStorageOrderData = JSON.parse(localStorage.getItem("order")) || [];
    const cancelOrder = localStorageOrderData.filter(item => item.id !== id)
    localStorage.setItem("order", JSON.stringify(cancelOrder))
    setBuy(cancelOrder)
  }
  return (

    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Order Details</title>
      <div className="max-w-3xl mx-auto  bg-gray-200 rounded-xl shadow-xl p-6 grid gap-6 mb-2">
        {/* Header */}
        <div className="flex justify-between items-center mt-20">
          <h2 className="text-xl font-semibold">#012345/10</h2>
          <button className="text-gray-400 hover:text-black">✕</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Created at</p>
            <p>April 23, 2023 at 9:48 pm</p>
          </div>
          <div>
            <p className="text-gray-400">Payment</p>
            <span className="inline-block bg-green-500 text-black px-2 py-0.5 rounded text-xs font-semibold">
              Paid
            </span>
          </div>
          <div>
            <p className="text-gray-400">Status</p>
            <span className="inline-block bg-yellow-500 text-black px-2 py-0.5 rounded text-xs font-semibold">
              In progress
            </span>
          </div>
        </div>
        {/* Customer Info */}
        <div className="border-t border-gray-600 pt-4">
          <p className="font-medium">Customer</p>
          <p>Dunder Mufflin LTD.</p>
          <p className="text-blue-400">hello@dundermufflin.com</p>
          <p>(724) 234-848-9434</p>
        </div>
        {/* Timeline */}
        <div className="border-t border-gray-600 pt-4 grid gap-4">
          <p className="font-medium">Timeline</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-white mt-1" />
              <div>
                <p>The packing has been started</p>
                <p className="text-sm text-gray-400">
                  Confirmed by Tommy Smith - Feb 16, 2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-1" />
              <div>
                <p>The Invoice has been sent to the customer</p>
                <p className="text-sm text-gray-400">
                  Sent to{" "}
                  <span className="text-blue-400">hello@dundermufflin.com</span> -
                  Feb 16, 2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-1" />
              <div>
                <p>The Invoice has been created</p>
                <p className="text-sm text-gray-400">
                  Created by Tommy Smith - Feb 16, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Items List */}
        {
          buy.map((item) =>
            <div key={item.id} className='grid grid-cols-1'>
              <div className='flex justify-center '>
                <button className='px-5  p-2 bg-red-500 text-white  rounded-lg'
                  onClick={() => handelCancelBtn(item.id)}
                >Order Cancel</button>
              </div>
              <div>
                <img
                  src={item.image}
                  alt="T-shirt"
                  className="w-16 h-16 object-cover rounded-md col-span-1"
                />

                <span className='text-gray-700 text-bold'>Product Name</span>
                <p className=" font-semibold">{item.name}</p>
                <span className='text-gray-700 text-bold'>Brand</span>
                <p className="font-semibold">{item.brand}</p>
                <span className=' text-gray-700 text-bold'>Size</span>
                <p className='font-semibold'>{item.size}</p>
                <p className='text-gray-700 text-bold'>quntity</p>
                <p className='font-semibold'>{item.quantity}</p>
                <div>
                  <p className='text-gray-700 text-bold'>Price</p>
                  <p className='font-semibold'>{item.price}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>

  )
}

export default Orders