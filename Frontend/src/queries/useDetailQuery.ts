import { useQuery } from "@tanstack/react-query"
import { fetchHotelDetail } from "../api/hotelsApi"

export const useDetailQuery = ({ hotel_id }) => {
  return useQuery({
    queryKey: ["hotelDetail", hotel_id],
    queryFn: () => fetchHotelDetail({ hotel_id })
  })
}