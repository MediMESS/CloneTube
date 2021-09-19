import axios from "axios";
import { API_KEY } from "./../config/googleAPIKey";
const baseURL = "https://youtube.googleapis.com/youtube/v3/videos";
const part = "part=snippet,statistics,contentDetails,suggestions";
const regionCode = "US";
const chart = "&chart=mostPopular";
const maxResults = 30;

const youtubeVideosListURL =
  baseURL +
  "?" +
  part +
  "&key=" +
  API_KEY +
  chart +
  "&regionCode=" +
  regionCode +
  "&maxResults=" +
  maxResults;

export const getVideosByCategory = (videoCategory) => {
  const videosCategoryURL =
    youtubeVideosListURL + "&videoCategoryId=" + videoCategory;
  return axios(videosCategoryURL)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
