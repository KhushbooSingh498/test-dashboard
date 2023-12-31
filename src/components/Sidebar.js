import { NavLink } from "react-router-dom";
import { useState } from 'react';


const Sidebar = ({isSidebarOpen}) =>{
    const [isClose, setClose] = useState(isSidebarOpen);
    // const handleClose = ()=>{
    //     setClose((prev)=>!prev);
    // }
    return (
        <div className={isSidebarOpen ? 'sidebar active' : 'sidebar'}>
            {/* <button onClick={handleClose}><i className="fa-solid fa-xmark"></i></button> */}
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