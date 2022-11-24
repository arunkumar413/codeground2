import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { AccountModal } from "./AcccountModal";
import {
  editorTheme,
  modalAtom,
  modalState,
  userLoginInfo,
  loginModalAtom,
  accountModalAtom,
  editorValues,
  selectedLibraries,
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
  const [isAccountModalOn, setAcountModal] = useRecoilState(accountModalAtom);
  const [editorVal, setEditorValues] = useRecoilState(editorValues);
  const [selLibraries, setSelLibraries] = useRecoilState(selectedLibraries);

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

  async function saveSnippets() {
    console.log("######## Save Snippets ###############");
    console.log(editorVal.html);
    console.log(editorVal.css);
    console.log(editorVal.js);
    let res = await fetch("http://localhost:3004/save-snippets", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        snippets: editorVal,
        sessionid: userInfo.sessionId,
        email: userInfo.email,
        libraries: selLibraries,
      }),
    });
    let data = await res.json();
    console.log(res.status);
    if (res.status === 201) {
      console.log("successfully saved snippets");
    } else {
      console.log("error saving snippets");
    }
  }

  async function handleLogout() {
    console.log("clicked logout");

    let res = await fetch("http://localhost:3004/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("email") }),
    });
    let data = await res.json();
    if ((data.status = "successfully logged out")) {
      localStorage.setItem("sessionID", null);
      localStorage.setItem("email", null);
      setUserInfo(function (prevState) {
        return {
          ...prevState,
          isLoggedIn: false,
          sessionId: null,
          email: null,
        };
      });
    }
  }

  useEffect(function () {}, []);

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

      <button onClick={saveSnippets} className="btn small success">
        {" "}
        Save
      </button>

      <div className="account-drop-down">
        <button className="btn small outlined primary">Account</button>
        <div className="dropdown-content">
          {userInfo.isLoggedIn === true ? (
            <button
              onClick={handleLogout}
              className="btn small primary outlined"
            >
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
          <button className="btn small primary outlined">Settings</button>
          {/* {userInfo.email !== null ? <button>{userInfo.email}</button> : ""} */}
        </div>
      </div>

      <AddLibModal />
      <LoginModal isModalOn={isLoginModalOn} />
      {/* <AccountModal /> */}
    </div>
  );
}
