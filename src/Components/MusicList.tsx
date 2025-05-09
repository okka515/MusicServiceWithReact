import React from 'react';
import { Song } from '../Song';

type ListProps = {
  song: Song;
};

const MusicList: React.FC<ListProps> = ({ song }) => {
  return (
    <li className="music-list-item">
      <img src={song.artworkUrl100} alt={song.trackName} />
      <p>{song.trackName} - {song.artistName}</p>
      <audio controls src={song.previewUrl} />
    </li>
  );
};

export default MusicList;
