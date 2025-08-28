import axios from 'axios'
import React, { useState, useEffect, } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StoreStock = () => {
  const [getStock, setGetStock] = useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [adminData,setAdminData]=useState([])
  const itemPerPage=5;
   const LastOfIndexPage=currentPage*itemPerPage;
   const firstOfIndexPage=LastOfIndexPage-itemPerPage;
   const currentItem=getStock.slice(firstOfIndexPage,LastOfIndexPage)
   const toatalPage=Math.ceil(getStock.length/itemPerPage)

   const handelPrev=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
   }

const handelNext=()=>{
  if(currentPage<toatalPage){
    setCurrentPage(currentPage+1)
  }
}

    useEffect(() => {
  setAdminData(JSON.parse(sessionStorage.getItem("sign-in")))
    }, [adminData])

    const navigete=useNavigate()
    useEffect(() => {
      if (adminData===null) {
        alert("please Login")
        navigete("/admin-login")
      }
    }, [adminData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://shop-com-twnt.onrender.com/api/get-products")
        setGetStock(res?.data?.getAllProduct)
      } catch (error) {
        alert(error.res?.data?.message)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="container">

        <div className="main-content ">

          {/* Store Management Section */}
          <div className="store-management">
            <div className="section-header">
              <h3>
                <i className="fas fa-store-alt" /> Downtown Retail Store
              </h3>

            </div>
            <div className="store-tabs">
              <div className="tab active">
                Manage Stock
              </div>
            </div>
            {/* Stock Management Tab */}
            <div className="tab-content active " id="stock-tab">
              <div className="section-body">
                <div
                  className="section-header"
                  style={{
                    background: "none",
                    padding: "0 0 20px 0",
                    border: "none"
                  }}
                >
                  <h3>
                    <i className="fas fa-boxes icon" /> <span className='text-black'>Product Inventory</span>
                  </h3>

                  <Link to={"/add-products"}>
                    <div className="btn btn-primary">
                      <i className="fas fa-plus" /> Add Stock
                    </div>
                  </Link>
                </div>
                <table className="stock-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Current Quantity</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Sizes</th>

                    </tr>
                  </thead>
                  {
                    currentItem.map((item) => {
                      return <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.brand}</td>
                          <td>{item.quantity}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>
                          <td>{item.sizes}</td>
                        </tr>
                      </tbody>
                    })
                  }
                </table>
              </div>
            </div>
          </div>
          <div className='my-5'>
            <button className='bg-gray-400 px-3 py-1' onClick={handelPrev} >{"<"}</button>
            {
              Array.from({length:toatalPage},(_,index)=>(
                <button key={index+1} onClick={()=>setCurrentPage(index+1)} className={`px-3 py-1 rounded ${currentPage===index+1 ?"bg-blue-500 text-white":"bg-gray-400"}`}>
                  {index+1}
                </button>
              ))
            }
            <button className='bg-gray-400 px-3 py-1'onClick={handelNext} >{">"}</button>
          </div>
        </div>
      </div>


    </>

  )
}

export default StoreStock