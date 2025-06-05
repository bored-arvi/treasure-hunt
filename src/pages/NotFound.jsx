import React from "react";

const NotFound = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <p>Please check the URL or return to the <a href="/" className="text-blue-600 underline">Home Page</a>.</p>
    </div>
  );
};

export default NotFound;
