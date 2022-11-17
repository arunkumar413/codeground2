import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  cdnLibraries,
  modalAtom,
  selectedLibraries,
  loginModalAtom,
  loginFormAtom,
} from "./appState";

export function LoginModal(props) {
  const [loginModalState, setLoginAtom] = useRecoilState(loginModalAtom);
  const [loginForm, setLoginForm] = useRecoilState(loginFormAtom);

  function handleCloseLoginModal() {
    setLoginAtom(false);
  }

  function handleLoginForm(evt) {
    setLoginForm(function (loginForm) {
      return { ...loginForm, [evt.target.name]: evt.target.value };
    });
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
        <button className="btn primary small success">Login</button>
      </div>
    </div>
  );
}