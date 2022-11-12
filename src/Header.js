import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalAtom, modalState } from "./appState";
import { AddLibModal } from "./modal";

export function Header() {
  const setModalState = useSetRecoilState(modalAtom);
  const isModalOn = useRecoilValue(modalAtom);

  function toggleModal() {
    setModalState(isModalOn === true ? false : true);
  }

  return (
    <div className="header">
      <button> HTML</button>
      <button> CSS</button>
      <button>JavaScript</button>
      <button onClick={toggleModal}>Add a library</button>
      <button> Fork</button>
      <button> Save</button>
      <AddLibModal />
    </div>
  );
}
