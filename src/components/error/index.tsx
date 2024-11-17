import React from "react";

import Alert from "../alert";

const Error: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Alert type="error">
        <strong className="font-bold">Error:</strong> Something went wrong!
      </Alert>
    </div>
  );
};

export default Error;
