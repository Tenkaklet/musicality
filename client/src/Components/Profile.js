import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const { user } = useAuth0();
    console.log(user);
    return (
        <header>
            <h1>Profile</h1>
            <h3>Welcome {user.nickname}</h3>
            <img src={user.picture} alt="some dude" />
        </header>
    );
};

export default Profile;
