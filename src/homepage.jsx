import React, { useEffect, useState } from 'react';
import './style.css';
import logo from './assets/logo.png';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(13, 15, 0, 0); // Tomorrow 1:15 PM

    const difference = tomorrow - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hrs: 0, mins: 0, secs: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <h2>⏳ Countdown to Tomorrow’s Session</h2>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        {timeLeft.hrs}h {timeLeft.mins}m {timeLeft.secs}s
      </p>
    </div>
  );
};

const Card = ({ title, children }) => (
  <div className="round-card">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

const HomePage = () => {
  return (
    <div className="homepage">
      <Countdown />
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="main-title">Welcome to Aethora's Treasure Hunt</h1>

      <Card title="📍 Round 1 – QR Hunt">
        <ul>
          <li>⏱ 1:15 – 2:05 PM</li>
          <li>Scan the QR code to receive your first clue and password.</li>
          <li>Go to the location, scan the next QR, and proceed.</li>
          <li>Up to 15 clues to complete.</li>
          <li>🏁 Top 5 fastest teams qualify for Round 2.</li>
        </ul>
      </Card>

      <Card title="🧭 Round 2 – Spot the Location">
        <ul>
          <li>⏱ 2:10 – 2:30 PM</li>
          <li>Teams receive a photo sheet with campus locations.</li>
          <li>Identify the correct places based on the images.</li>
          <li>🏅 Top 2 teams move to the Grand Finale!</li>
        </ul>
      </Card>

      <Card title="🏆 Grand Finale – Mystery Round">
        <ul>
          <li>⏱ 4:30 – 5:15 PM</li>
          <li>Only 2 teams compete.</li>
          <li>Expect an epic surprise twist challenge!</li>
        </ul>
      </Card>

      <p className="closing-line">✨ All the best! Let the hunt begin. ✨</p>
    </div>
  );
};

export default HomePage;
