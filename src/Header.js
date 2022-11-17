import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  editorTheme,
  modalAtom,
  modalState,
  userLoginInfo,
  loginModalAtom,
} from "./appState";
import { LoginModal } from "./LoginModal";
import { AddLibModal } from "./modal";

export function Header() {
  const setModalState = useSetRecoilState(modalAtom);
  const isModalOn = useRecoilValue(modalAtom);
  const [theme, setTheme] = useRecoilState(editorTheme);
  const [userInfo, setUserInfo] = useRecoilState(userLoginInfo);
  const [isLoginModalOn, setLoginModal] = useState(false);
  const [loginModalState, setLoginAtom] = useRecoilState(loginModalAtom);

  function toggleModal() {
    setModalState(isModalOn === true ? false : true);
  }

  function handleThemeChange(evt) {
    console.log(evt.target.value);
    setTheme(evt.target.value);
  }

  function toggleLoginModal() {
    console.log("login clicked");
    setLoginModal(isLoginModalOn === true ? false : true);
    setLoginAtom(loginModalState === true ? false : true);
  }

  function handleLogout() {
    console.log("clicked logout");
  }

  useEffect(function () {
    let userInfo = localStorage.getItem(userInfo);
    if (userInfo !== null) {
      setUserInfo(function (prevState) {
        return {
          ...prevState,
          sessionId: userInfo.sessionId,
          isLoggedIn: true,
          userName: userInfo.userName,
        };
      });
    }
  }, []);

  return (
    <div className="header">
      <select onChange={handleThemeChange} name="Theme">
        <option value="monokai">monokai</option>
        <option value="github">github</option>
        <option value="tomorrow">tomorrow</option>
        <option value="kuroir">kuroir</option>
        <option value="twilight">twilight</option>
        <option value="xcode">xcode</option>
        <option value="textmate">textmate</option>
        <option value="solarized_dark">solarized_dark</option>
        <option value="solarized_light">solarized_light</option>
        <option value="terminal">terminal</option>
      </select>

      <button className="btn primary small outlined"> HTML</button>
      <button className="btn primary small outlined"> CSS</button>
      <button className="btn primary small outlined">JavaScript</button>
      <button className="btn primary small outlined">Reset view</button>

      <button className="btn primary small outlined" onClick={toggleModal}>
        Add a library
      </button>
      <button className="btn primary small outlined"> Fork</button>

      <button className="btn small success"> Save</button>
      {userInfo.isLoggedIn ? (
        <button onClick={handleLogout} className="btn small primary outlined">
          {" "}
          Logout
        </button>
      ) : (
        <button
          onClick={toggleLoginModal}
          className="btn small primary outlined"
        >
          {" "}
          Login
        </button>
      )}

      <AddLibModal />
      <LoginModal isModalOn={isLoginModalOn} />
    </div>
  );
}
