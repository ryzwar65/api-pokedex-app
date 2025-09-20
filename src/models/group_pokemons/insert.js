import { db } from "../../helpers/connectDB.js"

export const INSERT_GROUP_POKEMON = async (data) => {
    try {
        await db.groupPokemon.create({
            data: {
                name: data?.name,
                pokemons: {
                    connectOrCreate: data.pokemons.map((p) => ({
                        where: { name: p.name },
                        create: {
                        name: p.name,
                        image: p.image,
                        abilities: p.abilities?.length ? {
                            create: p.abilities.map((a) => ({
                            name: a.name,
                            description: a.description,
                            short_description: a.short_description,
                            }))
                        } : undefined,
                        types: p.types?.length ? {
                            create: p.types.map((t) => ({
                            name: t.name,
                            image: t.image,
                            }))
                        } : undefined,
                        stats: p.stats?.length ? {
                            create: p.stats.map((s) => ({
                            name: s.name,
                            base_stat: s.base_stat,
                            }))
                        } : undefined,
                        },
                    })),
                },
            },
        });
        return {
            "message": "Successfully Save!!!",
            "data": null,
            "code": 200,
            "status": true
        }  
    } catch (error) {
        console.log(error)
        return error
    }
}