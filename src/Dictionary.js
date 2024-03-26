import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Gallery from "./Gallery";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "ta8d0cd5f43b6fe4f1cd0019401obcd1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionRespons);

    let photoApiKey = "ta8d0cd5f43b6fe4f1cd0019401obcd1";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function handleDictionRespons(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (photos) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine. yoga, book...
          </div>
        </section>
        <Results results={results} />
        <Gallery photos={photos} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine. yoga, book...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  }
}
