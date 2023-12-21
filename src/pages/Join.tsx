import { useState } from "react";
import { useJoin } from "../hooks/useJoin";
import { inputStyle, buttonStyle } from "./Login";

function Join() {
  const { onEmailHandler, onValCodeHandler, onSubmitHandler } = useJoin();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isValCodeRight, setIsValCodeRight] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [valCode, setValCode] = useState<string>("");

  return (
    <div className="w-[95vw] h-[100vh] flex flex-col font-semibold items-center justify-center">
      <label htmlFor="email">이메일 주소</label>
      <div>
        <input
          type="text"
          id="email"
          value={email}
          className="w-[33vw] h-[5vh] border-gray-200 border shadow-sm rounded-lg rounded-r-none mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-lime-300 px-2 py-[7px] rounded-lg rounded-l-none"
          onClick={() => onEmailHandler(email, setIsEmailSent)}
        >
          인증
        </button>
      </div>
      {isEmailSent && (
        <>
          <label htmlFor="valCode">이메일 인증번호</label>
          <input
            type="text"
            id="valCode"
            value={valCode}
            className={inputStyle}
            onChange={(e) => setValCode(e.target.value)}
          />
          <button onClick={() => onValCodeHandler(setIsValCodeRight)}>
            인증코드 제출
          </button>
        </>
      )}
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        value={password}
        className={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="checkPw">비밀번호 재확인</label>
      <input type="password" id="checkPw" className={inputStyle} />
      <button
        className={buttonStyle}
        onSubmit={() =>
          onSubmitHandler(email, password, isValCodeRight, isEmailSent)
        }
      >
        회원가입
      </button>
    </div>
  );
}

export default Join;
