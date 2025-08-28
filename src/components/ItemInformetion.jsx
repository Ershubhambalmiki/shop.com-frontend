import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import storedata from '../utils/ContextApi';
import Swal from 'sweetalert2';

const ItemInformetion = () => {

    const [searchparams] = useSearchParams()
    const id = searchparams.get("id")
    const { size, setSize, setCart, setBuy, setAddToCartNotification, currentUser, addProduct,quantity,setQuantity } = useContext(storedata)
    const productInformetion = addProduct.find((item) => item.id == id)
    console.log(productInformetion, "product informmetion");

    useEffect(() => {
        setSize("")
    }, [])

    const handelquantitydicrement=()=>{
        if(quantity===1){
            setQuantity(quantity)
        }
        else{
            setQuantity(quantity-1)
        }
    }

    const navigate = useNavigate()
    const handleAddtoCArtBtn = (e) => {
        e.preventDefault();
        // if (!currentUser) {
        //     alert("Please Login")
        //     navigate("/signin")
        //     return;
        // }
        const localStorageData = JSON.parse(localStorage.getItem("cart")) || [];
        const alreadyCart = localStorageData.find(item => item.id == productInformetion.id)
        if (alreadyCart) {
            alert("alrady your add cart product")
            return;
        }
        const updateCartData = [...localStorageData, productInformetion];
        localStorage.setItem("cart", JSON.stringify(updateCartData));
        setCart(updateCartData);
        localStorage.setItem("notification", JSON.stringify(updateCartData.length))
        const notice = JSON.parse(localStorage.getItem("notification"))
        setAddToCartNotification(notice)
        alert("Add to product in cart")
    }


    const handleBuyBtn = (e) => {
        e.preventDefault();
        // if (!currentUser) {
        //     alert("Please Login")
        //     navigate("/signin")
        //     return;
        // }
        if (size === "") {
            alert("please slect size ")
            return;
        }

        const localStorageOrderData = JSON.parse(localStorage.getItem("order")) || []
        const alreadyBuy = localStorageOrderData.find(item => item.id == productInformetion.id);
        if (alreadyBuy) {
            alert("alrady your buy product")
            return;
        }
         const orderWithSize = { ...productInformetion, size: size,quantity:quantity };

    const updateOrder = [...localStorageOrderData, orderWithSize];
    localStorage.setItem("order", JSON.stringify(updateOrder));
    setBuy(updateOrder);

        Swal.fire({
            icon: "success",
            title: "Order Successfully",
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }


    return (
        <>
            <div className="max-w-7xl mx-auto  p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="grid  gap-4 mt-10">
                    {/* <div className="col-span-1 flex flex-col gap-4">
                        <img
                            src="img1.jpg"
                            alt="Thumb 1"
                            className="w-full rounded-md border cursor-pointer"
                        />
                        <img
                            src="img2.jpg"
                            alt="Thumb 2"
                            className="w-full rounded-md border cursor-pointer"
                        />
                        <img
                            src="img3.jpg"
                            alt="Thumb 3"
                            className="w-full rounded-md border cursor-pointer"
                        />
                        <img
                            src="img4.jpg"
                            alt="Thumb 4"
                            className="w-full rounded-md border cursor-pointer"
                        />
                    </div> */}
                    <div className=" mx-10  shadow-xl">
                        <div className=' grid justify-center mt-10'>
                            <img
                                src={productInformetion?.image}
                                alt="Main product"
                                className=" rounded-lg h-96" />
                        </div>
                        <div className='flex justify-center my-3 gap-10'>
                            <button className='bg-yellow-400 lg:px-10 px-5 lg:py-3 rounded text-white ' onClick={handleAddtoCArtBtn}>Add to Cart</button>
                            <button className='bg-green-500 lg:px-16 lg:py-3 px-10 py-3 rounded text-white ' onClick={handleBuyBtn}>Buy</button>
                        </div>
                    </div>


                </div>
                {/* Product Details */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
                    <div className="flex items-center gap-2">
                        <div className="text-yellow-400">⭐⭐⭐⭐☆</div>
                        <span className="text-sm text-gray-500">(150 Reviews)</span>
                        <span className="text-sm text-green-600 font-medium">In Stock</span>
                    </div>
                    <p className="text-2xl font-bold"><i class="fa-solid fa-indian-rupee-sign"></i>{productInformetion?.price}</p>
                    <p className="text-sm text-gray-600">
                        {productInformetion?.description}
                    </p>
                    <div className="space-y-2">
                        <p className="font-medium">Colours:</p>
                        <div className="flex gap-3">
                            <button className="w-5 h-5 rounded-full bg-red-600 border-2 border-black" />
                            <button className="w-5 h-5 rounded-full bg-gray-300 border" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="font-medium">Size:</p>
                        <p className="w-10 h-9 px-3 py-1 border rounded bg-black text-white">{size}</p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 border rounded hover:bg-black hover:text-white"
                                onClick={() => setSize("XS")}>
                                XS
                            </button>
                            <button className="px-3 py-1 border rounded hover:bg-black hover:text-white"
                                onClick={() => setSize("S")}>
                                S
                            </button>
                            <button className="px-3 py-1 border rounded hover:bg-black hover:text-white"
                                onClick={() => setSize("M")}>M</button>

                            <button className="px-3 py-1 border rounded hover:bg-black hover:text-white"
                                onClick={() => setSize("L")}>
                                L
                            </button>
                            <button className="px-3 py-1 border rounded hover:bg-black hover:text-white"
                                onClick={() => setSize("XL")}>
                                XL
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 text-right flex">
                        <button className='px-2  bg-gray-300'
                        onClick={handelquantitydicrement}
                        >-</button>
                        <p>{quantity}</p>
                        <button className='px-2  bg-gray-300'
                         onClick={()=>setQuantity(quantity+1)}
                        >+</button>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700" onClick={handleBuyBtn}>
                            Buy Now
                        </button>
                    </div>
                    <div className="border rounded-lg p-4 space-y-4 text-sm">
                        <div className="flex items-center gap-3">
                            <span>🚚</span>
                            <div>
                                <p className="font-medium">Free Delivery</p>
                                <a href="#" className="text-blue-600 underline">
                                    Enter your postal code for Delivery Availability
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>🔁</span>
                            <div>
                                <p className="font-medium">Return Delivery</p>
                                <p>
                                    Free 30 Days Delivery Returns.{" "}
                                    <a href="#" className="text-blue-600 underline">
                                        Details
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemInformetion