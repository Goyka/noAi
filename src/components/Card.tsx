import { FC } from "react";
import { userDataType } from "../apis/getUserDataApi";

interface PropsType {
  datas: userDataType[];
}

const Card: FC<PropsType> = ({ datas }) => {
  return (
    <>
      {datas &&
        datas.map((data: userDataType) => (
          <div key={data.id}>
            <img src={data.profile} alt="pic" />
            <h4>
              {data.major}
              {data.name}
            </h4>
            <span>{data.gender}</span>
            <p>{data.desc}</p>
          </div>
        ))}
    </>
  );
};
export default Card;
