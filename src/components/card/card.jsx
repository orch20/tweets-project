import logo from "../../assets/images/Logo.png";
import css from "./card.module.scss";

export const Card = ({ info }) => {
  console.log(info);
  return (
    <div className={css.card}>
      <img src={logo} alt="Logo"></img>
      <div></div>
      <img></img>
      <div>
        <p>{info.tweets} tweets</p>
        <p>{info.followers} followers</p>
      </div>
      <button></button>
    </div>
  );
};
