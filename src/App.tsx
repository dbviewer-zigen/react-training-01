import React from "react";

import { Routes, Route } from "react-router-dom";
import { App as Paticipant } from "./Paticipant/App";
import { App as Owner } from "./Owner/App";
export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Owner />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/paticipant" element={<Paticipant />} />
      </Routes>
    </div>
  );
};
