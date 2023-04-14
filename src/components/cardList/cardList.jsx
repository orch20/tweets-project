import { Card } from "../card/card";
import users from "../../services/data.json";

export const CardList = () => {
  console.log(users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Card info={user} />
        </li>
      ))}
    </ul>
  );
};
