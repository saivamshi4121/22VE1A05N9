import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortUrl from "./Components/ShortUrl";
import StatsPage from "./Pages/StatsPage";
import RedirectPage from "./Pages/Redirect";
import { LogProvider } from "../LoggingMiddleware/loginmiddle";

import ShortenerPage from "./Components/ShortenerPage";


function App() {
  const [entries, setEntries] = useState([]);

  return (
    <LogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShortenerPage entries={entries} setEntries={setEntries} />} />
          <Route path="/stats" element={<StatsPage entries={entries} />} />
          <Route path="/:shortcode" element={<RedirectPage entries={entries} />} />
        </Routes>
      </BrowserRouter>
    </LogProvider>
  );
}

export default App;