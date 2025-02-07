import React, { useEffect, useState } from "react";

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
      {SwaggerUI ? (
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      ) : (
        <p>Loading API documentation...</p>
      )}
    </div>
  );
}

export default SwaggerTest;
