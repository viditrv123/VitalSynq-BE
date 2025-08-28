import admin from "firebase-admin";
import envVars from "../constants/envVars";

const {
  FIREBASE_AUTH_URI,
  FIREBASE_CERT_URI,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_CLIENT_URL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_TOKEN_URI,
  FIREBASE_UNIVER_DOMAIN,
} = envVars;

// Firebase Admin (server)
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: FIREBASE_PROJECT_ID,
    private_key_id: FIREBASE_PRIVATE_KEY_ID,
    private_key: FIREBASE_PRIVATE_KEY,
    client_email: FIREBASE_CLIENT_EMAIL,
    client_id: FIREBASE_CLIENT_ID,
    auth_uri: FIREBASE_AUTH_URI,
    token_uri: FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: FIREBASE_CERT_URI,
    client_x509_cert_url: FIREBASE_CLIENT_URL,
    universe_domain: FIREBASE_UNIVER_DOMAIN,
  }),
});

export { admin };
