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
      <div className="bg-[#f5f5f5] min-h-screen flex items-center justify-center py-10">
  <div className="bg-[#1f2a38] w-full max-w-6xl rounded-2xl shadow-2xl p-8">
    
    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Left - User Profile Card */}
      <div className="flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <img
          src={currentUser?.file}
          alt="profile"
          className="rounded-full w-36 h-36 border-4 border-gray-300 shadow-lg object-cover"
        />
        <h2 className="text-xl font-bold mt-4 text-white">{currentUser?.name}</h2>
        <p className="text-sm text-gray-300">{currentUser?.email}</p>
      </div>

      {/* Right - Update Profile Form */}
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h1 className="text-center text-2xl font-bold text-white mb-6">Update Profile</h1>

        {/* Name */}
        <label className="block mt-3 text-white font-medium">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="mt-2 bg-gray-100 w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* Email */}
        <label className="block mt-4 text-white font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="mt-2 bg-gray-100 w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        {/* File Upload */}
        <label className="block mt-4 text-white font-medium">
          Upload File <span className="text-red-500">*</span>
        </label>
        <FileInput
          id="file-upload"
          className="mt-2"
          onChange={(e) => uploadFile(e)}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-gray-500 hover:bg-gray-600 text-white font-semibold transition-all duration-300 shadow-md"
            onClick={() => handelUserDitalEdit(currentUser?.email)}
          >
            Edit
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 shadow-md"
            onClick={handelSaveBtn}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default UerProfile