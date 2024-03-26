import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>

      <div className="example">
        <Example examples={props.meaning.example} />
      </div>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
