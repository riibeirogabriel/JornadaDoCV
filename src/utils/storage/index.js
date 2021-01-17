const AUTH_TOKEN = '@AUTH_TOKEN';

const isRunningOnClient = () => typeof window !== 'undefined';

export const setIdToken = (idToken) => {
  if (isRunningOnClient()) localStorage.setItem(AUTH_TOKEN, idToken);
};

export const getIdToken = () => {
  if (isRunningOnClient()) return localStorage.getItem(AUTH_TOKEN);
  return null;
};
