import React from 'react'
import  styles from '../index.module.css'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {
  
  return (
    <header className={styles.header}>
        <h2>Carrito de compras</h2>
        <p className=''>
          Cantidad de productos: <span>{props.cartCount}</span>  
        </p>
    </header>
  )
}
