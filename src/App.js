import React from "react";
import Panel from "./components/Panel/Panel";
import ContactForm from "./components/ContactForm/ContactForm";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
      <div>
        <Panel title="Phonebook">
          <ContactForm onSubmit={this.addNewContact} />
        </Panel>
        <Panel title="Contacts">
          <Filter onFilterChange={this.onFilterChange} />
          <ContactsList
            contacts={this.getResultOfContacts()}
            deleteContact={this.deleteContact}
          />
        </Panel>
      </div>
    );
  }
}

export default App;
