import { useEffect, useState } from "react";
import css from "./card.module.scss";
import buttonCss from "../button/button.module.scss";
import { Button } from "../button/button";

import logo from "../../assets/images/Logo.png";
import background from "../../assets/images/Background-picture.png";
import avatar from "../../assets/images/Avatar.png";

export const Card = ({ info }) => {
  const [follow, setFollow] = useState(false);
  const [count, setCount] = useState(info.followers);

  useEffect(() => {
    setCount(info.followers);
    const getInfo = localStorage.getItem(`${info.user}+${info.id}`);
    if (getInfo) {
      const parsedInfo = JSON.parse(getInfo);
      setFollow(parsedInfo.follow);
      setCount(parsedInfo.followers);
    }
  }, [info]);

  const handelClick = () => {
    let updatedCount;
    setFollow(!follow);
    follow ? (updatedCount = count - 1) : (updatedCount = count + 1);
    setCount(updatedCount);
    localStorage.setItem(
      `${info.user}+${info.id}`,
      JSON.stringify({ followers: updatedCount, follow: !follow })
    );
  };

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="Logo"></img>
      <img className={css.background} src={background} alt="background"></img>
      <div className={css.line}></div>
      <div className={css.circle}></div>
      <div className={css.avatarWraper}></div>
      <img className={css.avatar} src={avatar} alt="background"></img>
      <div className={css.userInfoWraper}>
        <p className={css.text}>{info.tweets} tweets</p>
        <p className={`${css.text} ${css.followers}`}>
          {count.toLocaleString()} followers
        </p>
      </div>
      <div className={css.buttonWraper}>
        <Button
          text={follow ? "Following" : "Follow"}
          handelClick={handelClick}
          styleButton={follow ? buttonCss.following : buttonCss.follow}
        />
      </div>
    </div>
  );
};
