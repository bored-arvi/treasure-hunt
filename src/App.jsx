import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css'; // Make sure this imports your updated CSS
import logo from './assets/logo.png'; // adjust path as needed
import TagManager from 'react-gtm-module';
import HomePage from './homepage.jsx';

const tagManagerArgs = {
  gtmId: 'GTM-53GWCLXR', // 🔁 Replace this with your GTM ID
};

TagManager.initialize(tagManagerArgs);

// Clue sets and other data (unchanged)
const sets = {
  set1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  set2: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1],
  set3: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2],
  set4: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3],
  set5: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4],
};

const passwordClues = {
  1: { clue: 'The journey begins with the first step.', password: 'X7a$Lm' },
  2: { clue: 'Time is of the essence, look carefully around.', password: 'vB@3yC' },
  3: { clue: 'Seek the golden object hidden in plain sight.', password: '9u*WkF' },
  4: { clue: 'The key to success lies where shadows are cast.', password: 'Mj6@Xr' },
  5: { clue: 'Count the number of items, and subtract.', password: 'Tg^E23' },
  6: { clue: 'Where there’s light, darkness follows. Look where both meet.', password: 'qZ!4bV' },
  7: { clue: 'It’s not where you start, but where you finish.', password: 'Uj8@fH' },
  8: { clue: 'Behold the winds of change, they point the way.', password: 'Pw!9mK' },
  9: { clue: 'Follow the path where two rivers converge.', password: 'Ze^L7x' },
  10: { clue: 'In numbers, the answer is hidden.', password: 'xR!5nW' },
  11: { clue: 'Look to the past for the key to the future.', password: 'Kd*YzQ' },
  12: { clue: 'The mirror reveals what the eye cannot see.', password: 'Aj!XrT' },
  13: { clue: 'Hidden in plain sight, yet so close.', password: 'Vt^K3L' },
  14: { clue: 'A twist of fate will lead you home.', password: 'qF#9Zx' },
  15: { clue: 'The final step is where all paths converge.', password: 'bM!7uN' },
};

const team_sets = {
  1: 'set1', 2: 'set2', 3: 'set3', 4: 'set4', 5: 'set5',
  6: 'set1', 7: 'set2', 8: 'set3', 9: 'set4', 10: 'set5',
  11: 'set1', 12: 'set2', 13: 'set3', 14: 'set4', 15: 'set5',
  16: 'set1', 17: 'set2', 18: 'set3', 19: 'set4', 20: 'set5',
  21: 'set1', 22: 'set2', 23: 'set3', 24: 'set4', 25: 'set5',
  26: 'set1', 27: 'set2', 28: 'set3', 29: 'set4', 30: 'set5',
  31: 'set1', 32: 'set2', 33: 'set3', 34: 'set4', 35: 'set5',
  36: 'set1', 37: 'set2', 38: 'set3', 39: 'set4', 40: 'set5',
  41: 'set1', 42: 'set2', 43: 'set3', 44: 'set4', 45: 'set5'  
};

const teams = [
'Tungsten', 'Osmium', 'Silver', 'Chrome', 'Titan',
'Krypto', 'Xenon', 'Platinum', 'Carbon', 'Hydra',
'Banshee', 'Griffin', 'Phoenix', 'Wyrm', 'Kraken',
'Kelpie', 'Ifrit', 'Gorgon', 'Naga', 'Imp',
'Siren', 'Fenrir', 'Oni', 'Chimera', 'Leviathan',
'Wyvern', 'Valkyrie', 'Ghost', 'Viper', 'Razor',
'Blitz', 'Nova', 'Talon', 'Onyx', 'Saber',
'Reaper', 'Frost', 'Havoc', 'Striker', 'Phantom',
'Ember', 'Aegis', 'Cipher', 'Shade', 'Echo'
];

const pageRoutes = [
  'page1',
  'zX2bVtE6mNq4JyL',
  'hR8cP59fUwXKaQ3',
  'wL6eMoY1RgD9Cs2',
  'kV9tSa43HnLmEo5',
  'dN7rJpWuAqZxFv8',
  'qY5kLbTxUeN7Mr4',
  'mB2aZwX9VoLpTg7',
  'xT6yEqRsKaPuBv1',
  'fL3nGpWyMzRoXq2',
  'cW4hYzFtLqKeMp8',
  'uZ1xVaJpKcNmQo3',
  'nG7LpXeTwVaRzY5',
  'tJ5fNqKoXyZrMw6',
  'pB8kYvLsQaTcMz9',
];

function App() {
  return (
    <div id="app">
      <Routes>
        {pageRoutes.map((id, i) => (
          <Route key={id} path={`/${id}`} element={<Page pageNumber={i + 1} />} />
        ))}
        <Route path="/" element={<HomePage />} />
        {[...Array(14)].map((_, i) => (
          <Route
            key={i + 2}
            path={`/page${i + 2}`}
            element={<TrollPage pagenumber={i + 2} />}
          />
        ))}
      </Routes>
    </div>
  );
}

const TrollPage = ({ pagenumber }) => {
  return (
    <div className="card animated-card">
      <h2>Page {pagenumber}</h2>
      <p>
        You are smart!!{' '}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is the next clue
        </a>
      </p>
    </div>
  );
};

function Page({ pageNumber }) {
  const [password, setPassword] = React.useState('');
  const [clue, setClue] = React.useState('');
  const [TeamName, setTeamName] = React.useState('');
  const [nextPassword, setNextPassword] = React.useState('');

  React.useEffect(() => {
    setPassword('');
    setClue('');
    setTeamName('');
    setNextPassword('');
  }, [pageNumber]);
  

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
    } else {
      setClue('Wrong password. Try again.');
      setNextPassword('');
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h2>Clue Page {pageNumber}</h2>
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
    </div>
  );
}


export default App;
