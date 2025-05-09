import React, { useState } from 'react';
import Form from './Form';
import MusicList from './MusicList';
import { Song } from '../Song'

const MusicSearch: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`
      );
      const data = await response.json();
      setSongs(data.results);
    } catch (error) {
      console.log('検索に失敗しました', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="music-search">
      <Form onSearch={handleSearch} />
      {loading && <p>検索中．．．</p>}
      {!loading && songs?.length === 0 && <p>該当する曲が見つかりませんでした。</p>}
      <ul className="music-list">
        {songs?.map((song) => (
          <MusicList key={song.trackId} song={song} />
        ))}
      </ul>
    </div>
  );
};

export default MusicSearch;
