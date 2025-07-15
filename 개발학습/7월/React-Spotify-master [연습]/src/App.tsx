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
    
    // 페이지전체 화면
    <div className="page">
      
      {/* 전체, 높이,수평 센터, 양쪽정렬, 여백   */}
      <header className="w-full h-5 flex items-center justify-between px-1">
      
        <div className="w-1/2 flex items-center gap-6">
          <img src="src/assets/spotify.svg" alt="" className="w-10 h-10" />
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
    
    
    </div>
  );
}

export default App;