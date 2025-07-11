import { useState } from "react";

f

const Info=() => {
  //useState => Hooks
  // USTstAT는 가장기본이면 HOOK 이며, 함수컴포넌트에서도 가변적인 상태를 지닐수 있게 해준다
  // 이 함수가 호출되면 배열을 반환한다. => 첫번째 요소는 상태 값, 두번째 요소는 상태는 설정하는 함수

  const[test,setTest] =useState<string>(0);  
  const [value, setValue] = useState(0); // => 이 함수가 호출되면 배열을 반환한다.  
  const [name, setName] = useState(0); // => 이 함수가 호출되면 배열을 반환한다.
  const [nickname, setNickname]


  }
//   //useState함수의 파라미터에는 상태의 기본값을 넣어줍니다

// //   return (
// //     <div>
// //       <P>
// //         {" "}
// //         현재 카운터 값은<B>{alue}</B> 입니다
// //       </P>

// //       <button onClick={() => setValue(value + 1)}>+1</button>
// //       <button onClick={() => setValue(value - 1)}>-1</button>
// //     </div>
// //   );
// // }

// export default App;

  CONST onchange = e => {
    setName(e.target.value);
  };

  CONST onchangeNickname = e => {
    setNickname(e.target.value);0
  };

  return(
    <div>
        <div>
            <input value={name} onChange = {onChangeName} />
            <input value={nickname} onChange={onChangeNickname}/>
            
        </div>
    <div>
      <div>
        <b>이름:</b>{name}
      </div>
      <div>
        <b>닉네임:</b>{nickname}
      </div>

    </div>

    </div>
  
