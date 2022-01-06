import { FC } from "react";

export type Props = {
  image?: string;
};

const TeamImage: FC<Props> = ({ image }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <img
        src={`https://localhost:5001/images/image/${image}`}
        height="210px"
        alt="teams-image"
      />
    </div>
  );
};

export default TeamImage;
