import { useNavigate } from "react-router-dom"
import { useWishList } from "../../hooks/useWishList"
import { useCallback } from "react"

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate()
  const { wishlist, dispatch } = useWishList()
  const isWishlisted = wishlist.some((item) => item.id === hotel.id)

  const handleWishlist = useCallback((e) => {
    e.stopPropagation()
    dispatch({ type: isWishlisted ? "Remove" : "Add", payload: hotel })
  }, [dispatch, isWishlisted, hotel])

  return (
    <div onClick={() => navigate(`/hotels/${hotel.id}`)}>
      <img src={hotel.image_url} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>{hotel.city}</p>
      <p>{hotel.rating} ⭐</p>
      <p>₹{hotel.price}</p>
      <button onClick={handleWishlist}>
        {isWishlisted ? "Remove" : "Add"}
      </button>
    </div>
  )
}
export default HotelCard