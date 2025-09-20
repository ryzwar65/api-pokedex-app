import { RESPONSE_DATA, url } from "../../helpers/constants.js"
import axios from "axios"
import { detailPokemon } from "./detailPokemon.js"
import { infoAbility } from "./infoAbility.js"
import { infoTypes } from "./infoTypes.js"

export const byIdPokemon = async (name) => {
    try {
        const result = await axios.get(`${url}/pokemon/${name}`)
        console.log("Result",result)
        let detail = await detailPokemon(name)
        let abilities = await Promise.all(
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
        const data = RESPONSE_DATA(detail)
        return data
    } catch (error) {
        return error
    }
}