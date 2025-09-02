import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-700 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* <!-- Brand and Social --> */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-2">SHOP.CO</h2>
            <p className="text-sm mb-4">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="flex space-x-3">
              <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-black"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-black"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-black"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* <!-- Company --> */}
          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><>About</></li>
              <li><>Features</></li>
              <li><>Works</></li>
              <li><Link to={"/stock"}>Admin</Link></li>
            </ul>
          </div>

          {/* <!-- Help --> */}
          <div>
            <h3 className="font-semibold mb-3">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* <!-- FAQ --> */}
          <div>
            <h3 className="font-semibold mb-3">FAQ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div>
            <h3 className="font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        <div className="max-w-7xl mx-auto mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://riseandinspire.co.in/wp-content/uploads/2024/11/img_5971-1.jpg" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </div>

    </>

  )
}

export default Footer