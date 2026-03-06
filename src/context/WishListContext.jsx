import { createContext, useReducer } from "react"
import wishlistReducer from "./wishlistReducer"

export const WishListContext = createContext(null)

export const WishListProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [])

  return (
    <WishListContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishListContext.Provider>
  )
}