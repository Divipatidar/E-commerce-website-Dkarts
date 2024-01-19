import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import'./Login.css';
import logo from './images/logo.jpg'
function Login(){
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const signin =e =>{
       e.preventDefault()
       auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }
    const register =e =>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>{
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return(
        
        <div className="login">
            <Link to='/'>
               <img className="login_logo"
                  src={logo}
                />
             </Link>
             <div className="login_container">
                 <h1>Sign-in</h1>
                 <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                     onChange={e =>setemail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={e => setpassword(e.target.value)}/>

                    <button type="submit"  onClick={signin}
                    className="login_signInbutton">Sign In</button>
                 </form>
                 <p>
                    By signing-in you agree to the AMAZON  CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                 </p>
                 <button onClick={register}
                 className="login_resisterbutton">Create your Account</button>
             </div>
        </div>
    )
}
export default Login;