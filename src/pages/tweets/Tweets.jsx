import React, { useState, useEffect } from "react";
import { CardList } from "../../components/cardList/cardList";
import { Button } from "../../components/button/button";
import { tweetService } from "../../services/serviceApi.js";
import css from "./Tweets.module.scss";
import cssButton from "../../components/button/button.module.scss";
import { Link } from "react-router-dom";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("show all");

  useEffect(() => {
    getTweets(page);
  }, [page]);

  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      console.log(JSON.parse(savedUserInfo));
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  const getTweets = async (page) => {
    setIsLoading(true);
    try {
      const data = await tweetService(page);
      setUserInfo([...userInfo, ...data]);
      setIsVisible(30 > 12 * page);
      return data;
    } catch (error) {
      console.error(error);
      setError({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const onHandleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFollow = (userId) => {
    const updatedUserInfo = userInfo.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          follow: !user.follow,
          followers: user.follow ? user.followers - 1 : user.followers + 1,
        };
      }
      return user;
    });

    setUserInfo([...updatedUserInfo]);
    localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  console.log(userInfo);

  const filteredUserInfo = userInfo.filter((user) => {
    if (filter === "show all") {
      return true;
    } else if (filter === "followings") {
      return user.follow;
    } else if (filter === "follow") {
      return !user.follow;
    }
  });

  return (
    <>
      <Link to="/">
        <button className={cssButton.homeButton}>Back</button>
      </Link>
      <div className={css.dropdown}>
        <select
          className={css.dropdownBtn}
          value={filter}
          onChange={handleFilterChange}
        >
          <option className={css.dropdownOption} value="show all">
            Show All
          </option>
          <option className={css.dropdownOption} value="follow">
            Follow
          </option>
          <option className={css.dropdownOption} value="followings">
            Followings
          </option>
        </select>
      </div>
      <CardList data={filteredUserInfo} handleFollow={handleFollow} />
      {isVisible && (
        <Button
          text={isLoading ? "Loading..." : "Load more"}
          handelClick={onHandleLoadMore}
          disabled={isLoading}
          styleButton={cssButton.loadMore}
        />
      )}
    </>
  );
};

export default Tweets;
