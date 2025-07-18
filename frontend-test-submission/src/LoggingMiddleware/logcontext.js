import React, { createContext, useContext, useState } from "react";


const LogContext = createContext();

export function LogProvider({ children }) {
  const [logs, setLogs] = useState([]);


  function logEvent(type, message, data = null) {
    setLogs(prev => [
      ...prev,
      {
        type,
        message,
        data,
        timestamp: new Date().toISOString()
      }
    ]);
  }


  function logError(message, data = null) {
    logEvent("error", message, data);
  }


  function logAction(message, data = null) {
    logEvent("action", message, data);
  }

  return (
    <LogContext.Provider value={{ logs, logEvent, logError, logAction }}>
      {children}
    </LogContext.Provider>
  );
}


export function useLog() {
  return useContext(LogContext);
}