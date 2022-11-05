import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL;

const saphira = {

  getGivawayResult: async (lectureId) => {
    const requestUrl = `${BASE_URL}/talk/${lectureId}/draw`
    return axios.get(requestUrl);
  },

  getLectures: async () => {
    return axios.get(`${BASE_URL}/talks`);
  }

}

export default saphira;
