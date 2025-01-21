const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);
const jwtsecret = process.env.JWT_SECRET;

const app = express();
app.use (cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.get('/test', (req, res) => {
  res.json('test ok')
})

app.post('/register', async (req, res) => {
  const {username, password} = req.body
  await User.create({username, password})
  const createdUser = await User.create({username, password})
  jwt.sign({userId:createdUser,id},jwtsecret, {},((err,token)=> {
    if (err) throw err
    res.cookie('token',token).status(201).json('User created')
  }))
})

app.listen(4000, () => {
  console.log('Server started on port 4000');
});