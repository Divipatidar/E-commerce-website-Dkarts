import React, { useEffect } from "react";
import './App.css';
import Header from'./Header';
import Home from "./Home"; 
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import Orders from "./Orders";
const publicKey="pk_test_51OTOY8SDDlIxc91o4QNUU76Y5IxfThPwo4aciYGSpxwiX3VkXfgFrND2yGyLwrb3xgVrhZtvcYzScAweu8NoNdK300Bvf09CZL";
const promise=loadStripe(publicKey);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authuser) => {
      console.log("The user is  >>> ", authuser);

      if (authuser) {

        dispatch({
          type: "Set_user",
          user: authuser,
        });
      } else {
        
        dispatch({
          type: "Set_user",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="app">
        
        <Switch>
       
        <Route  exact path="/login">
            <Login />
        </Route>
        <Route  exact path="/orders">
            <Header />
            <Orders />
        </Route>
        <Route  exact path="/checkout">
            <Header />
            <Checkout />
            <Footer/>
        </Route>
        <Route  exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer/>
    
        </Route>
       <Route  exact path="/" > 
       {/* <Route  exact path="/" component={<Home/>}> */}
            <Header />
            <Home />
            <Footer/>
        </Route> 
        
        </Switch>
       
    </div>
    </Router>
   
  );
}

export default App;
