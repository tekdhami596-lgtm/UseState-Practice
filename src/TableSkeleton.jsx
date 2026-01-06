import Skeleton from "react-loading-skeleton";

export default function TableSkeleton({rows=5}){
  return(
    <>
    {
      Array(rows)
      .fill(0)
      .map((_,index)=>(
        <tr key={index}>
          <td className="border-2 px-2">
            <Skeleton width={20} />
            </td>
             <td className="border-2 px-2">
            <Skeleton />
            </td>
             <td className="border-2 px-2">
            <Skeleton width={20} />
            </td>
             <td className="border-2 px-2">
            <Skeleton width={20} />
            </td>
             <td className="border-2 px-2">
            <Skeleton width={30} />
            </td>
             <td className="border-2 px-2">
            <Skeleton circle width={40} height={40} />
            </td>
        </tr>
      ))
    }
    </>
  )
}