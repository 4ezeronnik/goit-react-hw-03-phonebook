import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
      <ul>
            {contacts.map(({ name, id, number }) => (
                  <li key={id}>{name}: {number}
                        <button
                              type="button"
                              onClick={() => onDeleteContact(id)}
                              className={styles.button}
                        > Delete
                        </button></li>
            ))}
      </ul>
);

ContactList.propTypes = {
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

export default ContactList;