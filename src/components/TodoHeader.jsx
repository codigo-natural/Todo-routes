import React, { useState, useEffect } from 'react';

function TodoHeader() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const hora = new Date().getHours();
    obtenerMensajeSaludo(hora);
  }, []);

  const obtenerMensajeSaludo = (hora) => {
    let mensaje = '';

    if (hora >= 6 && hora < 12) {
      mensaje = 'Buenos días';
    } else if (hora >= 12 && hora < 18) {
      mensaje = 'Buenas tardes';
    } else {
      mensaje = 'Buenas noches';
    }

    setMensaje(mensaje);
  }

  return (
    <div>
      <h1>{mensaje} Crack</h1>
    </div>
  );
}

export default TodoHeader