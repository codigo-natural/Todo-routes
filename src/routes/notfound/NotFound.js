import React from 'react'

function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '2rem', color: '#f50057' }}>404: Página no encontrada</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Lo siento, la página que estás buscando no se ha encontrado.</p>
      <a href="/" style={{ fontSize: '1.5rem', color: 'blue', marginTop: '1rem' }}>Volver al inicio</a>
    </div>
  )
}

export { NotFound }