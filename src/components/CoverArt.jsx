import coverArtImage from '../assets/placeholder.svg';

export default function CoverArt() {
    return (
        <div className='mb-6'>
            <img className='rounded-md' src={coverArtImage} alt='Album Cover Artwork'></img>

        </div>
    );
}
