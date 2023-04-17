import { Card } from "../card/card";
import css from "./cardList.module.scss";
import users from "../../services/data.json";

export const CardList = ({ data }) => {
  return (
    <ul className={css.cardList}>
      {data?.map((user) => (
        <li key={user.id}>
          <Card info={user} />
        </li>
      ))}
    </ul>
  );
};
