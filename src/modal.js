import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cdnLibraries, modalAtom } from "./appState";

export function AddLibModal() {
  const [libraries, setCdnLibraries] = useRecoilState(cdnLibraries);
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const [searchTerm, setSearchTerm] = useState("");

  let libraryElements = libraries.map(function (item, index) {
    return (
      <div className="modal-search-item" style={{ padding: "0.5rem" }}>
        <div>{item.name}</div>
      </div>
    );
  });

  function toggleModal() {
    setModalState(!modalState);
  }

  function handleSearchChange(evt) {
    setSearchTerm(evt.target.value);
  }

  useEffect(
    function () {
      //fetchlibraries
      fetch(`https://api.cdnjs.com/libraries?search=${searchTerm}`)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data.results);
          setCdnLibraries(data.results);
        });
    },
    [searchTerm]
  );

  return (
    <div
      className="add-lib-modal"
      style={{ display: modalState === true ? "block" : "none" }}
    >
      <div className="modal-header">
        <h5>Search for a library</h5>
        <span onClick={toggleModal} className="modal-header-close-button ">
          {" "}
          x{" "}
        </span>{" "}
      </div>
      <div>
        <input
          name="search-library"
          onChange={handleSearchChange}
          type="text"
        />
      </div>
      {libraryElements}
    </div>
  );
}
