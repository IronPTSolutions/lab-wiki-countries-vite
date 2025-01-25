import { Route, Routes } from 'react-router-dom'
import "./App.css";
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:countryId' element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
