//exercise api
import axios from 'axios';

const API_URL = 'http://localhost:3000';

//class exerciseAPI 
export class ExerciseAPI {
    //get all exercises
    public static getAll() {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': '77a88aeab5mshd70477d55f2b613p10cfd6jsn7abcbf51d2d9',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        return axios.request(options);
        // axios.request(options).then(function (response: any) {
        //     console.log(response.data);
        // }).catch(function (error: any) {
        //     console.error(error);
        // });
    }
}
