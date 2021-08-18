import { useContext } from "react";
import {PlayerContext} from "../contexts/PlayerContext";


const FeaturedTracks = ({ tracks }) => {
    const pla = useContext(PlayerContext);


    const featured = tracks.map(track => {
        return (
            <li key={track.id} className="featured-item">
                <img src={track.album_image} alt={track.name} className="featured-track-image" />
                <div className="featured-overlay" onClick={()=> pla.setSong(track.audio)}><p>Play</p></div>
                <p>{track.name} - <strong>{track.artist_name}</strong></p>
                
            </li>
        );
    });
    return (
        <div>
            <h3>Featured Tracks</h3>
            <ul className="featured-tracks">
                {featured}
            </ul>
        </div>
    );
};

export  default FeaturedTracks;
