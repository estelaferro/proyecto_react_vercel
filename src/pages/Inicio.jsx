import React from 'react'

function Inicio() {
  return (
    <>
    <div style={{
      textAlign: 'center',
  padding: '50px 20px',
  background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#333'
      }}>
    <h1 style={{
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#6c4f3d',
    marginBottom: '10px'
  }}
>Te damos la Bienvenida a Moksha Joyas</h1>
    <hr />
    <main style={{maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8',  padding: '0 20px' }}>
      
      <video width="400" height="200" controls>
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
      <p><strong>Moksha Joyas</strong> es una tienda especial atendida con mucha pasión.</p> 
      <p>Nos dedicamos a la creación y venta de joyas artesanales únicas, hechas a mano con materiales de alta calidad.</p>
      <p>Nuestra misión es ofrecer piezas que no solo embellecen, sino que también cuentan una historia y reflejan la personalidad de quien las lleva.</p>
      <p>Creemos en la importancia de la artesanía y el diseño personalizado, por lo que cada joya es cuidadosamente elaborada para satisfacer los gustos y preferencias de nuestros clientes.</p>
      <p>En Moksha Joyas, nos esforzamos por brindar una experiencia de compra excepcional, combinando la tradición artesanal con las tendencias contemporáneas.</p>
      <p>Te invitamos a explorar nuestra colección y descubrir la joya perfecta que complementará tu estilo y celebrará tus momentos especiales.</p>
    </main>
  

    </div>
    </>
  )
}

export default Inicio