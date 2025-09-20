import { Router } from "express";
import * as routerPokemon from "./pokemon/index.js";
import * as routerFavoritePokemon from "./favorites/index.js";
import * as routerGroupPokemon from "./group_pokemon/index.js";

const router = Router()
router.use('/pokemon',routerPokemon.default)
router.use('/favorite',routerFavoritePokemon.default)
router.use('/group-pokemon',routerGroupPokemon.default)

export default router