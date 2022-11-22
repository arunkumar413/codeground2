import React from "react";

export function AccountModal() {
  return (
    <div
      style={{ display: loginModalState === true ? "block" : "none" }}
      className="AccountModal"
    >
      <p>Account Modal</p>
      <div class="dropdown">
        <span>Mouse over me</span>
        <div class="dropdown-content">
          <p>Hello World!</p>
        </div>
      </div>
    </div>
  );
}
