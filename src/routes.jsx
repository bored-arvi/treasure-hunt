import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {DisplayPage,UpdatePage,Navbar} from "./database.jsx"; // adjust the path as neede   // adjust the path as needed

function AppRouter() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const password = searchParams.get("password");
  const [page, setPage] = useState("display");

  if (!username || !password) {
    return <div className="p-4">Please provide ?username=...&password=... in URL</div>;
  }

  return (
    <>
      <Navbar setPage={setPage} />
      {page === "display" ? <DisplayPage /> : <UpdatePage />}
    </>
  );
}

export default AppRouter;
// This file serves as the main entry point for the application, routing to either the display or update page based on the provided query parameters.