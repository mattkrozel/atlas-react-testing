import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
      <div className="flex-col flex md:flex-row w-full h-full shadow-lg mx-auto max-w-4xl">
          <CurrentlyPlaying />
          <Playlist />
      </div>
  );
}
