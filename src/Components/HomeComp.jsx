import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container, Dropdown, InputGroup, Form, Button } from 'react-bootstrap';
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} Meteo
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} Coordinate
export default function Home() {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState([]);
  useEffect(() => {  
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=0e06fceaa8a8b4260c4e59126edc2d37`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
}, [value])  

//console.log(location)
  return (
    <Container>
      {/* <Dropdown>
        <Dropdown.Toggle className="my-3" variant="primary" id="dropdown-basic">
          Regione
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Abruzzo</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Basilicata</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Calabria</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Campania</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Emilia Romagna</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Friuli Venezia Giulia</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Lazio</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Liguria</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Lombardia</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Marche</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Molise</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Piemonte</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Puglia</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Sardegna</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Sicilia</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Toscana</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Trentino Alto Adige</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Umbria</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Val d'Aosta</Link></Dropdown.Item>
          <Dropdown.Item ><Link className='nav-link' to="/previsioni">Veneto</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Container className='d-flex justify-content-center'>
      <InputGroup className="mb-3">
        <InputGroup.Text type='text' id="basic-addon1">Inserisci la località</InputGroup.Text>
        <Form.Control
          placeholder="Località"
          aria-label="CercaLocalita"
          aria-describedby="basic-addon1"
          onChange={(input) => setValue(input.target.value)}
        />
      </InputGroup>
      <Button variant="success mx-3" type='submit' onClick={() => alert(value)}>Conferma</Button>
      </Container>
    </Container>
  )
}