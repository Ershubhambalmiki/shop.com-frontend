import React, { useContext, useEffect } from 'react'
import storedata from '../utils/ContextApi'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const { currentUser, buy, setBuy } = useContext(storedata)

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
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="flex justify-between items-center mt-20">
          <h2 className="text-lg sm:text-xl font-semibold">#012345/10</h2>
          <button className="text-gray-400 hover:text-black text-xl">✕</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-gray-400">Created at</p>
            <p>April 23, 2023 at 9:48 pm</p>
          </div>
          <div>
            <p className="text-gray-400">Payment</p>
            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold">
              Paid
            </span>
          </div>
          <div>
            <p className="text-gray-400">Status</p>
            <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded text-xs font-semibold">
              In progress
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="font-medium text-lg mb-2">Customer</p>
          <p className="font-semibold">Dunder Mufflin LTD.</p>
          <p className="text-blue-500">hello@dundermufflin.com</p>
          <p className="text-gray-700">(724) 234-848-9434</p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="font-medium text-lg mb-4">Timeline</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 mt-1"></div>
              <div>
                <p className="font-medium">The packing has been started</p>
                <p className="text-sm text-gray-500">
                  Confirmed by Tommy Smith - Feb 16, 2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
              <div>
                <p className="font-medium">The Invoice has been sent to the customer</p>
                <p className="text-sm text-gray-500">
                  Sent to{" "}
                  <span className="text-blue-500">hello@dundermufflin.com</span> - Feb
                  16, 2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
              <div>
                <p className="font-medium">The Invoice has been created</p>
                <p className="text-sm text-gray-500">
                  Created by Tommy Smith - Feb 16, 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-6">
          <p className="font-medium text-lg">Products</p>
          {buy.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt="product"
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex-1 space-y-1">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">Brand: {item.brand}</p>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="font-semibold text-gray-900">₹ {item.price}</p>
              </div>

              <div className="sm:ml-auto">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => handelCancelBtn(item.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>

  )
}

export default Orders