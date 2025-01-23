import {
  API_ENDPOINTS,
  LOCAL_STORAGE_API_KEY,
} from "@site/src/helpers/constants";
import React, { useState } from "react";

export default function Playground() {
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem(LOCAL_STORAGE_API_KEY) || "";
  });
  const [apiEndpoint, setApiEndpoint] = useState<string>(API_ENDPOINTS[0].url);
  const [apiMethod, setApiMethod] = useState<string>(API_ENDPOINTS[0].method);

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
      {/* Add a dropdown for different API endpoints */}
      <h3>API Endpoints</h3>

      <p>{apiEndpoint}</p>
      <select onChange={(e) => setApiEndpointData(e.target)}>
        {Object.values(API_ENDPOINTS).map((endpoint) => (
          <option value={endpoint.url}>{endpoint.name}</option>
        ))}
      </select>
      <button>Send Request</button>
    </div>
  );
}
