import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Treasure Hunt 🔍</h1>
      <Routes>
        <Route path="/" element={<Page pageNumber={1} />} />
        <Route path="/page2" element={<Page pageNumber={2} />} />
        <Route path="/page3" element={<Page pageNumber={3} />} />
        {/* Add up to 15 pages like this */}
      </Routes>
    </div>
  );
}

function Page({ pageNumber }) {
  const [password, setPassword] = React.useState('');
  const [clue, setClue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can customize these passwords and clues
    const clues = {
      'secret1': 'Clue for Page 1',
      'secret2': 'Clue for Page 2',
      'secret3': 'Clue for Page 3',
      // etc.
    };
    if (clues[password]) {
      setClue(clues[password]);
    } else {
      setClue('Wrong password. Try again.');
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
        <button type="submit">Submit</button>
      </form>
      {clue && <p>{clue}</p>}
    </div>
  );
}

export default App;
