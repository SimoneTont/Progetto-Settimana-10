import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <Container>
            <Link className='nav-link' to="/"><p>Errore, torna indietro</p></Link>
        </Container>
    )
}