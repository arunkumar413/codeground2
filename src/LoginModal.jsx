import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  cdnLibraries,
  modalAtom,
  selectedLibraries,
  loginModalAtom,
  loginFormAtom,
  loginStatusAtom,
  userLoginInfo,
} from "./appState";

export function LoginModal(props) {
  const [loginModalState, setLoginAtom] = useRecoilState(loginModalAtom);
  const [loginForm, setLoginForm] = useRecoilState(loginFormAtom);
  const [loginStatus, setLoginStatus] = useRecoilState(loginStatusAtom);
  const [loginInfo, setLoginInfo] = useRecoilState(userLoginInfo);

  function handleCloseLoginModal() {
    setLoginAtom(false);
  }

  function handleLoginForm(evt) {
    setLoginForm(function (loginForm) {
      return { ...loginForm, [evt.target.name]: evt.target.value };
    });
  }

  async function handleLoginProcess() {
    console.log("login process");
    let res = await fetch("http://localhost:3004/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });

    let data = await res.json();
    console.log(data);
    if (data.status === "login success") {
      localStorage.setItem("sessionID", data.sessionID);
      localStorage.setItem("email", data.email);

      setLoginInfo(function (prevState) {
        return {
          ...prevState,
          isLoggedIn: true,
          email: data.email,
          sessionId: data.sessionID,
        };
      });
    }
    setLoginAtom(false);
  }

  return (
    <div
      style={{ display: loginModalState === true ? "block" : "none" }}
      className="LoginModal"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          justifyContent: "space-between",
          alignItems: "flex-start",
          textAlign: "right",
        }}
        className="login-modal-header"
      >
        <h4>Login</h4>
        <span></span>
        <span></span>
        <span onClick={handleCloseLoginModal}>x</span>
      </div>
      <div className="login-form">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleLoginForm}
          className="input primary outlined small"
          name="email"
          type="email"
        />
        <label htmlFor="password"> Password</label>
        <input
          onChange={handleLoginForm}
          className="input primary outlined small"
          type="password"
          name="password"
        />
        <button
          onClick={handleLoginProcess}
          className="btn primary small success"
        >
          Login
        </button>
      </div>
    </div>
  );
}
