import React, { useState } from 'react';
import style from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import * as contactOperations from '../../redux/contacts/contacts-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(contactOperations.addNewContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Vasia Pupkin"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <p>Number</p>
        <input
          type="text"
          name="number"
          placeholder="111-11-11"
          value={number}
          onChange={handleChange}
        ></input>
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// const mapDispatchToProps = dispatch => ({
//   addNewContact: contact => dispatch(contactOperations.addNewContact(contact)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
