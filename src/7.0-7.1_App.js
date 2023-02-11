//import { useState } from "react"; // usestate 불러오기
import { useState, useEffect } from "react"; //useEffect 불러오기

function App() {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);
  const onChange=(event)=>{
    setText(event.target.value); // state는 항상modify를 통해 수정해야한다 직접적으로 수정은 좋지 않다
  }
  const onSubmit=(event)=>{
    event.preventDefault(); // submit시 새로고침 방지

    if (text === ""){
      return;
    }   
    // ...currentArray : 배열을 다 꺼내서 나열해줌
    // 리액트는 함수의 첫번째 arguments로 현재값을 state로 보낸다
    setTexts((currentArray)=> [text, ...currentArray]) 
    console.log(texts.map((item, index) => <li key={index}>{item}</li>)); // map을 통해 배열안의 내용을 꺼내온다. key=index를 꼭 써줘여한다
    setText("");
  }

  return (
    <div>
      <h1>My To Dos ()</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange}></input>
        <button> click me</button>
      </form>

      <hr />
      <ul>
        {texts.map((item, index)=>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default App;


