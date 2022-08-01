import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class App extends Component  {

  state = {
    contacts: [],
    name: '',
    number: ''
  };
  
  addContact = (text, number )=> {
    const contact = {
      name: text,
      id: nanoid(),
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.addContact(name, number);

    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    const { contacts, name, number } = this.state;
    
    return (
      <>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
      <label>
        Name
    <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
            onChange={this.handleChange}
        />
          </label>
          <br/>
          <label>
            Number
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
/>
          </label>

          <button type="submit"
          >Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          {contacts.map(({ name, id, number }) => (
            <li key={id}>{name}: {number}</li>
))}
      </ul>
        </>
  );
}
};

export default App;
