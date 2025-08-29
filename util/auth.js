import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import envVars from "../constants/envVars.js";

const generateRandomHashedPassword = async (length = 12) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const bytes = crypto.randomBytes(length);
  const password = Array.from(bytes, (b) => chars[b % chars.length]).join("");

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
};

const generateHashedPassword = async ({ password }) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
};

const encodeToken = ({ user }) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: user.id,
    },
    envVars.JWT_TOKEN
  );
  return token;
};

const verifyPassword = async ({ plainPassword, hashedPassword }) => {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match;
};

const authUils = {
  encodeToken,
  generateRandomHashedPassword,
  generateHashedPassword,
  verifyPassword,
};

export default authUils;
