import React from 'react'
import IconoUsuario from"../images/icone-utilisateur-gris.png"
import "../Css/LoginExitoso.css";


export default function LoginExitoso({data}) {
  return (
    <div className='contenedorLoginExitoso'>
      <h1 className='tituloLoginExitoso'>Ingreso Exitoso!</h1>
      <div className='contenedorDatos'>
        <img className='Icono' src={IconoUsuario} alt="No se encotrno la imagen" />
        <h2 className='usuario'>Usuario: {data.email}</h2>
        <h2 className='tipo'>Tipo: {data.tipo}</h2>
      </div>
    </div>
  )
}
