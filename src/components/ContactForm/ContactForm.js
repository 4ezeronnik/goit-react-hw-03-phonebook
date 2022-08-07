import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

class ContactForm extends Component {
  static defaultProps = {
    onSubmit: this.addContact
  }

    state = {
       name: '',
       number: ''
    };
    
     handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
     };
    
    handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

      this.props.onSubmit(name, number);
      
       
    this.setState({
      name: '',
      number: ''
    })
  };

    render() {
        const { name, number } = this.state;
       return (
           <form onSubmit={this.handleSubmit} className={styles.container}>
      <label className={styles.labelName}>
        Name
    <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
               onChange={this.handleChange}
               className={styles.inputName}
        />
          </label>
  
          <label className={styles.labelNumber}>
            Number
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
               onChange={this.handleChange}
                className={styles.inputNumber}
/>
          </label>

           <button type="submit"
             className={styles.button}
          >Add contact</button>
        </form> 
        )
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;

