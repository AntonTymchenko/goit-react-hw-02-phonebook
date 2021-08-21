import React from "react";
import Panel from "./components/Panel/Panel";
import ContactForm from "./components/ContactForm/ContactForm";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter";
import s from "./components/ContactForm/ContactForm.module.css";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.some((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (contId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contId),
    }));
  };
  onFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  getResultOfContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === "") {
      return contacts;
    } else {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  render() {
    return (
      <div className={s.container}>
        <Panel title="Phonebook">
          <ContactForm onSubmit={this.addNewContact} />
        </Panel>

        <Filter onFilterChange={this.onFilterChange} />
        {this.state.contacts.length === 0 ? (
          <p>There are not any contacts...</p>
        ) : (
          <ContactsList
            contacts={this.getResultOfContacts()}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
