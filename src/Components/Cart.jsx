import { useCallback, useContext, useRef } from "react";
import useRazorpay from "react-razorpay";
import { CartContext } from "./cart-context";


const Cart = ()=>{
    const {cartData} = useContext(CartContext);
    let total = useRef();
    const Razorpay = useRazorpay();
    const razorPayDisplay =useCallback(async (total)=>{
        const options = {
            key :"rzp_test_HLxiXceLnuDswd",
            amount:total*100,
            currency:"INR",
            name:"Game-Site",
            description:"Gaming transaction",
            handler:(res)=>{
               console.log(res);
            },
            prefill:{
            name:"hussain",
            email:"hussainhafidh1@gmail.com",
            contact: "1234567890",
            },
            notes:{
              address:"work address"
            },
            theme:{
                color:"#3399cc",
            },
        }
        const rzp1 =new Razorpay(options);
        rzp1.open();
       
    }, [Razorpay])
    // total.current.price=0;
    return(
        <>
         <section>
            <section>
            {cartData.map((cartItem)=>{
            return( 
               
                <article>
                <image src="" alt=""/>
                <article>{cartItem.title}</article>
                <article>{cartItem.price}</article>
                <button>Remove from cart</button>
                </article>
            )
        })}
            </section> 
            <section>
                <article>Billing Information  </article>
                  {cartData.map((cart)=>{
                   // total.current.price =total.current.price + cart.price
                    return <article>
                        <span>{cart.title}</span>
                        <span>{cart.price}</span>
                    </article>
                  })}
                <article>Total Cash :2999 </article>
                <button onClick={()=>{razorPayDisplay(6000)}}>Checkout</button>
            </section>       
         </section>
       
        </>
    )
}
export default Cart;