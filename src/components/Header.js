import { Link } from "react-router-dom";
import UserLogo from '../img/user-circle.svg'

const Header = () =>{
    return (
        <div className="header">
            <div className="container">
                <h1 className="main-title">Dashboard</h1>

                <Link to='/user' className="user">
                    <img src={UserLogo} alt="user-name"></img>
                </Link>
            </div>
        </div>
    )
}

export default Header;