import { useEffect, useState } from "react"

export default function FetchAPI(){

  const [usersData, setUsersData]=useState([])

  useEffect(()=>{
    getUsersData()
  },[])

  async function getUsersData(){
    const url = "https://dummyjson.com/users"
    try{
        let response = await fetch(url)
    response = await response.json()
    console.log(response.users)
    setUsersData(response.users)
    } catch(error){
      console.log("Error fetching users data:",error)
    }
  
  }
  return(
    <>
    <h1>fetch user API</h1>
    <button onClick={getUsersData} className="border px-5 py-4 cursor-pointer">
      Fetch-users
    </button>

      <table>
        <thead>
          <tr>
            <th className='border-2'>S.N</th>
            <th className='border-2 px-7'>First Name</th>
            <th className='border-2 px-7'>Last Name</th>
            <th className='border-2 px-7'>Email</th>
            <th className='border-2 px-7'>Age</th>
            <th className='border-2 px-7'> Image</th>
          </tr>
        </thead>

        <tbody>
          {
            usersData && usersData.map((user,index)=>{
              return(
                <tr>
                  <td className='border-2'>{index+1}</td>
                  <td className='border-2'>{user.firstName}</td>
                  <td className='border-2'>{user.lastName}</td>
                  <td className='border-2'>{user.email}</td>
                  <td className='border-2'>{user.age}</td>
                  <td className='border-2'>
                    <img src={user.image} alt="userimage" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      

    </>
  )
}