const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = '7132fe980d9a44a2976a9ca21e5c3955'

export const getNews = (searchText)=>{
   return fetch(`${BASE_URL}/everything?q=${searchText}`, {
        headers: {
            'X-Api-Key': API_KEY
        }

    })

}