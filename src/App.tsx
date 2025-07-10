import { Gift, Search, ShoopingBag, User } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="page">
      {/*헤더 영역*/}
      <header className="header"></header>
      <nav className="nav"></nav>
      <button>지금핫한</button>
      <button>실시간</button>
      <button>오늘신작</button>
      <button>이벤트</button>
      <button>낭성인기</button>
      <button>완결추천</button>
      <button>완전판</button>
      <button>여성인기</button>
      <button>TV속 작품</button>
      <button>브랜드</button>

      {/*왼쪽 영역*/}
      <div>
        {/*텍스트 로고*/}
        <div classNAME="header_left_logo">kakaopage</div>

        {/*메뉴 영역*/}
        <div>
          <a href="" className="menu">
            추천
          </a>
          <a href="" className="menu">
            웹툰
          </a>
          <a href="" className="">
            웹소설
          </a>
          <a href="" className="">
            책
          </a>
          <a href="" className="">
            바로가기
          </a>
        </div>
      </div>

      {/*오른쪽 영역*/}
      <div className="header_right">
        {/*검색창 UI 로고*/}
        <div className="header_right_search-box"></div>
        <input type="text" placeholder="제목, 작가"></input>
        <button class="name">
          <ArrowRight />
        </button>

        {/*버튼 UI*/}
        <div className="header_right_btn_box"></div>
        <button className="header_ri"></button>
        <button></button>
        <button className="nav"></button>
      </div>
    </div>
  );
}

export default App;
