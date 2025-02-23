

const verifyToken = async (authService, req, res, next) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      res.status(401).json({message: 'No token provided'});
      return
    }
    const response = await authService.verifyToken(token);
    if (!response.ok) {
      res.status(401).json({ error: 'Invalid token' });
      return
    }

    next()
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

const authMiddleware = (authService) => ({
  verifyToken: async (req, res, next) => verifyToken(authService, req, res, next),
});

export default authMiddleware;
