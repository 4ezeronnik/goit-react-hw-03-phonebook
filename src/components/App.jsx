import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class App extends Component  {

  state = {
     contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    filter: '',
  };
  
  addContact = (name, number )=> {
    const contact = {
      name,
      id: nanoid(),
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
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
    const { filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addTodo}/>
      
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
        </div>
  );
}
};

export default App;
