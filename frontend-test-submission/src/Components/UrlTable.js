import React from 'react';

function UrlTable(props){
    const entries = props.entries || []; 
    return (
        <table border="1" style={{ width: "100%", marginTop: "1rem" }}>
            <thead>
                <tr>
                    <th>Original URL</th>
                    <th>small code</th>
                    <th> expiry time </th>
                    <th>custom code</th>
                </tr>
            </thead>
            <tbody>
                {entries.map(function(entry, i){
                    return(
                        <tr key={i}>
                            <td>
                                {entry.originalUrl}
                            </td>
                            <td>
                                {window.location.origin + "/" + entry.smallcode}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default UrlTable;