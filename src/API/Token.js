import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sgisapi.kostat.go.kr/OpenAPI3/auth',
});

const KEY = process.env.REACT_APP_CONSUMER_KEY;
const SELECT = process.env.REACT_APP_CONSUMER_SELECT;
// eslint-disable-next-line import/prefer-default-export
export const token = {
  // eslint-disable-next-line object-curly-newline
  getToken: () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(
      `/authentication.json?consumer_key=${KEY}&consumer_secret=${SELECT}`,
    ),
};
