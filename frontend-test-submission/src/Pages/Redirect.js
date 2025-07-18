import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function RedirectPage({ entries }) {
  const { shortcode } = useParams();

  useEffect(() => {
    const entry = entries.find(e => e.shortcode === shortcode);
    if (entry) {
      window.location.href = entry.originalUrl;
    }
  }, [entries, shortcode]);

  return (
    <div>
      <p>redirecting please wait</p>
    </div>
  );
}

export default RedirectPage;