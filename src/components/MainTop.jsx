import React from 'react'
import '../assets/scss/maintop.scss'
import math from '../assets/svg/math.png'
import book from '../assets/svg/book.png'

const MainTop = () => {
    return (
        <div className='main_top_div'>
            <div className="top">
                <div className='text_div'>
                    <span>초등 3학년 교과서</span>
                    <h2>선생님과 학생을 생각하는<br />지학사 교과서</h2>
                    <p>가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.
                        <br />항상 학교 현장을 고민하는 지학사 교과서가<br />그동안의 경험을 모아 더 나은 수업을 도와드립니다.
                    </p>
                </div>
                <div className='text_right'>
                    <div className='item'>
                        <img src={math} alt="" />
                        <p>수학</p>
                    </div>
                    <div className='item'>
                        <img src={math} alt="" />
                        <p>수학</p>
                    </div>
                    <div className='item'>
                        <img src={math} alt="" />
                        <p>수학</p>
                    </div>
                    <div className='item'>
                        <img src={math} alt="" />
                        <p>수학</p>
                    </div>
                    <div className='item'>
                        <img src={math} alt="" />
                        <p>수학</p>
                    </div>
                    <div className='item'>
                        <img src={math} alt="" />
                        <p>수학</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <ul>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                    <li>
                        <img src={book} alt="" />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default MainTop