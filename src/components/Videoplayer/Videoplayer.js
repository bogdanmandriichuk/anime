// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React, {Component, createRef, useState} from "react";
import videoPlaceHolder from "./imagePlaceholder.jpeg";
import './Videoplayer.css';
import {
    Playlist,
    goToNextVideo,
    goToPreviousVideo
} from "reactjs-video-playlist-player";

function Video() {
    const [videoList, setVideoList] = useState([
        {
            thumbnail: "https://via.placeholder.com/500/FFA500/FFFFFF",
            url:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            imgAlt: "Image 1 not found"
        },
        {
            thumbnail: "https://via.placeholder.com/500/FF0000/FFFFFF",
            url:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            imgAlt: "Image 2 not found"
        },
        {
            thumbnail: " ",
            url:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            imgAlt: "Image 3 not found"
        },
        {
            thumbnail: "https://via.placeholder.com/500/FFFF00/000000",
            url:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            imgAlt: "Image 4 not found"
        },
        {
            thumbnail: "",
            url:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            imgAlt: "Image 5 not found"
        }
    ]);

    const [currentVideo, setCurrentVideo] = useState(0);
    const vidRef = createRef(null);

    const params = {
        videos: videoList,
        autoPlay: true,
        showQueue: true,
        playForward: true,
        defaultQueueItemPlaceholderThumbnail: videoPlaceHolder,
        currentVideo: currentVideo,
        setCurrentVideo: setCurrentVideo,
        vidRef: vidRef
    };

    return (
        <div className="Video">

            <div>
                <Playlist playlistParams={params} />
            </div>
        </div>
    );
}

export default Video;
