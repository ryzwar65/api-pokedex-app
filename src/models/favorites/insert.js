import { db } from "../../helpers/connectDB.js"

export const INSERT_FAVORITES = async (data) => {
    try {   
        // Insert Pokemon
        await db.pokemons.upsert({
            where: { name: data?.name },
            update: {
                favorite: {
                    upsert: {
                        create: { mark: true },
                        update: { mark: true },
                    },
                },
            },
            create: {
                name: data?.name,
                image: data?.image,
                abilities: {
                    create: data.abilities.map((a) => ({
                        name: a.name,
                        description: a.description,
                        short_description: a.short_description,
                    })),
                },
                stats: {
                    create: data.stats.map((s) => ({
                        name: s.name,
                        base_stat: s.base_stat,
                    })),
                },
                types: {
                    create: data.types.map((t) => ({
                        name: t.name,
                        image: t.image,
                    })),
                },
                favorite: {
                    create: {
                        mark: true,
                    },
                }
            },
        })
        return {
            "message": "Successfully Save!!!",
            "data": null,
            "code": 200,
            "status": true
        }
    } catch (error) {
        return error
    }
}