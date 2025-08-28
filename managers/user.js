import { admin } from "./firebase.js";

const signIn = async ({ token }) => {
  const decoded = await admin.auth().verifyIdToken(token);
  console.log(decoded);
};

const UserManager = {
  signIn,
};

export default UserManager;
