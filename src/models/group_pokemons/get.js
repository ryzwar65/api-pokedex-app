import { db } from "../../helpers/connectDB.js"

export const GET_GROUP_POKEMON = async () => {
    try {
        return await db.groupPokemon.findMany({
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
            orderBy:{
                updatedAt: 'desc'
            }
        })
    } catch (error) {
        console.log(error)
        return error
    }
}