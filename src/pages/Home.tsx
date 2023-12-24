import { useEffect, useState } from "react";
import { bodyWrapStyle } from "./Join";
import { getUserDataApi } from "../apis/getUserDataApi";
import { userDataType } from "../apis/getUserDataApi";
import Card from "../components/Card";

function Home() {
  const [datas, setDatas] = useState<userDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getUserDataApi(setDatas);
    };
    fetchData();
  }, []);

  return (
    <div className={bodyWrapStyle}>
      <Card datas={datas} />
    </div>
  );
}
export default Home;
