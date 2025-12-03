import { fetchAuthSession } from 'aws-amplify/auth';

export async function isAdmin() {
  try {
    const session = await fetchAuthSession();
    const accessTokenPayload = session.tokens.accessToken.payload;
    const groups = accessTokenPayload['cognito:groups'] || [];
    return groups.includes('portfolio-admins'); 
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}
