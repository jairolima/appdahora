import axios from 'axios';

// const IP_ADDRESS = 'http://api.clientedahora.com.br/api';
// const IP_ADDRESS = 'https://reqres.in/';
const IP_ADDRESS = 'https://clientedahora.com.br/api/v1';
// const IP_EMULADOR_IOS = 'http://10.200.3.191:3333';

const api = axios.create({
  baseURL: IP_ADDRESS,
});

export default api;
