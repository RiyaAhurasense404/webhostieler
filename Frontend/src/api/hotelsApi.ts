import axiosInstance from "./axiosInstance"
import { Hotel } from "../types"

interface FetchHotelsParams {
  city?: string
  max_price?: number
}

interface FetchHotelDetailParams {
  hotel_id: string | number
}

interface HotelsResponse {
  data: Hotel[]
}

interface HotelDetailResponse {
  data: Hotel
}

export const fetchHotels = async ({ city, max_price }: FetchHotelsParams): Promise<HotelsResponse> => {
  const params: Record<string, string|number> = {}
  
  if(city) params.city = city
  if(max_price) params.max_price = max_price

  const response = await axiosInstance.get<HotelsResponse>("/hotels", { params })
  return response.data
}

export const fetchHotelDetail = async ({ hotel_id }: FetchHotelDetailParams): Promise<HotelDetailResponse> => {
  const response = await axiosInstance.get<HotelDetailResponse>(`/hotels/${hotel_id}`)
  return response.data
}