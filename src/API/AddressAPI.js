import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.juso.go.kr/addrlink/',
});

const API_KEY = process.env.REACT_APP_API_KEY_ADD;

// eslint-disable-next-line import/prefer-default-export
export const address = {
  getAddress: (keyword) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(
      `addrLinkApi.do?confmKey=${API_KEY}&resultType=json&keyword=${keyword}`,
    ),
};
