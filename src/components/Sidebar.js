import { NavLink } from "react-router-dom";
import GridIcon from '../img/grid.svg'

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <NavLink to='/' className='nav-item'>
            <i class="fa-brands fa-windows"></i> Dashboard</NavLink>
            <NavLink to='/transaction' className='nav-item'><i class="fa-solid fa-right-left"></i>Transaction</NavLink>
            </div>

            <NavLink to='/support' className='nav-item support'><i class="fa-solid fa-headset"></i> Support</NavLink>

        </div>
    )
}

export default Sidebar;