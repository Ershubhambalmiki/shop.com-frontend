import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [productName, setProductName] = useState("")
    const [productBrand, setProductBrand] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productPrice, setProductPrice] = useState()
    const [productQuantity, setProductQuantity] = useState()
    const [productSizes, setProductSizes] = useState([])
    const [productColor, setProductColor] = useState("")
    const [description, setdescription] = useState("")
    const [file, setFile] = useState("")
    const [validFile, setValidFile] = useState(false);
    const [loading, setLoading] = useState(false)

    const navigate=useNavigate()
    const handelAddProduct = async () => {
        setLoading(true)
        try {
            if (!productName.trim() || !productBrand.trim() || !productCategory.trim() || !productPrice.trim() || !productSizes.trim() || !productColor.trim() || !description.trim() || !file) {
                alert("All Field Is Requaiare")
                return
            }
            const result = await axios.post("http://localhost:5000/api/add-products", {
                name: productName,
                brand: productBrand,
                category: productCategory,
                price: productPrice,
                quantity: productQuantity,
                sizes: productSizes,
                color: productColor,
                image: file,
                description: description

            })
            alert(result?.data?.message)
            setProductBrand("")
            setProductName("")
            setProductCategory("")
            setProductSizes([])
            setProductPrice("")
            setProductColor("")
            setdescription("")
            setProductQuantity("")
            setLoading(false)
            navigate("/stock")

        } catch (error) {
            setLoading(false)
            alert("sothing won't to wrong" + error)
        }
    }


    const validateImage = (filename) => {
        console.log(filename, "file name in validate");
        const allowedExt = ["png", "jpeg", "jpg", "gif", "webp"];

        // Get the extension of the uploaded file
        const ext = filename.split(".");
        const extension = ext[1];

        //Check if the uploaded file is allowed
        return allowedExt.includes(extension);
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadFile = async (e) => {
        if (!e.target.files) return;

        let file = e.target.files[0];
        console.log(file?.name, "file.name ?");
        if (!file?.name) {
            setFile(null);
            return;
        }

        console.log(file.name, " user file");
        const isFileValid = validateImage(file.name);
        console.log(isFileValid, "validation result");

        if (isFileValid) {
            let converted = await convertToBase64(file);
            if (typeof converted === "string") {
                console.log(converted, "base 64 string");
                setFile(converted); // Set the base64 string
            }
        } else {
            setFile("none");
        }

        setValidFile(isFileValid);
        console.log(isFileValid, "final validation result");
    };
    return (
        <>
            <div className='flex justify-center lg:mx-0 mx-5 user-mamberShip-body '>
                <div className=''>
                    <form className=" mambership-form   text-white p-6 rounded-lg max-w-3xl w-full shadow-lg space-y-5 mt-5 mb-3 ">
                        <h2 className="text-2xl md:text-3xl font-medium text-center text-black ">
                            Add Product
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium " >Product Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Brand</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productBrand}
                                    onChange={(e) => setProductBrand(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Category</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Price</label>
                                <input
                                    type="number"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Quantity</label>
                                <input
                                    type="number"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productQuantity}
                                    onChange={(e) => setProductQuantity(e.target.value)}
                                />
                            </div>
                            {/* <div>
                                <p className="block text-lg mb-1 text-black font-medium">Sizes</p>
                                <label className='text-black mx-2'>
                                    <input type="checkbox" value="XL" onChange={handleSizeChange}/> XL
                                </label>
                                <label className='text-black mx-2'>
                                    <input type="checkbox" value="L" onChange={handleSizeChange}/> L
                                </label>
                                <label className='text-black mx-2'>
                                    <input type="checkbox" value="M" onChange={handleSizeChange}/> M
                                </label>
                                <label className='text-black mx-2'>
                                    <input type="checkbox" value="SM" onChange={handleSizeChange}/> SM
                                </label>
                                <label className='text-black mx-2'>
                                    <input type="checkbox" value="S" onChange={handleSizeChange}/> S
                                </label>
                            </div> */}
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Sizes</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productSizes}
                                    onChange={(e) => setProductSizes(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Color</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={productColor}
                                    onChange={(e) => setProductColor(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Description</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-1 text-black font-medium" >Add Image</label>
                                <input
                                    type="file"
                                    className="w-full p-2 rounded bg-[#e4e6eb] text-black border border-gray-700"
                                    onChange={(e) => uploadFile(e)}

                                />
                            </div>
                        </div>
                        <button disabled={loading} className='px-3 py-2 bg-blue-500 w-full rounded-xl' onClick={handelAddProduct}>{
                            loading ? "...please wait" : "Add Product"
                        }</button>
                        <Link to={"/stock"}><p className='text-blue-600'>- Back to</p></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct