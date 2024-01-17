import React from 'react'
import { Container } from 'react-bootstrap'

export default function PostComponent({ posts, changePost }) {
  return (
    <Container>
        <p>Coordinate</p>
        {posts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
    </Container>
  )
}