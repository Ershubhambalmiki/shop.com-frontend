import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ShowError from '../components/ShowError';
import axios from 'axios';
import { EmailValidetion } from '../utils/EmailValidetion';
import { Password_validate } from '../utils/PasswordValidetion';


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState("")
  const [validFile, setValidFile] = useState(false);
const navigate=useNavigate()
  const handleSignupBtn = async () => {
    if (!name.trim() || !email.trim() || !number.trim() || !address.trim() || !password.trim() || !cnfPassword.trim() || !file) {
      setError("All field is required")
      return;
    }
    if (!EmailValidetion(email)) {
      setError("invalid Email")
      return;
    }
    if (password != cnfPassword) {
      setError("dose not match password")
      return;
    }
    try {
      setLoading(true)
      const res = await axios.post("http://localhost:5000/api/signup", {
        name,
        email: email.trim().toLocaleLowerCase(),
        number,
        address,
        password,
        file,

      })
      setSuccess(res?.data?.message)
      setName("")
      setEmail("")
      setNumber("")
      setAddress("")
      setPassword("")
      setCnfPassword("")
      setFile("")
      setLoading(false)
      navigate("/signin")
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error?.response?.data?.message);
      } else {
        setError(`Something went wrong ${error}`)
      }
      setLoading(false)
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
    <div>
      <div className=' mx-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mb-5">
          {/* Left Section with Image */}
          <div className="flex items-center justify-center bg-blue-50 p-4 mt-20">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3BwaW5nfGVufDB8fDB8fHww"
              alt="Shopping"
              className="max-w-full h-auto rounded"
            />
          </div>
          {/* Right Section with Form */}
          <div className="flex items-center justify-center p-6 lg:mt-20">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                Create an account
              </h2>
              <p className="text-sm text-gray-500 mb-6">Enter your details below</p>
              <from className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="password"
                  placeholder=" Password"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Conform Password"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={cnfPassword}
                  onChange={(e) => setCnfPassword(e.target.value)}
                />
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  // value={file}
                  onChange={(e) => uploadFile(e)}
                />

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-3 font-medium"
                  onClick={handleSignupBtn}
                  disabled={loading}
                >
                  {
                    loading ? "please wait" : "Create Acount"
                  }
                </button>
              </from>
              <div className="my-4 flex items-center">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-400 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">
                Already have account?
                <Link to={"/signin"} className="text-black font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
      <ShowError error={error} success={success} setSuccess={setSuccess} setError={setError} />
    </div>
  )
}

export default SignUp