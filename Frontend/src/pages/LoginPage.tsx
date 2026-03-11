import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas/loginSchema"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

type LoginFormData = z.infer<typeof loginSchema>

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [loginFailed, setLoginFailed] = useState<string | null>(null)

  const { register, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    const result = await login(data.username, data.password)
    if(result.success) navigate("/hotels")
    else setLoginFailed(result.error || "Kuch gadbad ho gayi!")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <input {...register("password")} type="password" placeholder="Password" />
      {loginFailed && <p style={{color: "red"}}>{loginFailed} ❌</p>}
      <button type="submit">Login</button>
      <p onClick={() => navigate("/register")}>
        Account Not Found? Register Now!
      </p>
    </form>
  )
}

export default LoginPage