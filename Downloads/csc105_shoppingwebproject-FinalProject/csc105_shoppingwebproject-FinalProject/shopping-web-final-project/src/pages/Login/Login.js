//import axios from "axios";
//import Cookies from "cookies";
import React , { useState }from "react";
import { useContext } from "react";
import UserService from "../../Services/UserService";
import "./Login.css";
import {connect} from 'react-redux';
import {authenticateUser} from '../../Services/index';

const Login = (props) => {
  const [showSignin, setShowSignin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  
  

  const clickSignup = () => {
    setShowSignup(!showSignup);
    setShowSignin(!showSignin);
  }
  const changeEmailHandler = (event) =>{
    setEmail(event.target.value);
  }
  const changePasswordHandler = (event) =>{
    setPassword(event.target.value);
  }
  const changeEmailLoginHandler = (event) =>{
    setEmailLogin(event.target.value);
    event.preventDefault();
    console.log(emailLogin);
    props.authenticateUser(emailLogin, passwordLogin);
    console.log(JSON.stringify(props.auth)); 
  }
  const changePasswordLoginHandler = (event) =>{
    setPasswordLogin(event.target.value);
    event.preventDefault();
    console.log(passwordLogin);
    props.authenticateUser(emailLogin, passwordLogin);
    console.log(JSON.stringify(props.auth)); 
  }


  const loginSubmit = (e) =>{
    e.preventDefault();
    props.authenticateUser(emailLogin, passwordLogin);
    console.log(JSON.stringify(props.auth)); 
    /*e.preventDefault();

    const data = {
      emailLogin: emailLogin,
      passwordLogin: passwordLogin
    }

    axios.post("http://localhost:8080/auth/login", data).then((res) =>{
      //console.log(res)
    }).catch(err => {
      console.log(err)
    })*/
    //ส่งข้อมูล onclick ไปหา Login
    
    /*console.log(emailLogin);
    console.log(passwordLogin);*/
    setTimeout(() => {
      if(props.auth.users.verify && Object.keys(props.auth.users).length>1){
        console.log(Object.keys(props.auth.users).length>1);
        return props.history.push('/profile');
      }else{
        alert("Please try again");
        return props.history.push('/');
      }
    });
  }
 

  const registerUser = (event) =>{
    event.preventDefault();
    let user = {
      email: email,
      password: password 
    };
    UserService.registerUser(user).then(res =>{
      alert("Success Registration");
      setEmail("");
      setPassword("");
      window.location.href = "/login";
    });

  }

  return (
    <div>
      <section id="boxCardLogin">
        <article className="login" id={((showSignin === true) ? "" : "non-active-login")}>
          <h2>Welcome Member</h2>
          <form>
            <div className="input-container focused input-filled">
              <input id="email" className="email" type="email" name="email" required onChange={changeEmailLoginHandler}/>
              <label for="email">Email Address</label>
            </div>
            <div className="input-container focused">
              <input
                id="password"
                className="password"
                type="password"
                name="password" required onChange={changePasswordLoginHandler}
              />
              <label for="password">Password</label>
            </div>
            <a href="#" className="reset-pwd">
              Forget password?
            </a>

            <button href="#login" 
            className="btn" type="submit" variant="successLogin"
            onClick={loginSubmit} disabled={emailLogin.length===0 || passwordLogin.length===0}>
              Submit
            </button>
          </form>
          <p>
            Not a Member?
            <a href="#register" className="register" onClick={clickSignup}>
              Register Now
            </a>
          </p>
        </article>

        <article className="signup" id={((showSignup === true) ? "" : "non-active-signup")}>
          <h2>Hi New Member</h2>
          <form>
            <div className="input-container focused input-filled">
              <input id="email" className="email" type="email" name="email" required value={email} onChange={changeEmailHandler}/>
              <label for="email">Email Address</label>
            </div>
            <div className="input-container focused">
              <input
                id="password"
                className="password"
                type="password"
                name="password" required
                value={password} onChange={changePasswordHandler}
              />
              <label for="password">Password</label>
            </div>
            <br/>
            <br/>

            <button href="#register" 
            className="btn" type="submit" 
            onClick={registerUser}>
              Register
            </button>
          </form>
          <p>
            Have account already?
            <a href="#login" className="register" onClick={clickSignup}>
              Signin now
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};


const mapStateToProps = state => {
  return{
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return{
    authenticateUser: (emailLogin, passwordLogin) => dispatch(authenticateUser(emailLogin, passwordLogin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
