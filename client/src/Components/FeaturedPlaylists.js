import React from "react";
import { Link } from "react-router-dom";


const FeaturedPlaylists = ({ playlists }) => {
    const featured = playlists.map(playlist => {
        return (
            <li key={playlist.id}>
                <Link to={`playlist/${playlist.id}`}>
                    {playlist.name}
                </Link>
            </li>
        );
    });

    return(
        <div>
            <h3>Playlists</h3>
            <ul className="featured-playlists">
                { featured }
            </ul>

        </div>
    );
};

export default FeaturedPlaylists;
