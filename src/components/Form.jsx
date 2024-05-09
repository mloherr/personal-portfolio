import '../scss/core/variables.scss';
import '../scss/components/Form.scss';
import { useState } from 'react';
function Form() {
  const [isOnVisible, setIsOnVisible] = useState(false);

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChangeName = (event) => {
    setDataForm({ ...dataForm, name: event.target.value });
  };
  const handleChangeEmail = (event) => {
    setDataForm({ ...dataForm, email: event.target.value });
  };
  const handleChangePhone = (event) => {
    setDataForm({ ...dataForm, phone: event.target.value });
  };
  const handleChangeSubject = (event) => {
    setDataForm({ ...dataForm, subject: event.target.value });
  };
  const handleChangeMessage = (event) => {
    setDataForm({ ...dataForm, message: event.target.value });
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    setIsOnVisible(!isOnVisible);

    fetch('https://express-mail-liart.vercel.app/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataForm),
    });

    setDataForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsOnVisible(false);
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
          value={dataForm.name}
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="email">
        <input
          className="form__input"
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          value={dataForm.email}
          onChange={handleChangeEmail}
        />
      </label>
      <label htmlFor="phone">
        <input
          className="form__input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Teléfono de contacto"
          value={dataForm.phone}
          onChange={handleChangePhone}
        />
      </label>
      <label htmlFor="subject">
        <input
          className="form__input"
          type="text"
          id="subject"
          name="subject"
          placeholder="Asunto"
          value={dataForm.subject}
          onChange={handleChangeSubject}
        />
      </label>
      <label htmlFor="message">
        <input
          className="form__input message"
          type="text"
          id="message"
          name="message"
          placeholder="Deja tu mensaje...."
          value={dataForm.message}
          onChange={handleChangeMessage}
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
