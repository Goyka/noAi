import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span>Hamburger</span>
      <span>Logo</span>
      <span onClick={() => navigate("/login")}>Login</span>
    </div>
  );
};
