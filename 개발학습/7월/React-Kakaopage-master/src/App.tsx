import { Archive, Download, Home, Search } from "lucide-react";
//import 모듈 시스템 키워드
//{...}

function App() {
  return (
    <div className="page">
      {/* 전체 페이지를 감싸는 최상위 컨테이너. 필요에 따라 전체 레이아웃이나 스타일을 적용하는 용도 */}

      <header className="w-full flex items-center justify-between">
        {/* 
      헤더 영역.
      - w-full: 가로 너비를 100%로 설정 (부모 컨테이너 기준)
      - flex: Flexbox 레이아웃 적용 (가로 방향 정렬)
      - items-center: 세로축(교차축) 기준으로 자식 요소들을 중앙 정렬
      - justify-between: 주축(가로축) 기준으로 자식 요소들을 양 끝에 배치 (좌우로 공간 분배)
    */}

        {/* 헤더 - 왼쪽 영역 */}
        <div className="w-1/2 h-12">
          {/* 로고 */}
          <a href="">
            <img src="" alt="" />
          </a>
          {/* 홈 버튼 + 검색창 영역 */}
          <div className="h-full flex-1 flex items-center gap-2">
            <button className="rounded-full text-white bg-neutral-800 hover:bg-neutral-700">
              <Home />
            </button>
            {/* 검색창 영역 */}
            <div className="flex-1 h-full flex items-center gap-2 px-3 bg-neutral-900/90 rounded-3xl">
              <Search className="text-neutral-500" />
              <input
                type="text"
                placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
                className="flex-1 text-white"
              />
              <div className="w-[1px] h-5 bg-neutral-500"></div>
              <button className="mx-1">
                <Archive className="text-neutral-500" />
              </button>
            </div>
          </div>
        </div>
        {/* 헤더 - 오른쪽 영역 */}
        <div className="w-1/2 h-12 flex items-center justify-end gap-5">
          <div className="h-full flex items-center gap-5">
            <a href="" className="text-neutral-500 text-sm">
              Premium
            </a>
            <a href="" className="text-neutral-500 text-sm">
              지원
            </a>
            <a href="" className="text-neutral-500 text-sm">
              다운로드
            </a>
          </div>
          <div className="w-[1px] h-4 bg-neutral-500"></div>
          <div className="flex items-center gap-5">
            <a
              href=""
              className="flex items-center gap-1 text-neutral-500 text-sm"
            >
              <Download size={16} />앱 설치하기
            </a>
            <a href="" className="text-neutral-500 text-sm">
              가입하기
            </a>
          </div>
          <button className="h-10 px-6 rounded-3xl text-sm font-semibold bg-white">
            로그인하기
          </button>
        </div>
      </header>
    </div>
  );
}
