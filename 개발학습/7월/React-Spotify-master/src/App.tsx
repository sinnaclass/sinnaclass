import {
  Archive,
  ArrowDownToLine,
  Globe,
  Home,
  Plus,
  Search,
} from "lucide-react";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  return (
    <div className="page">
      <header className="w-full h-30 flex items-center justify-between px-1">
        <div className="w-1/2 flex items-center gap-6">
          <img src="src/assets/spotify.svg" alt="" className="w-9 h-9" />
          <div className="flex flex-1 items-center gap-2">
            <button className="p-2 bg-neutral-500/25 rounded-full">
              <Home size={20} className="text-white" />
            </button>

            <div className="flex flex-1 items-center gap-2 py-2 px-3 rounded-2xl bg-neutral-500/25">
              <Search size={20} className="text-neutral-500" />
              <input
                type="text"
                placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
                className="flex-1 text-white text-sm placeholder:text-sm focus:outline-none"
              />
              <div className="w-[1px] h-4 mx-1 bg-neutral-500"></div>
              <Archive size={20} className="text-neutral-500" />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-6">
          <div className="flex items-center gap-6">
            <a href="" className="flex items-center">
              <span className="text-neutral-500 text-sm">Premium</span>
            </a>
            <a href="">
              <span className="text-neutral-500 text-sm">지원</span>
            </a>
            <a href="">
              <span className="text-neutral-500 text-sm">다운로드</span>
            </a>
          </div>
          <div className="w-[1px] h-4 bg-neutral-500"></div>
          <div className="flex items-center gap-6">
            <a href="" className="flex items-center gap-1">
              <ArrowDownToLine size={16} className="text-neutral-500" />
              <span className="text-neutral-500 text-sm">앱 설치하기</span>
            </a>
            <a href="">
              <span className="text-neutral-500 text-sm">가입하기</span>
            </a>
          </div>
          <button className="py-2 px-6 text-sm font-semibold bg-white rounded-2xl cursor-pointer">
            로그인 하기
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
