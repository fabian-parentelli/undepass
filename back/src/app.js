import express from 'express';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import mongoDB from './dao/mongo.js';
import cors from 'cors';
import env from './config/dotEnv.config.js'

import {
    userRouter, citiesRouter, avatarRouter, userFinanRouter, 
    contactRouter, eventRouter, sitesRouter, shiftRouter
} from './routes/index.router.js';

const app = express();
mongoDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.use('/api/user', userRouter);
app.use('/api/city', citiesRouter);
app.use('/api/avatar', avatarRouter);
app.use('/api/finan', userFinanRouter);
app.use('/api/contact', contactRouter);
app.use('/api/event', eventRouter);
app.use('/api/site', sitesRouter);

app.listen(env.port, () => console.log('Server conected'));