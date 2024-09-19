// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// Firebase Admin SDK
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CONFIG)),
});

// Authentication routes
app.post('/api/auth/signUp', async (req, res) => {
  try {
    const {email, password} = req.body;
    const userCredential = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({userId: userCredential.user.uid});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

app.post('/api/auth/signIn', async (req, res) => {
  try {
    const {email, password} = req.body;
    const userCredential = await admin
      .auth()
      .signInWithEmailAndPassword(email, password);
    res.status(200).json({userId: userCredential.user.uid});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

app.get('/api/auth/user', async (req, res) => {
  try {
    const user = await admin.auth().currentUser;
    if (!user) {
      return res.status(401).json({error: 'No active session'});
    }
    res.json({uid: user.uid, email: user.email});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.delete('/api/auth/logout', async (req, res) => {
  try {
    await admin.auth().signOut();
    res.status(204).send('Logged out successfully');
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
