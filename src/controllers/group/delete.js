import { DELETE_GROUP_POKEMON } from "../../models/group_pokemons/delete.js"

export default async function deleteGroupPokemon(req, res){
    try {
        let id = req.params.id
        const response = await DELETE_GROUP_POKEMON(id)
        console.log(response)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "status": 500,
            "message": "Error",
            "data": error
        })
    }
}