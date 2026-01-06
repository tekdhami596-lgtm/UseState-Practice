import axios from "axios";
import Skeleton from "react-loading-skeleton";
import TableSkeleton from "./TableSkeleton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FetchLoaderAPI() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched]=useState(false)

 

  async function getUsers() {
    if(hasFetched) return;
  
    setLoading(true)
    try {
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response.data.users);
      setUsersData(response.data.users);
      setHasFetched(true)
      setLoading(false)

      toast.success("users fetched successfully")
    } catch (error) {
      toast.error(`❌ Failed to fetch users! ${error.message}`,)
        setLoading(false)
    }
  }
   useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
  
      {/* <button onClick={getUsers} disabled={loading || hasFetched}   className="
    border px-5 py-4 text-white cursor-pointer
    bg-blue-600
    disabled:bg-gray-400
    disabled:cursor-not-allowed
    transition-colors duration-200
  ">
      {hasFetched?"Fetched":"Fetch Users"}
      </button> */}

      <table>
        <thead>
          <tr>
            <th className="border-2">S.N</th>
            <th className="border-2 px-7">First Name</th>
            <th className="border-2 px-7">Last Name</th>
            <th className="border-2 px-7">Email</th>
            <th className="border-2 px-7">Age</th>
            <th className="border-2 px-7"> Image</th>
          </tr>
        </thead>

        <tbody>
          {loading ?(
            <TableSkeleton rows={5} />
          ): (
            usersData &&
            usersData.map((user, index) => {
              return (
                <tr>
                  <td className="border-2">{index + 1}</td>
                  <td className="border-2">{user.firstName}</td>
                  <td className="border-2">{user.lastName}</td>
                  <td className="border-2">{user.email}</td>
                  <td className="border-2">{user.age}</td>
                  <td className="border-2">
                    <img src={user.image} alt="userimage" />
                  </td>
                </tr>
              );
            })
          ) }
        </tbody>
      </table>
    </>
  );
}
