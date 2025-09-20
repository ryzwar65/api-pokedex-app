
import express from 'express';
import dotenv from 'dotenv'
import helmet from 'helmet';
import bodyParser from 'body-parser'
import compression from 'compression';
import * as mainRouter from './routes/index.js'
import cors from 'cors'
import { swaggerSpec, swaggerUi } from './docs/swagger.js';
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
// Swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api",mainRouter.default)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, '0.0.0.0', (error) => {
  if (error) {
    throw error // e.g. EADDRINUSE
  }
  console.log(`Listening on ${JSON.stringify(server.address())}`)
})
