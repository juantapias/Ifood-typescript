import { Router } from 'express';

//Import Routes
import { WelcomeApi } from '../controllers/index.controller';

const router = Router();

router.route("/")
  .get(WelcomeApi)

export default router