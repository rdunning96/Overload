import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { User } from '../models/User';
import {register} from '../services/AuthService';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const user = new User(email, password, email)
      const token = await register(user);
      authCtx.authenticate(token);
    } catch (error) {
      console.error(error);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} isLogin={undefined} />;
}

export default SignupScreen;
