import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'cbc3a61dc5mshe86decc6829e369p121833jsn6ca3a6e62552',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data
  }