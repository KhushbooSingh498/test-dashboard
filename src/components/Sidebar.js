import { NavLink } from "react-router-dom";


const Sidebar = ({isSidebarOpen}) =>{
    return (
        <div className={isSidebarOpen ? 'sidebar active' : 'sidebar'}>
            <div className="sidebar__top">
            <NavLink to='/' className='nav-item'>
            <i class="fa-brands fa-windows"></i> Dashboard</NavLink>
            <NavLink to='/transaction' className='nav-item'><i class="fa-solid fa-right-left"></i>Transaction</NavLink>
            </div>

            <NavLink to='/support' className='nav-item support-btn'><i class="fa-solid fa-headset"></i> Support</NavLink>

        </div>
    )
}

export default Sidebar;