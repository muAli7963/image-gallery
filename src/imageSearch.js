import React, { useState } from "react";

const ImageSearch = ({ searchTerm }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchTerm(text);
  };
  return (
    <div className="wrap">
      <form onSubmit={onSubmit} className="search">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="searchTerm"
          placeholder="search image"
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
