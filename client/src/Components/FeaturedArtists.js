import avatar from '../images/avatar.png';
import { Link } from "react-router-dom";
const FeaturedArtists = ({ artists }) => {
    const featured = artists.map(artist => {
        return (
            <li key={artist.id} className="featured-item">
                <img src={artist.image || avatar} alt={artist.name} className="featured-track-image" />
                <Link to={`artist/${artist.id}`}>
                    {artist.name}
                </Link>
            </li>
        );
    });
    return (
        <>
            <h3>Featured Artists</h3>
            <ul className="featured-tracks">
            {featured}
            </ul>
        </>
    );
};

export default FeaturedArtists;