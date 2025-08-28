import { Carousel } from 'flowbite-react'
import React from 'react'

const About = () => {
    return (
        <>
            <div className="bg-white text-gray-800 mx-5">

                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-5 lg:ml-10">
                        <div >
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="mb-4 text-gray-700">
                                Launched in 2015, Exclusive is South Asia’s premier online shopping
                                marketplace with an active presence in Bangladesh. Supported by a wide
                                range of tailored marketing, data and service solutions, Exclusive has
                                10,500 sellers and 300 brands and serves 3 million customers across
                                the region.
                            </p>
                            <p className="text-gray-700">
                                Exclusive has more than 1 Million products to offer, growing at a very
                                fast rate. Exclusive offers a diverse assortment in categories ranging
                                from consumer.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img src="https://img.freepik.com/free-photo/two-beautiful-girls-making-shopping-looking-phone-mall_176420-5771.jpg?semt=ais_hybrid&w=740" alt="Our Story" className='rounded' style={{height:"480px"}} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center">
                        <div className="border rounded-lg p-6 shadow hover:bg-red-500 hover:text-white text-black">
                            <div className="text-2xl font-bold">10.5k</div>
                            <p className="mt-2 hover:text-white">Sellers active our site</p>
                        </div>
                        <div className="border rounded-lg p-6 shadow hover:bg-red-500 hover:text-white text-black">
                            <div className="text-2xl font-bold">33k</div>
                            <p className="mt-2  hover:text-white">Monthly Product Sale</p>
                        </div>
                        <div className="border rounded-lg p-6 shadow hover:bg-red-500 hover:text-white text-black">
                            <div className="text-2xl font-bold">45.5k</div>
                            <p className="mt-2 hover:text-white">Customer active in our site</p>
                        </div>
                        <div className="border rounded-lg p-6 shadow hover:bg-red-500 hover:text-white text-black">
                            <div className="text-2xl font-bold">25k</div>
                            <p className="mt-2   hover:text-white">Annual gross sale in our site</p>
                        </div>
                    </div>
                </div>
                {/* <div className="h-full sm:h-64 xl:h-80 2xl:h-96 w-full ">
                    <Carousel className='w-full h-full' >
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..."/>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div> */}



                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/previews/030/767/986/non_2x/handsome-business-man-isolated-on-white-png.png" alt="Tom Cruise" className="mx-auto mb-4 rounded-lg h-44" />
                            <h3 className="text-xl font-semibold">Tom Cruise</h3>
                            <p className="text-gray-600">Founder & Chairman</p>
                            <div className="mt-2 flex justify-center gap-4 text-gray-500">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/young-smiling-businesswoman_329181-11700.jpg?semt=ais_hybrid&w=740" alt="Emma Watson" className="mx-auto mb-4 rounded-lg h-44" />
                            <h3 className="text-xl font-semibold">Emma Watson</h3>
                            <p className="text-gray-600">Managing Director</p>
                            <div className="mt-2 flex justify-center gap-4 text-gray-500">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>

                        <div>
                            <img src="https://static.vecteezy.com/system/resources/previews/041/714/219/non_2x/ai-generated-professional-man-in-suit-with-arms-crossed-on-transparent-background-stock-png.png" alt="Will Smith" className="mx-auto mb-4 rounded-lg h-44" />
                            <h3 className="text-xl font-semibold">Will Smith</h3>
                            <p className="text-gray-600">Product Designer</p>
                            <div className="mt-2 flex justify-center gap-4 text-gray-500">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-center border-t pt-12">
                    <div>
                        <div className="text-3xl mb-4 text-black">
                            <i className="fas fa-truck"></i>
                        </div>
                        <h4 className="font-semibold mb-1">FREE AND FAST DELIVERY</h4>
                        <p className="text-gray-600 text-sm">Free delivery for all orders over $140</p>
                    </div>

                    <div>
                        <div className="text-3xl mb-4 text-black">
                            <i className="fas fa-headphones-alt"></i>
                        </div>
                        <h4 className="font-semibold mb-1">24/7 CUSTOMER SERVICE</h4>
                        <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
                    </div>

                    <div>
                        <div className="text-3xl mb-4 text-black">
                            <i className="fas fa-rotate-left"></i>
                        </div>
                        <h4 className="font-semibold mb-1">MONEY BACK GUARANTEE</h4>
                        <p className="text-gray-600 text-sm">We return money within 30 days</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About