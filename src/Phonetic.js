import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <p>{props.phonetic}</p>
    </div>
  );
}
