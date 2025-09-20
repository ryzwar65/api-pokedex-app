import { infoTypes } from "../../modules/pokemon/infoTypes.js"

export default async function getListTypePokemon(req, res){
    try {
        const data = await infoTypes()
        console.log("Data",data)
        return res.status(200).json({
            "status": 200,
            "message": "Successfully Get All Types",
            "data": data
        })
    } catch (error) {
        console.log("Error Get Pokemon",error)
        return res.status(500).send(error.message)
    }
}