import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBaskettotle } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal(){
    const history=useHistory();
    const [{ user,basket}, dispatch] = useStateValue();

    const handleSubmit = () => {
      if (!user) {
        alert("Please Sign In to proceed.");
        return history.push('/login');
      }
      if (basket.length === 0) {
        alert("Cart is empty. Please add items into the cart.");
        return history.push('/');
      }
      history.push('/payment');
    };
    
    return(
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
             <>
            <p>
              
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox"/> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBaskettotle(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={handleSubmit}><b>Proceed to Checkout</b></button>
        </div>
    )
}
export default Subtotal;