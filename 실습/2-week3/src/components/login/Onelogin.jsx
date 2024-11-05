import React from 'react'

const Onelogin = () => {
    return (
        <div className='One_contents'>
            <div className="text">
                <p className="info">넥슨플레이{'>'}넥슨인증기{'>'}일회용 로그인</p>
                <p className="info_txt">에서 8자리 숫자를 입력해주세요.</p>
            </div>
            <div className="num_div">
                <input type="text" className='num' placeholder='4자리' />
                <input type="text" className='num' placeholder='4자리'/>
            </div>
            <div className="login_div">일회용 로그인</div>
            <div className="notion_div">
                <div className="top_div">
                    <p className="title">일회용 로그인 이용 가이드</p>
                    <p className="more">넥슨플레이 안내 {'>'}</p>
                </div>
                <p className='notion'>1.넥슨플레이 앱을 실행시켜주세요.</p>
                <p className="notion">2.메뉴 탭에서 [넥슨인증기] 메뉴를 클릭, [일회용 로그인] 버튼을 클릭해주세요.</p>
                <p className="notion">3.8자리 번호를 입력하고 로그인 버튼을 클릭해주세요.</p>
            </div>

        </div>
    )
}

export default Onelogin