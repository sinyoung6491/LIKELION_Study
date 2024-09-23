import React from 'react'
import '../assets/scss/mainbottom.scss'
import math from '../assets/svg/math.png'
import book from '../assets/svg/book.png'

const MainBottom = () => {
  return (
    <div className='main_bottom_div'>
            <div className="top">
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
                <div className='text_div'>
                    <span>초등 4학년 교과서</span>
                    <h2>한 단계 더 성장하는<br />아이들과 선생님</h2>
                    <p>수업의 과정은 즐겁고, 성취는 보람찬 2022 개정 교육과정 교과서.
                        <br />내용의 깊이는 더하고 과정은 즐겁게 구성한<br />지학사 교과서와 함께 새로운 수업을 경험해 보세요.
                    </p>
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

export default MainBottom