import UserAccess from "../database-access/user-access.js";
import authUils from "../util/auth.js";
import { admin } from "./firebase.js";

const oauth2 = async ({ token }) => {
  const decoded = await admin.auth().verifyIdToken(token);
  console.log(decoded);
  if (decoded && decoded?.email) {
    const user = await UserAccess.findUserByEmail({ email: decoded.email });
    console.log(user);
    if (!user) {
      const password = await authUils.generateRandomHashedPassword();
      const newUser = await UserAccess.createUser({
        name: decoded.name,
        email: decoded.email,
        password,
      });
      const token = authUils.encodeToken({ user: newUser });
      return token;
    } else {
      const token = authUils.encodeToken({ user });
      return token;
    }
  }
};

const UserManager = {
  oauth2,
};

export default UserManager;
