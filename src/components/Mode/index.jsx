import React, { useEffect, useState } from "react";

const Mode = () => {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.add("dark");
      });
    } else {
      document.body.classList.remove("dark");
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("dark");
      });
    }
  }, [mode]);
  return (
    <div>
      <button className="mode-button" onClick={changeMode}>
        {mode === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Mode;
