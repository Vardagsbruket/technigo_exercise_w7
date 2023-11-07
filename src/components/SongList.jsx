import { songs } from "../data/songs.json";

export const SongList = () => {
  return (
    <div className="songList">
      <h1>Song List</h1>
      {songs.map((song) => (
        <li key={song.rank}>
          <a href={`/song/` + song.rank}>{song.title}</a>
        </li>
      ))}
    </div>
  );
};
