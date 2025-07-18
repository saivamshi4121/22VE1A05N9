
import React, { useState } from "react";
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, Typography, Box } from "@mui/material";
import { nanoid } from "nanoid";

function isValidUrl(url) {
  try { new URL(url); return true; } catch { return false; }
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
    const newShortcode = shortcode || nanoid(6);
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
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" color="primary" gutterBottom>URL Shortener</Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <TextField
          label="Original URL"
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          required
          style={{ flex: 2 }}
        />
        <TextField
          label="Shortcode (optional)"
          value={shortcode}
          onChange={e => setShortcode(e.target.value)}
          style={{ flex: 1 }}
        />
        <TextField
          label="Validity (minutes, optional)"
          value={validity}
          onChange={e => setValidity(e.target.value)}
          type="number"
          style={{ flex: 1 }}
        />
        <Button type="submit" variant="contained" color="primary">Shorten</Button>
      </form>
      {error && <Typography color="error">{error}</Typography>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell>Shortened URL</TableCell>
            <TableCell>Expiry Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry, i) => (
            <TableRow key={i}>
              <TableCell>{entry.originalUrl}</TableCell>
              <TableCell>
                <a href={`/${entry.shortcode}`}>{window.location.origin}/{entry.shortcode}</a>
              </TableCell>
              <TableCell>{new Date(entry.expiry).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ShortenerPage;