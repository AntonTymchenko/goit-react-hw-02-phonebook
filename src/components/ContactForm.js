import React from "react";

class ContactForm extends React.Component {
  state = {
    name: "",
  };
  inputGetValue = (e) => {
    const item = e.currentTarget.name;

    this.setState({ [item]: e.currentTarget.value });
    console.log(this.state.name);
  };

  formHandleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;

    this.props.onSubmit(name);
    this.setState({
      name: "",
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
          <button type="submit">Add contact</button>
        </label>
      </form>
    );
  }
}

export default ContactForm;
