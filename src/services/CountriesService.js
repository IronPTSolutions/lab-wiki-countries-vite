import axios from 'axios'

const http = axios.create({ baseURL: 'https://ih-countries-api.herokuapp.com', headers: { "Content-Type": 'application/json' } })

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error) 
)

export const listCountries = () => http.get('/countries')

export const getCountry = (countryId) => http.get(`/countries/${countryId}`)