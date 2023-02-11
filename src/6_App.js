import Button from "./Button";
import styles from "./App.module.css"; //module 이거 막지은 이름이 아니라 css 사용하기 위해 꼭 써야하는이름임
//import { useState } from "react"; // usestate 불러오기
import { useState, useEffect } from "react"; //useEffect 불러오기

function App() {
  const [count, setValue] = useState(0);
  const [text, setText] = useState("");

  const onchange = (event) => setText(event.target.value);
  const countdown = () => setValue((prev) => prev + 1);

  // 1. 버튼을 누를때마다 랜더링 한다.
  console.log("call an api");

  /**
   * 2. useEffect( () => {console.log("CALL THE API....");}, [] ); 첫번째 인자 한번만 실행시키고 싶은 값, 두번째는 마법 
   * 3. useEffect( () => {console.log("CALL THE API....");}, [???] );원하는 동작일때만 실행시키고 싶을때 두번째 인자에 값넣기
   */
  useEffect(() => {
    console.log("검색할때만 마다 나를 불러라");
  }, [text]);

  useEffect(() => {
    console.log("버튼누를때만 마다 나를 불러라");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <input value={text} onChange={onchange}></input>
      <Button text={"Continue"}/>
      <button onClick={countdown} className={styles.title} > blue click me</button>
    </div>
  );
}

export default App;


