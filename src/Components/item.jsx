import { useContext } from "react";
import { CartContext } from "./cart-context";
import "./item.css"

const Item = ({ item }) => {
    const { addCartData } = useContext(CartContext);
    return (
        <div className="container">

            <section className="card">

                <img className="card-image" src={`http://localhost:1337${item?.data?.attributes?.url}`} alt="game" />

                <article className="card-img">{item.image}</article>
{/* image is not frtching and above code is required? //after item? there was image */}

                <article className="card-title">{item.title}</article>

                <article className="card-description">{item.description}</article>

                <section className="card-footer">
                    <article className="price">{item.price}</article>
                    <button className="cart-button" onClick={() => { addCartData(item) }}>Add to Cart</button>
                </section>

            </section>
        </div>
    )
}
export default Item;