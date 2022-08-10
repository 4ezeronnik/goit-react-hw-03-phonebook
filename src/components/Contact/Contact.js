import PropTypes from 'prop-types';

import styles from './Contact.module.css'
const Contact = ({ contacts, onDeleteContact }) => (
     
    contacts.map(({ name, id, number }) => (
        <li key={id}>{name}: {number}
                 <button
                              type="button"
                              onClick={() => onDeleteContact(id)}
                              className={styles.button}
                        > Delete
                        </button>
        </li>
    
    )));

    Contact.propTypes = {
      contacts: PropTypes.arrayOf(
            PropTypes.shape(
                  {
                        name: PropTypes.string.isRequired,
                        id: PropTypes.string.isRequired,
                        number: PropTypes.string.isRequired,
                  }
            )
      ).isRequired,
      onDeleteContact: PropTypes.func.isRequired
};

export default Contact;
   