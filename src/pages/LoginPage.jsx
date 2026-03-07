import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas/loginSchema"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  })
  console.log(errors)


  const onSubmit = (data) => {
    console.log("submit hua", data)
    const success = login(data.username, data.password)
    if(success) navigate("/hotels")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Enter: @@@@" />
      <input {...register("password")} type="password" placeholder="Enter: 12345" />
      <button type="submit">Login</button>
    </form>
  )
}
export default LoginPage