import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './database';
import IndexRoute from './routes/index.routes';
import OrderRoute from './routes/order.routes';

const port = process.env.NODE_PORT || 4848;

export function run () {
  const app = express();
  const corsOptions = {
    origin: '*'
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.use("/api", cors(corsOptions), IndexRoute);
  app.use("/api/order", cors(corsOptions), OrderRoute);

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);

    sequelize.authenticate().then(async() => {
      console.log("database connected")
      try {
          await sequelize.sync({force: true})
      } catch (error) {
          console.log(error.message)
      }

    }).catch( (e: any) => {
        console.log(e.message)
    })
  })
}

if(process.env.NODE_ENV !== 'testing') {
  run();
}
