import api from "../apis/axiosInstance";

export interface userDataType {
  map(arg0: (data: userDataType[]) => void): import("react").ReactNode;
  profile: string;
  name: string;
  major: string;
  gender: string;
  desc: string;
  id: number;
}

export const getUserDataApi = async (
  setDatas: React.Dispatch<React.SetStateAction<userDataType[]>>
) => {
  try {
    const res = await api.get("/home");
    if (res.status === 200) {
      console.log(res.data);
      const dataArr = res.data;
      setDatas(
        dataArr.map((item: userDataType) => {
          item.profile, item.name, item.major, item.gender, item.desc, item.id;
        })
      );
    }
  } catch (err) {
    console.error(err);
  }
};
