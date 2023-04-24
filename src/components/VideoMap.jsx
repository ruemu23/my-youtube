
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../mystyle.css';

const API_KEY = 'AIzaSyDEfHkB7lmShyItPxCJd5tAtyT2n2eCGqM';

const VideoMap = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            part: 'snippet',
            maxResults: 10,
            type: 'video',
            q: 'React tutorials',
          }
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid-containers">
      {videos.map(video => (
        <div className="grid-items" key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <iframe
            title={video.snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default VideoMap;
