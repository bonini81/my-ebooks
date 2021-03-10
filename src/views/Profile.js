import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () =>  {

    const { user } = useContext(AuthContext);
    console.log(user);

    const loading = () => {

        return <h1>Loading Madafaka..</h1>
    }

    const authProfile = () => {
        return (
        <React.Fragment>
         <h1>Hola, {user.name}!</h1>
        </React.Fragment>
        )
    }

const verifyUser = () => {
        return user 
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






