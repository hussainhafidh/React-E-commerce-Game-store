import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cart-context";
import "./Header.css"
const Header = ()=> {
 
    const {cartData} = useContext(CartContext);
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar">

                <section className="logo-name">
                    Game Store Site
                </section>
                
                <section onClick={()=> {navigate('/cart')}}>
                    <span>{cartData.length}</span>
                    <i className="fa  fa-shopping-cart"></i>
                </section>

            </nav>
        </>
    )
}
export default Header;