import { INFO_ABILITIES, url } from "../../helpers/constants.js"
import axios from "axios"

export const infoAbility = async (name) => {
    try {
        const list = await axios.get(`${url}/ability/${name}`)
        let effect = await list.data.effect_entries.find((v) => v?.language?.name == "en")
        effect['name'] = await list.data.name
        let info = INFO_ABILITIES(effect)
        return info
    } catch (error) {
        return error
    }
}