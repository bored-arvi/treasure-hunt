import React from 'react';
import { Routes, Route } from 'react-router-dom';

const sets = {
  'set1':[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],//clues for page1 for each team for ex: team1 has clue1, team2 has clue2
  'set2':[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1],//clues for page2 for each team for ex: team1 has clue2, team2 has clue3
  'set3':[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2],
  'set4':[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3],
  'set5':[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4],
};

const passwords = [
  "X7a$Lm92!qz",
  "vB@3yC#eR1p",
  "9u*WkF$48Zo",
  "Mj6@XrQ!c5L",
  "Tg^E23uY*zB",
  "qZ!4bVp#Lr9",
  "Uj8@fHt2*Xo",
  "Pw!9mK#sV3r",
  "Ze^L7xQ@bT4",
  "xR!5nWp$83L",
  "Kd*YzQ@9Vu2",
  "Aj!XrT#b79P",
  "Vt^K3Lp!fW8",
  "qF#9ZxRw@61",
  "bM!7uNp*YzE"
];

const passwordClues = {
  1: "clue1",
  2: "clue2",
  3: "clue3",
  4: "clue4",
  5: "clue5",
  6: "clue6",
  7: "clue7",
  8: "clue8",
  9: "clue9",
  10: "clue10",
  11: "clue11",
  12: "clue12",
  13: "clue13",
  14: "clue14",
  15: "clue15"
};


const Page_sets = {
  1: 'set1',  // Page 1 corresponds to set1
  2: 'set2',  // Page 2 corresponds to set2
  3: 'set3',  // Page 3 corresponds to set3
  4: 'set4',  // Page 4 corresponds to set4
  5: 'set5',  // Page 5 corresponds to set5
  6: 'set1',  // Page 6 corresponds to set1
  7: 'set2',  // Page 7 corresponds to set2
  8: 'set3',  // Page 8 corresponds to set3
  9: 'set4',  // Page 9 corresponds to set4
  10: 'set5', // Page 10 corresponds to set5
  11: 'set1', // Page 11 corresponds to set1
  12: 'set2', // Page 12 corresponds to set2
  13: 'set3', // Page 13 corresponds to set3
  14: 'set4', // Page 14 corresponds to set4
  15: 'set5'  // Page 15 corresponds to set5
};

  



function App() {
  return (
    <div>
      <h1>Treasure Hunt </h1>
      <Routes>
        <Route path="/page1" element={<Page pageNumber={1} />} />
        <Route path="/page2" element={<Page pageNumber={2} />} />
        <Route path="/page3" element={<Page pageNumber={3} />} />
        <Route path="/page4" element={<Page pageNumber={4} />} />
        <Route path="/page5" element={<Page pageNumber={5} />} />
        <Route path="/page6" element={<Page pageNumber={6} />} />
        <Route path="/page7" element={<Page pageNumber={7} />} />
        <Route path="/page8" element={<Page pageNumber={8} />} />
        <Route path="/page9" element={<Page pageNumber={9} />} />
        <Route path="/page10" element={<Page pageNumber={10} />} />
        <Route path="/page11" element={<Page pageNumber={11} />} />
        <Route path="/page12" element={<Page pageNumber={12} />} />
        <Route path="/page13" element={<Page pageNumber={13} />} />
        <Route path="/page14" element={<Page pageNumber={14} />} />
        <Route path="/page15" element={<Page pageNumber={15} />} />

      </Routes>
    </div>
  );
}

function Page({ pageNumber }) {
  const [password, setPassword] = React.useState('');
  const [clue, setClue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let page_clues=sets[Page_sets[pageNumber]];
    if (passwords.indexOf(password)!=-1) {
      setClue(passwordClues[page_clues[passwords.indexOf(password)]]);
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
