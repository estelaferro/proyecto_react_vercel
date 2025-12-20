import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';


export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, 
    totalFormateado,
    vaciarCarrito,
    formatearNumeroArgentino,
    obtenerSubtotalItemFormateado,
    agregarCantidad,
    quitarCantidad, } = useCartContext();
  const navigate = useNavigate();


  const tokenActual = localStorage.getItem('authToken');


  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/productos");
  };


  return (
    <>
      {/* Info del usuario */}
        <div className="container mt-4 p-4 bg-light rounded">
        <h2>Hola {usuario.nombre}</h2>
        <p className="mb-2">Email: {usuario.email}</p>
       
        {/* Estilo para el Token */}
        <div style={{
          background: '#f0f0f0',
          padding: '8px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '12px',
          wordBreak: 'break-all'
        }}>
          <strong>Token:</strong> {tokenActual}
        </div>
       <button onClick={cerrarSesion} className="btn btn-secondary btn-sm">
          Cerrar sesión
        </button>
        <hr />
      </div>


      {/* Carrito */}
      <div className="container mt-4 p-4">
        <h2 className="mb-4 text-center">Tu compra:</h2>

        {carrito.length > 0 ? (
          <>
            <div className="row">
              {carrito.map((producto) => (
                <div key={producto.id} className="col-12 mb-4">
                  <div className="card">
                    <div className="row g-0">
                      {/* Imagen del producto */}
                      <div className="col-md-3">
                        <img
                          src={producto.avatar}
                          alt={producto.nombre}
                          className="img-fluid rounded-start"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </div>

                      {/* Información del producto */}
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {producto.nombre}
                          </h5>

                          <div className="row mt-3">
                            {/* Precio unitario */}
                            <div className="col-md-4">
                              <p className="mb-1">
                                <strong>Precio unitario:</strong>
                              </p>
                              <p className="text-success fw-bold">
                                ${formatearNumeroArgentino(producto.precio)}
                              </p>
                            </div>

                            {/* Cantidad con controles */}
                            <div className="col-md-4">
                              <p className="mb-1">
                                <strong>Cantidad:</strong>
                              </p>
                              <div className="d-flex align-items-center gap-2">
                                <button
                                  onClick={() => quitarCantidad(producto.id)}
                                  className="btn btn-outline-secondary btn-sm"
                                  style={{ width: "40px" }}
                                >
                                  -
                                </button>
                                
                                <span className="badge bg-primary fs-6 px-3 py-2">
                                  {producto.cantidad || 1}
                                </span>
                                
                                <button
                                  onClick={() => agregarCantidad(producto.id)}
                                  className="btn btn-outline-secondary btn-sm"
                                  style={{ width: "40px" }}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* Subtotal */}
                            <div className="col-md-4">
                              <p className="mb-1">
                                <strong>Subtotal:</strong>
                              </p>
                              <h6 className="text-dark fw-bold">
                                ${obtenerSubtotalItemFormateado(producto)}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            {/* Total */}
            <div className="text-center p-4 bg-light rounded shadow-sm">
              <h3 className="fs-3 fw-bold text-dark mb-3">Total a pagar:</h3>
              <div className="display-4 text-success fw-bold">
                ${totalFormateado}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <div className="alert alert-info">
              <h4>No hay productos en el carrito</h4>
              <p>
                Agrega productos desde la tienda para continuar con tu compra
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Botones de acción */}
      <div className="container mt-4 mb-5">
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {carrito.length > 0 ? (
            <>
              <button
                onClick={vaciarCarrito}
                className="btn btn-outline-danger px-4"
              >
                <i className="bi bi-trash me-2"></i>
                Vaciar Carrito
              </button>

              <button
                onClick={() => navigate("/productos")}
                className="btn btn-outline-primary px-4"
              >
                <i className="bi bi-cart-plus me-2"></i>
                Seguir Comprando
              </button>

              <button
                onClick={comprar}
                className="btn btn-success px-4"
                style={{ backgroundColor: "#556B2F", borderColor: "#556B2F" }}
              >
                <i className="bi bi-credit-card me-2"></i>
                Confirmar y Pagar
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/productos")}
              className="btn btn-primary px-4"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Volver a Productos
            </button>
          )}
        </div>
      </div>
    </>
  );
}