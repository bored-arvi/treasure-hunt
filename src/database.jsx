// Required libraries (React + Firebase SDK)
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useSearchParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getFirestore,    addDoc, getDocs, setDoc,collection, deleteDoc, doc
} from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyALV0IV9ND1vh6uJx-pYbDhHJHdjrg4s2I",
  authDomain: "treasure-hunt-store.firebaseapp.com",
  projectId: "treasure-hunt-store",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Navbar({ setPage }) {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <button onClick={() => setPage("display")}>Display</button>
      <button onClick={() => setPage("update")}>Update</button>
    </nav>
  );
}

function DisplayPage() {
  const [clues, setClues] = useState([]);
  const [teams, setTeams] = useState([]);

  const fetchData = async () => {
    const clueSnap = await getDocs(collection(db, "clue_set"));
    setClues(clueSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    const teamSnap = await getDocs(collection(db, "teams_set"));
    setTeams(teamSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteClue = async (id) => {
    await deleteDoc(doc(db, "clue_set", id));
    fetchData();
  };

  const deleteTeam = async (id) => {
    await deleteDoc(doc(db, "teams_set", id));
    fetchData();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Clue Set</h2>
      <table className="table-auto w-full mb-8">
        <thead><tr><th>ID</th><th>Password</th><th>Clue</th><th>Delete</th></tr></thead>
        <tbody>
          {clues.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td><td>{c.password}</td><td>{c.clue}</td>
              <td><button onClick={() => deleteClue(c.id)} className="text-red-500">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-bold">Team Set</h2>
      <table className="table-auto w-full">
        <thead><tr><th>ID</th><th>Seq</th><th>Team No</th><th>Delete</th></tr></thead>
        <tbody>
          {teams.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td><td>{JSON.stringify(t.seq)}</td><td>{t.team_no}</td>
              <td><button onClick={() => deleteTeam(t.id)} className="text-red-500">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function UpdatePage() {
  const [mode, setMode] = useState("clue"); // 'clue' or 'team'
  const [clue, setClue] = useState("");
  const [cluePass, setCluePass] = useState("");
  const [teamNo, setTeamNo] = useState("");

  const addClue = async () => {
    await addDoc(collection(db, "clue_set"), {
      clue,
      password: cluePass
    });
    setClue("");
    setCluePass("");
  };

const addTeam = async () => {
    if (!teamNo) return alert("Team number required");

    const existing = await getDocs(collection(db, "teams_set"));
    if (existing.docs.find(doc => doc.data().team_no === parseInt(teamNo))) {
      alert(`Team number ${teamNo} already exists`);
      return;
    }

    const clueSnap = await getDocs(collection(db, "clue_set"));
    const clueCount = clueSnap.docs.length;
    const seq = Array.from({ length: clueCount }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    await addDoc(collection(db, "teams_set"), {
      seq,
      team_no: parseInt(teamNo)
    });

    setTeamNo("");
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Mode</h2>
      <select
        className="border p-1 mb-4"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="clue">Add Clue</option>
        <option value="team">Add Team</option>
      </select>

      {mode === "clue" ? (
        <>
          <h3 className="text-lg font-bold">Add Clue</h3>
          <input value={clue} onChange={e => setClue(e.target.value)} placeholder="Clue" className="border p-1 m-1" />
          <input value={cluePass} onChange={e => setCluePass(e.target.value)} placeholder="Password" className="border p-1 m-1" />
          <button onClick={addClue} className="bg-blue-500 text-white p-1 px-2">Add Clue</button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold">Add Team</h3>
          <input value={teamNo} onChange={e => setTeamNo(e.target.value)} placeholder="Team No" className="border p-1 m-1" />
          <button onClick={addTeam} className="bg-green-500 text-white p-1 px-2">Add Team</button>
        </>
      )}
    </div>
  );
}



// At the bottom of database.jsx
export { DisplayPage, UpdatePage, Navbar };
