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
  1: { clue: 'Things move and fall by rules unseen, Mixing drops can change what’s been.', password: 'X7a$Lm' },
  2: { clue: 'I’m a place where people meet, For a break or something treat.', password: 'vB@3yC' },
  3: { clue: 'A crescent of stone where phantoms speak, Their stories drift but never leak.', password: '9u*WkF' },
  4: { clue: 'The one stands for time, but is built from pride.', password: 'Mj6@Xr' },
  5: { clue: 'Where sensors sleep besides silence.', password: 'Tg^E23' },
  6: { clue: 'Not a map that leads to gold or treasure, But a journey where love’s the hidden measure.', password: 'qZ!4bV' },
  7: { clue: 'Beneath cold breath and a watchful stare, Whispers of metal unlock the lair.', password: 'Uj8@fH' },
  8: { clue: 'Where joy can be seen, but not touched or mean.', password: 'Pw!9mK' },
  9: { clue: 'I’m not the core, yet close to light, Where minds prepare before their byte.', password: 'Ze^L7x' },
  10: { clue: 'A hushed market, rich and vast, Where knowledge waits, built to last.', password: 'xR!5nW' },
  11: { clue: 'Where ideas are made real, with machines that seal the deal.', password: 'Kd*YzQ' },
  12: { clue: 'Resting in silence, a king once soared, Its shadow whispers of battles it roared.', password: 'Aj!XrT' },
  13: { clue: 'Iron bones rest where silence grew, Ghosts of motion in dust and dew.', password: 'Vt^K3L' },
  14: { clue: 'Not the GJ where shadows linger, But where form takes shape at unseen fingers.', password: 'qF#9Zx' },
  15: { clue: 'The place where tools are found, Where things are made with fun and sound.', password: 'bM!7uN' },
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
  41: 'set1', 42: 'set2', 43: 'set3', 44: 'set4', 45: 'set5' ,
  46: 'set1', 47: 'set2', 48: 'set3', 49: 'set4', 50: 'set5',
  51: 'set1', 52: 'set2', 53: 'set3', 54: 'set4', 55: 'set5',
  56: 'set1', 57: 'set2', 58: 'set3', 59: 'set4', 60: 'set5',
  61: 'set1', 62: 'set2', 63: 'set3', 64: 'set4', 65: 'set5' 
};

const teams = [
  'tungsten', 'osmium', 'silver', 'chrome', 'titan',
  'krypto', 'xenon', 'platinum', 'carbon', 'hydra',
  'banshee', 'griffin', 'phoenix', 'wyrm', 'kraken',
  'kelpie', 'ifrit', 'gorgon', 'naga', 'imp',
  'siren', 'fenrir', 'oni', 'chimera', 'leviathan',
  'wyvern', 'valkyrie', 'ghost', 'viper', 'razor',
  'blitz', 'nova', 'talon', 'onyx', 'saber',
  'reaper', 'frost', 'havoc', 'striker', 'phantom',
  'ember', 'aegis', 'cipher', 'shade', 'echo',
  'Drakon', 'Mythos', 'Obsidian', 'Zephyr', 'Rune',
  'Glint', 'Thorne', 'Nocturne', 'Maelstrom', 'Ashen',
  'Vanta', 'Quasar', 'Mirage', 'Valken', 'Hexen',
  'Brimstone', 'Scythe', 'Solace', 'Crux', 'Riven'
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
