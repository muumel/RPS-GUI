import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <section id="boxCardLogin">
        <article>
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
            Not a Member?{" "}
            <a href="#" className="register">
              Register Now
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Login;
