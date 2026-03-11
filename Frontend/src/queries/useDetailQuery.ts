import { useQuery } from "@tanstack/react-query"
import { fetchHotelDetail } from "../api/hotelsApi"

interface DetailQueryParams {
  hotel_id: string | number
}

export const useDetailQuery = ({ hotel_id }: DetailQueryParams) => {
  return useQuery({
    queryKey: ["hotelDetail", hotel_id],
    queryFn: () => fetchHotelDetail({ hotel_id })
  })
}