import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as contactOperations from '../../redux/contacts/contacts-operations';
import * as contactSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactSelectors.getVisibleContacs);

  const ondeleteContact = contactId =>
    dispatch(contactOperations.deleteContact(contactId));

  return (
    <div>
      <ul className={style.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.list_item}>
              {contact.name}: <b>{contact.number}</b>
              <button
                onClick={() => ondeleteContact(contact.id)}
                className={style.list_item_button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// const mapStateToProps = state => ({
//   contacts: contactSelectors.getVisibleContacs(state),
// });

// const mapDispatchToProps = dispatch => ({
//   ondeleteContact: contactId =>
//     dispatch(contactOperations.deleteContact(contactId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
