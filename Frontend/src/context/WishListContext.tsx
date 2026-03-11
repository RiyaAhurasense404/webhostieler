import { createContext, useEffect, useReducer, ReactNode } from "react"
import wishlistReducer from "./wishlistReducer"
import { getFromStorage, saveToStorage } from "../utils/localStorage"
import { Hotel, WishListContextType, WishListAction } from "../types"

export const WishListContext = createContext<WishListContextType | null>(null)

interface Props {
  children: ReactNode
}

export const WishListProvider = ({ children }: Props) => {
  const [wishlist, dispatch] = useReducer<Hotel[], [WishListAction]>(
    wishlistReducer,
    (getFromStorage("wishlist") as Hotel[]) || []
  )

  useEffect(() => {
    saveToStorage("wishlist", wishlist)
  }, [wishlist])

  return (
    <WishListContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishListContext.Provider>
  )
}