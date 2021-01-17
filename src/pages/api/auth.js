import StatusCodes from 'http-status-codes';
import { POST } from './_constants';
import firebase from '../../config/firebase';

export default async (req, res) => {
  if (req.method === POST) {
    try {
      await firebase.auth()
        .signInWithEmailAndPassword(req.body.user, req.body.password);
    } catch (error) {
      res.statusCode = StatusCodes.UNAUTHORIZED;
      res.end();
    }

    const idToken = await (firebase.auth().currentUser.getIdToken());
    res.statusCode = StatusCodes.OK;
    res.end(
      JSON.stringify(
        { idToken },
      ),
    );
  }
};
