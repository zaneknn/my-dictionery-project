import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiKey = "ta8d0cd5f43b6fe4f1cd0019401obcd1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
