import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class App extends Component  {

  state = {
  contacts: [],
  name: ''
  }
  
  addContact = text => {
    const contact = {
      id: nanoid(),
      text,
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

 

    this.setState({ name: '' });
  }

  render() {
    return (
      <form>
      <label>
        Name
    <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
        />
      </label>
        <button type="submit">Add contact</button>
        </form>
  );
}
};

export default App;
