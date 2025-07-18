import React, { useState } from "react";

function ShortUrl(props) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [customShortcode, setCustomShortcode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!originalUrl || !shortcode) return; 
    const expiry = Date.now() + 1000000; 
    props.onShorten(originalUrl, shortcode, expiry, customShortcode);
    setOriginalUrl("");
    setShortcode("");
    setCustomShortcode("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Original URL:
        <input
          type="text"
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
        />
      </label>
      <label>
        Shortcode:
        <input
          type="text"
          value={shortcode}
          onChange={e => setShortcode(e.target.value)}
        />
      </label>
      <label>
        Custom Shortcode:
        <input
          type="text"
          value={customShortcode}
          onChange={e => setCustomShortcode(e.target.value)}
        />
      </label>
      <button type="submit">DO IT SHORT</button>
    </form>
  );
}

export default ShortUrl;