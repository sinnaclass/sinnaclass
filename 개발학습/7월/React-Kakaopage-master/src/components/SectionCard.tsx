import { Clock, SquareM } from "lucide-react";

type Props = {
    props: {
        id: number;
        title: string;
        views: string;
    };
};

function SectionCard({ props }: Props) {
    return (
        <div className="section2__body__card">
            {/* 아이콘 영역 */}
            <div className="icon-box">
                <Clock size={16} />
                <SquareM size={16} />
            </div>
            {/* 이미지 영역 */}
            <img src="" alt="" className="thumbnail" />
            {/* 제목 & 조회수 영역 */}
            <div className="text-box">
                <span className="text-box__title">{props.title}</span>
                <span className="text-box__views">{props.views}</span>
            </div>
        </div>
    );
}

export default SectionCard;
