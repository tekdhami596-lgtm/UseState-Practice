import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import TableSkeleton from "./TableSkeleton"

export default function FetchProducts(){

  const [products, setProducts]=useState([])
  const [loading, setLoading]=useState(false)

  const fetchData=()=>{
    setLoading(true)
   try{
     axios.get("https://dummyjson.com/products")
    .then((res)=>{
      console.log(res.data.products)
      setProducts(res.data.products)
      setLoading(false)
      toast.success("users fetched successfully")
    })
   } catch(error){
      toast.error(`❌ Failed to fetch users! ${error.message}`,)
            setLoading(false)
        }
   }


  useEffect(()=>{
    fetchData()
  },[])


  return(
    <>
    <h1>Fetch products</h1>

<div className="flex flex-wrap justify-center gap-6">
   {loading?(   
    <TableSkeleton rows={5} />
  ):(products.map((el)=>{
      return (
         
           <div className="border-2 flex  items-center overflow-hidden rounded-xl size-120 shadow-lg">
            <div>
              <img src={el.thumbnail} />
            </div>
            <div>
              <h2 className="text-lg font-bold">{el.title}</h2>
              <p>{el.brand}</p>
              <p>{el.desription}</p>

              <div>
               <p> <span className="text-xl font-bold">${el.price}</span></p>
                <span className="text-sm text-green-600">{el.discountPercentage}% OFF</span>
              </div>
              <div>
               <p> <span>Rating: {el.rating}</span></p>
               <p className={`mt-2 text-sm font-medium ${el.stock>0?"text-green-600":"text-red-600"}`}> <span>Stock: {el.stock}</span></p>
              </div>
              <p>{el.availabilityStatus}</p>
              <button className="mt-2 bg-black text-white px-3 py-1 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
      )
    }))

  }
</div>

    </>
  )
}