import React, { useState, useEffect } from "react";

import { CardList } from "./components/cardList/cardList";
import { Button } from "./components/button/button";
import { tweetService } from "./services/serviceApi.js";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getImages(page);
  }, [page]);

  const getImages = async (page) => {
    setIsLoading(true);
    try {
      const data = await tweetService(page);

      setUserInfo([...userInfo, ...data]);
      setIsVisible(30 > 12 * page);
    } catch (error) {
      console.error(error);
      setError({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const onHandelLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <CardList data={userInfo} />
      {isVisible && (
        <Button
          text={isLoading ? "Loading..." : "Load more"}
          handelClick={onHandelLoadMore}
          disabled={isLoading}
        />
      )}
    </>
  );
}

export default App;
