import { useQuery } from "@tanstack/react-query"
import { fetchHotels } from "../api/hotelsApi"

interface HotelsQueryParams {
  city: string | null
  max_price: number | null
}

export const useHotelsQuery = ({ city, max_price }: HotelsQueryParams) => {
  return useQuery({
    queryKey: ["hotels", city, max_price],
    queryFn: () => fetchHotels({ 
      city: city ?? undefined, 
      max_price: max_price ?? undefined 
    }),
    staleTime: 0,
    retry: false
  })
}