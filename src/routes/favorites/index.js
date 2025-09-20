import updateFavoritePokemon from "../../controllers/favorites/update.js";
import getListFavorites from "../../controllers/favorites/get.js";
import getFavoritesById from "../../controllers/favorites/getById.js";
import favoritePokemon from "../../controllers/favorites/post.js";
import { Router } from "express";

const router = Router()

/**
 * @swagger
 * /favorite/update:
 *   post:
 *     summary: Update favorite status
 *     description: Update the favorite status of a Pokemon (mark/unmark as favorite)
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateFavoriteRequest'
 *           example:
 *             id: 1
 *             mark: true
 *     responses:
 *       200:
 *         description: Favorite status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Favorite'
 *       400:
 *         description: Bad request - invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Favorite record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/update", updateFavoritePokemon)

/**
 * @swagger
 * /favorite:
 *   get:
 *     summary: Get all favorite Pokemon
 *     description: Retrieve a list of all Pokemon marked as favorites with their complete details
 *     tags: [Favorites]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Number of favorites per page
 *     responses:
 *       200:
 *         description: List of favorite Pokemon retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       mark:
 *                         type: boolean
 *                       pokemonID:
 *                         type: integer
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       pokemons:
 *                         $ref: '#/components/schemas/Pokemon'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", getListFavorites)

/**
 * @swagger
 * /favorite:
 *   post:
 *     summary: Add Pokemon to favorites
 *     description: Mark a Pokemon as favorite by providing its ID
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateFavoriteRequest'
 *           example:
 *             pokemonID: 1
 *     responses:
 *       201:
 *         description: Pokemon added to favorites successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Favorite'
 *       400:
 *         description: Bad request - invalid Pokemon ID or already in favorites
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Pokemon not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", favoritePokemon)

/**
 * @swagger
 * /favorite/{id}:
 *   get:
 *     summary: Get favorite Pokemon by ID
 *     description: Retrieve detailed information about a specific favorite Pokemon by its favorite record ID
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the favorite record
 *         example: 1
 *     responses:
 *       200:
 *         description: Favorite Pokemon details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     mark:
 *                       type: boolean
 *                     pokemonID:
 *                       type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     pokemons:
 *                       $ref: '#/components/schemas/Pokemon'
 *       404:
 *         description: Favorite record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", getFavoritesById)

export default router
