import {useContext} from 'react';
import {AuthContext}  from '../contexts/AuthContext';


const Logout = (props) => {

    const { removeToken } = useContext(AuthContext);
    removeToken();
    alert('Sucessful logout');
 

}


export default Logout;