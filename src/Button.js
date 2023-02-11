import PropTypes from "prop-types";
import styles from "./Button.module.css";

// 리액트는 css를 object로 변환시켜주기 떄문에 사용할때 오브젝트처럼 불러와서 사용할 수 있다.
// 장점 : css를 모듈화해서 사용하면 어느 js에서든지 같은클래스명으로 사용해도 된다 >> 리액트에서 변수명을 랜덤으로 계속 바꿔주기 떄문에
function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;