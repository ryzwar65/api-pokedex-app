import { url } from "../../helpers/constants.js"
import axios from "axios"

export const detailPokemon = async (name) => {
    try {
        const list = await axios.get(`${url}/pokemon/${name}`)
        return list.data
    } catch (error) {
        return error
    }
}