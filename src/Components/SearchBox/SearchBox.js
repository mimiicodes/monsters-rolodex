import React from "react";
import "./SearchBox.css";

export const SearchBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search Monsters"
      onChange={props.onSearchChange}
    />
  );
};
