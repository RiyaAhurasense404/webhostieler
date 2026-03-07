import { useHotelsQuery } from "../queries/useHotelsQuery"
import HotelList from "../components/hotel/HotelList"

const HotelsPage = () => {
  const { data,isError, isLoading } = useHotelsQuery({
    dest_id: "-2092174",
    dest_type: "city"
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error!</p>

  return (
    <div>
      <HotelList hotels={data?.data} />
    </div>
  )
}
export default HotelsPage