import { useState, useEffect } from 'react'
import { listCountries } from '../services/CountriesService'
import { Link } from 'react-router-dom'

function HomePage() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    listCountries()
      .then(countriesResponse => setCountries(countriesResponse))
  }, [])

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>

          {countries && countries.length > 0 ? (
            <div className="list-group">
              {countries.map(country => (
                <Link className='list-group-item list-group-item-action d-flex flex-column align-items-center' to={`/${country.alpha3Code}`} key={country.alpha3Code}>
                  <img width={60} className='h-auto' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} /> {country.name.common}
                </Link>
              ))}
            </div>
          ) : null}
    </div>
  )
}

export default HomePage;
