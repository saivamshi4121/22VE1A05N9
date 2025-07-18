import React from "react";
import React,{ useState, useEffect } from "react";
function RedirectPage(props) {
useEffect(() => {
    const originalUrl = "https://example.com";
    window.location.href = originalUrl;
}, []);

return(
    <div>
        <p> redirecting please wait</p>
    </div>
);
}

export default RedirectComponent;