
import axios from 'axios'

const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "69a8c0029f7ef249f5a3483e8596dda9"

export default class movieApi {
    
    getMostPopular= async () => {
        try{
           return await axios.get(`${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        }catch(e) {
            console.warn(e)
        }
    }
}