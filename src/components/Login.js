import { useRef, useContext } from "react";
import AuthContext from "../store/auth-store";

import "./Login.css";

const Login = (props) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);

  const logInHandler = () => {
    if (
      nameRef.current.value === authCtx.users[0].username &&
      passwordRef.current.value === authCtx.users[0].password
    ) {
      props.logInLK();
    }
    if (
      nameRef.current.value === authCtx.users[1].username &&
      passwordRef.current.value === authCtx.users[1].password
    ) {
      props.logInJG();
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
