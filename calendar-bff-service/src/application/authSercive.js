
// TODO: apply handle errors
class AuthService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async login(email, password) {
    const response = await this.httpClient.post('/api/auth/login', { email, password });
    return response.data;
  }

  async register(email, username, password) {
    const response = await this.httpClient.post('/api/auth/register', { email, username, password });
    return response.data;
  }

  async refreshToken(token) {
    const response = await this.httpClient.get('/api/auth/refresh', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }

  async verifyToken(token) {
    const response = await this.httpClient.get('/api/auth/verify', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }
}

export default AuthService;
