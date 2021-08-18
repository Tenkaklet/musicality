import React, {createContext, useState} from "react";

const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
    const [song, setSong] = useState('');
    return (
        <PlayerContext.Provider value={{song, setSong}}>
            {children}
        </PlayerContext.Provider>
    );
};

export  { PlayerProvider, PlayerContext };
