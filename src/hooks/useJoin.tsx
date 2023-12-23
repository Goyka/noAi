import api from "../apis/axiosInstance";
import { useNavigate } from "react-router";

export const useJoin = () => {
  const navigate = useNavigate();

  const onEmailHandler = async (
    email: string,
    setIsEmailSent: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const res = await api.post("/join/email", email);
      if (res.status === 200) {
        setIsEmailSent(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onValCodeHandler = async (
    setIsValCodeRight: React.Dispatch<React.SetStateAction<boolean>>,
    setIsEmailSent: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const res = await api.get("/join/code");
      if (res.status === 200) {
        setIsValCodeRight(true);
        setIsEmailSent(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitHandler = async (
    email: string,
    password: string,
    isValCodeRight: boolean,
    isEmailSent: boolean
  ) => {
    try {
      if (isValCodeRight && isEmailSent) {
        const res = await api.post("/join", { email, password });
        if (res.status === 200) {
          alert("회원가입이 완료 되었습니다. 환영합니다!");
          navigate("/login");
        }
      } else {
        alert("이메일 인증이 필요합니다.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return { onEmailHandler, onValCodeHandler, onSubmitHandler };
};
