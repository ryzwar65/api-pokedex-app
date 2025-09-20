import { listPokemon } from "../../modules/pokemon/listPokemon.js"

export default async function getListPokemon(req, res){
    try {
        const params = req.query
        const data = await listPokemon(params)
        return res.status(200).json({
            "status": 200,
            "message": "Successfully Get List Pokemon",
            "data": data
        })
    } catch (error) {
        console.log("Error Get Pokemon",error)
        return res.status(500).send(error.message)
    }
}