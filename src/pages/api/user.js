import StatusCodes from 'http-status-codes';
import { POST } from './_constants';
import firebase from '../../config/firebase';

export const createUser = async (
  email, password,
) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export default async (req, res) => {
  if (req.method === POST) {
    await createUser(req.body.user, req.body.password);

    res.statusCode = StatusCodes.CREATED;
    res.json({});
  }
};
