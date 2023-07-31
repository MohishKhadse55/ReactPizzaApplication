import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrders(props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Search Orders #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrders;
