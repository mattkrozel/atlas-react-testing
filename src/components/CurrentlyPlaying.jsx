import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

export default function CurrentlyPlaying() {
    return (
        <div className="p-6 flex flex-col w-1/2 sm:w-full">
            <CoverArt />
            <SongTitle />
            <PlayControls />
            <VolumeControls />
        </div>
    );
}
