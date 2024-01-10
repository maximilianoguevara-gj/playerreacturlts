import React, { useRef, useState } from 'react';
import { Card, Col, Row, Button, Typography } from 'antd';

const VideoPlayerWithInput: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLink, setVideoLink] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoLink(event.target.value);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      <h2>Solo videos formato .mp4 resolución 1080 x 720 px </h2>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoLink}
        onChange={handleInputChange}
      />
      <br />
      <video
        ref={videoRef}
        controls
        width="1080"
        height="720"
        src={videoLink}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};


export default VideoPlayerWithInput;
