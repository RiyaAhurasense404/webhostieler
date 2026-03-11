import { useMutation } from "@tanstack/react-query"

interface BookingData {
  hotel_id: number
  name: string
  phone: string
  address: string
  checkin_date: string
  checkout_date: string
}

export const useBookingMutation = () => {
  return useMutation<BookingData, Error, BookingData>({
    mutationFn: (bookingData: BookingData) => {
      console.log("Booking data:", bookingData)
      return Promise.resolve(bookingData)
    }
  })
}