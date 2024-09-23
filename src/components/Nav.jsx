import React from 'react'
import logo from '../assets/svg/logo.svg'
import '../assets/scss/nav.scss'

const Nav = () => {
    return (
        <div className='Nav_div'>
            <img src={logo} alt="" />
            <div>
                <a href="" className="nav_mid">초등 3학년 교과서</a>
                <a href="" className="nav_mid">초등 4학년 교과서</a>
            </div>
            <div>
                <a href="" className="nav_right">티솔루션</a>
                <a href="" className="nav_right">이벤트</a>
            </div>
        </div>
    )
}

export default Nav