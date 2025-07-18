import React from "react";

function UrlTable(props) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", marginTop: "2em", background: "#fff" }}>
      <thead style={{ background: "#f0f0f0" }}>
        <tr>
          <th>Original URL</th>
          <th>Shortcode</th>
          <th>Custom Shortcode</th>
        </tr>
      </thead>
      <tbody>
        {props.entries && props.entries.length > 0 ? (
          props.entries.map((entry, i) => (
            <tr key={i}>
              <td>{entry.originalUrl}</td>
              <td>{entry.shortcode}</td>
              <td>{entry.customShortcode || "-"}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" style={{ textAlign: "center", color: "#888" }}>
              No URLs have been shortened yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UrlTable;