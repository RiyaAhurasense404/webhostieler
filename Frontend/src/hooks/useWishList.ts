import { useContext } from "react"
import { WishListContext } from "../context/WishListContext"
import { WishListContextType } from "../types"

export const useWishList = (): WishListContextType => {
  const context = useContext(WishListContext)
  if(!context) throw new Error("useWishList must be used within WishListProvider!")
  return context
}