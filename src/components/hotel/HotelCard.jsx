import { useNavigate } from "react-router-dom"
import { useWishList } from "../../hooks/useWishList"

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate()
  const { dispatch } = useWishList()

  return (
    <div onClick={() => navigate(`/hotels/${hotel.id}`)}>
      <img src={hotel.photoUrls[0]} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>{hotel.wishlistName}</p>
      <p>{hotel.reviewScore}</p>
      <p>{hotel.priceBreakdown.grossPrice.amountRounded}</p>
      <button onClick={(e) => {
        e.stopPropagation()
        dispatch({ type: "Add", payload: hotel })
      }}>❤️</button>
    </div>
  )
}
export default HotelCard