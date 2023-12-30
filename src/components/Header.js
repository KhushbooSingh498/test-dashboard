import { Link } from "react-router-dom";
import UserLogo from '../img/user-circle.svg'

const Header = () =>{
    return (
        <header className="header">
            <div className="container">
                <button className="menu-bar"><i class="fa-solid fa-bars"></i></button>
                <h1 className="main-title">Dashboard</h1>

                <Link to='/user' className="user">
                    <img src={UserLogo} alt="user-name"></img>
                </Link>
            </div>
        </header>
    )
}

export default Header;