import { db } from "../../helpers/connectDB.js"

export const UPDATE_FAVORITES = async (id) => {
    try {
        await db.favorite.update({
            where: {id : parseInt(id)},
            data: {
                mark: false
            }
        })
        return {
            "message": "Successfully Unmark!!!",
            "data": null,
            "code": 200,
            "status": true
        }
    } catch (error) {
        console.log(error)
        return error
    }
    
}