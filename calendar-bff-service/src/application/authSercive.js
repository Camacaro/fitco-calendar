class AuthService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async login(email, password) {
    const response = await this.httpClient.post('/api/auth/login', { email, password });
    return response.data;
  }
}

export default AuthService;
