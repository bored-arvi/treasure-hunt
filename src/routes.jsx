import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

import { DisplayPage, UpdatePage, Navbar } from "./database.jsx";
import Home from "./pages/homepage.jsx";
import CluePage from "./pages/cluepage.jsx";
import NotFound from "./pages/NotFound.jsx";

// Admin Panel Component
export function AdminPanel() {
  const [page, setPage] = React.useState("display");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "display" ? <DisplayPage /> : <UpdatePage />}
    </>
  );
}

// User Routes Component
export function UserRoutes() {
  const [clueCount, setClueCount] = useState(0);

  useEffect(() => {
    async function fetchClueCount() {
      const snapshot = await getDocs(collection(db, "clue_set"));
      setClueCount(snapshot.size);
    }
    fetchClueCount();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {[...Array(clueCount)].map((_, idx) => (
        <Route
          key={idx}
          path={`/clue/${idx + 1}`}
          element={<CluePage clueNo={idx + 1} />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Main Routes Component combining both admin and user routes
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPanel />} />
      <Route path="/*" element={<UserRoutes />} />
    </Routes>
  );
}
