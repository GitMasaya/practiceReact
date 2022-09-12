import React from "react";

const App = () => {
  const onClickButton = () => alert("onClickButton関数");
  const contentSytle = {
    color: "green",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "blue" }}>こんにちは‼</h1>
      <p style={contentSytle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
