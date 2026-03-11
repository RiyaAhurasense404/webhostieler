import { useSearchParams } from "react-router-dom"
import { useDebounce } from "./useDebounce"

interface Filters {
  city?: string
  max_price?: number
}

export const useURLFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const city = searchParams.get("city")
  const price = searchParams.get("max_price")
  const parsedPrice = price ? Number(price) : null

  const debouncedCity = useDebounce(city, 1000)
  const debouncedPrice = useDebounce(parsedPrice, 1000)

  const setFilters = (filters: Filters): void => {
    const params: Record<string, string> = {}
    if(filters.city) params.city = filters.city
    if(filters.max_price) params.max_price = filters.max_price.toString()
    setSearchParams(params)
  }

  return { city, price: parsedPrice, setFilters, debouncedCity, debouncedPrice }
}