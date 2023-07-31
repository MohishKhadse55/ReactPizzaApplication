import React from "react";
import { Link } from "react-router-dom";
import SearchOrders from "../features/order/SearchOrders.jsx";

function Header(props) {
  return (
    <header>
      <Link to="/">Pizza_Application.Co</Link>
      <SearchOrders />
      <p>Mohish</p>
    </header>
  );
}

export default Header;
