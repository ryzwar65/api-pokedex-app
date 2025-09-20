import { INFO_TYPES, url } from "../../helpers/constants.js"
import axios from "axios"

export const infoTypes = async (name = null) => {
    try {
        let res = await axios.get(`${url}/type`)
        if (name) {
            res = await axios.get(`${url}/type/${name}`)
            let _infoTypes = await res.data
            _infoTypes['image'] = _infoTypes?.sprites['generation-ix']['scarlet-violet']?.name_icon
            let dataInfo = INFO_TYPES(_infoTypes)
            return dataInfo   
        }
        let _infoTypes = await res.data
        return _infoTypes.results.map((v) => ({name:v.name}))
    } catch (error) {
        return error
    }
}