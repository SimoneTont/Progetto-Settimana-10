import React, { useEffect, useState } from 'react'
import { Container, Dropdown, InputGroup, Form, Button } from 'react-bootstrap';
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} Meteo
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} Coordinate
export default function Home() {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState(0);
  useEffect(() => {  
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=0e06fceaa8a8b4260c4e59126edc2d37`)
    .then(response => response.json())
    .then(json => setLocation(json))
    .catch(err => console.error(err))
}, [value])

const changeLocation = (e) => {
  setLocation(e.target.value)
}

  return (
    <Container>
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
      <CoordinatesComponent  posts = {posts} changePost = {changePost} />
    </Container>
  )
}