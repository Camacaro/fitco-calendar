

const login = async(authService, req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.authenticate(email, password);
    res.json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

const authController = (authService) => ({
  login: async (req, res) => login(authService, req, res)
});

export default authController;
