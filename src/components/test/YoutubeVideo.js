import React from 'react';
import './YoutubeVideo.css';

const YouTubeVideo = ({ videoId,title }) => {
  // YouTube embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="card">
      <h1>{title}</h1>
      <iframe
        width="90%"
        height="70%" // Set the height of the video
        src={embedUrl} // Set the source URL of the video
        title="YouTube video player" // Provide a title for accessibility
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Allow certain permissions
        allowFullScreen // Allow the video to go full screen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
