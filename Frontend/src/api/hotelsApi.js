import axiosInstance from "./axiosInstance"

export const fetchHotels = async ({ city, max_price }) => {
  if(city) {
    const response = await axiosInstance.get("/hotels/filter/city", {
      params: { city }
    })
    return response.data
  }
  if(max_price) {
    const response = await axiosInstance.get("/hotels/filter/price", {
      params: { max_price }
    })
    return response.data
  }
  const response = await axiosInstance.get("/hotels")
  return response.data
}

export const fetchHotelDetail = async ({ hotel_id }) => {
  const response = await axiosInstance.get(`/hotels/${hotel_id}`)
  return response.data
}