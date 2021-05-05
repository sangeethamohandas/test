import React from "react";
import  './style.css';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className='login'>
        <div className="login-container">
            <div className="login-header">
                <h2>Login</h2>
                <p className='login-log'>Sign in to your account to continue.</p>
            </div>
            <form className="login-body">
                <label>Email Address</label>
                <input type="email"/>
                <br/>
                <label>Password</label>
                <input type="password"/>
                <br/>
                <Link to='/resetpassword'><span className='login-log'>Forgot Your Password?</span></Link>
                
                <button>Sign in</button>
            </form>
        </div>
    </div>
  );
};

export default Login;