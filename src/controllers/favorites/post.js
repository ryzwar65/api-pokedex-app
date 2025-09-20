import { INSERT_FAVORITES } from "../../models/favorites/insert.js"

export default async function favoritePokemon(req, res){
    try {
        const payload = req.body
        console.log(payload)
        const response = await INSERT_FAVORITES(payload)
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