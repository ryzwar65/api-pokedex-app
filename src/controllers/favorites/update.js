import { UPDATE_FAVORITES } from "../../models/favorites/update.js"

export default async function updateFavoritePokemon(req, res){
    try {
        const { id } = req.body
        const response = await UPDATE_FAVORITES(id)
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