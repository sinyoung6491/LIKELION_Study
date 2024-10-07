import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Slider from './Section/Slider';
import search from '../assets/img/icon/search.svg'
import search_list from '../assets/img/icon/search_list.svg'
import heart from '../assets/img/icon/heart.svg'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');  // 검색어 상태
    const [places, setPlaces] = useState([]);  // 검색 결과 장소 리스트
    const [showList, setShowList] = useState(false);  // 장소 리스트 보기/숨기기 상태
    const [center, setCenter] = useState({ lat: 37.5665, lng: 126.9780 }); // 지도 중심 상태 (초기값: 서울)

    // 카카오 지도 API를 사용하여 장소 검색
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const searchPlaces = () => {
        if (!searchTerm) {
            alert('검색어를 입력하세요!');
            return;
        }

        // 카카오 지도 SDK의 장소 검색 서비스 객체 생성
        const ps = new window.kakao.maps.services.Places();

        // 장소 검색 요청 (키워드로 검색)
        ps.keywordSearch(searchTerm, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                // 검색 결과로 장소 리스트 업데이트
                setPlaces(data);

                // 첫 번째 결과를 지도 중심으로 설정
                const firstPlace = data[0];
                setCenter({ lat: firstPlace.y, lng: firstPlace.x });
            } else {
                alert('검색 결과가 없습니다.');
            }
        });
    };

    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div className='Search_wrap container'>
            <Slider />
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="장소를 검색해주세요!"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <img src={search} onClick={searchPlaces} className='search_icon' alt="" />
            </div>
            <img src={search_list} onClick={toggleList} className='search_list' alt="" />
            <Map
                center={center}  // 검색 결과에 따라 지도 중심 변경
                style={{  height: '336px', borderRadius:'20px', marginLeft:'19px', marginRight:'19px'}}
                level={3}
            >
                {places.map((place) => (
                    <MapMarker
                        key={place.id}
                        position={{ lat: place.y, lng: place.x }}  // 장소의 좌표로 마커 표시
                    >
                    </MapMarker>
                ))}
            </Map>

            <div className={`places-list ${showList ? 'active' : ''}`}>  {/* 상태에 따른 클래스 추가 */}
                <h3>“{searchTerm}” 주변에 있는 곳</h3>
                <ul>
                    {places.map((place) => (
                        <li key={place.id} className='place_item'>
                            {place.place_name}
                            <img src={heart} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;
