import axios from "axios"
import { useEffect, useState } from "react"

export default function FetchProducts(){

  const [products, setProducts]=useState([])

  const fetchData=()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>{
      console.log(res.data.products)
      setProducts(res.data.products)
    })
  }


  useEffect(()=>{
    fetchData()
  },[])


  return(
    <>
    <h1>Fetch products</h1>

<ul>
  {
    products.map((el)=>{
      return <li>{el.title}</li>
    })
  }
</ul>

    </>
  )
}