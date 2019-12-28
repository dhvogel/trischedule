const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();

/* POST signup */
router.post('/', async function(req, res, next) {
  const email = req.body.email;
  const familyName = req.body.family_name;
  const givenName = req.body.given_name;
  const oauthProvider = req.body.oauth_provider;
  const userId = req.body.user_id;
  const query = firestore.collection('users').where('user_id', '==', userId);
  const userDoc = await query.get()
      .then((userSnapshot) => {
        if (userSnapshot.size == 0) {
          // write user to db
          firestore.collection('users').add({
            email: email,
            family_name: familyName,
            given_name: givenName,
            oauth_provider: oauthProvider,
            user_id: userId,
          });
          console.log(`user object written for user with userId ${userId}`);
          res.status(204).send({
            email: email,
            family_name: familyName,
            given_name: givenName,
            oauth_provider: oauthProvider,
            user_id: userId,
          });
        } else {
          // should just be 1 user
          userSnapshot.forEach((user) => {
            console.log(`sign up attempted for existing user
              with userId ${userId}`);
            const existingUser = user.data();
            res.status(200).send({
              email: existingUser.email,
              family_name: existingUser.family_name,
              given_name: existingUser.given_name,
              oauth_provider: existingUser.oauth_provider,
              user_id: existingUser.user_id,
            });
          });
        }
      });
});

module.exports = router;
