import { useNavigate } from "react-router-dom"
import { useWishList } from "../../hooks/useWishList"
import { useCallback } from "react"
import { Hotel } from "../../types"

interface Props {
  hotel: Hotel
}

const HotelCard = ({ hotel }: Props) => {
  const navigate = useNavigate()
  const { wishlist, dispatch } = useWishList()
  const isWishlisted = wishlist.some((item: Hotel) => item.id === hotel.id)

  const handleWishlist = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
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