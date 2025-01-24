import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly"; // Import BrowserOnly component
import {
  API_ENDPOINTS,
  LOCAL_STORAGE_API_KEY,
} from "@site/src/helpers/constants";

export default function Playground() {
  const [apiKey, setApiKey] = useState<string>("");
  const [apiEndpoint, setApiEndpoint] = useState<string>(API_ENDPOINTS[0].url);
  const [apiMethod, setApiMethod] = useState<string>(API_ENDPOINTS[0].method);

  useEffect(() => {
    // This effect will run only on the client side
    setApiKey(localStorage.getItem(LOCAL_STORAGE_API_KEY) || "");
  }, []);

  const saveApiKeyToLocalStorage = async () => {
    localStorage.setItem(LOCAL_STORAGE_API_KEY, apiKey);
  };

  const clearApiKeyFromLocalStorage = async () => {
    localStorage.setItem(LOCAL_STORAGE_API_KEY, "");
    setApiKey("");
  };

  const setApiEndpointData = (endpoint) => {
    setApiEndpoint(endpoint.url);
    setApiMethod(endpoint.method);
  };

  const sendRequest = async () => {
    const response = await fetch(apiEndpoint, {
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <div>
          <h3>API Key</h3>
          <input
            placeholder="API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button onClick={saveApiKeyToLocalStorage}>
            Save API Key to Cache
          </button>
          <button onClick={clearApiKeyFromLocalStorage}>
            Clear API Key from Cache
          </button>
          <h3>API Endpoints</h3>
          <p>{apiEndpoint}</p>
          <select onChange={(e) => setApiEndpointData(e.target)}>
            {Object.values(API_ENDPOINTS).map((endpoint) => (
              <option key={endpoint.url} value={endpoint.url}>
                {endpoint.name}
              </option>
            ))}
          </select>
          <button onClick={sendRequest}>Send Request</button>
        </div>
      )}
    </BrowserOnly>
  );
}
