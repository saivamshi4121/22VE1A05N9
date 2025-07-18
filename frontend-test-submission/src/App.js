import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StatsPage from "./Pages/StatsPage";
import RedirectPage from "./Pages/Redirect";


import ShortenerPage from "./Components/ShortenerPage";


function App() {
  const [entries, setEntries] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerPage entries={entries} setEntries={setEntries} />} />
        <Route path="/stats" element={<StatsPage entries={entries} />} />
        <Route path=":shortcode" element={<RedirectPage entries={entries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;