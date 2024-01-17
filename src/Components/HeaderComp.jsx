import React from 'react';
import { Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeaderComp() {
    return (
        <header>
            <Container className='d-flex align-items-center justify-content-between'>
            <Link className='nav-link' to="/">
                <Image src="../assets/weather-icon.png" alt="weather" className='img-fluid myImg'></Image>
                </Link>
                <h1>Che tempo che fa(rà)</h1>
            </Container>
        </header>

    )
}