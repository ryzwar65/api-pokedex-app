import { db } from "../../helpers/connectDB.js"

export const DELETE_GROUP_POKEMON = async (id) => {
    try {
        await db.groupPokemon.delete({
            where: {
                id: Number(id)
            }
        })
         return {
            "message": "Successfully Deleted!!!",
            "data": null,
            "code": 200,
            "status": true
        }
    } catch (error) {
        console.log(error)
        return error
    }
}