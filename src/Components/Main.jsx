import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Item from "./item";

const Main = ()=> {
 
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=> {
    
        axios.get('http://localhost:1337/api/best-sellers').then((bestSeller)=> {
            setBestSeller(bestSeller.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
   
    return (
        <>
            <Header/>
            <section>
                <article>Best Sellers</article>
                {bestSeller.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
             
            </section>
        </>
    )
}
export default Main

//then block for promise or to get data & catch block to catch error
//if we hv loader in our app, then to git rid of loader finally block is written
