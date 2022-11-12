import React from "react";
import { useRecoilState } from "recoil";
import { cdnLibraries, modalAtom } from "./appState";

export function AddLibModal() {
  const [libraries, setCdnLibraries] = useRecoilState(cdnLibraries);
  // const [modalAtom, setModalState] = useRecoilState(modalAtom);

  let libraryElements = libraries.map(function (item, index) {
    return (
      <div>
        <div>{item}</div>
      </div>
    );
  });

  return (
    <div className="add-lib-modal">
      <p> Modal</p>
    </div>
  );
}
