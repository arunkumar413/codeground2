import React from "react";
import { useRecoilState } from "recoil";
import {
  cdnLibraries,
  modalAtom,
  selectedLibraries,
  loginModalAtom,
} from "./appState";

export function LoginModal(props) {
  const [loginModalState, setLoginAtom] = useRecoilState(loginModalAtom);

  function handleCloseLoginModal() {
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
        }}
        className="login-modal-header"
      >
        <h4>Login</h4>
        <span></span>
        <span></span>
        <span onClick={handleCloseLoginModal}>x</span>
      </div>
      <div className="login-form">
        <label htmlFor="username">User name</label>
        <input
          className="input primary outlined small"
          name="username"
          type="text"
        />
        <label htmlFor="password"> Password</label>
        <input
          className="input primary outlined small"
          type="password"
          name="password"
        />
        <button className="btn primary small success">Login</button>
      </div>
    </div>
  );
}
