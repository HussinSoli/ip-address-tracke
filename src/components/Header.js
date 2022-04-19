import React, { useState } from "react";
import arrowImg from "../images/icon-arrow.svg";
import { useData } from "./data-context";
export default function Header() {
  const [ipInput, setIpInput] = useState("");
  const { changeIP } = useData();
  const handleSubmit = (e) => {
    e.preventDefault();
    changeIP(ipInput);
    setIpInput("");
  };
  return (
    <header>
      <h1 className="header_title"> IP Address Tracker</h1>
      <form className="header_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="header_input"
          value={ipInput}
          onChange={(e) => setIpInput(e.target.value)}
          required
        />
        <button className="btn_arrow">
          <img src={arrowImg} alt="=>" />
        </button>
      </form>
    </header>
  );
}
