import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../Schemas/mangas/create.js";
import passport from "../middlewares/passport.js";
import has_permition from "../middlewares/has_permition.js";
import read_one from "../controllers/mangas/read_one.js";
import is_active from "../middlewares/is_active.js"
import read_news from "../controllers/mangas/read_news.js";

const mangasRouter = Router()

mangasRouter.post('/', passport.authenticate("jwt", { "session": false }), validator(schema_create), has_permition, is_active, create);
mangasRouter.get('/', passport.authenticate('jwt', { 'session': false }), read);
mangasRouter.get('/news', passport.authenticate("jwt",{"session":false}), has_permition, read_news)
mangasRouter.get('/:id', passport.authenticate("jwt",{"session":false}), read_one )

export default mangasRouter;