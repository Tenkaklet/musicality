import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const { user } = useAuth0();
    console.log(user);
    return (
        <header>
            <h1>Profile</h1>
        </header>
    );
};

export default Profile;
