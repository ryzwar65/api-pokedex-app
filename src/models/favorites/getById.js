import { db } from "../../helpers/connectDB.js"

export const GET_FAVORITES_BY_ID = async (id) => {
    try {
        return await db.favorite.findFirst({
            include: {
                pokemons: {
                include: {
                    abilities: true,
                    stats: true,
                    types: true,
                    groupPokemon: false,
                },
                },
            },
            where: {
                id: id,
                mark: true
            }
        })
    } catch (error) {
        console.log(error)
        return error
    }
}