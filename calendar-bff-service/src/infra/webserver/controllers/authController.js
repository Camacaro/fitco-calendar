

const login = async(authService, req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.login(email, password);
    res.json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

const register = async(authService, req, res) => {
  try {
    const { email, username, password } = req.body;
    const response = await authService.register(email, username, password);
    res.json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

const refreshToken = async(authService, req, res) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      res.status(401).json({message: 'No token provided'});
      return
    }
    const response = await authService.refreshToken(token);
    res.json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

const authController = (authService) => ({
  login: async (req, res) => login(authService, req, res),
  register: async (req, res) => register(authService, req, res),
  refreshToken: async (req, res) => refreshToken(authService, req, res)
});

export default authController;
