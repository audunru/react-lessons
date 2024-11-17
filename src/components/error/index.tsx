import React from "react";

const Error: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div role="alert" className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
        <strong className="font-bold">Error:</strong> Something went wrong!
      </div>
    </div>
  );
};

export default Error;
