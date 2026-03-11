export interface Hotel {
    id: number
    name: string
    city: string
    price: number
    rating: number
    image_url: string
    description?: string
  }
  
  export interface User {
    username: string
    token: string
  }
  
  export interface AuthContextType {
    user: User | null
    login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
    logout: () => void
  }
  
  export interface WishListContextType {
    wishlist: Hotel[]
    dispatch: React.Dispatch<WishListAction>
  }
  
  export interface WishListAction {
    type: "Add" | "Remove" | "Clear"
    payload?: Hotel
  }