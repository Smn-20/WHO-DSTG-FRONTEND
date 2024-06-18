import React, { useState } from "react";
import { connect } from "react-redux";
import { authLogin } from "../../store/actions/auth";
import { Link, Navigate } from "react-router-dom";
const Login = ({ authLogin, isAuthenticated, role }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    authLogin(email, password);
  };

  if (isAuthenticated) {
    return <Navigate replace to="conditions" />;
  }

  return (
    <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <div class="card">
            <div class="card-body">
              <div class="app-brand justify-content-center">
                <a href="index.html" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo"></span>
                  <span class="demo text-body fw-bolder" style={{fontSize:25}}>
                    World Health Organization
                  </span>
                </a>
              </div>
              <h4 class="mb-2">Welcome to our system!</h4>
              <p class="mb-4">Please sign-in to your account</p>

              <form
                id="formAuthentication"
                class="mb-3"
                onSubmit={(e) => onSubmit(e)}
                method="POST"
              >
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your email or username"
                    autofocus
                  />
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">
                      Password
                    </label>
                    <a href="forgotPassword.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div class="input-group input-group-merge">
                    <input
                      type={hide?'password':'text'}
                      id="password"
                      class="form-control"
                      name="password"
                      onChange={(e) => onChange(e)}
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span onClick={()=>setHide(!hide)} class="input-group-text cursor-pointer">
                      <i class={`bx ${hide?'bx-hide':'bx-show'}`}></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label class="form-check-label" for="remember-me">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100" type="submit">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
          class="custom-container"
          style={{ width: "100%",marginTop:30}}
        >
          <div class="row">
            <div class="col-md-6">
              <div>
                <img
                  style={{width:'100%',height:'auto'}}
                  src="../assets/img/layouts/WHO.jpg"
                  class="img-fluid"
                  alt="Image 1"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <img
                  src="../assets/img/layouts/rep.png"
                  class="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default connect(null, { authLogin })(Login);
