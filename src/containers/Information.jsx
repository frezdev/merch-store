import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import '@stylesComponents/Information.css';

function Information() {
  const {state, addToCart} = useContext(AppContext);
  const form = useRef(null);

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <section className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="email" placeholder='Correo Electronico' name='email' />
            <input type="text" placeholder='Direction' name='address' />
            <input type="text" placeholder='Apto' name='apto' />
            <input type="text" placeholder='Pais' name='country' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Codigo postal' name='cp' />
            <input type="text" placeholder='Telefono' name='phone' />
          </form>
        </section>
        <section className='Information-buttons'>
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </section>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information;
