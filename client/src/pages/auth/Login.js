import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { Input, message } from "antd";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const StyledRegisterContainer = styled.div`
  .main {
    min-height: 450px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    max-width: 80%;
  }

  .formCard {
    flex: 0 0 70%;
  }

  .switchCard {
    flex: 1;
  }
`;

const Login = ({ isLoading, login, isAuthenticated, userRole, location }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [captchaText, setCaptchaText] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    if (captchaText === "") {
      message.warning("Please insert captcha");
      return;
    }

    if (!validateCaptcha(captchaText)) {
      message.warning("Captcha Does Not Match");
      setCaptchaText("");
      return;
    }

    const result = await login(email, password);

    if (result.status === "error") {
      if (result.errors) {
        result.errors.map((error, i) => {
          message.warning(error.msg, 1.5 + i / 10);
        });

        return;
      }

      message.warning(result.message);

      return;
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  if (isAuthenticated) {
    if (location.state?.from) {
      return <Redirect to={location.state?.from} />;
    }

    return <Redirect to={`${userRole === "user" ? "/" : "/admin/products"}`} />;
  }

  return (
    <StyledRegisterContainer className="bg-secondary min-h-screen">
      <Navbar fixed={false} brandOnly />
      <div className="container py-16 ">
        <div className="main bg-primary rounded-xl  flex mx-auto shadow-xl">
          <div className="rounded-xl bg-secondary-light switchCard p-8 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl mb-3  font-dosis font-bold">
              Don't have an account?
            </h3>
            <Button
              title="Sign Up"
              href={{
                pathname: "/register",
                state: {
                  fromLogin: true,
                },
              }}
            />
          </div>
          <div className="formCard  p-8">
            <h3 className="text-white text-2xl font-dosis font-bold text-center">
              Welcome Back!
            </h3>
            <div className="form mt-10 ">
              <Input
                name="email"
                placeholder="Email"
                size="large"
                type="email"
                value={email}
                className="rounded-lg mb-3"
                onChange={(e) => handleFormChange(e)}
              />
              <Input
                name="password"
                placeholder="Password"
                size="large"
                type="password"
                value={password}
                className="rounded-lg mb-3"
                onChange={(e) => handleFormChange(e)}
              />

              <Button
                title="Login"
                className="bg-secondary-light text-white w-full justify-center  hover:bg-secondary"
                onClick={handleFormSubmit}
                loading={isLoading}
              />
              <div className="inline-block mt-5 ">
                <LoadCanvasTemplate />
                <Input
                  name="captcha"
                  placeholder="Insert Captcha Text"
                  type="text"
                  value={captchaText}
                  className="rounded-lg mt-1"
                  onChange={(e) => setCaptchaText(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledRegisterContainer>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  userRole: state.auth.user?.role,
});

export default connect(mapStateToProps, { login })(Login);
