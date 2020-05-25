import axios from 'axios';
// import { token } from './Token';

// const accessToken = async () => {
//   const { data } = await token.getToken();
//   return data.result.accessToken;
// };

const api = axios.create({
  baseURL: 'https://sgisapi.kostat.go.kr/OpenAPI3/transformation',
});

const API_KEY = process.env.REACT_APP_API_KEY_TRAN;
// eslint-disable-next-line import/prefer-default-export
export const transcoord = {
  // eslint-disable-next-line object-curly-newline
  getTranscoord: ({ entX, entY }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(
      `/transcoord.json?accessToken=${API_KEY}&src=EPSG:5179&dst=EPSG:4326&posX=${entX}&posY=${entY}`,
    ),
};
