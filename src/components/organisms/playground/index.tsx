import React, { useState, useEffect } from "react";
import {
  API_ENDPOINTS,
  LOCAL_STORAGE_API_KEY,
} from "@site/src/helpers/constants";

export default function Playground() {
  const [apiKey, setApiKey] = useState<string>("");
  const [apiEndpoint, setApiEndpoint] = useState<string>(
    API_ENDPOINTS.BALANCE.url
  );
  const [apiMethod, setApiMethod] = useState<string>(
    API_ENDPOINTS.BALANCE.method
  );
  const [apiResponse, setApiResponse] = useState<string>("");

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
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(corsProxy + apiEndpoint, {
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });
    const data = await response.json();
    setApiResponse(JSON.stringify(data, null, 2));
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
        Clear API Key from Cache
      </button>
      <h3>API Endpoints</h3>
      <p>{apiEndpoint}</p>
      <select
        onChange={(e) => {
          const selectedEndpoint = Object.values(API_ENDPOINTS).find(
            (endpoint) => endpoint.url === e.target.value
          );
          setApiEndpointData(selectedEndpoint);
        }}
      >
        {Object.values(API_ENDPOINTS).map((endpoint) => (
          <option key={endpoint.url} value={endpoint.url}>
            {endpoint.name}
          </option>
        ))}
      </select>
      <button onClick={sendRequest}>Send Request</button>
      {apiResponse && <pre>{apiResponse}</pre>}
    </div>
  );
}
