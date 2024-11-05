import React from 'react'

const IDlogin = () => {
    return (
        <div className="ID_contents">
            <div className='input'>
                <div className="ID">
                    <input type="text" placeholder='넥슨ID (아이디 또는 이메일)' />
                </div>
                <div className="PW">
                    <input type="text" placeholder='비밀번호' />
                </div>
            </div>
            <div className='stay'>
                <input type="checkbox" id="" />
                <p>로그인 상태 유지</p>
            </div>
            <div className="login_div">넥슨ID 로그인</div>
            <div className="more">
                <p className="join">회원가입</p>
                <p className="find">넥슨ID 찾기</p>
                <p className="PW_find">비밀번호 찾기</p>
            </div>
            <div className="facebook">
                <div className="icon"></div>
                <p className="text">Facebook 계정으로 로그인</p>
            </div>
            <div className="Google">
                <div className="icon"></div>
                <p className="text">Google 계정으로 로그인</p>
            </div>
            <div className="Naver">
                <div className="icon"></div>
                <p className="text">Naver 계정으로 로그인</p>
            </div>
            <div className="Apple">
                <div className="icon"></div>
                <p className="text">Apple 계정으로 로그인</p>
            </div>
        </div>
    )
}

export default IDlogin