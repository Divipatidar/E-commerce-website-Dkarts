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
               src="https://bgr.com/wp-content/uploads/2020/10/amazon-prime-day.jpg?quality=82&strip=all&w=1400&h=810&crop=1" 
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