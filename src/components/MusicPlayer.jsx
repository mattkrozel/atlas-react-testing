import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
    return (
        <div className="flex-col flex md:flex-row w-full h-full shadow-lg mx-auto max-w-4xl">
            <CurrentlyPlaying />
            <Playlist />
        </div>
    );
}
