import jwt from "jsonwebtoken";
import db from "../models/index.js";
import redisClient from "../utils/redisClient.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.replace("Bearer ", "");

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const userId = decoded.id;

    const cachedToken = await redisClient.get(`auth:${userId}`);
    if (cachedToken && cachedToken === token) {
      req.user = { id: userId };
      return next();
    }

    const user = await db.User.findOne({
      where: { id: userId },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.token !== token) {
      return res.status(401).json({ message: "Session expired" });
    }

    req.user = user;

    await redisClient.set(`auth:${userId}`, token, {
      EX: 60 * 60 * 24, // 24 hours
    });

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default authMiddleware;
