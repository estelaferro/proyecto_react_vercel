import React from 'react'
import { Link } from 'react-router-dom'

function Historia() {
  return (
    <>
    <h1>Historia</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

        <p>
        Desde hace más de dos décadas, nuestra familia se dedica con pasión a ofrecer joyas de plata que reflejan calidad, estilo y confianza. Acompañamos a mayoristas y clientes fieles con una colección diversa y siempre actual, pensada para resaltar cada momento especial. Cada pieza que ofrecemos es el resultado de experiencia, dedicación y una búsqueda constante por estar a la vanguardia del diseño.  
        </p>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Historia