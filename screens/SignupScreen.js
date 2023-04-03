import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [loading, setLoading] = useState(false);

  async function signUpHandler({ email, password }) {
    setLoading(true);
    await createUser(email, password);
    setLoading(false);
  }

  if (loading) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
