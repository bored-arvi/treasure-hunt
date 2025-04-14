import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css'; // Make sure this imports your updated CSS
import logo from './assets/logo.png'; // adjust path as needed


// Clue sets and other data (unchanged)
const sets = {
  'set1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  'set2': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1],
  'set3': [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2],
  'set4': [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3],
  'set5': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4],
};

const passwordClues = {
  1: { clue: "The journey begins with the first step.", password: "X7a$Lm92!qz" },
  2: { clue: "Time is of the essence, look carefully around.", password: "vB@3yC#eR1p" },
  3: { clue: "Seek the golden object hidden in plain sight.", password: "9u*WkF$48Zo" },
  4: { clue: "The key to success lies where shadows are cast.", password: "Mj6@XrQ!c5L" },
  5: { clue: "Count the number of items, and subtract.", password: "Tg^E23uY*zB" },
  6: { clue: "Where there’s light, darkness follows. Look where both meet.", password: "qZ!4bVp#Lr9" },
  7: { clue: "It’s not where you start, but where you finish.", password: "Uj8@fHt2*Xo" },
  8: { clue: "Behold the winds of change, they point the way.", password: "Pw!9mK#sV3r" },
  9: { clue: "Follow the path where two rivers converge.", password: "Ze^L7xQ@bT4" },
  10: { clue: "In numbers, the answer is hidden.", password: "xR!5nWp$83L" },
  11: { clue: "Look to the past for the key to the future.", password: "Kd*YzQ@9Vu2" },
  12: { clue: "The mirror reveals what the eye cannot see.", password: "Aj!XrT#b79P" },
  13: { clue: "Hidden in plain sight, yet so close.", password: "Vt^K3Lp!fW8" },
  14: { clue: "A twist of fate will lead you home.", password: "qF#9ZxRw@61" },
  15: { clue: "The final step is where all paths converge.", password: "bM!7uNp*YzE" }
};

const team_sets = {
  1: 'set1', 2: 'set2', 3: 'set3', 4: 'set4', 5: 'set5',
  6: 'set1', 7: 'set2', 8: 'set3', 9: 'set4', 10: 'set5',
  11: 'set1', 12: 'set2', 13: 'set3', 14: 'set4', 15: 'set5'
};

const teams = [
  "team1", "team2", "team3", "team4", "team5",
  "team6", "team7", "team8", "team9", "team10",
  "team11", "team12", "team13", "team14", "team15"
];
const pageRoutes = [
  "page1",
  "zX2bVtE6mNq4JyL",
  "hR8cP59fUwXKaQ3",
  "wL6eMoY1RgD9Cs2",
  "kV9tSa43HnLmEo5",
  "dN7rJpWuAqZxFv8",
  "qY5kLbTxUeN7Mr4",
  "mB2aZwX9VoLpTg7",
  "xT6yEqRsKaPuBv1",
  "fL3nGpWyMzRoXq2",
  "cW4hYzFtLqKeMp8",
  "uZ1xVaJpKcNmQo3",
  "nG7LpXeTwVaRzY5",
  "tJ5fNqKoXyZrMw6",
  "pB8kYvLsQaTcMz9"
];

{pageRoutes.map((id, i) => (
  <Route key={id} path={`/${id}`} element={<Page pageNumber={i + 1} />} />
))}

function App() {
  return (
    <div id="app">
      <Routes>
      {pageRoutes.map((id, i) => (
  <Route key={id} path={`/${id}`} element={<Page pageNumber={i + 1} />} />
))}

      </Routes>
    </div>
  );
}

function Page({ pageNumber }) {
  const [password, setPassword] = React.useState('');
  const [clue, setClue] = React.useState('');
  const [TeamName, setTeamName] = React.useState('');
  const [nextPassword, setNextPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamIndex = teams.indexOf(TeamName.trim().toLowerCase());
    if (teamIndex === -1) {
      setClue("Team name not found.");
      return;
    }

    const teamSet = team_sets[teamIndex + 1];
    const page_clues = sets[teamSet];
    const clueIndex = page_clues[pageNumber - 1];

    if (password === passwordClues[clueIndex].password) {
      setClue(passwordClues[clueIndex].clue);
      const nextClueIndex = page_clues[pageNumber];
      if (nextClueIndex) {
        setNextPassword(passwordClues[nextClueIndex].password);
      }

      const data = {
        page: pageNumber,
        password: password,
        status: 'success',
        team: TeamName,
      };

      fetch("https://script.google.com/macros/s/AKfycbyV1c_zWOgy4GHNMAMkCDR-SE0pXuqvcaiGFP3A7bh6nqlrAMep-lKDCFJ3wyqd6SFJTw/exec", {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
    } else{
      setClue('Wrong password. Try again.');
      setNextPassword('');
    }
  };
  return (
    <div className="card">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Clue Page {pageNumber}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Team Name"
          value={TeamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Clue Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {clue && (
        <p>
          <strong>{clue.startsWith("Clue") ? "Clue" : ""}</strong> {clue}
        </p>
      )}
      {nextPassword && <p><strong>Next Password:</strong> {nextPassword}</p>}
    </div>
  );
  
}

export default App;
