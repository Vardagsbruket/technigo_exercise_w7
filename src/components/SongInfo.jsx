import { useParams } from "react-router-dom";
import { songs } from "../data/songs.json";

export const SongInfo = () => {
  const { songRank } = useParams();
  console.log("songRank:", songRank);
  const currentSong = songs.find((song) => {
    if (song.rank === parseInt(songRank)) {
      return song;
    }
  });

  return <div className="songList">Song Rank: {songRank}</div>;
};
