import { useParams, useNavigate } from "react-router-dom"
import { useDetailQuery } from "../queries/useDetailQuery"

const HotelDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError } = useDetailQuery({
    hotel_id: id
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error!</p>

  const hotel = data?.data

  return (
    <div>
      <img src={hotel?.image_url} alt={hotel?.name} />
      <h1>{hotel?.name}</h1>
      <p>{hotel?.city}</p>
      <p>{hotel?.rating} ⭐</p>
      <p>₹{hotel?.price}</p>
      <p>{hotel?.description}</p>
      <button onClick={() => navigate("/booking", {
        state: {
          hotel_id: hotel?.id,
          hotel_name: hotel?.name
        }
      })}>
        Book Now 📅
      </button>
    </div>
  )
}
export default HotelDetailPage