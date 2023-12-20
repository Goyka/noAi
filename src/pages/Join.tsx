import { useState } from "react";
import { useJoin } from "../hooks/useJoin";

function Join() {
  const { onEmailHandler, onValCodeHandler, onSubmitHandler } = useJoin();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isValCodeRight, setIsValCodeRight] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [valCode, setValCode] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => onEmailHandler(email, setIsEmailSent)}>
        이메일 중복확인
      </button>
      {isEmailSent && (
        <>
          <input
            type="text"
            id="valCode"
            value={valCode}
            onChange={(e) => setValCode(e.target.value)}
          />
          <button onClick={() => onValCodeHandler(setIsValCodeRight)}>
            인증코드 제출
          </button>
        </>
      )}
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="password" id="checkPw" />
      <button
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
