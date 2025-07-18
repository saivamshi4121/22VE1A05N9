

import React, { useState } from "react";

function isValidUrl(url) {
  try { new URL(url); return true; } catch { return false; }
}

function generateShortcode() {
  return Math.random().toString(36).substr(2, 6);
}

function ShortenerPage({ entries, setEntries }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!isValidUrl(originalUrl)) {
      setError("Invalid URL format.");
      return;
    }
    if (shortcode && !/^[a-zA-Z0-9]+$/.test(shortcode)) {
      setError("Shortcode must be alphanumeric.");
      return;
    }
    if (shortcode && entries.some(e => e.shortcode === shortcode)) {
      setError("Shortcode already exists.");
      return;
    }
    if (entries.length >= 5) {
      setError("You can only shorten up to 5 URLs at a time.");
      return;
    }
    let exp = parseInt(validity, 10);
    if (isNaN(exp) || exp <= 0) exp = 30;
    const newShortcode = shortcode || generateShortcode();
    const newEntry = {
      originalUrl,
      shortcode: newShortcode,
      expiry: Date.now() + exp * 60000,
    };
    setEntries([...entries, newEntry]);
    setOriginalUrl("");
    setValidity("");
    setShortcode("");
  }

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ color: "#1976d2" }}>URL Shortener</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Original URL"
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          required
          style={{ flex: 2, padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Shortcode (optional)"
          value={shortcode}
          onChange={e => setShortcode(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <input
          type="number"
          placeholder="Validity (minutes, optional)"
          value={validity}
          onChange={e => setValidity(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "4px" }}>Shorten</button>
      </form>
      {error && <div style={{ color: "red", marginBottom: "8px" }}>{error}</div>}
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", background: "#fff" }}>
        <thead style={{ background: "#f0f0f0" }}>
          <tr>
            <th>Original URL</th>
            <th>Shortened URL</th>
            <th>Expiry Time</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i}>
              <td>{entry.originalUrl}</td>
              <td>
                <a href={`/${entry.shortcode}`}>{window.location.origin}/{entry.shortcode}</a>
              </td>
              <td>{new Date(entry.expiry).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShortenerPage;