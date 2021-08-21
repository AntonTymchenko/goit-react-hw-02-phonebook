import React from "react";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  inputGetValue = (e) => {
    const item = e.currentTarget.name;

    this.setState({ [item]: e.currentTarget.value });
  };

  formHandleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.formHandleSubmit}>
        <label>
          Name
          <input
            onChange={this.inputGetValue}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.inputGetValue}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit">Add contact</button>
        </label>
      </form>
    );
  }
}

export default ContactForm;
