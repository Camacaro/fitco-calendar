import axios from 'axios';

const httpClient = (baseURL) => axios.create({
  baseURL: baseURL, // URL base de los servicios
  timeout: 10000, // Tiempo de espera de 10 segundos
  headers: { 'Content-Type': 'application/json' },
});

export default httpClient

