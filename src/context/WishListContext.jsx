import { createContext, useEffect, useReducer } from "react"
import wishlistReducer from "./wishlistReducer"

export const WishListContext = createContext(null)

export const WishListProvider = ({ children }) => {

  const [wishlist, dispatch] = useReducer(wishlistReducer, [], () => {
    const saved = localStorage.getItem("wishlist")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() =>{
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  },[wishlist])
  return (
    <WishListContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishListContext.Provider>
  )
}