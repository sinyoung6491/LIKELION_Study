import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import nav_home from '../../assets/img/icon/home.svg'
import nav_home_full from '../../assets/img/icon/homefull.svg'
import nav_like from '../../assets/img/icon/like.svg'
import nav_like_full from '../../assets/img/icon/likefull.svg'
import nav_search from '../../assets/img/icon/search.svg'
import nav_search_full from '../../assets/img/icon/searchfull.svg'
import nav_mypage from '../../assets/img/icon/mypage.svg'
import nav_mypage_full from '../../assets/img/icon/mypagefull.svg'

const Nav = () => {
    const [activeNav, setActiveNav] = useState(1);
    return (
        <nav className='nav'>
            <div>
                <NavLink to="/" onClick={()=>setActiveNav(1)}>
                    <img src={ activeNav === 1? nav_home_full : nav_home } alt="" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/like"onClick={()=>setActiveNav(2)}>
                    <img src={ activeNav === 2? nav_like_full : nav_like} alt="" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/search"onClick={()=>setActiveNav(3)}>
                    <img src={ activeNav === 3? nav_search_full : nav_search} alt="" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/mypage"onClick={()=>setActiveNav(4)}>
                    <img src={ activeNav === 4? nav_mypage_full : nav_mypage} alt="" />
                </NavLink>
            </div>
        </nav>

    )
}

export default Nav