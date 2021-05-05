import React from "react";
import  './style.css';
import { Link } from "react-router-dom";


const Reset = () => {
  return (
    <div className='login'>
        <div className="login-container">
            <div className="login-header">
                <h2>Password Reset</h2>
                <p className='login-log'>Enter Your email below to proceed.</p>
            </div>
            <form className="login-body">
                <label>Email Address</label>
                <input type="email"/>
                <br/>

                <button>Reset Password</button>
                <hr/>
                <Link to='/'><span className='login-log'>Back to login</span></Link>
                
            </form>
        </div>
    </div>
  );
};

export default Reset;