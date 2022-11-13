import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { editorTheme, modalAtom, modalState } from "./appState";
import { AddLibModal } from "./modal";

export function Header() {
  const setModalState = useSetRecoilState(modalAtom);
  const isModalOn = useRecoilValue(modalAtom);
  const [theme, setTheme] = useRecoilState(editorTheme);

  function toggleModal() {
    setModalState(isModalOn === true ? false : true);
  }

  function handleThemeChange(evt) {
    console.log(evt.target.value);

    setTheme(evt.target.value);
  }

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

      <AddLibModal />
    </div>
  );
}
