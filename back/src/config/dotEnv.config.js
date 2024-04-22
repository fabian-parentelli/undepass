import dotEnv from 'dotenv';

dotEnv.config();

export default {
    port: process.env.PORT,
    privateKeyPassport: process.env.PRIVATEKEYPASSPORT,
    userNodemailer: process.env.USERNODEMAILER,
    passNodemailer: process.env.PASSNODEMAILER,
    mongoDB: process.env.MONGODB,
    privateKey: process.env.PRIVATEKEY,
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.APIKEY,
    apiSecret: process.env.APISECRET
};