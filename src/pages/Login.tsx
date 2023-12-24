import { useState } from "react";
import { useNavigate } from "react-router";
import LoginApi from "../apis/LoginApi";

interface LoginType {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLoginHandler = async () => {
    try {
      await LoginApi(formData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const formData: LoginType = {
    email,
    password,
  };

  return (
    <div className="w-[95vw] h-[100vh] flex flex-col font-semibold items-center justify-center">
      <input
        className={inputStyle}
        type="text"
        id="email"
        value={email}
        placeholder=" example@domain.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={inputStyle}
        type="password"
        id="password"
        value={password}
        placeholder=" 비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={buttonStyle} onClick={() => onLoginHandler()}>
        로그인
      </button>
      <div>
        <span className="text-xs text-slate-700 px-1">계정이 없으신가요?</span>
        <span
          className="text-sm text-lime-400 bg-slate-800 rounded-sm px-1 cursor-pointer"
          onClick={() => navigate("/join")}
        >
          회원가입 하기
        </span>
      </div>
    </div>
  );
}
export default Login;

export const inputStyle =
  "w-[40vw] h-[5vh] border-gray-200 border shadow-sm rounded-lg mb-2";

export const buttonStyle =
  "w-[40vw] h-[5vh] bg-lime-400 shadow-sm rounded-lg mb-2 cursor-pointer";
