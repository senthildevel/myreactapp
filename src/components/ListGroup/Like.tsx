import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import banner from "../../assets/images/image1.jpg";

interface Props {
  onLike: () => void;
}
//AiOutlineHeart. AiFillHeart
const Like = ({ onLike }: Props) => {
  const [status, setStatus] = useState(true);
  //console.log("Status", status);

  const toggle = () => {
    setStatus(!status);
    onLike();
  };

  if (status)
    return (
      <>
        <img src="/courseinn-academy.png" alt="" />
        <img src={banner} alt="" />
        <AiOutlineHeart
          size={24}
          color="red"
          onClick={() => {
            toggle();
          }}
        />
      </>
    );

  return (
    <AiFillHeart
      size={24}
      color="red"
      onClick={() => {
        toggle();
      }}
    />
  );
};

export default Like;
