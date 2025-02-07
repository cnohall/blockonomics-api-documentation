import React, { useEffect, useState } from "react";
import "swagger-ui-react/swagger-ui.css";

function SwaggerTest() {
  const [SwaggerUI, setSwaggerUI] = useState(null);

  useEffect(() => {
    // Dynamically import the SwaggerUI component only in the client side
    import("swagger-ui-react").then((module) => {
      setSwaggerUI(() => module.default);
    });
  }, []);

  return (
    <div>
      <h2>Auto Generated Code Snippets</h2>
      <p>
        Sample json file for the below can be seen at:{" "}
        <a href="https://apiembed.com/sample.json" target="_blank">
          https://apiembed.com/sample.json
        </a>
        <br />
        <b>Please note:</b> This we can have a code snippet generated for each
        API endpoint we want
      </p>
      <iframe
        src="//api.apiembed.com/?source=https://apiembed.com/sample.json&targets=shell:curl,node:unirest,java:unirest,python:requests,php:curl,ruby:native,objc:nsurlsession,go:native"
        width="100%"
        height="500px"
        seamless
      ></iframe>
      <br />
      <br />
      <br />
      <h2>Playground provided by Swagger UI</h2>
      <p>
        Sample json file for the below can be seen at:{" "}
        <a href="https://petstore.swagger.io/v2/swagger.json" target="_blank">
          https://petstore.swagger.io/v2/swagger.json
        </a>
        <br />
        <b>Please note:</b> This we can have an individual playground and json
        file for each API endpoint
      </p>
      {SwaggerUI ? (
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      ) : (
        <p>Loading API documentation...</p>
      )}
    </div>
  );
}

export default SwaggerTest;
