import axios from 'axios';
import { servicesConfig } from '../../config';

const httpClient = axios.create({
  baseURL: servicesConfig.baseURL, // URL base de los servicios
  timeout: 10000, // Tiempo de espera de 10 segundos
  headers: { 'Content-Type': 'application/json' },
});

export default httpClient

