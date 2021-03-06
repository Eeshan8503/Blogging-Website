import { useEffect,useState } from 'react'
// import LoginButton from './Login';
import Search from './Search';
import logo from './../../data/icon-st.svg';
import Btn2 from './Btn_2';
import './Stylesheets/Navbar.css'
import api from './../../Util/api'
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faPenFancy,faSignOutAlt,faCog } from '@fortawesome/free-solid-svg-icons';

import Cookies from 'universal-cookie';
let cookies = new Cookies();

const Navbar_c = () => {
    const history = useHistory();

    const handleLogout = () => {
        cookies.set('jwt', '', { path: '/' });
        window.location.reload();
        history.push('/');
    }
    const ProfilePicture = (props) => {
        return (
            <div class="dropdown-hvr">
            <Link to="/profile"><img className="navbar-profile" src={props.dpUrl} alt="jacket" width="40px" height="40px" /></Link>
            <div class="dropdown-content-hvr">
                    <Link to="/profile"><div><FontAwesomeIcon icon={faUser}/> PROFILE</div></Link>
                    <Link to="/editor"><div><FontAwesomeIcon icon={faPenFancy}/> EDITOR </div></Link>
                    <Link to="/settings"><div><FontAwesomeIcon icon={faCog}/> SETTINGS</div></Link>
                    <Link onClick={handleLogout}><div><FontAwesomeIcon icon={faSignOutAlt}/> LOGOUT </div></Link>
                </div>
            </div>
        );
    };
    const [loginOrProfile, setLoginOrProfile] = useState(null);
    
    useEffect(() => {
         async function fetchMyAPI() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    setLoginOrProfile(<ProfilePicture dpUrl={res.data.user.dp} />);
                }
            } catch (err) {
                setLoginOrProfile(<Btn2/>);
            }
        }
        fetchMyAPI();
    },[]);

    return (
        <div className="container">
        <img className="icon-nv" src={logo} alt="_N.F"/>
        <div className="nav-links">
            <a className="nav-link" href="/home">Home</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/tutorial">Tutorial</a>
        </div>
        <div className="inner-container">
            {loginOrProfile}
            <Search />
        </div>
        </div>
    )
}

export default Navbar_c;