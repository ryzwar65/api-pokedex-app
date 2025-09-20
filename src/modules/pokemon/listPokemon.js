import { RESPONSE_DATA, url } from "../../helpers/constants.js"
import axios from "axios"
import { detailPokemon } from "./detailPokemon.js"
import { infoAbility } from "./infoAbility.js"
import { infoTypes } from "./infoTypes.js"

export const listPokemon = async ({offset = 0, limit=10}) => {
    try {
        const list = await axios.get(`${url}/pokemon?offset=${offset}&limit=${limit}`)
        
        const results = await Promise.all(
            list.data.results.map(async (val) => {
                let detail = await detailPokemon(val?.name)
                const abilities = await Promise.all(
                    detail.abilities.map(async (a) => {
                        return await infoAbility(a?.ability?.name)
                    })
                )
                const types = await Promise.all(
                    detail.types.map(async (a) => {
                        return await infoTypes(a?.type?.name)
                    })
                )
                const stats = await Promise.all(
                    detail.stats.map(async (a) => {
                        return {
                            base_stat: a.base_stat,
                            name: a.stat.name
                        }
                    })
                )
                detail['image'] = await detail.sprites.other['official-artwork'].front_default
                detail['abilities'] = abilities
                detail['types'] = types
                detail['stats'] = stats
                return RESPONSE_DATA(detail)
            })
        )
        return {
            prev: offset > 0 ? {
                offset:offset+limit,
                limit:limit
            } : null,
            next:{
                offset:offset+limit,
                limit:limit
            },
            data:results
        }
    } catch (error) {
        return error
    }
}