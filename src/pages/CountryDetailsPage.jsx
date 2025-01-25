import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCountry } from '../services/CountriesService';

function CountryDetails() {
  const { countryId } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountry(countryId)
      .then((countryResp) => setCountry(countryResp));
  }, [countryId]);

  return (
    <div>
      <h1>Country Details</h1>

      <h2>{country?.name?.common}</h2>
      {country ? (
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            {country.borders.length > 0 ? (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(borderId => (
                      <li key={borderId}>
                        <Link to={`/${borderId}`}>{borderId}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default CountryDetails;
