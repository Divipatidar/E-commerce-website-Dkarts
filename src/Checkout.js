import React from "react";
import"./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout(){
    const [{basket,user}, dispatch] = useStateValue();
    return(
        <div className="checkout">
           <div className="checkout_left">
              <img className="checkout_ad"
               src="https://www.shutterstock.com/image-photo/full-body-portrait-two-idyllic-600nw-2275927771.jpg" 
               alt=""/>
               <div>
                <h3>Hello,{user?.email}</h3>
                <h2 className="checkout_title">Your shopping Basket</h2>
                
                {basket.map(item => (
                 <Checkoutproduct
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                />
                 ))}
                
               </div>
           </div>
           <div className="checkout_right">
               <Subtotal/>
           </div>
        </div>
        
        
   );

}
export default Checkout;