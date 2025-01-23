import React, { useState } from "react";

const LOCAL_STORAGE_API_KEY = "apiKey";

export default function Playground() {
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem(LOCAL_STORAGE_API_KEY) || "";
  });

  const saveApiKeyToLocalStorage = async () => {
    localStorage.setItem(LOCAL_STORAGE_API_KEY, apiKey);
  };
  const clearApiKeyFromLocalStorage = async () => {
    localStorage.setItem(LOCAL_STORAGE_API_KEY, "");
    setApiKey("");
  };

  return (
    <div>
      <h3>API Key</h3>
      <input
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button onClick={saveApiKeyToLocalStorage}>Save API Key to Cache</button>
      <button onClick={clearApiKeyFromLocalStorage}>
        Clear Api Key from Cache
      </button>
    </div>
  );
}
