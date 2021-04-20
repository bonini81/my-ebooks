import React, { useContext } from 'react';
import { UserNameContext } from '../contexts/UserNameContext';

const Profile = () =>  {

    const { username } =  useContext(UserNameContext);
    console.log(username);

    const loading = () => {

        return <h1>Loading Madafaka..</h1>
    }

    const authProfile = () => {
        return (
        <React.Fragment>
         <h1>Hola, {username.name}!</h1>
        </React.Fragment>
        )
    }

const verifyUser = () => {
        return username 
        ? authProfile()
        : loading()

    } 

    return (

        <React.Fragment>
            { verifyUser() }
            <div></div>
        </React.Fragment>

    );

}

export default Profile;






