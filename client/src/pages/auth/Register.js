import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { Input } from "antd";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const StyledRegisterContainer = styled.div`
  .main {
    min-height: 450px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    max-width: 80%;
  }

  .formCard {
    flex: 0 0 70%;
  }

  .switchCard {
    flex: 1;
  }
`;

const Register = ({ register, loading, isAuthenticated, userRole }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { email, username, password } = formData;

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    console.log(formData);

    register(username, email, password);

    setFormData({
      username: "",
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
          <div className="formCard  p-8">
            <h3 className="text-white text-2xl font-dosis font-bold text-center">
              Register A New Account
            </h3>
            <div className="form mt-10 ">
              <Input
                name="username"
                placeholder="Username"
                size="large"
                type="text"
                value={username}
                className="rounded-lg mb-3"
                onChange={(e) => handleFormChange(e)}
              />
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
                title="Register"
                className="bg-secondary-light text-white w-full justify-center hover:bg-secondary"
                onClick={handleFormSubmit}
                loading={loading}
              />
            </div>
          </div>
          <div className="rounded-xl bg-secondary-light switchCard p-8 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl mb-3  font-dosis font-bold">
              Already have an account?
            </h3>
            <Button title="Sign In" href="/login" />
          </div>
        </div>
      </div>
    </StyledRegisterContainer>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  userRole: state.auth.user?.role,
});

export default connect(mapStateToProps, { register })(Register);
