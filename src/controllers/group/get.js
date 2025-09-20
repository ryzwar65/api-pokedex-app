import { GET_GROUP_POKEMON } from "../../models/group_pokemons/get.js"
import { GET_FAVORITES } from "../../models/favorites/get.js"

export default async function getGroupPokemon(req, res){
    try {
        const data = await GET_GROUP_POKEMON()
        console.log("Data Group",data)
        return res.status(200).json({
            "status": 200,
            "message": "Successfully Get Group Pokemon",
            "data": data
        })
    } catch (error) {
        console.log("Error Get Favorites Pokemon",error)
        return res.status(500).send(error.message)
    }
}