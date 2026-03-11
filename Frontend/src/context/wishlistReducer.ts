import { Hotel, WishListAction } from "../types"

const wishlistReducer = (state: Hotel[], action: WishListAction): Hotel[] => {
  switch(action.type) {
    case "Add":
      return [...state, action.payload as Hotel]
    case "Remove":
      return state.filter((item: Hotel) => item.id !== (action.payload as Hotel).id)
    case "Clear":
      return []
    default:
      return state
  }
}

export default wishlistReducer