import axios from 'axios';

const api = axios.create({
  baseURL: 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/',
});

// eslint-disable-next-line import/prefer-default-export
export const stores = {
  getStores: (latitude, longitude, radius) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(`json?lat=${latitude}&lng=${longitude}&m=${radius}`),
};
