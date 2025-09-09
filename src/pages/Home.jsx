import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import storedata from '../utils/ContextApi';


const Home = () => {
  const { addProduct } = useContext(storedata)
  const product = addProduct
  const clothItemtn = 4
  const [visibleItem, setVisibleItem] = useState(4);

  const viewItemBtn = () => {
    setVisibleItem(previous => previous + 4)
  }
  const displyaItem = product.slice(0, visibleItem)

  return (
    <>

      <div className="bg-[#f6f6f6] font-sans text-gray-800 " >
        {/* <!-- Hero Section --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24 py-12 items-center ">

          {/* <!-- Left Content --> */}
          <div className="space-y-6 text-center lg:text-left mt-3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link to={"/product"} className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Shop Now
            </Link>

            {/* <!-- Stats --> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h2 className="text-xl font-bold text-black">300+</h2>
                <p className="text-sm text-gray-600">International Brands</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-black">2000+</h2>
                <p className="text-sm text-gray-600">High-Quality addProduct</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-black">30,000+</h2>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* <!-- Right Image --> */}
          <div className="relative flex justify-center lg:mt-5">
            <img src="https://i.pinimg.com/736x/dc/3a/73/dc3a739aa8adf9ce3742257ec008bdd9.jpg" alt="Fashion Models"
              // className="w-full max-w-md"
              style={{ height: "400px", width: "300px" }}
            />
            {/* <!-- Decorative Stars --> */}
            <div className="absolute top-6 right-24 text-4xl text-black hidden md:block">✦</div>
            <div className="absolute bottom-6 left-24 text-4xl text-black hidden md:block">✦</div>
          </div>
        </div>

        {/* <!-- Brand Bar --> */}
        <section className="bg-black text-white py-3">
          <div className="grid  md:grid-cols-5 gap-6 text-center lg:text-lg text-sm font-semibold tracking-wider px-6 md:px-12">
            <span>VERSACE</span>
            <span>ZARA</span>
            <span>GUCCI</span>
            <span className="font-extrabold lg:text-xl text-sm ">PRADA</span>
            <span>Calvin Klein</span>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">NEW ARRIVALS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {
              displyaItem.length === 0 ? <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                  loading...
                </div>
              </div> 
              :
               displyaItem.map((item, index) =>
                <Link to={`/iteminformetion/?id=${item.id}`}>
                  <div key={index} className="bg-white rounded-xl p-4 shadow-xl h-full flex flex-col justify-between">
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
          {/* <!-- View All Button --> */}
          <div className="text-center mt-10">
            {clothItemtn < product.length && (<button className="px-6 py-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition" onClick={viewItemBtn}>View All</button>)}

          </div>
        </section>



        <div className="bg-gray-100 rounded-3xl p-6 md:p-12 max-w-6xl mx-auto ">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10">BROWSE BY DRESS STYLE</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* <!-- Casual --> */}
            <div className="relative col-span-2 md:col-span-2 bg-white rounded-xl overflow-hidden">
              <img src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?cs=srgb&dl=pexels-ajaykumar786-1337477.jpg&fm=jpg" alt="Casual" className="w-full h-48 md:h-96 object-cover " />
              <div className="absolute top-2 left-2 font-semibold text-lg text-black text-white">Casual</div>
            </div>

            {/* <!-- Formal --> */}
            <div className="relative col-span-2 md:col-span-2 bg-white rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="Formal" className="w-full h-48 md:h-96 object-cover" />
              <div className="absolute top-2 left-2 font-semibold text-lg text-white">Formal</div>
            </div>

            {/* <!-- Party --> */}
            <div className="relative col-span-2 md:col-span-3 bg-white rounded-xl overflow-hidden">
              <img src="https://media.gettyimages.com/id/753288299/photo/group-of-young-women-standing-on-a-rooftop-posing-for-a-photograph.jpg?s=612x612&w=0&k=20&c=g1oMKrXVKCmCygDDYiVtS48_PArfSOgyU7jcOchI30Y=" alt="Party" className="w-full h-48 md:h-60 object-cover" />
              <div className="absolute top-2 left-2 font-semibold text-lg text-black text-white">Party</div>
            </div>

            {/* <!-- Gym --> */}
            <div className="relative col-span-2 md:col-span-1 bg-white rounded-xl overflow-hidden">
              <img src="https://m.media-amazon.com/images/I/51ageXP6o3L._AC_UL480_FMwebp_QL65_.jpg" alt="Gym" className="w-full h-48 md:h-60 object-cover" />
              <div className="absolute top-2 left-2 font-semibold text-lg text-black">Gym</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home