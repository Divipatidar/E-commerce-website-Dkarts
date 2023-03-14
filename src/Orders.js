import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import './Orders.css';
import Order from "./Order";
import { useStateValue } from "./StateProvider";
function Orders(){
  const[{basket, user} , dispatch]=useStateValue();
  const[orders, setOrders]=useState([]);
  useEffect(() => {
    if(user){
    db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created','desc')
    .onSnapshot(snapshot =>(
      setOrders(snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data()
      })))
    ))
    } else{
      setOrders([])
    }
  },[user])
    return(
      <div className="orders">
           <h1>Your Order</h1>
           <div className="orders_container">
             {orders?.map(order =>(
               <Order order={order}/>
             ))}
           </div>
      </div> 
    )
}
export default Orders;
// http://127.0.0.1:5001/e-clone-d2cad/us-central1/api