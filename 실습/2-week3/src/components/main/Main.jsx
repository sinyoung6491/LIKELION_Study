import React, { useState } from 'react'
import menu from '../../assets/img/menu_icon.svg'
import left from '../../assets/img/left.svg'
import right from '../../assets/img/right.svg'
import game1 from '../../assets/img/game1.png'
import game2 from '../../assets/img/game2.png'
import game3 from '../../assets/img/game3.png'
import game_page1 from '../../assets/img/game_page1.png'
import game_page2 from '../../assets/img/game_page2.jpg'
import game_page3 from '../../assets/img/game_page3.png'
import game_page4 from '../../assets/img/game_page4.png'
import search from '../../assets/img/search.svg'
import popup_event from '../../assets/img/popup_event.png'
import Slider from '../Section/Slider'
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const goToLogIn = () => {
        navigate("/Login");
    }
    const goToJoIn = () => {
        navigate("/Join");
    }
    const goToCommu = () => {
        navigate("/Commu");
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='main_wrap'>
            <div className="header">
                <div className="menu_div" onClick={toggleMenu}>
                    <img src={menu} alt="" />
                    <p>메뉴</p>
                </div>
                <img src="https://rs.nxfs.nexon.com/bannerusr/24/3/iJIE21142457797.gif" alt="넥슨 30주년" />
                <div className="login_div">
                    <p className="join" onClick={goToJoIn}>회원가입</p>
                    <div className="login" onClick={goToLogIn}>로그인</div>
                </div>
            </div>
            {/* Background overlay */}
            {isMenuOpen && (
                <div className="overlay_background" onClick={toggleMenu}></div>
            )}

            {/* Menu overlay */}
            {isMenuOpen && (
                <div className="menu_overlay">
                    <span className="close_button" onClick={toggleMenu}></span>
                    {/* Menu items */}
                    <div className="menu_content">
                        <div className="top">
                            <a>전체게임</a>
                            <div className="center">고객센터</div>
                        </div>

                        <div className="game_sections">
                            <div className="cell">
                                <div className="game_list">
                                    <h3>A~Z</h3>
                                    <p>FC 모바일</p>
                                    <p>FC 온라인</p>
                                    <p>V4</p>
                                    {/* Add more items as needed */}
                                </div>
                                <div className="game_list">
                                    <h3>ㄱ~ㄹ</h3>
                                    <p>고질라 디펜스 포스</p>
                                    <p>낙원: LAST PARADISE</p>
                                    <p>넥슨타운: NEXONTOWN</p>
                                    <p>더 파이널스</p>
                                    <p>던전앤파이터</p>
                                    <p>던전앤파이터 듀얼</p>
                                    <p>던전앤파이터 모바일</p>
                                    <p>데이브 더 다이버</p>
                                    <p>드래곤네스트</p>
                                </div>
                                <div className="game_list">
                                    <h3>ㅁ~ㅅ</h3>
                                    <p>마비노기</p>
                                    <p>마비노기 영웅전</p>
                                    <p>메이플스토리</p>
                                    <p>메이플스토리 월드</p>
                                    <p>메이플스토리2</p>
                                    <p>메이플스토리M</p>
                                    <p>바람의나라</p>
                                    <p>바람의나라: 연</p>
                                    <p>버블파이터</p>
                                    <p>블루 아카이브</p>
                                    <p>사이퍼즈</p>
                                    <p>서든어택</p>
                                    <p>슈퍼바이브</p>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="game_list">
                                    <h3>ㅇ~ㅈ</h3>
                                    <p>아스가르드</p>
                                    <p>아키에이지</p>
                                    <p>어둠의전설</p>
                                    <p>엘소드</p>
                                    <p>일랜시아</p>
                                    <p>진 삼국무쌍 M</p>
                                </div>
                                <div className="game_list">
                                    <h3>ㅊ~ㅋ</h3>
                                    <p>카운터-스트라이크 온라인</p>
                                    <p>카트라이더 러쉬플러스</p>
                                    <p>카트라이더: 드리프트</p>
                                    <p>크레이지 아케이드</p>
                                    <p>클로저스</p>
                                </div>
                                <div className="game_list">
                                    <h3>ㅌ~ㅎ</h3>
                                    <p>테일즈위버</p>
                                    <p>파이널판타지14</p>
                                    <p>퍼스트 디센던트</p>
                                    <p>퍼스트 버서커: 타잔</p>
                                    <p>프라시아 전기</p>
                                    <p>프리스타일2</p>
                                    <p>환세취호전 온라인</p>
                                    <p>히트2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_links">
                        <div className="items">
                            <div className="icon" id='my'></div>
                            <p className="text">내정보</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='cash'></div>
                            <p className="text">넥슨캐시</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='safe'></div>
                            <p className="text">보안센터</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='play'></div>
                            <p className="text">넥슨플레이</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='plug'></div>
                            <p className="text">넥슨플러그</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='link'></div>
                            <p className="text">넥슨링크</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='test'></div>
                            <p className="text">넥슨실험실</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='card'></div>
                            <p className="text">넥슨현대카드</p>
                        </div>
                        <div className="items">
                            <div id='create'></div>
                            <p className="text">크리에이터즈</p>
                        </div>
                        <div className="items">
                            <div id='essential'></div>
                            <p className="text">넥슨에센셜</p>
                        </div>
                        <div className="items">
                            <div id='api'></div>
                            <p className="text">넥슨OPENAPI</p>
                        </div>
                        <div className="items">
                            <div className="icon" id='event'></div>
                            <p className="text">이벤트&공지</p>
                        </div>

                        {/* Add more links as per your layout */}
                    </div>
                    <div className="total">
                        전체서비스
                    </div>
                </div>
            )}

            <div className="swiper" >
                <Slider />
            </div>
            <div className="contents_div">
                <div className="contents_top">
                    <div className="left_div">
                        <p className="title">추천게임</p>
                        <div className="type_div">
                            <p>#최근에 많이 검색된</p>
                            <div className="move">
                                <div className="left">
                                    <img src={left} alt="" />
                                </div>
                                <div className="right">
                                    <img src={right} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="game_div">
                            <div className="game_contents">
                                <img src={game1} alt="" />
                                <div className="recomend">추천</div>
                                <p className="game_title">FC 온라인</p>
                            </div>
                            <div className="game_contents">
                                <img src={game2} alt="" />
                                <div className="recomend">추천</div>
                                <p className="game_title">FC 모바일</p>
                            </div>
                            <div className="game_contents">
                                <img src={game3} alt="" />
                                <div className="recomend">추천</div>
                                <p className="game_title">서든어택</p>
                            </div>
                        </div>
                    </div>
                    <img src={popup_event} alt="" className='popup_event' />
                    <div className="right">
                        <div className="top">
                            <p>고객센터</p>
                            <p>보안센터</p>
                            <p>넥슨 PC방 찾기</p>
                        </div>
                        <div className="login_div">
                            <div className="nexon_login">NEXON ID 로그인</div>
                            <div className="other">
                                <div className="one">일회용 로그인</div>
                                <div className="QR">QR 로그인</div>
                            </div>
                            <div className="sns_logins">
                                <p>다른 계정 간편 로그인</p>
                                <div className="icon" id="google" ></div>
                                <div className="icon" id="facebook" ></div>
                                <div className="icon" id="naver" ></div>
                                <div className="icon" id="apple" ></div>
                            </div>
                            <div className="find_join_div">
                                <div>
                                    <p className="ID_find">넥슨 ID 찾기</p>
                                    <p className="PW_find">비밀번호 찾기</p>
                                </div>
                                <p className="join">회원가입</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contents_bottom">
                    <div className="contents_title_div">
                        <div className="left">
                            <p className="title">전체게임</p>
                            <div id="view" className='icon'></div>
                            <div id="list" className='icon'></div>
                            <p className="more" onClick={goToCommu}>모바일게임 커뮤니티 모아보기</p>
                            <div className="more_link" onClick={goToCommu}></div>
                        </div>
                        <div className="right">
                            <input type="text" placeholder='게임명 검색' />
                            <img src={search} alt="" />
                        </div>
                    </div>
                    <div className="contents_type_div">
                        <span >
                            <label className="contents_type">#전체</label>
                            <label className="contents_type">#얼리스테이지</label>
                            <label className="contents_type">#Windows</label>
                            <label className="contents_type">#macOS</label>
                            <label className="contents_type">#Steam</label>
                            <label className="contents_type">#EPIC</label>
                            <label className="contents_type">#Android</label>
                            <label className="contents_type">#iOS</label>
                            <label className="contents_type">#PlayStation</label>
                            <label className="contents_type">#XBOX</label>
                            <label className="contents_type">#SWITCH</label>
                            <label className="contents_type">#RPG</label>
                            <label className="contents_type">#액션 RPG</label>
                            <label className="contents_type">#AOS/MOBA</label>
                            <label className="contents_type">#FPS</label>
                            <label className="contents_type">#캐주얼</label>
                            <label className="contents_type">#스포츠</label>
                            <label className="contents_type">#PVP</label>
                            <label className="contents_type">#전략</label>
                            <label className="contents_type">#이벤트</label>
                        </span>
                    </div>
                    <div className="contents_list_div">
                        <div className="contents_div">
                            <img src={game_page1} alt="" />
                            <p className="title">퍼스트 디센던트</p>
                            <p className="text">루트슈터</p>
                            <div className="play_type_div" id='pc'></div>
                        </div>
                        <div className="contents_div">
                            <img src={game_page2} alt="" />
                            <p className="title">메이플스토리</p>
                            <p className="text">RPG</p>
                            <div className="play_type_div" id='pc'></div>
                        </div>
                        <div className="contents_div">
                            <img src={game_page3} alt="" />
                            <p className="title">던전앤파이터</p>
                            <p className="text">ACTION RPG</p>
                            <div className="play_type_div" id='pc'></div>
                        </div>
                        <div className="contents_div">
                            <img src={game_page4} alt="" />
                            <p className="title">서든어택</p>
                            <p className="text">FPS</p>
                            <div className="play_type_div" id='pc'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_div">
                <div className="footer_top">
                    <p className="notion">[공지] 10/31(목) 넥슨 정기점검 안내</p>
                    <div className="sns_div">

                    </div>
                </div>
                <div className="more_page_div">
                    <p className="more">
                        이용약관    |    개인정보처리방침   |   청소년보호정책   |   게임IP사용가이드   |   게임시간선택제   |   고객센터   |   전체서비스
                    </p>
                    <p className="more">
                        회사소개  |  채용안내  |  윤리경영  |  넥슨브랜드가이드  |  넥슨PC방  |  넥슨에센셜
                    </p>
                </div>
                <p className="info">
                    ㈜넥슨코리아 대표이사 강대현·김정욱 경기도 성남시 분당구 판교로 256번길 7 전화 : 1588-7701 팩스 : 0502-258-8322 <br />
                    E-mail : contact-us@nexon.co.kr 사업자등록번호 : 220-87-17483호 통신판매업 신고번호 : 제2013-경기성남-1659호 사업자정보확인 <br />
                    © NEXON Korea Corporation All Rights Reserved.
                </p>
                <div className="icon"></div>
            </div>

        </div>
    )
}

export default Main