
import axios from 'axios'

export default class movieApi {
    constructor() {
        this.url = "https://api.themoviedb.org/3/"
        this.api_key = "69a8c0029f7ef249f5a3483e8596dda9"
    }


    getMostPopular= async () => {
        try{
           return await axios.get(`${this.url}movie/popular?api_key=${this.api_key}&language=en-US&page=1`)
        }catch(e) {
            console.warn(e)
        }
    }


}