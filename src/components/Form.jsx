import '../scss/core/variables.scss';
import '../scss/components/Form.scss';
import { useState } from 'react';
function Form() {
  const [isOnVisible, setIsOnVisible] = useState(false);
  const handleOnClick = () => {
    setIsOnVisible(!isOnVisible);
  };
  return (
    <form className="form">
      <h3 className="form__title">¿HABLAMOS?</h3>
      <label htmlFor="name">
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre Completo"
        />
      </label>
      <label htmlFor="email">
        <input
          className="form__input"
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
        />
      </label>
      <label htmlFor="phone">
        <input
          className="form__input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Teléfono de contacto"
        />
      </label>
      <label htmlFor="subject">
        <input
          className="form__input"
          type="text"
          id="subject"
          name="subject"
          placeholder="Asunto"
        />
      </label>
      <label htmlFor="message">
        <input
          className="form__input message"
          type="text"
          id="message"
          name="message"
          placeholder="Deja tu mensaje...."
        />
      </label>
      <button
        className={isOnVisible ? 'form__buttonOn' : 'form__buttonOff'}
        onClick={handleOnClick}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
