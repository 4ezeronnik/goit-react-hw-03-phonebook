import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class App extends Component  {

  state = {
  contacts: [],
  name: ''
  }
  
  addContact = text => {
    const contact = {
      name: text,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.addContact(this.state.name)

    this.setState({ name: "" })
  }

  render() {
    const { contacts, name } = this.state;
    
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
          <button type="submit"
          >Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          {contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
))}
      </ul>
        </>
  );
}
};

export default App;
