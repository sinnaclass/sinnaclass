import { ChevronRight } from "lucide-react";
import SectionCard from "./SectionCard";

type Props = {
    isButton: boolean;
};

function Section({ isButton }: Props) {
    const data = [
        {
            id: 1,
            title: "약 만드는 시한부 악녀님 1",
            views: "37.2만",
        },
        {
            id: 2,
            title: "내 이름은 김삼순 1",
            views: "3.2억",
        },
        {
            id: 3,
            title: "태양의 후예 1",
            views: "1억",
        },
        {
            id: 4,
            title: "약 만드는 시한부 악녀님 2",
            views: "37.2만",
        },
        {
            id: 5,
            title: "내 이름은 김삼순 2",
            views: "3.2억",
        },
        {
            id: 6,
            title: "태양의 후예 2",
            views: "1억",
        },
    ];

    return (
        <div className="section2">
            <div className="section2__header">
                <span className="section2__header__title">기다리면 무료 웹툰</span>
                {isButton && <ChevronRight size={20} className="section2__header__icon" />}
            </div>
            <div className="section2__body">
                {/* 카드 영역 */}
                {data.map((item) => {
                    return <SectionCard props={item} />;
                })}
            </div>
        </div>
    );
}

export default Section;
