import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import storedata from '../utils/ContextApi';

const Header = () => {

  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [inputSearchValue, setInputSearchValue] = useState("")
  const { addToCartNotification, setAddToCartNotification, currentUser, setCurrentUser, setSearchValue } = useContext(storedata)

  useEffect(() => {
    const notice = JSON.parse(localStorage.getItem("notification"))
    setCurrentUser(JSON.parse(sessionStorage.getItem("user")))
    setAddToCartNotification(notice)
  }, [])
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setInputSearchValue(e.target.value)
  }
  const searchHandleEnterKey = (e) => {
    if (e.key === "Enter") {
      if (!inputSearchValue) {
        return;
      }
      e.preventDefault()
      setSearchValue(inputSearchValue.toLowerCase().trim())
      navigate("/item")
      setInputSearchValue("")
    }
  }

  const handleSing = () => {
    setOpen(!open)
    setTimeout(() => {
      setOpen(false)
    }, 1700);
  }
  const handlMobileMenu = () => {
    setMobileMenu(!mobileMenu)
    setTimeout(() => {
      setMobileMenu(false)
    }, 2000);
  }
  const handelSignOut = () => {
    sessionStorage.removeItem("user")
    setCurrentUser(null)

  }


  return (
    <>
      <nav className="bg-gray-800 fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                onClick={handlMobileMenu}

                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1 className='text-white font-bold text-2xl '>SHOP.CO</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link to={"/"}
                    className="rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white"

                  >
                    Home
                  </Link>
                  <Link to={'/about'}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </Link>
                  {/* <Link to={"/product"}

                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Product
                  </Link> */}
                  <Link
                    to={"/signin"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Sign In

                  </Link>
                  <Link
                    to={"/orders"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Orders

                  </Link>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <input type="search" className='border lg:w-96 py-1 px-5 rounded w-44 ' value={inputSearchValue} placeholder='Search Produt'
                inputMode="search"
                onChange={handleSearch}
                onKeyDown={searchHandleEnterKey} />
              <Link to={"cart"}>
                <i className="fa-solid fa-cart-shopping text-gray-400 lg:ml-5 ml-3" style={{ position: "relative" }}></i>
              </Link>
              <div className='bg-red-600 text-white p-1 rounded-full' style={{ fontSize: "10px", position: "absolute", top: "10px", right: "83px" }}>{addToCartNotification}</div>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden lg:ml-5 ml-3"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={handleSing}

                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {
                      currentUser ? <img
                        className="size-8 rounded-full"
                        src={currentUser?.file}
                        alt=""
                      /> :
                        <img
                          className="size-8 rounded-full"
                          src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80"
                          alt=""
                        />
                    }

                  </button>
                </div>

                {
                  open ? <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    {/* Active: "bg-gray-100 outline-hidden", Not Active: "" */}
                    {
                      currentUser ? <p className="block px-4 py-2 text-sm text-gray-700">{currentUser.email}</p> : null
                    }

                    {
                      currentUser ? <>
                        <button onClick={handelSignOut}
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-2">
                          Sign out
                        </button>

                        <Link to={"/user-profile"}
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-2">
                          Your Profile
                        </Link>
                      </>

                        : <Link to={"/signin"}><button
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-2">
                          Sign in
                        </button></Link>
                    }
                  </div> : null
                }
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {
          mobileMenu ? <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

              <Link to={"/"}
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </Link>
              <Link to={"/about"}
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </Link>
              <Link to={"/product"}

                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                product
              </Link>
              <Link to={"signup"}
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Sign Up
              </Link>
              <Link to={"orders"}
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Orders
              </Link>
            </div>
          </div> : null
        }
      </nav>


    </>
  )
}

export default Header