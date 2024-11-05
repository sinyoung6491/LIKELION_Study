import React from 'react'
import {QRCodeSVG} from 'qrcode.react';

const QRlogin = () => {
    return (
        <div className='QR_contents'>
            <div className="text">
                <p className="info">넥슨플레이{'>'}QR 스캐너{'>'}QR 코드 촬영{'>'}바이오 인증</p>
                <p className="info_txt">진행 후</p>
            </div>
            <p className="info_txt">QR 로그인 버튼을 클릭해주세요.</p>
            <div className="num_div">
                <QRCodeSVG />
            </div>
            <div className="login_div">QR 로그인</div>
            <div className="notion_div">
                <div className="top_div">
                    <p className="title">QR 로그인 이용 가이드</p>
                    <p className="more">넥슨플레이 안내 {'>'}</p>
                </div>
                <p className='notion'>1.모바일기기로 QR코드를 촬영해주세요. QR 스채너 위치 보기</p>
                <p className="notion">2.바이오인증의 인증 승인 페이지에서 지문인식을 해주세요. (또는 Face ID)</p>
                <p className="notion">3.인증완료 후 [QR 로그인]을 클릭해주세요.</p>
            </div>

        </div>
    )
}

export default QRlogin