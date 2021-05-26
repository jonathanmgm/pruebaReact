

//constante con la url de la API
const urlAPI = 'https://posts-test-sting.vercel.app/api'

export default function getPosts() {
    return fetch(urlAPI)
    .then(res => res.json()) 
    .then(response => {
      const {data} = response
      return data
    })
}