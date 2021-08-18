import { Link } from "react-router-dom";
import albumImage from '../images/music-album.png';

const FeaturedAlbums = ({albums}) => {
    const featured = albums.map(album => {
        return (
            <li key={album.id} className="featured-item">
                <img src={album.image || albumImage} alt={album.name} className="featured-track-image" />
                <Link to={`album/${album.id}`}>
                    {album.name}
                </Link>
            </li>
        );
    });
    return (
        <>
            <h3>Featured Albums</h3>
            <ul className="featured-tracks">
            {featured}
            </ul>
        </>
    );
};

export default FeaturedAlbums;