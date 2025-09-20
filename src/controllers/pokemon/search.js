import { searchPokemon } from "../../modules/pokemon/searchPokemon.js"

export default async function getSearchingPokemon(req, res){
    try {
        const params = req.query
        const data = await searchPokemon(params)
        console.log("Data",data)
        return res.status(200).json({
            "status": 200,
            "message": "Successfully Searched Pokemon",
            "data": data
        })
    } catch (error) {
        console.log("Error Get Pokemon",error)
        return res.status(500).send(error.message)
    }
}