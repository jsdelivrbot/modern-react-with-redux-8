import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  return(
    <li className="list-group-item" onClick={ () => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imageUrl } alt=""/>
        </div>
        <div className="media-body">
          <div className="medua-heading">{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
