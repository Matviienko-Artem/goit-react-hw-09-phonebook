import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import * as contactOperations from '../redux/contacts/contacts-operations';
import * as contactSelectors from '../redux/contacts/contacts-selectors';
import style from '../components/ContactForm/ContactForm.module.css';

export default function ContactsViews() {
  const isLoadingContacts = useSelector(contactSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoadingContacts && <h2>Загружаем список контактов...</h2>}
      <ContactList />
    </div>
  );
}

// const mapStateToProps = state => ({
//   isLoadingContacts: contactSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsViews);
