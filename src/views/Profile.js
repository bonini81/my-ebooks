import React, { useContext } from 'react';
import { UserNameContext } from '../contexts/UserNameContext';


const Profile = () =>  {

    const { username } =  useContext(UserNameContext);


    const loading = () => {

        return <h1>Loading Madafaka..</h1>
    }

    const authProfile = () => {
        return (
        <React.Fragment>
        <div class="d-flex flex-column p-5">
         <h2>Who is Online NOW?</h2>
         <br />
         <p><strong>Username:</strong> {username.name}</p>
         <p><strong>Email:</strong> {username.email}</p>
         <p><a href="#">Edit Username</a></p>
         </div>
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






