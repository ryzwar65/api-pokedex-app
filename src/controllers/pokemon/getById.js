import { byIdPokemon } from "../../modules/pokemon/byIdPokemon.js"

export default async function getPokemonById(req, res){
    try {
        let name = req.params.name
        const data = await byIdPokemon(name)
        console.log("Data",data)
        if(data?.status == 404){
            return res.status(404).json({
                "status": 404,
                "message": "Not Found",
                "data": null
            })
        }
        return res.status(200).json({
            "status": 200,
            "message": "Successfully Get List Pokemon",
            "data": data
        })
    } catch (error) {
        return error
    }
}