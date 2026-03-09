import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingSchema } from "../schemas/bookingSchema"
import { useBookingMutation } from "../queries/useBookingMutation"
import toast from "react-hot-toast"

const BookingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { hotel_id } = location.state
  const { mutate } = useBookingMutation()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(bookingSchema)
  })

  const onSubmit = (data) => {
    mutate({ hotel_id, ...data })
    toast.success("Booking confirmed! 🎉")
    navigate("/hotels")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("phone")} placeholder="Phone" />
      <input {...register("address")} placeholder="Address" />
      <input {...register("checkin_date")} placeholder="YYYY-MM-DD" />
      <input {...register("checkout_date")} placeholder="YYYY-MM-DD" />
      <button type="submit">Book Now ✅</button>
    </form>
  )
}
export default BookingPage