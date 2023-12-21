import { useEffect, useState } from "react";
import { bodyWrapStyle } from "./Join";
import { getUserDataApi } from "../apis/getUserDataApi";
import { userDataType } from "../apis/getUserDataApi";

function Home() {
  const [datas, setDatas] = useState<userDataType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      await getUserDataApi(setDatas);
    };
    fetchData();
  }, []);

  return (
    <div className={bodyWrapStyle}>
      {datas &&
        datas.map((data: userDataType) => {
          <>
            <img src={data.profile} alt="pic" />
            <h4>
              {data.major}
              {data.name}
            </h4>
            <span>{data.gender}</span>
            <p>{data.desc}</p>
          </>;
        })}
    </div>
  );
}
export default Home;
