import {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthContext}  from '../contexts/AuthContext';


const Logout = (props) => {

    const history = useHistory();
    const { removeToken } = useContext(AuthContext);
    removeToken();
    alert('Sucessful logout');
    history.push('/');
 
}


export default Logout;

