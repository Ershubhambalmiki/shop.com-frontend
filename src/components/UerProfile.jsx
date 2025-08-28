import { FileInput } from 'flowbite-react'
import React, { useContext, useEffect, useState } from 'react'
import storedata from '../utils/ContextApi'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UerProfile = () => {
    const { currentUser } = useContext(storedata)
    const [userId, setUserId] = useState()
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [file, setFile] = useState("")
    const [validFile, setValidFile] = useState(false);
    const [userData, setUserData] = useState([])

    useEffect(() => {
        grtUserdata()
    }, [])

    const grtUserdata = async () => {
        try {
            const res = await axios.get("https://shop-com-twnt.onrender.com/api/get-user-data")
            setUserData(res?.data?.result)
        } catch (error) {
            if (error.res?.data?.message) {
                alert(error.res?.data?.message || error)
            }
            alert("something to wrong" + error)
        }
    }

    const handelUserDitalEdit = (email) => {
        const filtredData = userData.find((item) => item.email === email)
        setUserId(filtredData?._id)
        setUserName(filtredData?.name)
        setUserEmail(filtredData?.email)
    }

    const handelSaveBtn = async () => {
        try {
            if (!userEmail.trim() || !userName.trim() || !file) {
                alert("All Field Is Requard")
                return;
            }
            const res = await axios.post(`https://shop-com-twnt.onrender.com/api/user-update`, {
                userId,
                name: userName.toLowerCase(),
                file: file
            })
            alert(res?.data?.message)
        } catch (error) {
            alert(error?.res?.data?.message || "somthing won't wrong")
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
        <div className='bg-[#f5f5f5]'>
            <div className=' bg-[#1f2a38] lg:mx-40 lg:py-10 py-10'>
                <div className='lg:mt-5 mt-25 '>
                    <div className='grid lg:grid-cols-2 mt-24 lg:px-8 px-8  rounded-2xl mx-5 py-5 justify-self-center user-info'>
                        <div className=' content-center text-center lg:w-60 lg:ml-25'>
                            <div className='  '>

                                <img src={currentUser?.file} alt="" className='rounded-full justify-self-center w-40' />
                                <span className="block text-md font-bold my-3 text-white">{currentUser?.name}</span>
                                <span className="block text-sm text-white">{currentUser?.email}</span>

                            </div>

                        </div>
                        {/* ----------user section one---- */}
                        <div className=' lg:w-70 lg:mt-0 mt-5 lg:mr-20 '>

                            <div className='update-profile-form '>


                                <h1 className='text-center text-2xl font-bold text-white'>Update Profile</h1>

                                <label htmlFor="text" className="block mt-4  lg:text-lg font-medium text-white">Name<span className='text-red-600'>*</span></label>
                                <input type="Name" id="email" placeholder="Enter your Name" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " value={userName} onChange={(e) => setUserName(e.target.value)} />


                                <label htmlFor="email" className="block mt-4  lg:text-lg font-medium text-white">Email<span className='text-red-600'>*</span></label>
                                <input type="email" id="email" placeholder="Enter your email" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />



                                <label htmlFor="email" className="block mt-4 lg:text-lg font-medium text-white">Upload File<span className='text-red-600'>*</span></label>
                                <FileInput id="file-upload" onChange={(e) => uploadFile(e)} />
                                <div div className='flex justify-center'>
                                    <button type="button" className=" mt-10 mx-3 font-bold bg-gray-400 px-4 py-3 rounded-lg " onClick={() => handelUserDitalEdit(currentUser?.email)}>Edit</button>
                                    <button type="button" className=" mt-10 mx-3 font-bold bg-gray-400 px-4 py-3 rounded-lg " onClick={handelSaveBtn}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UerProfile