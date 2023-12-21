import api from "../apis/axiosInstance";

export interface userDataType {
  map(arg0: (data: userDataType) => void): import("react").ReactNode;
  profile: string;
  name: string;
  major: string;
  gender: string;
  desc: string;
}

export const getUserDataApi = async (
  setDatas: React.Dispatch<React.SetStateAction<userDataType | undefined>>
) => {
  try {
    const res = await api.get("/home");
    if (res.status === 200) {
      console.log(res.data);
      const dataArr = res.data;
      setDatas(
        dataArr.map((item: userDataType) => {
          item.profile, item.name, item.major, item.gender, item.desc;
        })
      );
    }
  } catch (err) {
    console.error(err);
  }
};
