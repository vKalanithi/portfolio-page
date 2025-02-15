import axios from "axios";

const getMediumData = async () => {
  const mediumUserName = "kalanithi-v";

  return await axios
    .get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@${mediumUserName}/feed`
    )
    .catch((e) => {
      console.log(e);
    });
};

export const mediumServices = {
  getMediumData,
};
