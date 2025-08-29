// database-access/user-access.js - Synchronous version
import db from "../models/index.js"; // Direct import, no await needed

const { User } = db;

const findUserByEmail = async ({ email }) => {
  return User.findOne({
    where: {
      email,
    },
  });
};

const createUser = async (userData) => {
  return User.create(userData);
};

const findUserById = async (id) => {
  return User.findByPk(id);
};

const updateUser = async (id, updateData) => {
  const [updatedRowsCount] = await User.update(updateData, {
    where: { id },
  });
  return updatedRowsCount > 0;
};

const deleteUser = async (id) => {
  return User.destroy({
    where: { id },
  });
};

const UserAccess = {
  findUserByEmail,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
};

export default UserAccess;
