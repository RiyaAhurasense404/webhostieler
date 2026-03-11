import { createContext, useState, ReactNode } from "react"
import { saveToStorage, getFromStorage, removeFromStorage } from "../utils/localStorage"
import axios from "axios"
import { AuthContextType, User } from "../types"

export const AuthContext = createContext<AuthContextType | null>(null)

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(() => getFromStorage("user") as User || null)

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password
      })
      const { token, username: uname } = response.data
      const userData: User = { username: uname, token }
      setUser(userData)
      saveToStorage("user", userData)
      return { success: true }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      return {
        success: false,
        error: error.response?.data?.error || "Kuch gadbad ho gayi!"
      }
    }
  }

  const logout = (): void => {
    setUser(null)
    removeFromStorage("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}