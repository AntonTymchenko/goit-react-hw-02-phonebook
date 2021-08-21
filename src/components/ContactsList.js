import React from "react";

function ContactsList(props) {
  console.log(props.contacts);
  return (
    <ul>
      {props.contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => props.deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
