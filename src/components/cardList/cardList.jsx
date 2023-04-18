import { Card } from "../card/card";
import css from "./cardList.module.scss";

export const CardList = ({ data, handleFollow }) => {
  return (
    <ul className={css.cardList}>
      {data?.map((user) => (
        <li key={user.id}>
          <Card info={user} handleFollow={handleFollow} />
        </li>
      ))}
    </ul>
  );
};
