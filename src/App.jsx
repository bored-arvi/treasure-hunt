import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Clue sets (teams will have different sets with 15 clues, each set is a different ordering of clues)
const sets = {
  'set1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  'set2': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1],
  'set3': [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2],
  'set4': [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3],
  'set5': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4],
};

// Passwords for each clue (there's a password for each clue from 1 to 15)
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

// Team sets: Assigning each team to a specific clue set (set1 to set5)
const team_sets = {
  1: 'set1', 2: 'set2', 3: 'set3', 4: 'set4', 5: 'set5',
  6: 'set1', 7: 'set2', 8: 'set3', 9: 'set4', 10: 'set5',
  11: 'set1', 12: 'set2', 13: 'set3', 14: 'set4', 15: 'set5'
};

// Team names (Team 1 to Team 15)
const teams = [
  "team1", "team2", "team3", "team4", "team5",
  "team6", "team7", "team8", "team9", "team10",
  "team11", "team12", "team13", "team14", "team15"
];


function App() {
  return (
    <div>
      <h1>Treasure Hunt </h1>
      <Routes>
        {[...Array(15)].map((_, i) => (
          <Route key={i + 1} path={`/page${i + 1}`} element={<Page pageNumber={i + 1} />} />
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

    // Get the team set for this page based on team number
    const teamIndex = teams.indexOf(TeamName);
    if (teamIndex === -1) {
      setClue("Team name not found.");
      return;
    }

    const teamSet = team_sets[teamIndex + 1]; // 1-based index for team_sets

    // Get the clues for the current team set
    const page_clues = sets[teamSet];

    // Get the corresponding clue for this page based on the team set and clue index
    const clueIndex = page_clues[pageNumber - 1];

    // Compare the password entered with the stored password for this clue
    if (password === passwordClues[clueIndex].password) {
      setClue(passwordClues[clueIndex].clue);

      // Determine the next password and clue
      const nextClueIndex = page_clues[pageNumber] - 1;
      setNextPassword(passwordClues[page_clues[nextClueIndex]].password);
      
      // Post the data to Google Script
      fetch("https://script.google.com/macros/s/AKfycbwCxzpdZ3J4VwRGK72UbjCNtn-pzlFMlym-HUvKDyUGWynwJ3vshVhJXtvakF789rwhsw/exec", {
        method: "POST",
        body: JSON.stringify({
          page: pageNumber,
          password: password,
          status: 'Success',
          team: teamIndex + 1 // team number starts from 1
        }),
        headers: { "Content-Type": "application/json" }
      });
    } else {
      setClue('Wrong password. Try again.');
      setNextPassword('');
    }
  };

  return (
    <div>
      <h2>Page {pageNumber}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Team Name"
          value={TeamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {clue && <p>{clue}</p>}
      {nextPassword && <p>Next Password: {nextPassword}</p>}
    </div>
  );
}

export default App;

