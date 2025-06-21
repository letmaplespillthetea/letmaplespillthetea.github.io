import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
  if (window.YT && window.YT.Player) {
    initPlayer();
  } else {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };
  }

  function initPlayer() {
    const newPlayer = new window.YT.Player("yt-player", {
      videoId: "SJXcYilt2a4",
      events: {
        onReady: (e) => {
          console.log("Player ready", e);
          const ytPlayer = e.target;
          playerRef.current = ytPlayer;
          setPlayer(ytPlayer);
          setDuration(ytPlayer.getDuration());
        },
        onStateChange: (e) => {
          setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
        }
      }
    });
    setPlayer(newPlayer);
    playerRef.current = newPlayer;
  }
}, []);

  useEffect(() => {
    let interval = null;

    if (player && isPlaying) {
      interval = setInterval(() => {
        const current = player.getCurrentTime();
        const total = player.getDuration();
        if (total) {
          setProgress((current / total) * 100);
        }
        console.log("Current time:", current, "Total:", total, "Progress:", (current / total) * 100);
      }, 1000);
      
    }

    return () => clearInterval(interval);
  }, [player, isPlaying]);

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">/ᐠ - ˕ -マ maple</div>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="#">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
