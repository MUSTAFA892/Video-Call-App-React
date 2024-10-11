import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/Home.css";

export default function Home() {
  const [value, setValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const navigateTo = useNavigate();

  // Check screen width to apply the correct background
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen width
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleJoin = useCallback(() => {
    navigateTo(`/room/${value}`);
  }, [navigateTo, value]);

  return (
    <div
      className='home-container'
      style={{
        backgroundImage: isMobile
          ? "url('/static/images/background-mobile.jpg')"  // Mobile background
          : "url('/static/images/background-lap.jpg')",    // Laptop background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className='home-box'>
        <h1>Join a Room</h1>
        <input
          type='text'
          value={value}
          placeholder='Enter Your Room ID'
          onChange={(e) => setValue(e.target.value)}
          className='room-input'
        />
        <button className='join-btn' onClick={handleJoin}>
          Join
        </button>
      </div>
    </div>
  );
}
