import express, { Application } from 'express';
import 'express-async-errors';
import { User } from './models/User';

const app: Application = express();

app.get('/users', async (req, res) => {
  const allUsers = await User.find();
  res.status(200).send(allUsers);
});
app.get('/new-user', async (req, res) => {
  const user = User.build({ email: 'email@gmail.com', password: 'password' });
  await user.save();
  res.status(201).send(user);
});

app.all('*', async () => {
  throw new Error('not found');
});

export { app };
