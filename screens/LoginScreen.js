import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setLoading(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in - Please check your credencials or try again later!"
      );
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingOverlay message={"Logging in..."} />;
  }
  return <AuthContent onAuthenticate={loginHandler} isLogin />;
}

export default LoginScreen;
