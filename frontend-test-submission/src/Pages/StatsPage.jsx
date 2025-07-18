import React, { useState, useEffect } from "react";
import UrlTable from "../Components/UrlTable";

function getShort() {
    return [
        {
            originalUrl: "",
            shortcode: "",
            expiry: Date.now() + 1000000,
            customShortcode: ""
        }
    ];
}
function StatsPage() {
    const [entries,setEntries]=useState([]);
    useEffect(() => {
        setEntries(getShort());
        }, []);
        return(
            <div style={{margin: "20"}}>
                <h2> shortend urls are here </h2>
                <UrlTable entries={entries} />
                </div>
            );
        }
export default StatsPage;        