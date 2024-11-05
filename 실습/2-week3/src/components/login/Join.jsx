import React from 'react'
import welcome from '../../assets/img/img_welcome.png'
import choice from '../../assets/img/choice.png'
import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google.png'
import naver from '../../assets/img/naver.png'
import apple from '../../assets/img/apple.png'
import email from '../../assets/img/email.png'
import logo from '../../assets/img/join_logo.gif'



const Join = () => {
    return (
        <div className='Join_wrap'>
            <div className="header">
                <div className='wrap'>
                    <img src={logo} alt="" />
                    <div className="more">
                        <a href="">넥슨닷컴</a>
                        <p>|</p>
                        <a href="" className="join">회원가입</a>
                        <p>|</p>
                        <a href="" className="login">로그인</a>
                    </div>
                </div>
            </div>
            <div className="contents">
                <img src={welcome} alt="" className='welcome' />
                <img src={choice} alt="" className='choice' />
                <div className="box">
                    <img src={email} alt="" />
                </div>
                <div className="box">
                    <img src={facebook} alt="" />
                </div>
                <div className="box">
                    <img src={google} alt="" />
                </div>
                <div className="box">
                    <img src={naver} alt="" />
                </div>
                <div className="box">
                    <img src={apple} alt="" />
                </div>
            </div>
            <div className="footer">
                <p>© NEXON Korea Corporation All Rights Reserved.</p>
            </div>


        </div>
    )
}

export default Join