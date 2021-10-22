import React, { useState } from "react";
import caesar from "../lib/caesar";
const EncryptPage = () => {
  const [plainText, setplainText] = useState("");
  const [encryptText, setencryptText] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setplainText(value);
  };

  const handleClick = () => {
    setencryptText(caesar.encrypt(3, plainText));
  };

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>암호화</button>
      <br />
      <p>{plainText}</p>
      <p>{encryptText}</p>
    </div>
  );
};

export default EncryptPage;
