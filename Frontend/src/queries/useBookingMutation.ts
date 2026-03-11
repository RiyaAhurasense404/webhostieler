import { useMutation } from "@tanstack/react-query"

export const useBookingMutation = () => {
  return useMutation({
    mutationFn: (bookingData) => {
      console.log("Booking data:", bookingData)
      return Promise.resolve(bookingData)
    }
  })
}