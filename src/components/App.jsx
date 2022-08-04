import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class App extends Component  {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
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
  };

   changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
   };
  
    getVisibleTodos = () => {
    const { filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    
    
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
         <label>
         Find contacts by name
          <input type="text" value={filter} onChange={this.changeFilter} />
        
        </label>
        
        <ul>
          {visibleTodos.map(({ name, id, number }) => (
            <li key={id}>{name}: {number}</li>
))}
      </ul>
        </>
  );
}
};

export default App;
