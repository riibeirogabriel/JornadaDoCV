import StatusCodes from 'http-status-codes';
import { POST, GET, USERS_DATABASE_PATH } from './_constants';
import firebase from '../../config/firebase';

export const createUser = async (
  email, password,
) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const generateUserId = async (
  email,
) => email.replace('.', '');

export const setUserMetadata = async (
  userValues,
) => {
  const user = await generateUserId(userValues.access.email);

  await firebase.database().ref(USERS_DATABASE_PATH + user)
    .set(userValues);
};

export const getUserMetadata = async (
  email,
) => {
  const userId = await generateUserId(email);
  return firebase.database().ref(USERS_DATABASE_PATH + userId).get();
};

export default async (req, res) => {
  if (req.method === POST) {
    const user = req.body;
    try {
      await createUser(user.access.email, user.access.password);
    } catch (error) {
      res.statusCode = StatusCodes.CONFLICT;
      res.json({});
      return;
    }

    delete user.access.password;
    delete user.access.repeatPassword;
    await setUserMetadata(user);

    res.statusCode = StatusCodes.CREATED;
    res.json({});
  } else if (req.method === GET) {
    const userMetadata = await getUserMetadata(req.query.id);
    res.json({ userMetadata });
    res.statusCode = StatusCodes.OK;
  }
};
