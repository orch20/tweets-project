const URL = "https://643903bc4660f26eb1a85c32.mockapi.io/";
const limitPerPage = 12;

export const tweetService = async (page) => {
  return await fetch(`${URL}users?page=${page}&limit=${limitPerPage}`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject(new Error(`No url found`));
      }
      return res.json();
    }
  );
};
