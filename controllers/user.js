import UserManager from "../managers/user.js";

const signIn = async (req, res) => {
  const result = await UserManager.signIn({ token: req.body.token });
  return res.send();
};

const UserController = {
  signIn,
};

export default UserController;
