import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cdnLibraries, modalAtom, selectedLibraries } from "./appState";

export function AddLibModal() {
  const [libraries, setCdnLibraries] = useRecoilState(cdnLibraries);
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLib, setSelectedLibraries] = useRecoilState(selectedLibraries);

  function handleSelect(evt, item) {
    console.log(item);
    setSelectedLibraries([...selectedLib, item.latest]);
  }

  function handleRemoveLib(evt, item) {
    console.log(item);
    const res = selectedLib.filter(function (ele) {
      return ele !== item;
    });
    setSelectedLibraries(res);
  }

  const selLibElements = selectedLib.map(function (item, index) {
    return (
      <div key={index.toString()} style={{ padding: "0.5rem" }}>
        <span> {item}</span>{" "}
        <span
          style={{ backgroundColor: "red", color: "white", padding: "0.2rem" }}
          onClick={(evt) => handleRemoveLib(evt, item)}
        >
          remove
        </span>
      </div>
    );
  });

  let libraryElements = libraries.map(function (item, index) {
    return (
      <div
        onClick={(evt) => handleSelect(evt, item)}
        key={index.toString()}
        className="modal-search-item"
        style={{ padding: "0.5rem" }}
      >
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
          // console.log(data.results);
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
          className="input primary small filled"
          name="search-library"
          onChange={handleSearchChange}
          type="text"
        />
      </div>
      <div style={{ height: 200, overflow: "scroll" }}>{libraryElements}</div>
      <div className="sel-libraries" style={{ marginTop: 10 }}>
        <hr />
        <h5>Libraries Added</h5>
        {selLibElements}
      </div>
    </div>
  );
}
