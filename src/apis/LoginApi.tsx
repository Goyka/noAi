import api from "./axiosInstance";

const LoginApi = async (formData: {}) => {
  try {
    const res = await api.post("/login", formData);
    if (res.status === 200) {
      console.log("로그인 성공 :::", res.data);
      return res.data;
    }
  } catch (err) {
    console.error(err);
  }
};
export default LoginApi;
