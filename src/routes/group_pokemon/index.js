import deleteGroupPokemon from "../../controllers/group/delete.js";
import getGroupPokemon from "../../controllers/group/get.js";
import createGroupPokemon from "../../controllers/group/post.js";
import { Router } from "express";

const router = Router()

/**
 * @swagger
 * /group-pokemon/{id}:
 *   delete:
 *     summary: Delete a Pokemon group
 *     description: Delete a specific Pokemon group by its ID. This will also remove all associations with Pokemon in that group.
 *     tags: [Group Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the Pokemon group to delete
 *         example: 1
 *     responses:
 *       200:
 *         description: Pokemon group deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Group deleted successfully"
 *       404:
 *         description: Pokemon group not found
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
router.delete("/:id", deleteGroupPokemon)

/**
 * @swagger
 * /group-pokemon:
 *   get:
 *     summary: Get all Pokemon groups
 *     description: Retrieve a list of all Pokemon groups with their associated Pokemon
 *     tags: [Group Pokemon]
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
 *         description: Number of groups per page
 *     responses:
 *       200:
 *         description: List of Pokemon groups retrieved successfully
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
 *                     $ref: '#/components/schemas/GroupPokemon'
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
router.get("/", getGroupPokemon)

/**
 * @swagger
 * /group-pokemon:
 *   post:
 *     summary: Create a new Pokemon group
 *     description: Create a new Pokemon group with a specified name and optionally associate Pokemon with it
 *     tags: [Group Pokemon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: ["name"]
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the Pokemon group
 *                 example: "Fire Type Favorites"
 *               pokemonIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Optional array of Pokemon IDs to add to the group
 *                 example: [1, 4, 37]
 *           example:
 *             name: "My Favorite Fire Types"
 *             pokemonIds: [1, 4, 37]
 *     responses:
 *       201:
 *         description: Pokemon group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Group created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/GroupPokemon'
 *       400:
 *         description: Bad request - invalid input data
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
router.post("/", createGroupPokemon)

export default router
