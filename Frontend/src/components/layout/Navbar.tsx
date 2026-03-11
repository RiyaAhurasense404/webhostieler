import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useWishList } from "../../hooks/useWishList";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { wishlist } = useWishList();

  return (
    <div className="Nav">
      <h1 onClick={() => navigate("/")}>🏨 Webhostieler</h1>
      {user && (
        <>
          <button onClick={() => navigate("/wishlist")}>
            ❤️ Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
          </button>
          <button
            onClick={() => {
              logout();
              navigate("/loginPage");
            }}
          >
            🚪 Logout
          </button>
        </>
      )}
    </div>
  );
};
export default Navbar;
