import React , { useState }from "react";
import "./Login.css";

const Login = () => {
  const [showSignin, setShowSignin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const clickSignup = () => {
    setShowSignup(!showSignup);
    setShowSignin(!showSignin);
  }


  return (
    <div>
      <section id="boxCardLogin">
        <article className="login" id={((showSignin === true) ? "" : "non-active-login")}>
          <h2>Welcome Member</h2>
          <form>
            <div className="input-container focused input-filled">
              <input id="email" className="email" type="email" name="email" />
              <label for="email">Email Address</label>
            </div>
            <div className="input-container focused">
              <input
                id="password"
                className="password"
                type="password"
                name="password"
              />
              <label for="password">Password</label>
            </div>
            <a href="#" className="reset-pwd">
              Forget password?
            </a>

            <button href="#" className="btn" type="submit">
              Submit
            </button>
          </form>
          <p>
            Not a Member?
            <a href="#" className="register" onClick={clickSignup}>
              Register Now
            </a>
          </p>
        </article>

        <article className="signup" id={((showSignup === true) ? "" : "non-active-signup")}>
          <h2>Hi New Member</h2>
          <form>
            <div className="input-container focused input-filled">
              <input id="email" className="email" type="email" name="email" />
              <label for="email">Email Address</label>
            </div>
            <div className="input-container focused">
              <input
                id="password"
                className="password"
                type="password"
                name="password"
              />
              <label for="password">Password</label>
            </div>
            <br/>
            <br/>

            <button href="#" className="btn" type="submit">
              Register
            </button>
          </form>
          <p>
            Have account already?
            <a href="#" className="register" onClick={clickSignup}>
              Signin now
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Login;
