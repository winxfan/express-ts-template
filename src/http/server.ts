import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT ?? 5050;

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

// course
// app.route('/app/course/:id?')
// 	.get(idValidation, handlerValidateError, Controller.get)

app.listen(port, () => {
	console.log(`[server]: started on port ${port}`)
})