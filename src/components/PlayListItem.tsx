interface PlayListItemProps {
    title: string;
    artist: string;
    songLength: string;
}

export default function PlayListItem({  title, artist, songLength }: PlayListItemProps) {
    return (
        <div className="items-center mb-1 flex flex-row justify-between">
            <div className="flex-col flex">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm font-medium text-slate-500">{artist}</p>
            </div>
            <p className="text-sm font-medium text-slate-400">{songLength}</p>
        </div>
    );
}