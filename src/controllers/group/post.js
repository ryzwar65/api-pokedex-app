import { INSERT_GROUP_POKEMON } from "../../models/group_pokemons/insert.js"

export default async function createGroupPokemon(req,res) {
    try {
        const payload = req.body
        console.log(payload)
        const response = await INSERT_GROUP_POKEMON(payload)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            "status": 500,
            "data": error,
            "message": "Error Create"
        })
    }
}