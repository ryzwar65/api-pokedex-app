import { db } from "../../helpers/connectDB.js"

export const GET_FAVORITES = async () => {
    try {
        return await db.favorite.findMany({
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
                mark: true
            },
            orderBy:{
                updatedAt: 'desc'
            }
        })
    } catch (error) {
        console.log(error)
        return error
    }
}