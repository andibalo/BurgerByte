import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { Input } from "antd";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

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

const Login = ({ isLoading, login, isAuthenticated, userRole }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    console.log(formData);

    login(email, password);

    setFormData({
      email: "",
      password: "",
    });
  };

  if (isAuthenticated) {
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
            <Button title="Sign Up" href="/register" />
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
                className="rounded-lg mb-5"
                onChange={(e) => handleFormChange(e)}
              />

              <Button
                title="Login"
                className="bg-secondary-light text-white w-full justify-center hover:bg-secondary"
                onClick={handleFormSubmit}
                loading={isLoading}
              />
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
