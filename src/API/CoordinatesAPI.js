import axios from 'axios';
import { transcoord } from './TransCoordAPI';

const api = axios.create({
  baseURL: 'http://www.juso.go.kr/addrlink/',
});

const API_KEY = process.env.REACT_APP_API_KEY_COOR;
// eslint-disable-next-line import/prefer-default-export
export const coordinates = {
  // eslint-disable-next-line object-curly-newline
  getCoordinates: ({ admCd, rnMgtSn, udrtYn, buldMnnm, buldSlno }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api
      .get(
        `addrCoordApi.do?confmKey=${API_KEY}&resultType=json&admCd=${admCd}&rnMgtSn=${rnMgtSn}&udrtYn=${udrtYn}&buldMnnm=${buldMnnm}&buldSlno=${buldSlno}`,
      )
      .then((data) => transcoord.getTranscoord(data.data.results.juso[0])),
};
