import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

function ContactsList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.itemOflistOfContacts}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
