import { NavLink } from "react-router-dom";
import GridIcon from '../img/grid.svg'

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <NavLink to='/' className='nav-item'>
             Dashboard</NavLink>
            <NavLink to='/transaction' className='nav-item'>Transaction</NavLink>
            </div>

            <NavLink to='/support' className='nav-item support'>Support</NavLink>

        </div>
    )
}

export default Sidebar;