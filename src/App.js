import React from "react";
import Panel from "./components/Panel";
import ContactForm from "./components/ContactForm";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList";

class App extends React.Component {
  state = {
    contacts: [],
  };

  addNewContact = (name) => {
    const contact = {
      id: uuidv4(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    console.log(this.state.contacts);
  };

  deleteContact = (contId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contId),
    }));
  };

  render() {
    return (
      <div>
        <Panel title="Phonebook">
          <ContactForm onSubmit={this.addNewContact} />
        </Panel>
        <Panel title="Contacts">
          <ContactsList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </Panel>
      </div>
    );
  }
}

export default App;
