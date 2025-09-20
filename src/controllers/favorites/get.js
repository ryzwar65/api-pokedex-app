import { GET_FAVORITES } from "../../models/favorites/get.js"

export default async function getListFavorites(req, res){
    try {
        const data = await GET_FAVORITES()
        console.log("Data Favorites",data)
        return res.status(200).json({
            "status": 200,
            "message": "Successfully Get Favorites Pokemon",
            "data": data
        })
    } catch (error) {
        console.log("Error Get Favorites Pokemon",error)
        return res.status(500).send(error.message)
    }
}