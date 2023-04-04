import axios from "axios";

const firebaseKey = "AIzaSyC2FK6VeW5ZYeP2UBLOKUE1DQsdZet4n-8";

export async function authenticate(
  mode = "signUp" | "signInWithPassword",
  email,
  password
) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${firebaseKey}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
