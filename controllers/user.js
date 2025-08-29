import UserManager from "../managers/user.js";

const oauth2 = async (req, res) => {
  try {
    const result = await UserManager.oauth2({ token: req.body.token });
    return res.send({ success: true, result });
  } catch (error) {
    return res.send({ success: false, error });
  }
};

const UserController = {
  oauth2,
};

export default UserController;
