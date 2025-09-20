import { GET_FAVORITES_BY_ID } from "../../models/favorites/getById.js"

export default async function getFavoritesById(req, res){
    try {
        let id = req.params.id
        id = parseInt(id)
        const data = await GET_FAVORITES_BY_ID(id)
        return res.status(500).json({
            "status": 200,
            "message": "Successfully Get Favorites Pokemon By Id",
            "data": data
        })
    } catch (error) {
        return error
    }
}