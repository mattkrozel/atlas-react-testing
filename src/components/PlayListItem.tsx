export default function PlayListItem(props) {
    return (
        <div className="items-center mb-1 flex flex-row justify-between">
            <div className="flex-col flex">
                <p className="text-sm font-medium">{props.title}</p>
                <p className="text-sm font-medium text-slate-500">{props.artist}</p>
            </div>
            <p className="text-sm font-medium text-slate-400">{props.songLength}</p>
        </div>
    );
}