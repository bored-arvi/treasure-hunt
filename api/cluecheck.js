// checkClue.js
import express from "express";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const router = express.Router();

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyALV0IV9ND1vh6uJx-pYbDhHJHdjrg4s2I",
  authDomain: "treasure-hunt-store.firebaseapp.com",
  projectId: "treasure-hunt-store",
};

const appInstance = initializeApp(firebaseConfig);
const db = getFirestore(appInstance);

// Endpoint: POST /api/check-clue
router.post("/check-clue", async (req, res) => {
  const { pageNo, teamNo, password } = req.body;

  if (!pageNo || !teamNo || !password) {
    return res.status(400).json({ valid: false, message: "Missing input values" });
  }

  try {
    // Fetch clue by password
    const clueQuery = query(collection(db, "clue_set"), where("password", "==", password));
    const clueSnap = await getDocs(clueQuery);
    const clueData = clueSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];

    if (!clueData) {
      return res.status(400).json({ valid: false, message: "Invalid clue password" });
    }

    // Fetch team
    const teamQuery = query(collection(db, "teams_set"), where("team_no", "==", teamNo));
    const teamSnap = await getDocs(teamQuery);
    const teamData = teamSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];

    if (!teamData) {
      return res.status(400).json({ valid: false, message: "Invalid team number" });
    }

    // Check if password matches current clue in team’s sequence
    const currentClueNo = teamData.seq[pageNo - 1];
    if (currentClueNo !== clueData.clue_no) {
      return res.status(400).json({ valid: false, message: "Incorrect password for this clue" });
    }

    // Get next clue (if any)
    const nextClueNo = teamData.seq[pageNo];
    if (!nextClueNo) {
      return res.json({
        valid: true,
        message: "End is reached",
        nextClue: "No more clues. Congratulations!",
        nextPassword: "No more passwords.",
      });
    }

    const nextClueQuery = query(collection(db, "clue_set"), where("clue_no", "==", nextClueNo));
    const nextClueSnap = await getDocs(nextClueQuery);
    const nextClueData = nextClueSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];

    if (!nextClueData) {
      return res.status(500).json({ valid: true, message: "Next clue not found in DB", nextClue: "", nextPassword: "" });
    }

    return res.json({
      valid: true,
      message: "Clue is valid",
      nextClue: nextClueData.clue,
      nextPassword: nextClueData.password,
    });
  } catch (error) {
    console.error("Error checking clue:", error);
    return res.status(500).json({ valid: false, message: "Server error" });
  }
});

export default router;
