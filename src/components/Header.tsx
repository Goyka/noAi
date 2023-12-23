import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around py-2 text-slate-800 bg-lime-400 font-semibold cursor-pointer">
      <span>➜</span>
      <span onClick={() => navigate("/")}>NoAI</span>
      <span onClick={() => navigate("/login")}>로그인</span>
    </div>
  );
};
