import { configDotenv } from "dotenv"
configDotenv()

export const url = process.env.BASE_API

export const INFO_TYPES = (data) => {
    return {
        name: data?.name,
        image: data?.image,
    }
}
export const INFO_ABILITIES = (data) => {
    return {
        name: data?.name,
        description: data?.effect,
        short_description: data?.short_effect
    }
}
export const RESPONSE_DATA = (data) => {
    return {
        name: data?.name,
        image: data?.image,
        abilities: data?.abilities,
        types: data?.types,
        stats: data?.stats
    }
}