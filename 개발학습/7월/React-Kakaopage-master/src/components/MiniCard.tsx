import { Clock } from "lucide-react";

function MiniCard() {
    return (
        <div className="section1__contents__card">
            <div className="img-box">
                {/* 시계 아이콘 */}
                <Clock size={16} className="img-box__icon" />
                {/* 웹툰 썸네일 이미지 */}
                <img src="" alt="" className="img-box__thumbnail" />
            </div>
            <div className="text-box">
                <span className="text-box__title">검을 든 꽃</span>
                <span className="text-box__genre">웹소설</span>
            </div>
        </div>
    );
}

export default MiniCard;
