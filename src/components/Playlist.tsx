import PlayListItem from './PlayListItem';

export default function Playlist() {
    return (
        <div className='p-6 flex flex-col border-l w-1/2 sm:w-full bg-tan'>
            <h2 className='mb-4 text-lg font-semibold text-red'>PlayList</h2>
            <div className='pr-4 flex flex-col text-white'>
                <PlayListItem title='Painted in Blue' artist='Soul Canvas' songLength='5:55' backgroundColor='tan'/>
                <PlayListItem title='Tidal Drift' artist='Echoes of the Sea' songLength='8:02' backgroundColor='tan'/>
                <PlayListItem title='Fading Shadows' artist='The Emberlight' songLength='3:01' backgroundColor='tan'/>
                <PlayListItem title='Cosmic Drift' artist='Solar Flare' songLength='5:01' backgroundColor='tan'/>
                <PlayListItem title='Urban Serenade' artist='Midnight Groove' songLength='4:54' backgroundColor='tan'/>
                <PlayListItem title='Whispers in the Wind' artist='Rust & Ruin' songLength='6:13' backgroundColor='tan'/>
                <PlayListItem title='Electric Fever' artist='Neon Jungle' songLength='8:41' backgroundColor='tan'/>
                <PlayListItem title='Edge of the Abyss' artist='Steel Horizon' songLength='2:27' backgroundColor='tan'/>
                <PlayListItem title='Golden Haze' artist='Velvet Waves' songLength='3:15' backgroundColor='tan'/>
                <PlayListItem title='Shatter the Silence' artist='Thunderclap Echo' songLength='8:22' backgroundColor='tan'/>
            </div>
        </div>
    );
}
