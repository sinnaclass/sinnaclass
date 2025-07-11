import { useEffect } from "react";

function Effect() {
  //useEffect
  //useEffect 리액트 컴포넌트가 랜더링될 때마다 특정 장작업 수행하도록 설정할 수 있다고 한다.
    //-마운트가 될때만 실행하고 싶을때
    //useEffect 에서 설정한 함수를 컴포넌트가 화면에 맨처음 렌더링 될 대만 실행하고
    //업데이트 될 때는 실행하지 않으려면 함수의 두번재 파라미터로 빈 배열을 넣어주면 된다.
    //useEffect 함수는 하나의 상태값만 관리할 수 있습니다. 컴
}

const[name, setName] = useState<string>("");
const[nickname, setNickname] = useSate<string>("");

useEffect()

const onChangeName =(event:React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
};
const onChangNickname =(envent:React.ChangeEvent<HTMLInputElement>) =>{
    setNickname(event?.target.value);
};

return(
    <div>
        <input type ="text", 
    </div>
)