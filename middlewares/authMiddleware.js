import JWT from "jsonwebtoken";

const studentAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Fixed the check for Bearer token
    return res
      .status(401)
      .json({ message: "Authentication failed. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = JWT.verify(token, process.env.SECRET_KEY_JWT); // Verify the token
    req.student = { userId: payload.userId }; // Attach the payload to the request object
    next(); // Proceed to the next middleware
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid token." });
  }
};

export default studentAuth;
