import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

const API_PORT = process.env.API_PORT || 5050;
const api = express();

// import controllers

import {
	patientController,
	healthpromotionController,
	nutritionController,
	eliminationandexchange,
} from './controller/index';
// necessary stuffs.
api.use(helmet());
api.use(cors());
api.use(express.json());
api.use(
	morgan(':method :url :status :res[content-length] - :response-time ms'),
);
api.use('/patient/eliminationandexchange', eliminationandexchange);
api.use('/patient/nutrition', nutritionController);
api.use('/patient/healthpromotion', healthpromotionController);
api.use('/patient', patientController);

// add some cors
// api.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

/**
 * error handlers.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
api.use((req, res, next) => {
	res.status(401);
	const error = new Error(`bad request`);
	next(error);
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
api.use(function (err, req, res, next) {
	console.error(err.message);
	err.statusCode = 405;
	res.status(err.statusCode).json({ ok: false, message: err.message });
});

api.listen(API_PORT, () => console.log(`app is alive on port ${API_PORT}`));
