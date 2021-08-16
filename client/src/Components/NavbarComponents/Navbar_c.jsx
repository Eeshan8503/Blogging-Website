import { useEffect,useState } from 'react'
// import LoginButton from './Login';
import Search from './Search';
import logo from './../../data/icon-st.svg';
import Btn2 from './Btn_2';
import './Stylesheets/Navbar.css'
import api from './../../Util/api'

const Navbar_c = (props) => {
    let find=fetchMyAPI();
    const ProfilePicture = () => {
        return (
            <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="30px" height="30px" />
        );
    };
    const [loginOrProfile, setLoginOrProfile] = useState(null);
    const [check, checkker] = useState();
    checkker(find);
         async function fetchMyAPI() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    return true;
                    
                }
            } catch (err) {
                return false;
                
            }
        }
    
        useEffect(() => {
            if(find===true){
                setLoginOrProfile(<ProfilePicture />);
            }
            else{
                setLoginOrProfile(<Btn2 />);
            }
        }, [check])
    

    return (
        <div className="container">
        <img className="icon" src={logo} alt="_N.F"/>
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

export default Navbar_c
