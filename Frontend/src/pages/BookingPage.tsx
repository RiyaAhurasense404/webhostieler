import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingSchema } from "../schemas/bookingSchema"
import { useBookingMutation } from "../queries/useBookingMutation"
import toast from "react-hot-toast"
import { z } from "zod"

type BookingFormData = z.infer<typeof bookingSchema>

interface LocationState {
  hotel_id: number
  hotel_name: string
}

const BookingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { hotel_id } = location.state as LocationState
  const { mutate } = useBookingMutation()

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  })

  const onSubmit = (data: BookingFormData) => {
    mutate({ hotel_id, ...data })
    toast.success("Booking confirmed! 🎉")
    navigate("/hotels")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register("phone")} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}
      <input {...register("address")} placeholder="Address" />
      {errors.address && <p>{errors.address.message}</p>}
      <input {...register("checkin_date")} placeholder="YYYY-MM-DD" />
      {errors.checkin_date && <p>{errors.checkin_date.message}</p>}
      <input {...register("checkout_date")} placeholder="YYYY-MM-DD" />
      {errors.checkout_date && <p>{errors.checkout_date.message}</p>}
      <button type="submit">Book Now ✅</button>
    </form>
  )
}

export default BookingPage