import React, { useState } from 'react'
import IDlogin from './IDlogin'
import Onelogin from './Onelogin'
import QRlogin from './QRlogin'

const Login = () => {
    const [activeLogin, setActiveLogin] = useState('ID'); // 기본 상태를 'ID'로 설정

    const renderActiveLogin = () => {
        switch (activeLogin) {
            case 'ID':
                return <IDlogin />;
            case 'One':
                return <Onelogin />;
            case 'QR':
                return <QRlogin />;
            default:
                return <IDlogin />;
        }
    };
    
    return (
        <div className="login_wrap">
            <div className="top">
                <p className="logo"></p>
                <div className="login_type_div">
                    <div className={activeLogin === 'ID' ? 'active' : 'no_active'}
                        onClick={() => setActiveLogin('ID')}>
                        넥슨ID 로그인
                    </div>
                    <div className={activeLogin === 'One' ? 'active' : 'no_active'}
                        onClick={() => setActiveLogin('One')}>
                        일회용 로그인
                    </div>
                    <div className={activeLogin === 'QR' ? 'active' : 'no_active'}
                        onClick={() => setActiveLogin('QR')}>
                        QR 로그인
                    </div>
                </div>
            </div>
            
            {renderActiveLogin()}

            <div className="footer">
                <p>© NEXON Korea Corporation All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Login