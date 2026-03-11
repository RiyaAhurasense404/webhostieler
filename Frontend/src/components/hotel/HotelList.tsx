import HotelCard from "./HotelCard"
import { Hotel } from "../../types"

interface Props {
  hotels: Hotel[]
}

const HotelList = ({ hotels }: Props) => {
  return (
    <div>
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}

export default HotelList