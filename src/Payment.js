import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useInsertionEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link,useHistory } from "react-router-dom";
import Checkoutproduct from "./Checkoutproduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { getBaskettotle} from "./reducer";
import axios from "./axios";
import {db}  from "./firebase";

// import { db } from "./firebase";


function Payment(){
    const [{ basket, user }, dispatch] = useStateValue();
    const history =useHistory();
    const stripe=useStripe();
    const elements=useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState();
    // const stringclientSecret=clientSecret.toString();

    useEffect(() =>{
       const getClientSecret =async()=>{
        const response = await axios({
            method:'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                },
            url:`/payment/create?total=${getBaskettotle(basket)*100}`
        });  
        setClientSecret(response.data.clientSecret)
       }
       getClientSecret();
       console.log("The secret is>>>",clientSecret)
       

    },[basket]);
    

    const handlesubmit = async(event) =>{
        event.preventDefault();
        setProcessing(true)
        const payload =await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement),
            },
            
        }).then(({paymentIntent})=>{
           
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                    basket: basket,
                  amount: paymentIntent.amount,
                 created:paymentIntent.created
            })
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type:'Empty basket'
            })

            history.replace("/orders")
        })
    }
    const handlechange =event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return(
        <div className="payment">
           <div className="payment_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
              
              <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(item =>(
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
              <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                     {/* <p>{user?.email}</p> */}
                     <div className="payment_info">
								<p>
									<b>Email  :   </b><input name="email" className="text" type="email" defaultValue={user?.email} required></input>
								</p>
								<p>
									<b> Name  :   </b><input name="name" className="text" type="text" required />
								</p>
								<p>
									<b>City   :    </b> <input name="city" className="text" type="text" required />
								</p>
								<p>
									<b>Address   :   </b> <input name="address" className="text" type="text" required />
								</p>
								<p>
									<b>State    :    </b><input name="province" className="text" type="text" required />
								</p>
								<p>
									<b>Postal Code    :   </b> <input name="postal_code" className="text" type="text" required />
								</p>
								<p>
									<b>Country    :    </b><input name="country" className="text" type="text" required />
								</p>
							</div>
                    </div>
              </div>
              <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                     <form onSubmit={handlesubmit}>
                        <CardElement onChange={handlechange}/>
                        <div className="payment_pricecontainer">
                        <p className="disclaimer">
									Use 4242 4242 4242 4242, a valid expiration date in the future, and any CVC number. Please dont use your real credit card info because this payment in test mode!
								</p>
                                 <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBaskettotle(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                        </div>
                        {error && <div>{error}</div>}
                     </form>
                </div>
              </div>
           </div>
        </div>
    )
}
export default Payment;