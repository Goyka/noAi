import { useState } from "react";
import LoginApi from "../apis/LoginApi";
import { useNavigate } from "react-router";

interface LoginType {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData: LoginType = {
    email,
    password,
  };
  const navigate = useNavigate();

  const onLoginHandler = async () => {
    try {
      await LoginApi(formData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onLoginHandler()}>Login</button>
      <div>
        <span>계정이 없으신가요?</span>
        <span onClick={() => navigate("/join")}>회원가입 하기</span>
      </div>
    </div>
  );
}

export default Login;
