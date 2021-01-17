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
    try {
      await createUser(req.body.user, req.body.password);
    } catch (error) {
      res.statusCode = StatusCodes.CONFLICT;
      res.json({});
      return;
    }

    res.statusCode = StatusCodes.CREATED;
    res.json({});
  }
};
