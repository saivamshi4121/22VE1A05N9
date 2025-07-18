import React from "react";

function UrlTable(props) {
    return (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", marginTop: "2em", background: "#fff" }}>
            <thead style={{ background: "#f0f0f0" }}>
                <tr>
                    <th>Original URL</th>
                    <th>Shortened URL</th>
                    <th>Expiry Time</th>
                    <th>Custom Shortcode</th>
                </tr>
            </thead>
            <tbody>
                {props.entries && props.entries.length > 0 ? (
                    props.entries.map(function(entry, i) {
                        return (
                            <tr key={i}>
                                <td style={{ wordBreak: "break-all" }}>{entry.originalUrl}</td>
                                <td>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={window.location.origin + "/" + (entry.customShortcode ? entry.customShortcode : entry.shortcode)}
                                    >
                                        {window.location.origin + "/" + (entry.customShortcode ? entry.customShortcode : entry.shortcode)}
                                    </a>
                                </td>
                                <td>{new Date(entry.expiry).toLocaleString()}</td>
                                <td>{entry.customShortcode ? entry.customShortcode : "-"}</td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
                            No URLs have been shortened yet.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default UrlTable;