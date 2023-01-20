import { useRef } from "react";

import "./Login.css";

const Login = (props) => {
  const nameRef = useRef();
  const passwordRef = useRef();

  const logInHandler = () => {
    if (nameRef.current.value === "lk" && passwordRef.current.value === "ja") {
      props.logIn();
    }
  };
  return (
    <form onSubmit={logInHandler}>
      <div className="box">
        <div className="name">
          <input
            type="text"
            id="name"
            placeholder="name"
            size="30"
            ref={nameRef}
          />
        </div>
        <div className="password">
          <input
            type="password"
            id="password"
            placeholder="password"
            size="30"
            ref={passwordRef}
          />
        </div>
        <div>
          <button className="btn">Log in!</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
