const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // console.log(req.cookies.token)
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authMiddleware;
