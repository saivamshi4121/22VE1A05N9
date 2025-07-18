import React from "react";

function ShortUrl(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                    <label>
                        Original URL:<br />
                        <input
                            type="text"
                            name="url"
                            value={props.url}
                            onChange={props.onChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                    {props.errorUrl && (
                        <div style={{ color: "red" }}>{props.errorUrl}</div>
                    )}
                </div>
                <div style={{ flex: 1, marginLeft: "1rem" }}>
                    <label>
                        Shortcode:<br />
                        <input
                            type="text"
                            name="shortcode"
                            value={props.shortcode}
                            onChange={props.onChange}
                            style={{ width: "100%" }}
                        />
                    </label>
                    {props.errorShortcode && (
                        <div style={{ color: "red" }}>{props.errorShortcode}</div>
                    )}
                </div>
                {/* Button in its own div for alignment */}
                <div style={{ alignSelf: "flex-end", minWidth: 100 }}>
                    <button type="submit" style={{ padding: "0.5em 1.5rem" }}>
                        DO IT SHORT
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ShortUrl;