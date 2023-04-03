import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";

function LoginScreen() {
  const [loading, setLoading] = useState(false);

  async function loginHandler({ email, password }) {
    setLoading(true);
    await login(email, password);
    setLoading(false);
  }

  if (loading) {
    return <LoadingOverlay message={"Logging in..."} />;
  }
  return <AuthContent onAuthenticate={loginHandler} isLogin />;
}

export default LoginScreen;
